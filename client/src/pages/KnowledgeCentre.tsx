import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { trpc } from "@/lib/trpc";

const staticArticles = [
  {
    category: "Hormone Therapy",
    title: "Understanding Bioidentical Hormone Replacement Therapy (BHRT)",
    excerpt:
      "An overview of BHRT, how it differs from conventional HRT, and what patients should know before starting treatment.",
    readTime: "5 min read",
    slug: "bhrt-overview",
  },
  {
    category: "Pain Management",
    title: "Topical Pain Relief: How Compounded Creams Work",
    excerpt:
      "Topical analgesics can provide targeted pain relief with fewer systemic side effects. Learn how they work and when they're appropriate.",
    readTime: "4 min read",
    slug: "topical-pain-relief",
  },
  {
    category: "LDN",
    title: "Low Dose Naltrexone: What the Evidence Says",
    excerpt:
      "A balanced review of the current clinical evidence for LDN in autoimmune conditions, chronic pain, and inflammatory disorders.",
    readTime: "6 min read",
    slug: "ldn-evidence",
  },
  {
    category: "PBS",
    title: "Understanding Your PBS Co-payment and Safety Net",
    excerpt:
      "A plain-English guide to how the Pharmaceutical Benefits Scheme works, including co-payments, concession rates, and the Safety Net.",
    readTime: "3 min read",
    slug: "pbs-guide",
  },
  {
    category: "Compounding",
    title: "What is Pharmaceutical Compounding?",
    excerpt:
      "Compounding allows pharmacists to create personalised medications. Learn about the process, quality standards, and when it's appropriate.",
    readTime: "4 min read",
    slug: "what-is-compounding",
  },
  {
    category: "Paediatrics",
    title: "Giving Medications to Children: Tips for Parents",
    excerpt:
      "Practical advice for parents on administering medications to children, including flavoured compounded preparations.",
    readTime: "3 min read",
    slug: "paediatric-medications",
  },
  {
    category: "Vaccinations",
    title: "Which Vaccines Do I Need? A Guide for Adults",
    excerpt:
      "Many adults are not up to date with their vaccinations. This guide covers the key vaccines recommended for Australian adults.",
    readTime: "5 min read",
    slug: "adult-vaccines",
  },
  {
    category: "Dermatology",
    title: "Custom Skincare: When Off-the-Shelf Products Aren't Enough",
    excerpt:
      "For some skin conditions, commercially available products may not provide adequate treatment. Compounded skincare can help.",
    readTime: "4 min read",
    slug: "custom-skincare",
  },
];

// categories derived dynamically in component

export default function KnowledgeCentre() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { data: dbArticles } = trpc.articles.list.useQuery(
    activeCategory !== "All" ? { category: activeCategory } : {}
  );
  const displayArticles = dbArticles ?? staticArticles;
  const allCategories = ["All", ...Array.from(new Set(staticArticles.map(a => a.category)))];

  return (
    <div className="bg-[#f9fafb]">
      {/* Header */}
      <div className="brp-gradient py-16 text-white">
        <div className="container">
          <Link href="/" className="text-white/70 hover:text-white text-sm mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Knowledge Centre
          </h1>
          <p className="text-white/85 text-xl max-w-2xl">
            Evidence-based health information from our compounding pharmacists.
          </p>
        </div>
      </div>

      <div className="container py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                cat === activeCategory
                  ? "bg-[#1a4d2e] text-white"
                  : "bg-white text-gray-700 border border-border hover:border-[#2d6a4f] hover:text-[#1a4d2e]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {displayArticles.map((a) => (
            <div key={a.slug} className="brp-card p-6 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="brp-badge text-xs">{a.category}</span>
                <span className="text-gray-400 text-xs">{'readTimeMinutes' in a ? `${a.readTimeMinutes} min read` : (a as any).readTime}</span>
              </div>
              <h3
                className="text-xl font-bold text-[#1a4d2e] mb-3 leading-snug"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {a.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{a.excerpt}</p>
              <button
                onClick={() => {}}
                className="flex items-center gap-1 text-[#2d6a4f] text-sm font-semibold hover:gap-2 transition-all"
              >
                Read article <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Practitioners section */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-border mb-12">
          <h2
            className="text-2xl font-bold text-[#1a4d2e] mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            For Healthcare Practitioners
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            We maintain a separate clinical resources section for healthcare providers,
            including evidence-based compounding protocols, formulary access, and
            prescription generation tools.
          </p>
          <Link
            href="/practitioners"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a4d2e] hover:bg-[#2d6a4f] text-white font-semibold rounded-xl transition-all text-sm"
          >
            Visit Practitioner Hub <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* CTA */}
        <div className="brp-gradient rounded-2xl p-10 text-white text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Have a question?
          </h2>
          <p className="text-white/85 mb-8">
            Our pharmacists are happy to answer your health questions. Give us a call or
            send us a message.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:0398898622"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#84cc16] hover:bg-[#65a30d] text-gray-900 font-bold rounded-xl transition-all"
            >
              Call (03) 9889 8622
            </a>
            <a
              href="https://wa.me/61398898622"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-xl border border-white/40 transition-all"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
