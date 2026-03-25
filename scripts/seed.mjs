import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as dotenv from "dotenv";
dotenv.config();

const connection = await mysql.createConnection(process.env.DATABASE_URL);
const db = drizzle(connection);

// ─── Conditions ──────────────────────────────────────────────────────────────
const conditionsData = [
  { slug: "hormone-therapy", title: "Hormone Therapy", icon: "⚖️", category: "Endocrinology", sortOrder: 1, isActive: true,
    summary: "Bioidentical hormone replacement therapy (BHRT) tailored to your individual hormonal profile.",
    content: "Hormone imbalances can affect energy, mood, sleep, and overall wellbeing. Our compounding pharmacists work with your prescriber to create personalised BHRT formulations — including oestrogen, progesterone, testosterone, and DHEA — in the dose and delivery form that suits you best." },
  { slug: "pain-management", title: "Pain Management", icon: "💊", category: "Pain", sortOrder: 2, isActive: true,
    summary: "Targeted topical and oral compounded preparations for acute and chronic pain.",
    content: "Compounded topical analgesics can deliver active ingredients directly to the site of pain, minimising systemic side effects. We formulate preparations containing ketamine, ketoprofen, lidocaine, gabapentin, and other agents in appropriate bases for your condition." },
  { slug: "dermatology", title: "Dermatology", icon: "🌿", category: "Dermatology", sortOrder: 3, isActive: true,
    summary: "Custom skincare and dermatological preparations for conditions not adequately managed by commercial products.",
    content: "From acne and rosacea to eczema and psoriasis, our dermatology compounding service creates formulations tailored to your skin type and condition." },
  { slug: "paediatrics", title: "Paediatrics", icon: "👶", category: "Paediatrics", sortOrder: 4, isActive: true,
    summary: "Child-friendly formulations in flavours and forms that make medication easier for children.",
    content: "Many commercially available medications are not available in suitable doses or forms for children. We compound paediatric medications in suspensions, gummies, and flavoured preparations to make administration easier and improve compliance." },
  { slug: "veterinary", title: "Veterinary", icon: "🐾", category: "Veterinary", sortOrder: 5, isActive: true,
    summary: "Compounded medications for pets and animals when commercial products are unavailable or unsuitable.",
    content: "We compound medications for cats, dogs, horses, birds, and exotic animals. Flavoured oral preparations, transdermal gels, and custom-dosed formulations help ensure your pet receives the right medication in the right form." },
  { slug: "low-dose-naltrexone", title: "Low Dose Naltrexone", icon: "🧬", category: "Immunology", sortOrder: 6, isActive: true,
    summary: "LDN capsules compounded to precise doses for autoimmune and inflammatory conditions.",
    content: "Low Dose Naltrexone (LDN) is used off-label for a range of autoimmune, inflammatory, and chronic pain conditions. We compound LDN capsules in doses from 0.5mg to 4.5mg, using fillers appropriate for sensitive patients." },
  { slug: "mens-health", title: "Men's Health", icon: "♂️", category: "Men's Health", sortOrder: 7, isActive: true,
    summary: "Testosterone replacement and other compounded formulations for men's hormonal health.",
    content: "Testosterone deficiency affects energy, libido, muscle mass, and mood. We compound testosterone in creams, gels, troches, and capsules at doses tailored to your blood levels and symptoms." },
  { slug: "womens-health", title: "Women's Health", icon: "♀️", category: "Women's Health", sortOrder: 8, isActive: true,
    summary: "Personalised hormone and non-hormone formulations for women at all life stages.",
    content: "From perimenopause to menopause and beyond, we support women's health with personalised compounded preparations including oestrogen, progesterone, testosterone, and estriol." },
  { slug: "sports-medicine", title: "Sports Medicine", icon: "🏃", category: "Sports Medicine", sortOrder: 9, isActive: true,
    summary: "Compounded preparations for injury recovery, performance support, and pain management in athletes.",
    content: "We work with sports medicine practitioners to compound topical and oral preparations for injury management, inflammation, and recovery. All formulations comply with WADA and ASADA guidelines." },
  { slug: "dental", title: "Dental", icon: "🦷", category: "Dental", sortOrder: 10, isActive: true,
    summary: "Custom dental preparations including anaesthetics, antimicrobials, and dry socket treatments.",
    content: "We compound a range of dental preparations including topical anaesthetics, antimicrobial rinses, dry socket pastes, and fluoride preparations at custom concentrations for your dental practice." },
  { slug: "gastroenterology", title: "Gastroenterology", icon: "🫁", category: "Gastroenterology", sortOrder: 11, isActive: true,
    summary: "Compounded preparations for gastrointestinal conditions including IBD, IBS, and motility disorders.",
    content: "We compound rectal preparations, oral suspensions, and specialised formulations for conditions including inflammatory bowel disease, irritable bowel syndrome, and gastroparesis." },
  { slug: "mental-health", title: "Mental Health", icon: "🧠", category: "Mental Health", sortOrder: 12, isActive: true,
    summary: "Compounded psychiatric medications in alternative forms and doses for patients with specific needs.",
    content: "We compound psychiatric medications for patients who require specific doses, allergen-free formulations, or alternative delivery forms. This includes antidepressants, anxiolytics, and mood stabilisers." },
];

// ─── Services ────────────────────────────────────────────────────────────────
const servicesData = [
  { slug: "pbs", title: "PBS Dispensing", icon: "💊", sortOrder: 1, isActive: true,
    description: "We dispense all Pharmaceutical Benefits Scheme (PBS) medications at government-regulated co-payment rates. We accept Medicare, DVA, and all concession cards.",
    details: JSON.stringify(["General patient co-payment: $31.60 per PBS item","Concession card holders: $7.70 per PBS item","DVA White Card holders: Most items free","Safety Net automatically tracked and recorded","Electronic prescriptions (eRx) accepted","Repeat dispensing available"]) },
  { slug: "vaccinations", title: "Vaccinations", icon: "💉", sortOrder: 2, isActive: true,
    description: "Our trained pharmacists administer a range of vaccines. No appointment needed for most vaccines — walk in during trading hours.",
    details: JSON.stringify(["Influenza (flu) vaccine — seasonal","COVID-19 vaccines","Shingles (Zostavax / Shingrix)","Pneumococcal vaccine","Travel vaccines (hepatitis A, typhoid, and more)","Whooping cough (pertussis) booster"]) },
  { slug: "compounding", title: "Compounding", icon: "🔬", sortOrder: 3, isActive: true,
    description: "Our QCPP-accredited compounding laboratory creates personalised medications tailored to your exact needs.",
    details: JSON.stringify(["Bioidentical hormone therapy (BHRT)","Topical pain and anti-inflammatory preparations","Paediatric formulations in child-friendly flavours","Veterinary medications","Low Dose Naltrexone (LDN)","Dermatology and skincare preparations"]) },
  { slug: "chemist-care-now", title: "Chemist Care Now", icon: "🩺", sortOrder: 4, isActive: true,
    description: "Minor ailment consultations without a GP appointment. Our pharmacists can assess and treat a range of common conditions on the spot.",
    details: JSON.stringify(["Urinary tract infections (UTI)","Skin conditions (rashes, eczema, tinea)","Ear conditions","Oral thrush","Contraception advice","Cold sores and minor infections"]) },
  { slug: "daa", title: "Dose Administration Aids", icon: "📦", sortOrder: 5, isActive: true,
    description: "We pack your medications into SureMed blister packs or Webster-paks to help you manage complex medication regimens safely and accurately.",
    details: JSON.stringify(["Weekly blister pack preparation","SureMed and Webster-pak formats","Suitable for patients on multiple medications","Helps prevent missed or double doses","Available for residential care facilities","Home delivery available"]) },
  { slug: "medadvisor", title: "MedAdvisor App", icon: "📱", sortOrder: 6, isActive: true,
    description: "Manage your prescriptions and medication reminders with the free MedAdvisor app, linked directly to our dispensing system.",
    details: JSON.stringify(["View your prescription history","Set medication reminders","Request repeats online","Track your Safety Net threshold","Share medication list with carers","Available on iOS and Android"]) },
  { slug: "dva", title: "DVA & Veteran Cards", icon: "🎖️", sortOrder: 7, isActive: true,
    description: "We are a DVA-approved pharmacy and accept all veteran cards. Most PBS medications are free for eligible DVA card holders.",
    details: JSON.stringify(["DVA White Card: Most PBS items free","DVA Gold Card: Comprehensive coverage","DVA Orange Card: Specific conditions covered","Veteran-specific compounding services","Priority dispensing for veterans"]) },
  { slug: "delivery", title: "Australia-wide Delivery", icon: "🚚", sortOrder: 8, isActive: true,
    description: "We deliver compounded medications and retail products Australia-wide, including to remote and rural areas.",
    details: JSON.stringify(["Express and standard delivery options","Temperature-controlled packaging for sensitive preparations","Tracked shipping with notifications","Delivery to all Australian states and territories","Regular delivery schedules for ongoing prescriptions"]) },
];

// ─── Articles ────────────────────────────────────────────────────────────────
const articlesData = [
  { slug: "bhrt-overview", title: "Understanding Bioidentical Hormone Replacement Therapy (BHRT)", category: "Hormone Therapy", readTimeMinutes: 5, isPublished: true,
    excerpt: "An overview of BHRT, how it differs from conventional HRT, and what patients should know before starting treatment.",
    content: "Bioidentical hormone replacement therapy (BHRT) uses hormones that are chemically identical to those produced by the human body. Unlike conventional HRT, BHRT preparations are compounded to match your individual hormonal profile based on testing.\n\nCommon BHRT hormones include oestradiol, oestriol, progesterone, testosterone, and DHEA. These can be delivered via creams, troches, capsules, or pessaries depending on your needs and your prescriber's recommendation." },
  { slug: "topical-pain-relief", title: "Topical Pain Relief: How Compounded Creams Work", category: "Pain Management", readTimeMinutes: 4, isPublished: true,
    excerpt: "Topical analgesics can provide targeted pain relief with fewer systemic side effects. Learn how they work and when they're appropriate.",
    content: "Topical compounded analgesics deliver active ingredients directly through the skin to the underlying tissues. This localised delivery means higher concentrations can be achieved at the target site with lower systemic absorption compared to oral medications.\n\nCommon active ingredients include ketamine, ketoprofen, lidocaine, gabapentin, amitriptyline, and cyclobenzaprine." },
  { slug: "ldn-evidence", title: "Low Dose Naltrexone: What the Evidence Says", category: "LDN", readTimeMinutes: 6, isPublished: true,
    excerpt: "A balanced review of the current clinical evidence for LDN in autoimmune conditions, chronic pain, and inflammatory disorders.",
    content: "Low Dose Naltrexone (LDN) refers to naltrexone taken at doses between 0.5mg and 4.5mg. At these low doses, naltrexone appears to modulate the immune system and reduce neuroinflammation.\n\nClinical evidence supports its use in conditions including fibromyalgia, Crohn's disease, multiple sclerosis, and chronic pain." },
  { slug: "pbs-guide", title: "Understanding Your PBS Co-payment and Safety Net", category: "PBS", readTimeMinutes: 3, isPublished: true,
    excerpt: "A plain-English guide to how the Pharmaceutical Benefits Scheme works, including co-payments, concession rates, and the Safety Net.",
    content: "The Pharmaceutical Benefits Scheme (PBS) subsidises the cost of many prescription medications in Australia. For 2026, the general patient co-payment is $31.60 per PBS item. Concession card holders pay $7.70 per item. DVA White Card holders receive most PBS items free." },
  { slug: "what-is-compounding", title: "What is Pharmaceutical Compounding?", category: "Compounding", readTimeMinutes: 4, isPublished: true,
    excerpt: "Compounding allows pharmacists to create personalised medications. Learn about the process, quality standards, and when it's appropriate.",
    content: "Pharmaceutical compounding is the preparation of a customised medication for an individual patient. Compounding is appropriate when a commercial product is unavailable, when a patient requires a different dose or delivery form, or when a patient has allergies to commercial product ingredients." },
  { slug: "paediatric-medications", title: "Giving Medications to Children: Tips for Parents", category: "Paediatrics", readTimeMinutes: 3, isPublished: true,
    excerpt: "Practical advice for parents on administering medications to children, including flavoured compounded preparations.",
    content: "Getting children to take medications can be challenging. Compounded preparations can help by providing medications in child-friendly forms and flavours. We can compound medications as flavoured suspensions, gummies, or lollipops." },
  { slug: "adult-vaccines", title: "Which Vaccines Do I Need? A Guide for Adults", category: "Vaccinations", readTimeMinutes: 5, isPublished: true,
    excerpt: "Many adults are not up to date with their vaccinations. This guide covers the key vaccines recommended for Australian adults.",
    content: "Vaccination is not just for children. Key vaccines for Australian adults include the annual influenza vaccine, COVID-19 boosters, shingles vaccine (recommended from age 50), pneumococcal vaccine (recommended from age 65), and whooping cough booster." },
  { slug: "custom-skincare", title: "Custom Skincare: When Off-the-Shelf Products Aren't Enough", category: "Dermatology", readTimeMinutes: 4, isPublished: true,
    excerpt: "For some skin conditions, commercially available products may not provide adequate treatment. Compounded skincare can help.",
    content: "Commercial skincare products are formulated for the average consumer. For patients with specific skin conditions or sensitivities, a personalised compounded preparation may be more effective. We can compound skincare preparations containing active ingredients at concentrations appropriate for your condition." },
];

// ─── Testimonials ────────────────────────────────────────────────────────────
const testimonialsData = [
  { name: "Sarah M.", rating: 5, sortOrder: 1, source: "Google", isActive: true,
    text: "The compounding team at Burke Road has been incredible. My BHRT formulation is perfectly tailored and the pharmacists always take time to explain everything." },
  { name: "James T.", rating: 5, sortOrder: 2, source: "Google", isActive: true,
    text: "Been coming here for years. The staff are knowledgeable, friendly, and the service is always prompt. Best pharmacy in Camberwell by far." },
  { name: "Dr. Rebecca L.", rating: 5, sortOrder: 3, source: "Google", isActive: true,
    text: "As a GP, I regularly refer patients to Burke Road for compounding. Their attention to detail and communication with prescribers is excellent." },
  { name: "Michael P.", rating: 5, sortOrder: 4, source: "Google", isActive: true,
    text: "The LDN capsules I get compounded here have made a real difference to my quality of life. Always consistent quality and fast turnaround." },
  { name: "Anna W.", rating: 5, sortOrder: 5, source: "Google", isActive: true,
    text: "Fantastic pharmacy. They delivered my compounded medication to regional Victoria with no issues. Highly recommend for anyone needing specialised preparations." },
];

// ─── Insert using webdev_execute_sql approach via direct connection ────────────
console.log("Seeding conditions...");
for (const row of conditionsData) {
  await connection.execute(
    `INSERT INTO conditions (slug, title, icon, category, summary, content, sortOrder, isActive)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)
     ON DUPLICATE KEY UPDATE title=VALUES(title), summary=VALUES(summary), content=VALUES(content), sortOrder=VALUES(sortOrder)`,
    [row.slug, row.title, row.icon, row.category, row.summary, row.content, row.sortOrder, row.isActive ? 1 : 0]
  );
}

console.log("Seeding services...");
for (const row of servicesData) {
  await connection.execute(
    `INSERT INTO services (slug, title, icon, description, details, sortOrder, isActive)
     VALUES (?, ?, ?, ?, ?, ?, ?)
     ON DUPLICATE KEY UPDATE title=VALUES(title), description=VALUES(description), details=VALUES(details), sortOrder=VALUES(sortOrder)`,
    [row.slug, row.title, row.icon, row.description, row.details, row.sortOrder, row.isActive ? 1 : 0]
  );
}

console.log("Seeding articles...");
for (const row of articlesData) {
  await connection.execute(
    `INSERT INTO articles (slug, title, category, readTimeMinutes, excerpt, content, isPublished)
     VALUES (?, ?, ?, ?, ?, ?, ?)
     ON DUPLICATE KEY UPDATE title=VALUES(title), excerpt=VALUES(excerpt), content=VALUES(content)`,
    [row.slug, row.title, row.category, row.readTimeMinutes, row.excerpt, row.content, row.isPublished ? 1 : 0]
  );
}

console.log("Seeding testimonials...");
for (const row of testimonialsData) {
  await connection.execute(
    `INSERT INTO testimonials (name, rating, text, source, sortOrder, isActive)
     VALUES (?, ?, ?, ?, ?, ?)
     ON DUPLICATE KEY UPDATE text=VALUES(text), rating=VALUES(rating)`,
    [row.name, row.rating, row.text, row.source, row.sortOrder, row.isActive ? 1 : 0]
  );
}

console.log("✅ Seed complete!");
await connection.end();
