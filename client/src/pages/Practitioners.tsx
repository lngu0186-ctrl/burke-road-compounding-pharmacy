import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const resources = [
  {
    icon: "📋",
    title: "Online Formulary",
    desc: "Browse our comprehensive formulary with detailed pricing, dosage forms, and therapeutic categories. Updated regularly with new formulations.",
    href: "/prescribers",
  },
  {
    icon: "📝",
    title: "Prescription Generator",
    desc: "Generate professional compounding prescriptions online. Pre-filled templates for common formulations with customisable fields.",
    href: "/prescribers",
  },
  {
    icon: "🧮",
    title: "Compounding Calculators",
    desc: "Professional pharmaceutical calculators including MAWQ, alligation, potency adjustment, and displacement factors.",
    href: "/prescribers",
  },
  {
    icon: "📞",
    title: "Clinical Consultation",
    desc: "Speak directly with our compounding pharmacists for formulation advice, dosing guidance, and therapeutic recommendations.",
    href: "tel:0398898622",
  },
  {
    icon: "📚",
    title: "Knowledge Centre",
    desc: "Evidence-based articles written by our compounding pharmacists to support your clinical practice.",
    href: "/knowledge-centre",
  },
  {
    icon: "🔬",
    title: "Prescribers Portal",
    desc: "Access the prescribers-only portal for prescription generation, formulary access, and direct communication.",
    href: "/prescribers",
  },
];

const articles = [
  {
    title: "Bioidentical Hormone Therapy: A Clinical Overview",
    desc: "An evidence-based review of BHRT formulations, dosing considerations, and monitoring parameters for prescribers.",
    category: "Hormone Therapy",
  },
  {
    title: "Topical Pain Management: Formulation Considerations",
    desc: "A guide to selecting appropriate bases, penetration enhancers, and active ingredients for topical analgesic preparations.",
    category: "Pain Management",
  },
  {
    title: "Low Dose Naltrexone: Mechanisms and Clinical Applications",
    desc: "Current evidence for LDN use in autoimmune conditions, chronic pain, and inflammatory disorders.",
    category: "LDN",
  },
  {
    title: "Paediatric Compounding: Dosing and Formulation Principles",
    desc: "Key considerations for compounding medications for paediatric patients, including weight-based dosing and palatability.",
    category: "Paediatrics",
  },
];

export default function Practitioners() {
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
            Practitioner Hub
          </h1>
          <p className="text-white/85 text-xl max-w-2xl">
            Clinical resources, formulary access, and professional support for healthcare providers.
          </p>
        </div>
      </div>

      <div className="container py-16">
        {/* Intro */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-border mb-12">
          <h2
            className="text-2xl font-bold text-[#1a4d2e] mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Welcome to Our Practitioner Hub
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Burke Road Compounding Pharmacy is committed to supporting healthcare practitioners
            with evidence-based compounding solutions. Our experienced team works collaboratively
            with prescribers to create customised medications that meet your patients' unique
            therapeutic needs.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This hub provides access to clinical resources, our comprehensive formulary,
            prescription pathways, and professional support to help you deliver optimal
            patient outcomes.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {resources.map((r) => (
            <a
              key={r.title}
              href={r.href}
              className="brp-card p-6 group flex flex-col gap-4"
            >
              <div className="text-4xl">{r.icon}</div>
              <div>
                <h3
                  className="text-xl font-bold text-[#1a4d2e] mb-2 group-hover:text-[#2d6a4f]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {r.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
              </div>
              <div className="mt-auto flex items-center gap-1 text-[#2d6a4f] text-sm font-semibold group-hover:gap-2 transition-all">
                Access <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>

        {/* Clinical Articles */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-border mb-12">
          <h2
            className="text-2xl font-bold text-[#1a4d2e] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Clinical Articles &amp; Resources
          </h2>
          <p className="text-gray-600 mb-8 text-sm">
            Evidence-based articles written by our compounding pharmacists to support your clinical practice.
          </p>
          <div className="space-y-4">
            {articles.map((a) => (
              <div
                key={a.title}
                className="p-5 border-l-4 border-[#2d6a4f] bg-[#f8faf9] rounded-r-xl hover:bg-[#f0f7f4] transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="brp-badge text-xs mb-2 inline-block">{a.category}</span>
                    <h4
                      className="font-bold text-[#1a4d2e] text-lg mb-1"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {a.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{a.desc}</p>
                  </div>
                  <Link
                    href="/knowledge-centre"
                    className="text-[#2d6a4f] hover:text-[#1a4d2e] text-sm font-semibold whitespace-nowrap"
                  >
                    Read →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="brp-gradient rounded-2xl p-10 text-white text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Partner with us for your patients
          </h2>
          <p className="text-white/85 mb-8 max-w-xl mx-auto">
            Contact our compounding team to discuss formulation options, pricing, and how we
            can support your practice.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:0398898622"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#84cc16] hover:bg-[#65a30d] text-gray-900 font-bold rounded-xl transition-all"
            >
              Call (03) 9889 8622
            </a>
            <Link
              href="/prescribers"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-xl border border-white/40 transition-all"
            >
              Prescribers Portal <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
