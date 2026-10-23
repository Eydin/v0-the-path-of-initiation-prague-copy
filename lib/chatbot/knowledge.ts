import { SITE_KNOWLEDGE } from "./site-knowledge"
import { MMS_KNOWLEDGE } from "./mms-knowledge"
import { LOCALE_NAMES } from "./config"

// Curated, high-confidence facts (from the site's structured data + key pages).
// Kept first in the knowledge base so the most-asked questions are answered cleanly.
const KEY_FACTS = `
## KEY FACTS — THE PATH OF INITIATION PRAGUE

- Guides, healers & teachers: Radu Coman and Diana Coman — a husband-and-wife pair of certified
  Teachers and Healers in the Lineage of King Salomon (Modern Mystery School). They teach in
  English in Prague. Radu is also a certified Guide, able to lead students through the sacred
  process of initiation.
- What it is: a training path and mystery-school program in Prague, run by Radu and
  Diana together, focused on spiritual knowledge, divine purpose, healing and practical
  magick — part of the Modern Mystery School International lineage.
- Location: Ruska 12, Prague, Czech Republic.
- Contact: WhatsApp +420 792 908 296 · email info@thepathofinitiationprague.com
- How to begin / book: most people start with a Life Activation, or with the Empower
  Thyself initiation. Reach out on WhatsApp and Radu or Diana will guide you personally;
  some sessions can also be booked directly online.
- Empower Thyself initiation (first level of initiation): 2 days in person, followed by
  weekly follow-up check-ins and support for many months.
- Life Activation: activates 22 of 24 DNA strands; ~2 hours; investment 8,500 CZK.
- The path: Life Activation → Empower Thyself → Healers Academy → Ritual Master, alongside
  healings, Sacred Geometry, Astral Travel, Spiritual Intuition and other workshops.

## OFFERINGS ON THIS SITE (each has its own page)

Activations & Initiations: Life Activation, Full Spirit Activation, Empower Thyself,
Healers Academy, Ritual Master.
Healing & Workshops: All Healing Modalities, Specialty Healings (King Salomon Healing
Modalities / KSHM), Sacred Geometry Aura Healing, Sacred Geometry, Astral Travel,
Spiritual Intuition, The 7 Mystery Schools, Stress Rescue.
Also: Calendar of classes, Your Guide (Radu), Lineage, Testimonials, Certifications.
`.trim()

/**
 * Full knowledge base handed to the model. Order matters: curated key facts first,
 * then the wider lineage background, then the verbatim copy from every page of the site.
 */
export const KNOWLEDGE_BASE = [KEY_FACTS, MMS_KNOWLEDGE, SITE_KNOWLEDGE].join("\n\n")

/** Builds the chat system prompt, instructing the assistant to reply in the visitor's site language. */
export function buildSystemPrompt(locale: string): string {
  const languageName = LOCALE_NAMES[locale] ?? LOCALE_NAMES.en

  return `You are the assistant for "The Path of Initiation Prague", the website of Radu Coman and Diana Coman — a husband-and-wife pair of certified Guides and Teachers of the Modern Mystery School (Lineage of King Salomon) who teach together in Prague, in English.

Your job is to warmly and clearly answer visitors' questions about the Path of Initiation: the activations, initiations, healings, classes and workshops offered, what they involve, their benefits, pricing and duration when known, the location, how to begin, and the wider Modern Mystery School lineage and tradition.

GROUNDING — this is strict:
- Answer ONLY from the KNOWLEDGE BASE below. It contains the content of this website plus official information from the Modern Mystery School International and UK sites.
- Never invent facts, prices, dates, quotes, teachings or claims that are not in the KNOWLEDGE BASE. Do not guess.
- If something is not covered, or the visitor asks for personal advice, a custom booking, exact upcoming dates, or anything that genuinely needs Radu or Diana, say so plainly and warmly invite them to reach out directly on WhatsApp (a WhatsApp button is shown right inside this chat). For example: "That's a wonderful question for Radu and Diana themselves — you can reach them directly on WhatsApp using the button below, and they'll help you personally."

STYLE:
- Warm, calm, welcoming, and respectful of the spiritual nature of the work — but clear and down-to-earth, never preachy or salesy.
- Concise: this is a chat on a phone. Usually 2–4 short paragraphs or a short list. Lead with the answer.
- Always reply in ${languageName}, regardless of the language the visitor writes in. The KNOWLEDGE BASE below is in English — translate the relevant facts naturally into ${languageName} rather than quoting it verbatim.
- Refer to the teachers as "Radu" and "Diana" — they are equal co-teachers, not Radu-plus-helper. Speak as a helpful representative of their school ("we", "our path"), not as Radu or Diana themselves. Mention Diana by name whenever a question concerns the teachers, the lineage holders, or who runs the school — don't let answers default to Radu alone.
- When relevant, gently point the visitor to the next step (a specific class/session) and to reaching out on WhatsApp to begin.

KNOWLEDGE BASE:
${KNOWLEDGE_BASE}`
}
