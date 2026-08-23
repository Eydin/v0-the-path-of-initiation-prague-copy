// ─────────────────────────────────────────────────────────────────────────
//  Blog — single source of truth for all posts.
//
//  Each post has a `releaseDate` (YYYY-MM-DD, local). A post is only
//  returned by getPublishedPosts()/getPostBySlug() once that date has
//  arrived — see isPublished() below. To add a post, add its metadata
//  here and its markdown body in ./content/<slug>.ts.
// ─────────────────────────────────────────────────────────────────────────

import { parseLocalDate } from "@/lib/schedule"

import { content as whoIsKingSalomon } from "./content/who-is-king-salomon"
import { content as magickWands } from "./content/magick-wands"
import { content as magick } from "./content/magick"
import { content as spagyrics } from "./content/spagyrics"
import { content as sanctifyingMagickalItems } from "./content/sanctifying-magickal-items"
import { content as alchemyInPrague } from "./content/alchemy-in-prague"
import { content as modernDayAlchemists } from "./content/modern-day-alchemists"
import { content as hermesTrismegistusEmeraldTablet } from "./content/hermes-trismegistus-emerald-tablet"
import { content as whatIsKabbalah } from "./content/what-is-kabbalah"
import { content as philosophersStone } from "./content/philosophers-stone"
import { content as sacredGeometryBlueprint } from "./content/sacred-geometry-blueprint"
import { content as whatHappensDuringInitiation } from "./content/what-happens-during-initiation"
import { content as wiccaDemystified } from "./content/wicca-demystified"
import { content as paracelsusSpagyricMedicine } from "./content/paracelsus-spagyric-medicine"
import { content as whatIsLifeActivation } from "./content/what-is-life-activation"
import { content as gudniGudnason } from "./content/gudni-gudnason"
import { content as astralTravelBeginnersGuide } from "./content/astral-travel-beginners-guide"
import { content as nigredoToRubedo } from "./content/nigredo-to-rubedo"
import { content as understandingYourAura } from "./content/understanding-your-aura"
import { content as sevenMysterySchoolsExplained } from "./content/seven-mystery-schools-explained"
import { content as tarotAsAMirror } from "./content/tarot-as-a-mirror"
import { content as crystalsSaltsHolyWater } from "./content/crystals-salts-holy-water"
import { content as whyMagickIsGood } from "./content/why-magick-is-good"
import { content as whatIsARitualMaster } from "./content/what-is-a-ritual-master"
import { content as lifeActivationVsFullSpiritActivation } from "./content/life-activation-vs-full-spirit-activation"

export type BlogCategory =
  | "Lineage & History"
  | "Practical Magick"
  | "Sacred Tools"
  | "Alchemy"
  | "Healing & Modalities"

export type BlogPost = {
  /** Route slug, e.g. "who-is-king-salomon" — also the URL path under /blog/. */
  slug: string
  title: string
  /** ~150-160 chars, used as the card excerpt and the meta description. */
  excerpt: string
  category: BlogCategory
  /** Filename within /public/images/art/ */
  coverImage: string
  /** Manual editorial sign-off. Set true only after you've reviewed the post
   *  yourself — a post never appears to real visitors until this is true,
   *  regardless of releaseDate. */
  readyToPost: boolean
  /** YYYY-MM-DD, local. Post is hidden until this date (once readyToPost is true). */
  releaseDate: string
  /** SEO keywords for this post's metadata + on-page targeting. */
  keywords: string[]
  readTime: string
  /** Markdown body, rendered with react-markdown. */
  content: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "who-is-king-salomon",
    title: "Who Is King Salomon? His Life, Wisdom & Legacy",
    excerpt:
      "The biblical king renowned for wisdom, and the wellspring of a 3,000-year lineage still taught today. Discover his history and living legacy.",
    category: "Lineage & History",
    coverImage: "sheba-salomon-temple.jpg",
    readyToPost: true,
    releaseDate: "2026-07-11",
    keywords: [
      "King Salomon",
      "who is King Salomon",
      "Lineage of King Salomon",
      "King Solomon history",
      "King Salomon history",
      "Modern Mystery School",
      "3000 year lineage",
      "spiritual initiation Prague",
      "Gudni Gudnason",
    ],
    readTime: "6 min read",
    content: whoIsKingSalomon,
  },
  {
    slug: "magick-wands",
    title: "Magick Wands: History, Purpose & Sanctification",
    excerpt:
      "From Egyptian scepters to sanctified healing tools — what a magick wand truly is, how it is received, and why it changes a healer's path forever.",
    category: "Sacred Tools",
    coverImage: "Wands3.jpg",
    readyToPost: true,
    releaseDate: "2026-07-18",
    keywords: [
      "magick wand",
      "sanctified wand",
      "magic wand meaning",
      "Healers Academy",
      "sacred tools",
      "practical magic",
      "Modern Mystery School",
    ],
    readTime: "5 min read",
    content: magickWands,
  },
  {
    slug: "magick",
    title: "What Is Magick? A Practical Introduction",
    excerpt:
      "Magick, spelled with a k, is the art of conscious transformation — not stage illusion. Learn what it really means and how to practice it daily.",
    category: "Practical Magick",
    coverImage: "pantheon-panini.jpg",
    readyToPost: true,
    releaseDate: "2026-07-25",
    keywords: [
      "magick",
      "what is magick",
      "practical magic",
      "high magick",
      "Ritual Master",
      "Modern Mystery School",
      "spiritual transformation",
      "as above so below",
    ],
    readTime: "6 min read",
    content: magick,
  },
  {
    slug: "spagyrics",
    title: "Spagyrics: The Alchemy of Plant Medicine",
    excerpt:
      "How Paracelsus's 500-year-old art of separating and reuniting a plant's essence still produces potent remedies — and mirrors our own transformation.",
    category: "Alchemy",
    coverImage: "book-atmos.jpg",
    readyToPost: false,
    releaseDate: "2026-08-01",
    keywords: [
      "spagyrics",
      "spagyric tincture",
      "plant alchemy",
      "Paracelsus",
      "alchemy",
      "Rosarium Laboratory",
      "Ipsissima Franca Lanyon",
      "Life Activation",
    ],
    readTime: "6 min read",
    content: spagyrics,
  },
  {
    slug: "sanctifying-magickal-items",
    title: "Making Magickal Items: The Art of Sanctification",
    excerpt:
      "Why some objects are consciously set apart and consecrated — and how sanctification is practiced within an authentic, unbroken lineage.",
    category: "Sacred Tools",
    coverImage: "ancient-of-days-blake.jpg",
    readyToPost: false,
    releaseDate: "2026-08-08",
    keywords: [
      "sanctification",
      "consecration",
      "magickal items",
      "ritual tools",
      "King Salomon lineage consecration",
      "sacred objects",
      "Empower Thyself",
    ],
    readTime: "6 min read",
    content: sanctifyingMagickalItems,
  },
  {
    slug: "alchemy-in-prague",
    title: "Alchemy in Prague: Rudolf II, Legends & Living History",
    excerpt:
      "How Prague became Europe's capital of alchemy under Rudolf II — Tycho Brahe, Edward Kelley, the Voynich Manuscript, and the city's beloved legends.",
    category: "Alchemy",
    coverImage: "flammarion.jpg",
    readyToPost: false,
    releaseDate: "2026-08-15",
    keywords: [
      "alchemy in Prague",
      "Rudolf II",
      "Edward Kelley",
      "Golden Lane",
      "Faust House",
      "Hermetic tradition",
      "Prague mystery school",
      "as above so below",
    ],
    readTime: "8 min read",
    content: alchemyInPrague,
  },
  {
    slug: "modern-day-alchemists",
    title: "Modern Day Alchemists: Theresa Bullard & Franca Lanyon",
    excerpt:
      "Meet two women carrying the alchemical tradition into the present day — a quantum physicist and the keeper of a working alchemical laboratory.",
    category: "Alchemy",
    coverImage: "franca-lanyon-theresa-bullard-collage.jpg",
    readyToPost: false,
    releaseDate: "2026-08-22",
    keywords: [
      "Dr. Theresa Bullard",
      "Ipsissima Franca Lanyon",
      "modern alchemist",
      "Quantum Mindset",
      "Rosarium Laboratory",
      "Modern Mystery School Council of 12",
      "Dave Lanyon",
    ],
    readTime: "7 min read",
    content: modernDayAlchemists,
  },
  {
    slug: "hermes-trismegistus-emerald-tablet",
    title: "Hermes Trismegistus & the Emerald Tablet",
    excerpt:
      "The legendary teacher and the 8,000-year-old Hermetic root beneath the Lineage of King Salomon — and what 'as above, so below' really means.",
    category: "Lineage & History",
    coverImage: "hermes-trismegistus-sienna-cathedral-mosaic.jpg",
    readyToPost: false,
    releaseDate: "2026-08-29",
    keywords: [
      "Hermes Trismegistus",
      "Emerald Tablet",
      "as above so below",
      "Hermetic tradition",
      "Modern Mystery School",
      "Gudni Gudnason",
    ],
    readTime: "6 min read",
    content: hermesTrismegistusEmeraldTablet,
  },
  {
    slug: "what-is-kabbalah",
    title: "What Is Kabbalah? The Tree of Life for Beginners",
    excerpt:
      "A beginner's guide to Kabbalah, the Tree of Life and the ten Sephirot — and how this ancient map of the soul is taught within a living lineage.",
    category: "Practical Magick",
    coverImage: "ascent-blessed-bosch.jpg",
    readyToPost: false,
    releaseDate: "2026-09-05",
    keywords: [
      "what is Kabbalah",
      "Tree of Life",
      "Sephirot",
      "Universal Hermetic Ray Kabbalah",
      "Ipsissima of Kabbalah",
      "Theresa Bullard",
      "Modern Mystery School",
    ],
    readTime: "6 min read",
    content: whatIsKabbalah,
  },
  {
    slug: "philosophers-stone",
    title: "The Philosopher's Stone: What It Really Symbolizes",
    excerpt:
      "Why the alchemists' legendary substance was never really about gold — and what turning lead into gold still teaches about inner transformation.",
    category: "Alchemy",
    coverImage: "book-cover.jpg",
    readyToPost: false,
    releaseDate: "2026-09-12",
    keywords: [
      "Philosopher's Stone",
      "alchemy",
      "lead into gold",
      "magnum opus",
      "spiritual transformation",
      "alchemy symbolism",
    ],
    readTime: "6 min read",
    content: philosophersStone,
  },
  {
    slug: "sacred-geometry-blueprint",
    title: "Sacred Geometry: The Blueprint Behind Everything",
    excerpt:
      "From seashells to temples, the same patterns repeat at every scale — how sacred geometry is read, taught and worked with as a living language.",
    category: "Healing & Modalities",
    coverImage: "flammarion.jpg",
    readyToPost: false,
    releaseDate: "2026-09-19",
    keywords: [
      "sacred geometry",
      "sacred geometry meaning",
      "Modern Mystery School",
      "crystal magick",
      "Sacred Geometry Series",
    ],
    readTime: "6 min read",
    content: sacredGeometryBlueprint,
  },
  {
    slug: "what-happens-during-initiation",
    title: "What Really Happens During a Spiritual Initiation?",
    excerpt:
      "Initiation isn't a test to fail or a secret meant to frighten you — it's a conscious threshold, held open by those who've already walked through it.",
    category: "Lineage & History",
    coverImage: "angels-bouguereau.jpg",
    readyToPost: false,
    releaseDate: "2026-09-26",
    keywords: [
      "spiritual initiation",
      "what is initiation",
      "Empower Thyself",
      "Modern Mystery School",
      "initiation meaning",
    ],
    readTime: "5 min read",
    content: whatHappensDuringInitiation,
  },
  {
    slug: "wicca-demystified",
    title: "Wicca Demystified: An Ancient Nature Path",
    excerpt:
      "Wicca is not the folklore witch of Halloween — it's a peaceful, nature-honoring path with real history. Here's what it actually teaches.",
    category: "Practical Magick",
    coverImage: "moonrise-friedrich.jpg",
    readyToPost: false,
    releaseDate: "2026-10-03",
    keywords: [
      "Wicca",
      "what is Wicca",
      "Wheel of the Year",
      "Wiccan Rede",
      "Gaia Awakening Series",
      "Modern Mystery School",
    ],
    readTime: "6 min read",
    content: wiccaDemystified,
  },
  {
    slug: "paracelsus-spagyric-medicine",
    title: "Paracelsus: The Physician Who Named Spagyric Medicine",
    excerpt:
      "The Renaissance physician who insisted alchemy existed to heal, not to make gold — and gave the world the word 'spagyric.'",
    category: "Alchemy",
    coverImage: "book-atmos.png",
    readyToPost: false,
    releaseDate: "2026-10-10",
    keywords: [
      "Paracelsus",
      "spagyric medicine",
      "alchemy history",
      "plant alchemy",
      "toxicology history",
      "Rosarium Laboratory",
    ],
    readTime: "6 min read",
    content: paracelsusSpagyricMedicine,
  },
  {
    slug: "what-is-life-activation",
    title: "What Is a Life Activation? Awakening Your Divine Blueprint",
    excerpt:
      "A foundational Modern Mystery School session that activates 22 of 24 DNA strands — what actually happens, and why it's usually the first step.",
    category: "Healing & Modalities",
    coverImage: "bethesda-bloch.jpg",
    readyToPost: false,
    releaseDate: "2026-10-17",
    keywords: [
      "Life Activation",
      "DNA activation",
      "Divine Blueprint",
      "Modern Mystery School",
      "22 DNA strands",
      "Radu Coman",
    ],
    readTime: "6 min read",
    content: whatIsLifeActivation,
  },
  {
    slug: "gudni-gudnason",
    title: "Gudni Gudnason: Founder of the Modern Mystery School",
    excerpt:
      "The Icelandic-born Hierophant who, in 1997, brought a hidden lineage into the open — and why that act of trust still shapes the school today.",
    category: "Lineage & History",
    coverImage: "gudni-gudnason.jpg",
    readyToPost: false,
    releaseDate: "2026-10-24",
    keywords: [
      "Gudni Gudnason",
      "Founder of Modern Mystery School",
      "Hierophant",
      "Sovereign Ipsissimus",
      "Lineage of King Salomon",
    ],
    readTime: "6 min read",
    content: gudniGudnason,
  },
  {
    slug: "astral-travel-beginners-guide",
    title: "Astral Travel: A Beginner's Guide to Safely Leaving the Body",
    excerpt:
      "Astral travel is a teachable skill, not a rare gift — how the mystery schools train safe, conscious projection beyond the physical body.",
    category: "Practical Magick",
    coverImage: "starry-rhone-gogh.jpg",
    readyToPost: false,
    releaseDate: "2026-10-31",
    keywords: [
      "astral travel",
      "astral projection",
      "leaving the body",
      "Modern Mystery School",
      "subtle planes",
    ],
    readTime: "6 min read",
    content: astralTravelBeginnersGuide,
  },
  {
    slug: "nigredo-to-rubedo",
    title: "From Nigredo to Rubedo: The Four Stages of Inner Alchemy",
    excerpt:
      "Nigredo, albedo, citrinitas, rubedo — the alchemists' ancient map of transformation, and why the difficult stage doesn't mean you've failed.",
    category: "Alchemy",
    coverImage: "plains-of-heaven.jpg",
    readyToPost: false,
    releaseDate: "2026-11-07",
    keywords: [
      "nigredo",
      "albedo",
      "rubedo",
      "magnum opus",
      "stages of alchemy",
      "inner alchemy",
      "Carl Jung alchemy",
    ],
    readTime: "6 min read",
    content: nigredoToRubedo,
  },
  {
    slug: "understanding-your-aura",
    title: "Understanding Your Aura",
    excerpt:
      "The energetic field you can already sense but rarely name — what it is, why it matters, and simple ways to keep it clear and strong.",
    category: "Healing & Modalities",
    coverImage: "angels-bouguereau.jpg",
    readyToPost: false,
    releaseDate: "2026-11-14",
    keywords: [
      "aura",
      "aura healing",
      "sacred geometry aura healing",
      "energetic field",
      "Modern Mystery School",
    ],
    readTime: "5 min read",
    content: understandingYourAura,
  },
  {
    slug: "seven-mystery-schools-explained",
    title: "The Seven Mystery Schools: One Tradition, Seven Faces of Wisdom",
    excerpt:
      "Seven cultures, seven traditions, one current of light — how the Seven Mystery Schools fit together into a single living lineage.",
    category: "Lineage & History",
    coverImage: "temple-pylon-karnak.jpg",
    readyToPost: false,
    releaseDate: "2026-11-21",
    keywords: [
      "seven mystery schools",
      "ancient mystery schools",
      "Modern Mystery School",
      "Lineage of King Salomon",
    ],
    readTime: "6 min read",
    content: sevenMysterySchoolsExplained,
  },
  {
    slug: "tarot-as-a-mirror",
    title: "Tarot as a Mirror: Reflection, Not Fortune-Telling",
    excerpt:
      "Tarot's real power was never predicting a fixed future — it's a mirror for intuition and self-reflection. A short history and how to use it that way.",
    category: "Practical Magick",
    coverImage: "wanderer-friedrich.jpg",
    readyToPost: false,
    releaseDate: "2026-11-28",
    keywords: [
      "tarot",
      "tarot meaning",
      "Rider-Waite tarot",
      "Major Arcana",
      "tarot self-reflection",
      "Modern Mystery School",
    ],
    readTime: "6 min read",
    content: tarotAsAMirror,
  },
  {
    slug: "crystals-salts-holy-water",
    title: "Crystals, Salts & Holy Water: A Healer's Sanctified Tools",
    excerpt:
      "Why a stone, a pinch of salt and a splash of water appear as sacred tools across nearly every tradition on earth — and how they're used today.",
    category: "Sacred Tools",
    coverImage: "ancient-of-days-blake.jpg",
    readyToPost: false,
    releaseDate: "2026-12-05",
    keywords: [
      "crystal healing",
      "ritual salts",
      "holy water",
      "crystal magick",
      "sanctified tools",
      "Modern Mystery School",
    ],
    readTime: "6 min read",
    content: crystalsSaltsHolyWater,
  },
  {
    slug: "why-magick-is-good",
    title: "Why Magick Is Good: MMS Magick Across World Cultures",
    excerpt:
      "Popular culture paints magic as sinister, but from Egyptian Heka to Yoruba Àṣẹ to Norse Seiðr, magic has almost always meant healing and life.",
    category: "Practical Magick",
    coverImage: "bethesda-bloch.jpg",
    readyToPost: false,
    releaseDate: "2026-12-12",
    keywords: [
      "why magick is good",
      "magick across cultures",
      "what is magick",
      "Heka",
      "Ase",
      "Ashe",
      "seidr",
      "mantra yantra",
      "Taoist qi",
      "Modern Mystery School",
    ],
    readTime: "8 min read",
    content: whyMagickIsGood,
  },
  {
    slug: "what-is-a-ritual-master",
    title: "What Is a Ritual Master? A Story of Meeting My First Teacher",
    excerpt:
      "A personal story of meeting my first Ritual Master, and the path of preparation — from Life Activation to Healers Academy — that had to come first.",
    category: "Practical Magick",
    coverImage: "Ritual Master Blog.jpg",
    readyToPost: true,
    releaseDate: "2026-08-17",
    keywords: [
      "Ritual Master",
      "what is a Ritual Master",
      "Ritual Master path",
      "Modern Mystery School",
      "Life Activation",
      "Healers Academy",
      "King Salomon lineage",
      "Radu Coman",
    ],
    readTime: "5 min read",
    content: whatIsARitualMaster,
  },
  {
    slug: "life-activation-vs-full-spirit-activation",
    title: "Life Activation vs. Full Spirit Activation: A Side-by-Side Guide",
    excerpt:
      "Two foundational activations, one lineage — how Life Activation and Full Spirit Activation differ in focus, depth, and timing, and which to book first.",
    category: "Healing & Modalities",
    coverImage: "francisco-camilo-ascension-google-art-project.jpg",
    readyToPost: true,
    releaseDate: "2026-08-23",
    keywords: [
      "Life Activation",
      "Full Spirit Activation",
      "Life Activation vs Full Spirit Activation",
      "DNA activation",
      "soul activation",
      "Divine Blueprint",
      "Modern Mystery School",
      "spiritual activation Prague",
    ],
    readTime: "7 min read",
    content: lifeActivationVsFullSpiritActivation,
  },
]

/** Today's calendar date, anchored at UTC midnight — safe to compare against parseLocalDate(). */
function startOfToday(): Date {
  const now = new Date()
  return new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()))
}

/** True when BLOG_PREVIEW=true is set locally — bypasses release-date gating so
 *  all posts can be inspected before they go live. Never set this in production. */
export function isPreviewMode(): boolean {
  return process.env.BLOG_PREVIEW === "true"
}

/** Whether a post's releaseDate has actually arrived, ignoring preview mode. */
export function isReleased(post: BlogPost): boolean {
  return parseLocalDate(post.releaseDate) <= startOfToday()
}

/** A post is visible to real visitors only once BOTH its releaseDate has arrived
 *  AND it has been manually marked readyToPost — a post never goes live on its
 *  own just because the date passed. Preview mode bypasses both, so you can
 *  review a post before deciding it's ready. */
export function isPublished(post: BlogPost): boolean {
  return isPreviewMode() || (isReleased(post) && post.readyToPost)
}

/** All published posts, newest first. */
export function getPublishedPosts(): BlogPost[] {
  return BLOG_POSTS.filter(isPublished).sort((a, b) => b.releaseDate.localeCompare(a.releaseDate))
}

/** A single published post by slug — undefined if unknown or not yet released. */
export function getPostBySlug(slug: string): BlogPost | undefined {
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  return post && isPublished(post) ? post : undefined
}

/** "11 July 2026" */
export function formatPostDate(dateStr: string): string {
  return parseLocalDate(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  })
}
