import { readFileSync, readdirSync, statSync, writeFileSync } from "fs";
import { join } from "path";
const ROOT = process.cwd();
const files = [];
function walk(dir){for(const e of readdirSync(dir)){if(["node_modules",".next",".git"].includes(e))continue;const p=join(dir,e);const s=statSync(p);if(s.isDirectory())walk(p);else if(e==="page.tsx")files.push(p);}}
walk(join(ROOT,"app"));
for(const c of ["hero-section.tsx","footer.tsx","cta-section.tsx"]){try{statSync(join(ROOT,"components",c));files.push(join(ROOT,"components",c));}catch{}}
function routeName(p){if(p.includes("/components/"))return "(component) "+p.split("/").pop();const rel=p.replace(ROOT+"/app/","").replace("/page.tsx","").replace("page.tsx","");return "/"+rel;}
function clean(t){return t.replace(/&mdash;/g,"—").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&[a-z]+;/g,"").replace(/\s+/g," ").trim();}
function extract(src){
  src=src.replace(/^\s*import[^\n]*\n/gm," ").replace(/"use client"/g," ").replace(/'use client'/g," ");
  src=src.replace(/className=\{`[^`]*`\}/gs," ").replace(/className="[^"]*"/g," ").replace(/className=\{[^}]*\}/gs," ");
  src=src.replace(/\b(src|href|bg|position|style|sizes|alt|viewBox|d|id|rel|target|type|aria-[a-z]+|initial|animate|transition|whileInView|variants|className)=("[^"]*"|\{[^}]*\}|`[^`]*`)/g," ");
  const out=[],seen=new Set();
  const push=(raw)=>{const t=clean(raw);
    if(!t||t.length<5)return;
    if(!/[a-zA-Z]{3}/.test(t))return;
    if(t.startsWith("@/")||t.startsWith("@/components"))return;
    if(/^[a-z]+([A-Z][a-z0-9]+)+$/.test(t))return;
    if(/[{}<>]/.test(t))return;
    if(/^(const|return|function|export|true|false|null|undefined|className)$/.test(t))return;
    if(/^https?:\/\//.test(t)&&!/wa\.me|stripe|youtube/.test(t))return;
    if(/^[\w./-]+\.(tsx|ts|jpg|jpeg|png|webp|svg|mp4|css)$/i.test(t))return;
    if(seen.has(t))return;seen.add(t);out.push(t);};
  for(const m of src.matchAll(/>([^<>{}]+)</g))push(m[1]);
  for(const m of src.matchAll(/"([^"\\]{8,})"/g))push(m[1]);
  for(const m of src.matchAll(/`([^`\\]{8,})`/g))push(m[1]);
  for(const m of src.matchAll(/'([^'\\]{8,})'/g))push(m[1]);
  return out;
}
let doc="";files.sort();
for(const f of files){const lines=extract(readFileSync(f,"utf8"));if(!lines.length)continue;doc+=`\n\n## PAGE: ${routeName(f)}\n`+lines.join("\n");}
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
const ts=`// AUTO-GENERATED from site pages by scripts/build-knowledge.mjs — do not edit by hand.\n// Regenerate after content changes: node scripts/build-knowledge.mjs\nexport const SITE_KNOWLEDGE = \`${safeDoc}\`;\n`;
// ------------------------

writeFileSync(join(ROOT,"lib/chatbot/site-knowledge.ts"),ts);
console.log("Wrote lib/chatbot/site-knowledge.ts —",files.length,"pages,",doc.length,"chars");