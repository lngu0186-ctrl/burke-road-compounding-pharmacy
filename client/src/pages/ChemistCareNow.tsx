import { Link } from "wouter";
import { ArrowRight, Clock, CheckCircle, AlertCircle } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import { BUSINESS } from "@/config/business";

const conditions = [
  "Urinary tract infections (UTIs)",
  "Skin infections & wounds",
  "Ear pain & infections",
  "Eye infections (conjunctivitis)",
  "Sore throat & tonsillitis",
  "Shingles (Herpes zoster)",
  "Contraception (emergency & ongoing)",
  "Cold sores",
  "Hay fever & allergic rhinitis",
  "Insect bites & stings",
  "Mild to moderate acne",
  "Fungal infections",
];

export default function ChemistCareNow() {
  return (
    <>
      <SEO
        title="Chemist Care Now — Minor Ailment Consultations"
        description="Get treatment for common conditions without a GP appointment. Burke Road Pharmacy's Chemist Care Now service in Camberwell."
        canonical="/services/chemist-care-now"
      />

      <section className="py-16" style={{ backgroundColor: "var(--brp-green-800)" }}>
        <div className="container">
          <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Chemist Care Now" }]} />
          <div className="max-w-2xl mt-4">
            <div className="brp-badge mb-4" style={{ backgroundColor: "rgba(201,169,110,0.15)", color: "var(--brp-brass-300)", borderColor: "rgba(201,169,110,0.3)" }}>
              Minor Ailment Service
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Chemist Care Now
            </h1>
            <p className="text-white/80 text-lg">
              Get treatment for common conditions on the spot — no GP appointment, no
              waiting room, no referral needed.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="brp-badge mb-6">What we treat</div>
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--brp-text)" }}>
                Conditions we can help with
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {conditions.map((c) => (
                  <div key={c} className="flex items-center gap-2 text-sm" style={{ color: "#374151" }}>
                    <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "var(--brp-green-600)" }} />
                    {c}
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 rounded-xl flex gap-3" style={{ backgroundColor: "#fef9c3", border: "1px solid #fde047" }}>
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-yellow-600" />
                <p className="text-sm text-yellow-800">
                  For emergencies, chest pain, difficulty breathing, or symptoms that are
                  severe or rapidly worsening, please call 000 or go to your nearest
                  emergency department.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="brp-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6" style={{ color: "var(--brp-green-700)" }} />
                  <h3 className="font-bold text-lg" style={{ fontFamily: "var(--font-display)", color: "var(--brp-text)" }}>
                    How it works
                  </h3>
                </div>
                <ol className="space-y-3">
                  {[
                    "Walk in during trading hours — no appointment needed",
                    "Speak privately with one of our pharmacists",
                    "We assess your symptoms and recommend treatment",
                    "Receive your medication on the spot if appropriate",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm" style={{ color: "#374151" }}>
                      <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0" style={{ backgroundColor: "var(--brp-green-800)" }}>
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="brp-card p-6">
                <h3 className="font-bold mb-3" style={{ fontFamily: "var(--font-display)", color: "var(--brp-text)" }}>
                  Trading hours
                </h3>
                <div className="space-y-1 text-sm" style={{ color: "#374151" }}>
                  <div className="flex justify-between">
                    <span style={{ color: "var(--brp-muted)" }}>Mon – Fri</span>
                    <span className="font-medium">{BUSINESS.hours.monFri}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "var(--brp-muted)" }}>Saturday</span>
                    <span className="font-medium">{BUSINESS.hours.saturday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "var(--brp-muted)" }}>Sunday</span>
                    <span className="font-medium" style={{ color: "var(--brp-muted)" }}>{BUSINESS.hours.sunday}</span>
                  </div>
                </div>
              </div>

              <a
                href="https://www.medadvisor.com.au/Network/BurkeRoadDiscountDrugStore"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 font-bold rounded-xl text-white transition-all"
                style={{ backgroundColor: "var(--brp-brass-700)" }}
              >
                Book Online <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`tel:${BUSINESS.phone.landlineE164}`}
                className="flex items-center justify-center gap-2 w-full px-6 py-3 font-semibold rounded-xl text-white transition-all"
                style={{ backgroundColor: "var(--brp-green-800)" }}
              >
                Call us before visiting <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
