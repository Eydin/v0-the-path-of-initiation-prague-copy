import { readFileSync, readdirSync, statSync, writeFileSync } from "fs";
import { join, sep } from "path";

const ROOT = process.cwd();
const files = [];

function walk(dir){
  for(const e of readdirSync(dir)){
    if(["node_modules",".next",".git"].includes(e))continue;
    const p=join(dir,e);
    const s=statSync(p);
    if(s.isDirectory())walk(p);
    else if(e==="page.tsx")files.push(p);
  }
}
walk(join(ROOT,"app"));

for(const c of ["hero-section.tsx","footer.tsx","cta-section.tsx"]){
  try{
    statSync(join(ROOT,"components",c));
    files.push(join(ROOT,"components",c));
  }catch{}
}

// FIX 1: `p` and `ROOT` contain backslashes on Windows, so the old
// forward-slash-only string replace never matched and the raw absolute path
// leaked into every "PAGE:" header. Normalize to forward slashes first, and
// also strip the `[locale]` route-group segment so names read like real URLs
// (e.g. "/kabbalah-ascension" instead of "/[locale]/kabbalah-ascension").
function routeName(p){
  const norm = p.split(sep).join("/");
  const rootNorm = ROOT.split(sep).join("/");
  if(norm.includes("/components/"))return "(component) "+norm.split("/").pop();
  let rel = norm.replace(rootNorm+"/app/","").replace(/page\.tsx$/,"");
  rel = rel.replace(/^\[locale\]\/?/,"").replace(/\/$/,"");
  return "/"+rel;
}

function clean(t){
  return t.replace(/&mdash;/g," ").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&[a-z]+;/g,"").replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim();
}

function isJunk(t){
  if(!t||t.length<5)return true;
  if(!/[a-zA-Z]{3}/.test(t))return true;
  if(t.startsWith("@/")||t.startsWith("@/components"))return true;
  if(/^[a-z]+([A-Z][a-z0-9]+)+$/.test(t))return true;
  if(/[{}<>]/.test(t))return true;
  if(/^(const|return|function|export|true|false|null|undefined|className)$/.test(t))return true;
  if(/^https?:\/\//.test(t)&&!/wa\.me|stripe|youtube/.test(t))return true;
  if(/^[\w./-]+\.(tsx|ts|jpg|jpeg|png|webp|svg|mp4|css)$/i.test(t))return true;
  return false;
}

function extract(src){
  src=src.replace(/^\s*import[^\n]*\n/gm," ").replace(/"use client"/g," ").replace(/'use client'/g," ");
  src=src.replace(/className=\{`[^`]*`\}/gs," ").replace(/className="[^"]*"/g," ").replace(/className=\{[^}]*\}/gs," ");
  src=src.replace(/\b(src|href|bg|position|style|sizes|alt|viewBox|d|id|rel|target|type|aria-[a-z]+|initial|animate|transition|whileInView|variants|className)=("[^"]*"|\{[^}]*\}|`[^`]*`)/g," ");

  // Convert React curly-brace string literals (like {" "}) into raw text
  // so the following regex doesn't stop matching prematurely.
  src=src.replace(/\{\s*"([^"]*)"\s*\}/g, "$1")
         .replace(/\{\s*'([^']*)'\s*\}/g, "$1")
         .replace(/\{\s*`([^`]*)`\s*\}/g, "$1");

  const out=[],seen=new Set();
  const push=(raw)=>{
    const t=clean(raw);
    if(isJunk(t))return;
    if(seen.has(t))return;
    seen.add(t);
    out.push(t);
  };

  for(const m of src.matchAll(/>([^<>{}]+)</g))push(m[1]);
  for(const m of src.matchAll(/"([^"\\]{8,})"/g))push(m[1]);
  for(const m of src.matchAll(/`([^`\\]{8,})`/g))push(m[1]);
  for(const m of src.matchAll(/'([^'\\]{8,})'/g))push(m[1]);

  return out;
}

// FIX 2: most pages now source their real copy from messages/en.json via
// next-intl's useTranslations(), not from hardcoded JSX/strings in the .tsx
// file — extract() alone was finding almost nothing for those pages. Detect
// every namespace a page actually calls useTranslations() with, and pull in
// all of that namespace's string content from messages/en.json too.
let MESSAGES = {};
try {
  MESSAGES = JSON.parse(readFileSync(join(ROOT,"messages/en.json"),"utf8"));
} catch (e) {
  console.warn("Could not read messages/en.json — translated page content will be skipped:", e.message);
}

function flattenStrings(node, out=[]){
  if(typeof node === "string"){ out.push(node); return out; }
  if(Array.isArray(node)){ for(const item of node) flattenStrings(item, out); return out; }
  if(node && typeof node === "object"){ for(const k of Object.keys(node)) flattenStrings(node[k], out); return out; }
  return out;
}

function extractTranslatedNamespaces(src){
  const namespaces = [...src.matchAll(/useTranslations\(\s*["']([^"']+)["']\s*\)/g)].map(m=>m[1]);
  const out=[],seen=new Set();
  const push=(raw)=>{
    const t=clean(raw);
    if(isJunk(t))return;
    if(seen.has(t))return;
    seen.add(t);
    out.push(t);
  };
  for(const ns of namespaces){
    const data = MESSAGES[ns];
    if(!data)continue;
    for(const s of flattenStrings(data))push(s);
  }
  return out;
}

let doc="";
files.sort();

for(const f of files){
  const src = readFileSync(f,"utf8");
  const lines = Array.from(new Set([...extract(src), ...extractTranslatedNamespaces(src)]));
  if(!lines.length)continue;
  doc+=`\n\n## PAGE: ${routeName(f)}\n`+lines.join("\n");
}

doc=doc.trim();

// --- FIX APPLIED HERE ---
// 1. Escape literal backslashes so they don't break string evaluation
// 2. Escape any backticks found in your components so they don't close the template string early
// 3. Escape ${ so TypeScript doesn't mistake it for template interpolation
const safeDoc = doc
  .replace(/\\/g, "\\\\")
  .replace(/`/g, "\\`")
  .replace(/\${/g, "\\${");

// 4. Output inside a clean backtick string literal instead of using JSON.stringify
const ts=`// AUTO-GENERATED from site pages by scripts/build-knowledge.mjs   do not edit by hand.\n// Regenerate after content changes: node scripts/build-knowledge.mjs\nexport const SITE_KNOWLEDGE = \`${safeDoc}\`;\n`;

writeFileSync(join(ROOT,"lib/chatbot/site-knowledge.ts"),ts);
console.log("Wrote lib/chatbot/site-knowledge.ts  ",files.length,"pages,",doc.length,"chars");
