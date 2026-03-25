import { Link } from "wouter";
import { ArrowRight, AlertTriangle } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import { BUSINESS } from "@/config/business";
import PrescriptionUploadEmbed from "@/components/PrescriptionUploadEmbed";

interface ConditionData {
  icon: string;
  title: string;
  subtitle: string;
  metaDescription: string;
  intro: string;
  sections: Array<{ heading: string; content: string; items?: string[] }>;
  disclaimer?: string;
}

const conditionData: Record<string, ConditionData> = {
  "hormone-therapy": {
    icon: "⚖️",
    title: "Hormone Therapy Compounding",
    subtitle: "Personalised bioidentical hormone replacement therapy",
    metaDescription:
      "Compounded bioidentical hormone replacement therapy (BHRT) tailored to your needs. Burke Road Compounding Pharmacy, Camberwell.",
    intro:
      "At Burke Road Compounding Pharmacy, we specialise in creating personalised bioidentical hormone replacement therapy (BHRT) formulations tailored to your unique hormonal needs. Our compounded hormone therapies are designed to restore balance, alleviate symptoms, and improve your quality of life.",
    sections: [
      {
        heading: "Why choose compounded hormone therapy?",
        content:
          "Compounded hormones allow for precise dosing, customised delivery methods, and formulations free from unnecessary additives — providing a personalised approach that commercial products cannot match.",
      },
      {
        heading: "Conditions we treat",
        content: "",
        items: [
          "Menopause & Perimenopause: Hot flushes, night sweats, mood changes, sleep disturbances",
          "Andropause (Male Menopause): Low testosterone, fatigue, reduced libido",
          "Thyroid Disorders: Hypothyroidism, hyperthyroidism, thyroid hormone optimisation",
          "Adrenal Fatigue: Cortisol imbalances, stress management",
          "PCOS: Polycystic ovary syndrome hormone support",
          "Endometriosis: Hormone modulation for symptom relief",
        ],
      },
      {
        heading: "Available hormone formulations",
        content: "We compound a wide range of bioidentical hormones in various dosage forms:",
        items: [
          "Oestrogen (Oestradiol, Oestriol, Oestrone): Creams, gels, capsules, troches",
          "Progesterone: Oral capsules, sublingual troches, vaginal suppositories, topical creams",
          "Testosterone: Creams, gels, troches, capsules (for men and women)",
          "DHEA: Capsules, creams, sublingual troches",
          "Thyroid Hormones: T3, T4, combination therapy, slow-release capsules",
          "Pregnenolone: Capsules, sublingual troches",
        ],
      },
    ],
    disclaimer:
      "All compounded hormone medications require a prescription from a qualified healthcare provider. Hormone therapy should be individualised and monitored regularly. Discuss potential risks and benefits with your doctor.",
  },
  "pain-management": {
    icon: "💊",
    title: "Pain Management Compounding",
    subtitle: "Targeted topical and systemic pain relief solutions",
    metaDescription:
      "Customised compounded pain management preparations — topical creams, PLO gels, and oral capsules. Burke Road Compounding Pharmacy, Camberwell.",
    intro:
      "Our compounding pharmacists create customised pain management preparations that can be tailored to your specific type of pain, severity, and preferred delivery method. Topical preparations can provide localised relief with reduced systemic side effects.",
    sections: [
      {
        heading: "Types of pain we address",
        content: "",
        items: [
          "Neuropathic pain (nerve pain, diabetic neuropathy)",
          "Musculoskeletal pain (arthritis, back pain, fibromyalgia)",
          "Post-surgical and wound pain",
          "Chronic pain conditions",
          "Sports injuries and inflammation",
          "Headaches and migraines",
        ],
      },
      {
        heading: "Compounded pain formulations",
        content: "",
        items: [
          "Topical analgesic creams and gels (ketamine, gabapentin, amitriptyline, ketoprofen)",
          "PLO gels (Pluronic Lecithin Organogel) for enhanced skin penetration",
          "Transdermal patches and films",
          "Oral capsules with customised dosing",
          "Combination preparations targeting multiple pain pathways",
        ],
      },
    ],
    disclaimer:
      "All compounded pain medications require a valid prescription. Please consult your doctor or specialist before requesting compounded preparations.",
  },
  "dermatology": {
    icon: "🌿",
    title: "Dermatology Compounding",
    subtitle: "Custom skincare and dermatological preparations",
    metaDescription:
      "Compounded dermatology preparations for acne, rosacea, eczema, pigmentation, and hair loss. Burke Road Compounding Pharmacy, Camberwell.",
    intro:
      "We prepare customised dermatological formulations for a wide range of skin conditions. Our preparations can be tailored to your skin type, sensitivity, and specific therapeutic needs.",
    sections: [
      {
        heading: "Conditions we treat",
        content: "",
        items: [
          "Acne and rosacea",
          "Eczema and psoriasis",
          "Hyperpigmentation and melasma",
          "Anti-ageing and skin rejuvenation",
          "Wound care and scar management",
          "Alopecia (hair loss)",
          "Nail fungal infections",
        ],
      },
      {
        heading: "Popular formulations",
        content: "",
        items: [
          "Tretinoin creams in custom strengths",
          "Hydroquinone and kojic acid for pigmentation",
          "Minoxidil solutions and foams for hair loss",
          "Niacinamide and azelaic acid preparations",
          "Custom moisturisers and barrier creams",
          "Antifungal nail lacquers",
        ],
      },
    ],
  },
  "paediatrics": {
    icon: "👶",
    title: "Paediatric Compounding",
    subtitle: "Child-friendly medications in the right dose and form",
    metaDescription:
      "Paediatric compounding — precise doses, palatable flavours, and child-friendly forms for infants and children. Burke Road Compounding Pharmacy, Camberwell.",
    intro:
      "Children often require medications in doses or forms not available commercially. Our paediatric compounding service creates child-friendly formulations that make medication administration easier and more accurate.",
    sections: [
      {
        heading: "Why paediatric compounding?",
        content: "",
        items: [
          "Precise dosing based on weight and age",
          "Palatable flavours to improve compliance",
          "Alternative forms when tablets or capsules are unsuitable",
          "Allergen-free formulations",
          "Discontinued paediatric medications",
        ],
      },
      {
        heading: "Available forms",
        content: "",
        items: [
          "Flavoured oral liquids and suspensions",
          "Chewable troches and gummies",
          "Topical creams and gels",
          "Suppositories for young children",
          "Transdermal gels for easy application",
        ],
      },
    ],
  },
  "veterinary": {
    icon: "🐾",
    title: "Veterinary Compounding",
    subtitle: "Customised medications for your beloved animals",
    metaDescription:
      "Compounded veterinary medications for pets and animals of all sizes. Flavoured, easy-to-administer preparations. Burke Road Compounding Pharmacy, Camberwell.",
    intro:
      "We provide compounded veterinary medications for pets and animals of all sizes. Our veterinary preparations are formulated to be palatable and easy to administer, improving compliance for both pets and their owners.",
    sections: [
      {
        heading: "Animals we cater for",
        content: "",
        items: [
          "Dogs and cats",
          "Birds and reptiles",
          "Horses and large animals",
          "Exotic and pocket pets",
          "Farm animals",
        ],
      },
      {
        heading: "Compounded veterinary forms",
        content: "",
        items: [
          "Flavoured oral liquids (chicken, beef, fish flavours)",
          "Transdermal ear gels for cats",
          "Chewable treats and capsules",
          "Injectable preparations",
          "Topical creams and sprays",
        ],
      },
    ],
    disclaimer:
      "All veterinary compounded medications require a prescription from a registered veterinarian.",
  },
  "low-dose-naltrexone": {
    icon: "🧬",
    title: "Low Dose Naltrexone (LDN)",
    subtitle: "Emerging therapy for autoimmune and chronic conditions",
    metaDescription:
      "Compounded Low Dose Naltrexone (LDN) capsules and liquids for autoimmune conditions, fibromyalgia, and chronic pain. Burke Road Compounding Pharmacy.",
    intro:
      "Low Dose Naltrexone (LDN) is used at doses much lower than its standard use for addiction treatment. At these low doses, it is believed to modulate the immune system and has shown promise in a range of conditions.",
    sections: [
      {
        heading: "Conditions LDN may help",
        content: "",
        items: [
          "Multiple sclerosis (MS)",
          "Crohn's disease and IBD",
          "Fibromyalgia and chronic fatigue",
          "Hashimoto's thyroiditis",
          "Lupus and other autoimmune conditions",
          "Chronic pain syndromes",
        ],
      },
      {
        heading: "Our LDN preparations",
        content: "",
        items: [
          "Capsules in doses from 0.5mg to 4.5mg",
          "Oral liquid for flexible dosing",
          "Slow-release formulations",
          "Allergen-free preparations available",
        ],
      },
    ],
    disclaimer:
      "LDN is an off-label use of naltrexone and requires a prescription. Please discuss with your doctor whether LDN is appropriate for your condition.",
  },
  "mens-health": {
    icon: "♂️",
    title: "Men's Health Compounding",
    subtitle: "Testosterone therapy, vitality, and beyond",
    metaDescription:
      "Compounded men's health medications — testosterone replacement therapy, hair loss, and more. Burke Road Compounding Pharmacy, Camberwell.",
    intro:
      "We provide personalised compounding solutions for men's health conditions, including testosterone replacement therapy, erectile dysfunction, hair loss, and general vitality support.",
    sections: [
      {
        heading: "Conditions we address",
        content: "",
        items: [
          "Low testosterone (hypogonadism, andropause)",
          "Erectile dysfunction",
          "Male pattern baldness (androgenetic alopecia)",
          "Prostate health support",
          "Fertility and reproductive health",
          "Sports performance and recovery",
        ],
      },
      {
        heading: "Available formulations",
        content: "",
        items: [
          "Testosterone creams, gels, and troches",
          "Topical minoxidil and finasteride solutions",
          "Sildenafil and tadalafil in customised doses",
          "HCG preparations",
          "Combination formulations",
        ],
      },
    ],
    disclaimer:
      "All men's health compounded medications require a prescription from a qualified healthcare provider.",
  },
  "womens-health": {
    icon: "♀️",
    title: "Women's Health Compounding",
    subtitle: "Personalised care for every stage of life",
    metaDescription:
      "Compounded women's health medications — BHRT, menopause, PCOS, and more. Burke Road Compounding Pharmacy, Camberwell.",
    intro:
      "We offer comprehensive compounding solutions for women's health across all life stages, from reproductive health to menopause management and beyond.",
    sections: [
      {
        heading: "Conditions we address",
        content: "",
        items: [
          "Menopause and perimenopause",
          "PCOS (Polycystic Ovary Syndrome)",
          "Endometriosis",
          "Vaginal atrophy and dryness",
          "Premenstrual syndrome (PMS/PMDD)",
          "Pregnancy-related conditions",
        ],
      },
      {
        heading: "Available formulations",
        content: "",
        items: [
          "Bioidentical hormone creams and gels",
          "Vaginal creams and suppositories",
          "Oral capsules and sublingual troches",
          "Progesterone preparations",
          "Combination BHRT formulations",
        ],
      },
    ],
    disclaimer:
      "All compounded women's health medications require a prescription from a qualified healthcare provider. Hormone therapy should be individualised and monitored regularly.",
  },
  "sports-medicine": {
    icon: "🏃",
    title: "Sports Medicine Compounding",
    subtitle: "Performance, recovery, and injury management",
    metaDescription:
      "Compounded sports medicine preparations for injury recovery, pain management, and performance support. Burke Road Compounding Pharmacy, Camberwell.",
    intro:
      "Our sports medicine compounding service provides athletes and active individuals with customised preparations for injury recovery, pain management, and performance support.",
    sections: [
      {
        heading: "What we offer",
        content: "",
        items: [
          "Topical anti-inflammatory preparations",
          "Muscle and joint pain creams",
          "Injury recovery formulations",
          "Customised nutritional supplements",
          "Wound care preparations",
        ],
      },
    ],
    disclaimer:
      "All compounded medications require a valid prescription. Athletes should ensure all preparations comply with ASADA/WADA anti-doping regulations.",
  },
  "dental": {
    icon: "🦷",
    title: "Dental Compounding",
    subtitle: "Specialised oral and dental preparations",
    metaDescription:
      "Compounded dental preparations — topical anaesthetics, antimicrobial rinses, fluoride, and more. Burke Road Compounding Pharmacy, Camberwell.",
    intro:
      "We prepare customised dental formulations for dentists and patients requiring specialised oral preparations not available commercially.",
    sections: [
      {
        heading: "Dental preparations",
        content: "",
        items: [
          "Topical anaesthetic gels and creams",
          "Antimicrobial oral rinses",
          "Fluoride preparations in custom concentrations",
          "Dry socket preparations",
          "Oral ulcer treatments",
          "Temporomandibular joint (TMJ) preparations",
        ],
      },
    ],
    disclaimer:
      "All dental compounded medications require a prescription from a registered dental practitioner.",
  },
  "gastroenterology": {
    icon: "🫁",
    title: "Gastroenterology Compounding",
    subtitle: "Digestive health and gastrointestinal support",
    metaDescription:
      "Compounded preparations for IBS, IBD, Crohn's disease, and other gastrointestinal conditions. Burke Road Compounding Pharmacy, Camberwell.",
    intro:
      "We create customised preparations for gastrointestinal conditions, including formulations that can be tailored for patients with specific dietary requirements or sensitivities.",
    sections: [
      {
        heading: "Conditions we address",
        content: "",
        items: [
          "Irritable Bowel Syndrome (IBS)",
          "Inflammatory Bowel Disease (IBD — Crohn's, Ulcerative Colitis)",
          "Gastro-oesophageal reflux (GORD)",
          "Constipation and motility disorders",
          "Intestinal permeability ('leaky gut')",
        ],
      },
      {
        heading: "Available formulations",
        content: "",
        items: [
          "Budesonide enemas and suppositories",
          "Mesalazine preparations",
          "Sucralfate suspensions",
          "Low FODMAP-compatible preparations",
          "Probiotic capsules in custom strains",
        ],
      },
    ],
  },
  "mental-health": {
    icon: "🧠",
    title: "Mental Health Compounding",
    subtitle: "Personalised support for mental wellbeing",
    metaDescription:
      "Compounded mental health medications — allergen-free, customised doses for anxiety, depression, ADHD, and sleep. Burke Road Compounding Pharmacy.",
    intro:
      "We provide compounding solutions for patients requiring customised mental health medications, including those with sensitivities to commercial formulation excipients.",
    sections: [
      {
        heading: "Conditions we support",
        content: "",
        items: [
          "Anxiety and panic disorders",
          "Depression",
          "ADHD and attention disorders",
          "Bipolar disorder",
          "Sleep disorders",
          "Mood dysregulation",
        ],
      },
      {
        heading: "Compounding advantages",
        content: "",
        items: [
          "Allergen-free formulations",
          "Customised doses for sensitive patients",
          "Combination preparations",
          "Alternative delivery forms (liquids for those who cannot swallow tablets)",
          "Flavoured preparations for children",
        ],
      },
    ],
    disclaimer:
      "All compounded mental health medications require a prescription from a qualified medical practitioner or psychiatrist.",
  },
};

interface Props {
  params: { slug: string };
}

export default function ConditionDetail({ params }: Props) {
  const { slug } = params;
  const data = conditionData[slug];

  if (!data) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4" style={{ color: "var(--brp-text)", fontFamily: "var(--font-display)" }}>
          Condition Not Found
        </h1>
        <p className="mb-8" style={{ color: "var(--brp-muted)" }}>
          We couldn't find information for this condition.
        </p>
        <Link href="/conditions" style={{ color: "var(--brp-green-700)" }} className="underline">
          ← Back to Conditions
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={data.title}
        description={data.metaDescription}
        canonical={`/conditions/${slug}`}
      />

      {/* Hero */}
      <section className="py-16" style={{ backgroundColor: "var(--brp-green-800)" }}>
        <div className="container">
          <Breadcrumb
            items={[
              { label: "Conditions", href: "/conditions" },
              { label: data.title },
            ]}
          />
          <div className="flex items-center gap-5 mt-4">
            <span className="text-5xl">{data.icon}</span>
            <div>
              <h1
                className="text-4xl md:text-5xl font-bold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {data.title}
              </h1>
              <p className="text-white/80 text-lg mt-1">{data.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-12 max-w-4xl">
        {/* Intro */}
        <div className="brp-card p-8 mb-8">
          <p className="leading-relaxed text-lg" style={{ color: "#374151" }}>{data.intro}</p>
        </div>

        {/* Sections */}
        {data.sections.map((section) => (
          <div key={section.heading} className="brp-card p-8 mb-6">
            <h2
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display)", color: "var(--brp-text)" }}
            >
              {section.heading}
            </h2>
            {section.content && (
              <p className="leading-relaxed mb-4" style={{ color: "#374151" }}>{section.content}</p>
            )}
            {section.items && (
              <ul className="space-y-2.5">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-3" style={{ color: "#374151" }}>
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: "var(--brp-green-50)", border: "1px solid var(--brp-green-200)" }}
                    >
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--brp-green-700)" }} />
                    </div>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Disclaimer */}
        {data.disclaimer && (
          <div
            className="rounded-xl p-5 mb-8 flex gap-3"
            style={{ backgroundColor: "#fef9c3", border: "1px solid #fde047" }}
          >
            <AlertTriangle className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
            <p className="text-sm text-yellow-800 leading-relaxed">
              <strong>Important:</strong> {data.disclaimer}
            </p>
          </div>
        )}

        {/* Upload Prescription — embedded iframe */}
        <div className="mt-10">
          <PrescriptionUploadEmbed height="700px" />
        </div>

        {/* Call CTA below embed */}
        <div className="mt-6 text-center">
          <p className="text-sm mb-3" style={{ color: "var(--brp-muted)" }}>
            Prefer to speak with a pharmacist first?
          </p>
          <a
            href={`tel:${BUSINESS.phone.landlineE164}`}
            className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl text-white"
            style={{ backgroundColor: "var(--brp-green-800)" }}
          >
            Call {BUSINESS.phone.landline} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </>
  );
}
