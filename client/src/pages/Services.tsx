import { BUSINESS } from "@/config/business";
import { Link } from "wouter";

const BOOKING_URL = "https://www.medadvisor.com.au/Network/BurkeRoadDiscountDrugStore";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/93092134/Sz8SP7v55RRQvADhiwfHx5";

const services = [
  {
    id: "pbs",
    icon: "💊",
    title: "PBS Dispensing",
    desc: "We dispense all Pharmaceutical Benefits Scheme (PBS) medications at government-regulated co-payment rates. We accept Medicare, DVA, and all concession cards.",
    details: [
      "General patient co-payment: $31.60 per PBS item",
      "Concession card holders: $7.70 per PBS item",
      "DVA White Card holders: Most items free",
      "Safety Net automatically tracked and recorded",
      "Electronic prescriptions (eRx) accepted",
      "Repeat dispensing available",
    ],
    image: `${CDN}/pbs-pricing-2026_00bf5770.png`,
  },
  {
    id: "vaccinations",
    icon: "💉",
    title: "Vaccinations",
    desc: "Our trained pharmacists administer a range of vaccines. No appointment needed for most vaccines — walk in during trading hours.",
    details: [
      "Influenza (flu) vaccine — seasonal",
      "COVID-19 vaccines",
      "Shingles (Zostavax / Shingrix)",
      "Pneumococcal vaccine",
      "Travel vaccines (hepatitis A, typhoid, and more)",
      "Whooping cough (pertussis) booster",
    ],
    link: BOOKING_URL,
    linkLabel: "Book a vaccination online",
    linkExternal: true,
    image: null,
  },
  {
    id: "compounding",
    icon: "🔬",
    title: "Compounding",
    desc: "Our QCPP-accredited compounding laboratory creates personalised medications tailored to your exact needs.",
    details: [
      "Bioidentical hormone therapy (BHRT)",
      "Topical pain and anti-inflammatory preparations",
      "Paediatric formulations in child-friendly flavours",
      "Veterinary medications",
      "Low Dose Naltrexone (LDN)",
      "Dermatology and skincare preparations",
    ],
    link: "/compounding",
    linkLabel: "Learn more about compounding",
    image: `${CDN}/compounding-lab_a806e1b3.jpg`,
  },
  {
    id: "chemist-care-now",
    icon: "🩺",
    title: "Chemist Care Now",
    desc: "Minor ailment consultations without a GP appointment. Our pharmacists can assess and treat a range of common conditions on the spot.",
    details: [
      "Urinary tract infections (UTI)",
      "Skin conditions (rashes, eczema, tinea)",
      "Ear conditions",
      "Oral thrush",
      "Contraception advice",
      "Cold sores and minor infections",
    ],
    link: BOOKING_URL,
    linkLabel: "Book a Chemist Care Now consultation",
    linkExternal: true,
    image: `${CDN}/consultation-friendly_d129865d.jpg`,
  },
  {
    id: "daa",
    icon: "📦",
    title: "Dose Administration Aids",
    desc: "We pack your medications into SureMed blister packs or Webster-paks to help you manage complex medication regimens safely and accurately.",
    details: [
      "Weekly blister pack preparation",
      "SureMed and Webster-pak formats",
      "Suitable for patients on multiple medications",
      "Helps prevent missed or double doses",
      "Available for residential care facilities",
      "Home delivery available",
    ],
    image: null,
  },
  {
    id: "medadvisor",
    icon: "📱",
    title: "MedAdvisor App",
    desc: "Manage your prescriptions and medication reminders with the free MedAdvisor app, linked directly to our dispensing system.",
    details: [
      "View your prescription history",
      "Set medication reminders",
      "Request repeats online",
      "Track your Safety Net threshold",
      "Share medication list with carers",
      "Available on iOS and Android",
    ],
    image: null,
  },
  {
    id: "dva",
    icon: "🎖️",
    title: "DVA & Veteran Cards",
    desc: "We are a DVA-approved pharmacy and accept all veteran cards. Most PBS medications are free for eligible DVA card holders.",
    details: [
      "DVA White Card: Most PBS items free",
      "DVA Gold Card: Comprehensive coverage",
      "DVA Orange Card: Specific conditions covered",
      "Veteran-specific compounding services",
      "Priority dispensing for veterans",
    ],
    image: `${CDN}/dva-veteran-cards_e8c452b4.jpg`,
  },
  {
    id: "delivery",
    icon: "🚚",
    title: "Australia-wide Delivery",
    desc: "We deliver compounded medications and retail products Australia-wide, including to remote and rural areas.",
    details: [
      "Express and standard delivery options",
      "Temperature-controlled packaging for sensitive preparations",
      "Tracked shipping with notifications",
      "Delivery to all Australian states and territories",
      "Regular delivery schedules for ongoing prescriptions",
    ],
    image: `${CDN}/delivery-service_7cec5c9a.jpg`,
  },
];

export default function Services() {
  return (
    <div className="bg-background">
      {/* Header */}
      <div className="brp-gradient py-16 text-white">
        <div className="container">
          <Link href="/" className="text-white/70 hover:text-white text-sm mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our Services
          </h1>
          <p className="text-white/85 text-xl max-w-2xl">
            Comprehensive pharmacy services for the Camberwell community and beyond.
          </p>
        </div>
      </div>

      <div className="container py-16">
        {/* Quick Nav */}
        <div className="flex flex-wrap gap-2 mb-12">
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-border hover:border-[#2d6a4f] hover:text-[#1a4d2e] transition-all"
            >
              {s.icon} {s.title}
            </a>
          ))}
        </div>

        {/* Services */}
        <div className="space-y-12">
          {services.map((s, idx) => (
            <div
              key={s.id}
              id={s.id}
              className={`grid lg:grid-cols-2 gap-10 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{s.icon}</span>
                  <h2
                    className="text-3xl font-bold text-[#1a4d2e]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {s.title}
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-2 mb-6">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-gray-700 text-sm">
                      <div className="w-5 h-5 rounded-full bg-muted border border-[#2d6a4f]/30 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-[#1a4d2e]-700" />
                      </div>
                      {d}
                    </li>
                  ))}
                </ul>
                {s.link && (
                  (s as any).linkExternal ? (
                    <a
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90"
                      style={{ backgroundColor: "var(--brp-green-800)" }}
                    >
                      {s.linkLabel} →
                    </a>
                  ) : (
                    <Link
                      href={s.link}
                      className="inline-flex items-center gap-2 font-semibold text-sm hover:underline"
                      style={{ color: "var(--brp-green-700)" }}
                    >
                      {s.linkLabel} →
                    </Link>
                  )
                )}
              </div>
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                {s.image ? (
                  <img
                    src={s.image}
                    alt={s.title}
                    className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]"
                  />
                ) : (
                  <div className="rounded-2xl bg-muted border border-[#2d6a4f]/20 aspect-[4/3] flex items-center justify-center">
                    <span className="text-8xl opacity-30">{s.icon}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="brp-gradient rounded-2xl p-10 text-white text-center mt-16">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Questions about our services?
          </h2>
          <p className="text-white/85 mb-8">
            Our friendly team is happy to help. Give us a call or drop in during trading hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`tel:${BUSINESS.phone.landlineE164}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#84cc16] hover:bg-[#65a30d] text-gray-900 font-bold rounded-xl transition-all"
            >
              📞 Call {BUSINESS.phone.landline}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-xl border border-white/40 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
