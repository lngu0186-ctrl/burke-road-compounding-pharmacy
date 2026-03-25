import { Link } from "wouter";

const conditions = [
  { icon: "⚖️", label: "Hormone Therapy", slug: "hormone-therapy", desc: "Bioidentical HRT, menopause management, thyroid support, and testosterone therapy" },
  { icon: "💊", label: "Pain Management", slug: "pain-management", desc: "Topical analgesics, neuropathic pain, chronic pain solutions, and PLO gels" },
  { icon: "🌿", label: "Dermatology", slug: "dermatology", desc: "Custom skincare, anti-ageing, acne treatments, and wound care formulations" },
  { icon: "👶", label: "Paediatrics", slug: "paediatrics", desc: "Child-friendly flavours, precise dosing, and age-appropriate formulations" },
  { icon: "🐾", label: "Veterinary", slug: "veterinary", desc: "Pet medications in palatable forms, precise dosing for all animal sizes" },
  { icon: "🧬", label: "Low Dose Naltrexone", slug: "low-dose-naltrexone", desc: "LDN for autoimmune conditions, chronic pain, and inflammatory disorders" },
  { icon: "♂️", label: "Men's Health", slug: "mens-health", desc: "Testosterone therapy, erectile dysfunction, hair loss, and vitality support" },
  { icon: "♀️", label: "Women's Health", slug: "womens-health", desc: "PCOS, endometriosis, fertility support, and pregnancy wellness" },
  { icon: "🏃", label: "Sports Medicine", slug: "sports-medicine", desc: "Performance enhancement, injury recovery, and topical anti-inflammatories" },
  { icon: "🦷", label: "Dental", slug: "dental", desc: "Oral rinses, anaesthetic preparations, and specialised dental formulations" },
  { icon: "🫁", label: "Gastroenterology", slug: "gastroenterology", desc: "IBS, IBD, reflux management, and digestive health support" },
  { icon: "🧠", label: "Mental Health", slug: "mental-health", desc: "Anxiety, depression, ADHD, and mood disorder support" },
];

export default function Conditions() {
  return (
    <div className="bg-[#f9fafb]">
      <div className="brp-gradient py-16 text-white">
        <div className="container">
          <Link href="/compounding" className="text-white/70 hover:text-white text-sm mb-4 inline-block">
            ← Back to Compounding
          </Link>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Browse by Condition
          </h1>
          <p className="text-white/85 text-xl max-w-2xl">
            Explore our specialised compounding solutions tailored to your health needs.
          </p>
        </div>
      </div>

      <div className="container py-16">
        <div className="bg-white rounded-xl p-6 mb-10 shadow-sm border border-border">
          <h2
            className="text-2xl font-bold text-[#1a4d2e] mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Personalised Compounding Solutions
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At Burke Road Compounding Pharmacy, we create customised medications for a wide
            range of health conditions. Our experienced compounding pharmacists work closely
            with prescribers to formulate medications tailored to your specific
            requirements — whether it's adjusting dosages, removing allergens, or creating
            alternative dosage forms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {conditions.map((c) => (
            <Link
              key={c.slug}
              href={`/conditions/${c.slug}`}
              className="brp-card p-6 text-center group flex flex-col items-center"
            >
              <div className="text-5xl mb-4">{c.icon}</div>
              <h3
                className="text-xl font-bold text-[#1a4d2e] mb-2 group-hover:text-[#2d6a4f]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {c.label}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
            </Link>
          ))}
        </div>

        <div className="mt-16 brp-gradient rounded-2xl p-10 text-white text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Not sure where to start?
          </h2>
          <p className="text-white/85 mb-8">
            Our compounding pharmacists are here to help. Contact us to discuss your specific needs.
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
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
