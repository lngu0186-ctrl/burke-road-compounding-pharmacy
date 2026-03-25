import { Link } from "wouter";
import { ArrowRight, CheckCircle } from "lucide-react";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/93092134/Sz8SP7v55RRQvADhiwfHx5";

const dosageForms = [
  { form: "Capsules", desc: "Immediate or slow-release oral formulations" },
  { form: "Troches / Sublingual", desc: "Rapid absorption, bypasses first-pass metabolism" },
  { form: "Topical Creams & Gels", desc: "Transdermal delivery for localised or systemic effect" },
  { form: "PLO Gels", desc: "Pluronic Lecithin Organogel for enhanced skin penetration" },
  { form: "Oral Liquids", desc: "Solutions and suspensions for easy dosing" },
  { form: "Suppositories & Pessaries", desc: "Rectal or vaginal delivery options" },
  { form: "Eye / Ear / Nasal Drops", desc: "Sterile preparations for sensitive areas" },
  { form: "Veterinary Forms", desc: "Palatable formulations for animals of all sizes" },
];

const whyCompound = [
  "Precise dosing not available commercially",
  "Alternative delivery forms (e.g., topical instead of oral)",
  "Removal of allergens, dyes, or preservatives",
  "Combination of multiple medications in one preparation",
  "Discontinued or unavailable commercial products",
  "Flavouring for paediatric or veterinary patients",
];

export default function Compounding() {
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
            Compounding Pharmacy
          </h1>
          <p className="text-white/85 text-xl max-w-2xl">
            Personalised medications tailored to your unique therapeutic needs.
          </p>
        </div>
      </div>

      <div className="container py-16">
        {/* Intro */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="brp-badge mb-6">What is Compounding?</div>
            <h2
              className="text-3xl font-bold text-[#1a4d2e] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Medications made for you — not the masses
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pharmaceutical compounding is the art and science of preparing personalised
              medications for patients. Our QCPP-accredited compounding laboratory creates
              customised formulations that commercial manufacturers cannot provide.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our experienced compounding pharmacists work closely with your prescriber to
              create medications in the exact dose, form, and combination you need — free
              from unnecessary additives or allergens.
            </p>
            <div className="bg-[#f0f7f4] border border-[#2d6a4f]/20 rounded-xl p-5">
              <p className="text-sm text-[#1a4d2e] font-medium">
                ⚠️ All compounded medications require a valid prescription from a registered
                Australian healthcare provider. Please consult your doctor before requesting
                compounded preparations.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={`${CDN}/compounding-lab_a806e1b3.jpg`}
              alt="Compounding laboratory"
              className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
            />
          </div>
        </div>

        {/* Why Compound */}
        <div className="mb-20">
          <h2
            className="text-3xl font-bold text-[#1a4d2e] mb-8 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Why choose compounded medications?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyCompound.map((reason) => (
              <div key={reason} className="brp-card p-5 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#2d6a4f] shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{reason}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dosage Forms */}
        <div className="mb-20">
          <h2
            className="text-3xl font-bold text-[#1a4d2e] mb-8 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Available dosage forms
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {dosageForms.map((d) => (
              <div key={d.form} className="brp-card p-5">
                <h3
                  className="font-bold text-[#1a4d2e] mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {d.form}
                </h3>
                <p className="text-gray-600 text-sm">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Browse Conditions CTA */}
        <div className="brp-gradient rounded-2xl p-10 text-white text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to explore your options?
          </h2>
          <p className="text-white/85 mb-8 max-w-xl mx-auto">
            Browse our compounding solutions by condition, or contact our pharmacists to
            discuss your specific needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/conditions"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#84cc16] hover:bg-[#65a30d] text-gray-900 font-bold rounded-xl transition-all"
            >
              Browse by Condition <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:0398898622"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-xl border border-white/40 transition-all"
            >
              Speak to a Pharmacist
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
