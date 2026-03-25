/**
 * Home — Burke Road Compounding Pharmacy
 * Sections: Hero, Services Overview, Compounding Highlight,
 *   PBS Pricing, Testimonials, Accreditations, CTA
 */
import { Link } from "wouter";
import { ArrowRight, Star, Truck, Syringe, Pill, Clock, Phone, MapPin } from "lucide-react";
import { trpc } from "@/lib/trpc";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/93092134/Sz8SP7v55RRQvADhiwfHx5";

const services = [
  {
    icon: <Pill className="w-7 h-7" />,
    title: "PBS Dispensing",
    desc: "Subsidised prescriptions under the Pharmaceutical Benefits Scheme. We accept all Medicare, DVA, and concession cards.",
    href: "/services#pbs",
  },
  {
    icon: <Syringe className="w-7 h-7" />,
    title: "Vaccinations",
    desc: "Flu, COVID-19, travel vaccines and more. No appointment needed for most vaccines.",
    href: "/services#vaccinations",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.155-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Compounding",
    desc: "Personalised medications tailored to your unique needs. Hormone therapy, pain management, dermatology, and more.",
    href: "/compounding",
  },
  {
    icon: <Clock className="w-7 h-7" />,
    title: "Chemist Care Now",
    desc: "Minor ailment consultations without a GP appointment. Get treatment for common conditions on the spot.",
    href: "/services#chemist-care-now",
  },
  {
    icon: <Truck className="w-7 h-7" />,
    title: "Australia-wide Delivery",
    desc: "We deliver compounded medications and retail products Australia-wide, including remote areas.",
    href: "/services",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Dose Administration Aids",
    desc: "SureMed blister packs and Webster-paks to help you manage complex medication regimens safely.",
    href: "/services#daa",
  },
];

const conditions = [
  { icon: "⚖️", label: "Hormone Therapy", slug: "hormone-therapy" },
  { icon: "💊", label: "Pain Management", slug: "pain-management" },
  { icon: "🌿", label: "Dermatology", slug: "dermatology" },
  { icon: "👶", label: "Paediatrics", slug: "paediatrics" },
  { icon: "🐾", label: "Veterinary", slug: "veterinary" },
  { icon: "🧬", label: "Low Dose Naltrexone", slug: "low-dose-naltrexone" },
  { icon: "♂️", label: "Men's Health", slug: "mens-health" },
  { icon: "♀️", label: "Women's Health", slug: "womens-health" },
  { icon: "🏃", label: "Sports Medicine", slug: "sports-medicine" },
  { icon: "🦷", label: "Dental", slug: "dental" },
  { icon: "🫁", label: "Gastroenterology", slug: "gastroenterology" },
  { icon: "🧠", label: "Mental Health", slug: "mental-health" },
];

const testimonials = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "The compounding team at Burke Road has been incredible. My BHRT formulation is perfectly tailored and the pharmacists always take time to explain everything.",
  },
  {
    name: "James T.",
    rating: 5,
    text: "Been coming here for years. The staff are knowledgeable, friendly, and the service is always prompt. Best pharmacy in Camberwell by far.",
  },
  {
    name: "Dr. Rebecca L.",
    rating: 5,
    text: "As a GP, I regularly refer patients to Burke Road for compounding. Their attention to detail and communication with prescribers is excellent.",
  },
];

export default function Home() {
  const { data: dbConditions } = trpc.conditions.list.useQuery();
  const { data: dbTestimonials } = trpc.testimonials.list.useQuery();

  // Use DB data if available, fall back to static data
  const displayConditions = dbConditions ?? conditions;
  const displayTestimonials = dbTestimonials ?? testimonials;

  return (
    <div className="bg-[#f9fafb]">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${CDN}/hero-pharmacy-modern_742c27b2.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a4d2e]/90 via-[#1a4d2e]/70 to-transparent" />
        <div className="relative container py-24">
          <div className="max-w-2xl">
            <div className="brp-badge mb-6">
              <span className="text-[#1a4d2e]">Serving Camberwell since 1963</span>
            </div>
            <h1
              className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Your Health,{" "}
              <span className="italic text-[#84cc16]">personalised.</span>
            </h1>
            <p className="text-xl text-white/85 leading-relaxed mb-8 max-w-xl">
              Burke Road Compounding Pharmacy combines traditional community pharmacy values
              with modern compounding expertise. Personalised medications, PBS dispensing,
              and Chemist Care Now — all in one place.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/compounding"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#84cc16] hover:bg-[#65a30d] text-gray-900 font-bold rounded-xl transition-all shadow-lg hover:shadow-xl"
              >
                Explore Compounding
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:0398898622"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-xl border border-white/40 transition-all"
              >
                <Phone className="w-5 h-5" />
                (03) 9889 8622
              </a>
            </div>
            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 mt-10">
              {["4.9★ Google Rating", "60+ Years Experience", "Australia-wide Delivery"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2 text-white/80 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#84cc16]" />
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <div className="brp-badge mx-auto mb-4">Our Services</div>
            <h2 className="brp-section-heading text-4xl mb-4">
              Everything you need, in one pharmacy
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From PBS dispensing to personalised compounding, we offer a comprehensive range
              of pharmacy services for the whole community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="brp-card p-6 group flex flex-col gap-4"
              >
                <div className="w-14 h-14 rounded-xl bg-[#f0f7f4] flex items-center justify-center text-[#1a4d2e] group-hover:bg-[#1a4d2e] group-hover:text-white transition-colors">
                  {s.icon}
                </div>
                <div>
                  <h3
                    className="text-xl font-bold text-[#1a4d2e] mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
                <div className="mt-auto flex items-center gap-1 text-[#2d6a4f] text-sm font-semibold group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compounding Highlight ─────────────────────────── */}
      <section className="py-20 bg-[#f0f7f4]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="brp-badge mb-6">Specialised Compounding</div>
              <h2
                className="text-4xl font-bold text-[#1a4d2e] leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Medications crafted for <em>you</em>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our QCPP-accredited compounding laboratory creates personalised medications
                tailored to your exact needs. Whether you require a specific dose, a
                different delivery form, or a formulation free from allergens, our
                experienced compounding pharmacists can help.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Bioidentical Hormone Replacement Therapy (BHRT)",
                  "Topical pain and anti-inflammatory preparations",
                  "Paediatric formulations in child-friendly flavours",
                  "Veterinary medications for all animal sizes",
                  "Low Dose Naltrexone (LDN) capsules",
                  "Dermatology and skincare preparations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                    <div className="w-5 h-5 rounded-full bg-[#1a4d2e] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/compounding"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a4d2e] hover:bg-[#2d6a4f] text-white font-semibold rounded-xl transition-all"
                >
                  About Compounding <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/conditions"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-[#f0f7f4] text-[#1a4d2e] font-semibold rounded-xl border border-[#1a4d2e]/20 transition-all"
                >
                  Browse by Condition
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={`${CDN}/compounding-lab_a806e1b3.jpg`}
                alt="Compounding laboratory at Burke Road Pharmacy"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-[#f0f7f4] flex items-center justify-center">
                  <img
                    src={`${CDN}/logo-qcpp_92a72def.png`}
                    alt="QCPP Accredited"
                    className="h-8 object-contain"
                  />
                </div>
                <div>
                  <div className="font-bold text-[#1a4d2e] text-sm">QCPP Accredited</div>
                  <div className="text-gray-500 text-xs">Quality standards assured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Browse by Condition ───────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <div className="brp-badge mx-auto mb-4">Compounding Solutions</div>
            <h2 className="brp-section-heading text-4xl mb-4">Browse by Condition</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              We compound specialised medications for a wide range of health conditions.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {conditions.map((c) => (
              <Link
                key={c.slug}
                href={`/conditions/${c.slug}`}
                className="brp-card p-4 text-center group"
              >
                <div className="text-3xl mb-2">{c.icon}</div>
                <div
                  className="text-xs font-semibold text-[#1a4d2e] group-hover:text-[#2d6a4f] leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {c.label}
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/conditions"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a4d2e] hover:bg-[#2d6a4f] text-white font-semibold rounded-xl transition-all"
            >
              View All Conditions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PBS Pricing ───────────────────────────────────── */}
      <section className="py-20 bg-[#f0f7f4]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={`${CDN}/pbs-pricing-2026_00bf5770.png`}
                alt="PBS Pricing 2026"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="brp-badge mb-6">PBS Dispensing</div>
              <h2
                className="text-4xl font-bold text-[#1a4d2e] leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Transparent PBS pricing — no surprises
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We accept all Medicare, DVA, and concession cards. Our PBS co-payments are
                always at the current government-regulated rates, ensuring you pay the
                correct amount every time.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "General Patient", value: "$31.60", note: "Per PBS item" },
                  { label: "Concession Card", value: "$7.70", note: "Per PBS item" },
                  { label: "DVA White Card", value: "$0.00", note: "Most items free" },
                  { label: "Safety Net", value: "Tracked", note: "Automatic recording" },
                ].map((item) => (
                  <div key={item.label} className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="text-2xl font-bold text-[#1a4d2e]">{item.value}</div>
                    <div className="text-sm font-semibold text-gray-800">{item.label}</div>
                    <div className="text-xs text-gray-500">{item.note}</div>
                  </div>
                ))}
              </div>
              <img
                src={`${CDN}/dva-veteran-cards_e8c452b4.jpg`}
                alt="DVA Veteran Cards accepted"
                className="rounded-xl h-16 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <div className="brp-badge mx-auto mb-4">Patient Reviews</div>
            <h2 className="brp-section-heading text-4xl mb-4">What our patients say</h2>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold">4.9 / 5</span>
              <span className="text-gray-400">on Google Reviews</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="brp-card p-6">
                <div className="flex mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#f0f7f4] flex items-center justify-center text-[#1a4d2e] font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-500 flex items-center gap-1">
                      <img
                        src={`${CDN}/logo-final-square_18df8581.png`}
                        alt=""
                        className="h-3 w-3 rounded-sm"
                      />
                      Google Review
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Location & Hours ─────────────────────────────── */}
      <section className="py-20 bg-[#1a4d2e] text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-4xl font-bold mb-6 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Visit us in Camberwell
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#84cc16] mt-1 shrink-0" />
                  <div>
                    <div className="font-semibold">Shop 3/1 Burke Road, Camberwell VIC 3124</div>
                    <a
                      href="https://maps.google.com/?q=Burke+Road+Compounding+Pharmacy+Camberwell"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 text-sm hover:text-white underline"
                    >
                      Get directions →
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#84cc16] mt-1 shrink-0" />
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between gap-8">
                      <span className="text-white/70">Monday – Friday</span>
                      <span className="font-medium">9:00am – 6:00pm</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span className="text-white/70">Saturday</span>
                      <span className="font-medium">9:00am – 1:00pm</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span className="text-white/70">Sunday</span>
                      <span className="font-medium text-white/50">Closed</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#84cc16] shrink-0" />
                  <a href="tel:0398898622" className="font-semibold hover:text-[#84cc16]">
                    (03) 9889 8622
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:0398898622"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#84cc16] hover:bg-[#65a30d] text-gray-900 font-bold rounded-xl transition-all"
                >
                  <Phone className="w-4 h-4" /> Call Us
                </a>
                <a
                  href="https://wa.me/61398898622"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-xl border border-white/30 transition-all"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-video bg-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.4!2d145.0620!3d-37.8260!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad641c7f2b5a5b5%3A0x0!2sBurke%20Road%20Compounding%20Pharmacy!5e0!3m2!1sen!2sau!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Burke Road Pharmacy Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Accreditations ───────────────────────────────── */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container">
          <p className="text-center text-gray-500 text-sm mb-8 uppercase tracking-wider font-medium">
            Accreditations &amp; Memberships
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            <img src={`${CDN}/logo-pga_7c5cced5.png`} alt="Pharmacy Guild of Australia" className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity" />
            <img src={`${CDN}/logo-ipa_72a08de3.png`} alt="Independent Pharmacies of Australia" className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity" />
            <img src={`${CDN}/logo-qcpp_92a72def.png`} alt="QCPP Accredited" className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </section>
    </div>
  );
}
