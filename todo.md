# Burke Road Compounding Pharmacy — TODO

## Phase 1: React/TypeScript Refactor
- [x] Extract and analyse original static HTML site
- [x] Upload all images to CDN
- [x] Scaffold React/TypeScript/Vite/TailwindCSS project
- [x] Global CSS design tokens (dark green palette, Playfair Display + Inter fonts)
- [x] Shared Layout component (sticky nav with dropdowns, announcement bar, footer)
- [x] Home page (hero, services grid, compounding highlight, PBS pricing, testimonials, location)
- [x] Compounding page (overview, dosage forms, why compound)
- [x] Conditions index page (searchable grid)
- [x] Condition detail dynamic page
- [x] Services page (PBS, vaccinations, DAA, Chemist Care Now, MedAdvisor, DVA, delivery)
- [x] Practitioners hub page
- [x] Prescribers portal page (prescription generator form)
- [x] Knowledge Centre page (article cards with category filter)
- [x] Contact page (form, trading hours, embedded map)
- [x] Push to GitHub

## Phase 2: Database Integration
- [x] Upgrade project to full-stack (Express + tRPC + PostgreSQL)
- [x] Design and migrate database schema (7 tables: conditions, services, articles, testimonials, contactSubmissions, prescriptionSubmissions, users)
- [x] Seed database with all existing site content (12 conditions, 8 services, 8 articles, 5 testimonials)
- [x] Build tRPC API routes (conditions, services, articles, testimonials, contact, prescriptions)
- [x] Update Home page to fetch live conditions and testimonials from DB
- [x] Update Conditions page to fetch live conditions from DB
- [x] Update Knowledge Centre to fetch live articles from DB with working category filter
- [x] Update Contact form to submit enquiries to DB via tRPC mutation
- [x] Update Prescribers form to submit prescriptions to DB via tRPC mutation
- [x] Wire all form inputs as controlled components
- [x] Write vitest tests for all new tRPC routers (8 tests passing)

## Pending / Future
- [ ] Admin dashboard to view contact submissions and prescription submissions
- [ ] Prescription file/image upload via S3
- [ ] Condition detail pages with full clinical content
- [ ] Knowledge Centre article detail pages
- [ ] Google Reviews API integration for live testimonials
- [ ] Email notification on new contact/prescription submissions

## Phase 3: Static Refactor for VentraIP Deployment
- [x] Remove server/ folder (Express, tRPC, Drizzle, JWT, OAuth, db helpers)
- [x] Remove drizzle/ schema and migrations folder
- [x] Remove backend-only npm packages (drizzle-orm, mysql2, @trpc/server, jose, cookie, express, etc.)
- [x] Create src/data/conditions.ts with all 12 conditions
- [x] Create src/data/services.ts with all 8 services
- [x] Create src/data/articles.ts with all 8 knowledge centre articles
- [x] Create src/data/testimonials.ts with all 5 testimonials
- [x] Create src/data/faqs.ts with pharmacy FAQs
- [x] Refactor Home.tsx to import from static data modules
- [x] Refactor Conditions.tsx to import from static data modules
- [x] Refactor KnowledgeCentre.tsx to import from static data modules
- [x] Refactor Contact.tsx to submit via Web3Forms
- [x] Refactor Prescribers.tsx to submit via Web3Forms with file upload
- [x] Simplify vite.config.ts to pure static Vite (remove server proxy)
- [x] Update package.json scripts (remove db:push, server build)
- [x] Generate .htaccess for React SPA routing on VentraIP
- [x] Generate deployment README for VentraIP cPanel
- [x] Verify pnpm build produces clean static dist/
- [x] Confirm no env vars required for core functionality (only VITE_WEB3FORMS_KEY for forms)

## Phase 4: Fix Manus Deployment
- [x] Add minimal Express static server (server/index.ts) to satisfy platform container requirement
- [x] Restore esbuild server bundling in build script (outputs dist/index.js)
- [x] Restore Vite build output to dist/public/ (server serves from there)
- [x] Verify pnpm build produces both dist/index.js and dist/public/index.html
- [x] Checkpoint and push to GitHub

## Phase 5: 2026 Master Refactor

### Phase 0 — Business Identity
- [ ] Create /src/config/business.ts single source of truth
- [ ] Replace all hardcoded business details with BUSINESS.* imports
- [ ] Remove fake ABN (12 345 678 901), replace with real ABN 14 189 083 426
- [ ] Remove placeholder email addresses
- [ ] Fix Book Vaccination button (tel: → real booking URL)

### Phase 1 — Technical SEO
- [ ] Install react-helmet-async for head management
- [ ] Add unique title + meta description to every page
- [ ] Add canonical tags pointing to production domain
- [ ] Add noindex on staging, index on production
- [ ] Add JSON-LD LocalBusiness + Pharmacy schema on homepage
- [ ] Add BreadcrumbList schema on all inner pages
- [ ] Add FAQPage schema on FAQ sections
- [ ] Add Article schema on Knowledge Centre articles
- [ ] Add Open Graph + Twitter card meta tags to every page
- [ ] Generate /sitemap.xml at build time
- [ ] Add /robots.txt
- [ ] Add preconnect/dns-prefetch for Google Fonts and CDN

### Phase 2 — Design System
- [ ] Update CSS custom properties with new colour palette (deep green, brass/gold accent)
- [ ] Replace Playfair Display with Fraunces (display) + Plus Jakarta Sans (body)
- [ ] Add fluid type scale using clamp()
- [ ] Add spacing, radius, shadow tokens
- [ ] Implement dark mode with Tailwind dark: variants + localStorage persistence
- [ ] Update button system (primary brass, secondary outline, ghost)

### Phase 3 — Homepage Redesign
- [ ] Announcement bar with scrolling offer
- [ ] Sticky nav with mega-menu dropdowns
- [ ] Hero section (full-bleed, asymmetric layout)
- [ ] Services overview grid (6 cards)
- [ ] Compounding highlight section (2-col)
- [ ] Browse by condition grid (12 conditions)
- [ ] PBS pricing section
- [ ] Testimonials/reviews section
- [ ] Location & hours section with map
- [ ] Accreditations bar (monochrome logos)
- [ ] FAQ section with FAQPage schema
- [ ] For GPs & Specialists teaser section
- [ ] Mobile sticky bottom action bar
- [ ] WhatsApp floating button

### Phase 4 — Global UI Components
- [ ] MobileActionBar component (phone, WhatsApp, upload script, book)
- [ ] WhatsAppFloatingButton component with pulse animation
- [ ] Breadcrumbs component with JSON-LD
- [ ] PageEnquiryForm component (4-field inline form)
- [ ] PharmacistCTA callout block component

### Phase 5 — New Pages
- [ ] /about — pharmacy story, team profiles, accreditations
- [ ] /upload-prescription — full guided form with drag-and-drop
- [ ] /compounding-pharmacy-camberwell — local SEO landing page
- [ ] /services/travel-health — travel vaccines + consultation
- [ ] /services/chemist-care-now — pharmacist prescribing page
- [ ] /vaccinations — all vaccines, pricing, booking
- [ ] /services/plant-based-therapies — herbal compounding
- [ ] /delivery — shipping info, turnaround, cold-chain
- [ ] /prescribers — rebuilt professional resource hub
- [ ] /order-repeat-script — dedicated conversion page
- [ ] /ask-a-pharmacist — dedicated conversion page

### Phase 6 & 7 — Content
- [ ] Knowledge Centre article template with author byline, references, FAQ
- [ ] Full content for 5 priority condition pages (BHRT, LDN, Pain, Paediatrics, Vet)
- [ ] 7 priority Knowledge Centre articles (full 600+ word content)
- [ ] Internal linking clusters between conditions and articles

### Phase 8 — Visual Polish
- [ ] Section transitions (SVG wave/diagonal clip-path)
- [ ] Accreditation logos in monochrome
- [ ] Dark mode testing across all components
- [ ] WebP/AVIF images with explicit width/height
- [ ] fetchpriority="high" on hero image

## Phase 9: Contact Details Update (User-Verified)
- [ ] Update business.ts with verified: phone 03 9882 5386, mobile 0450 352 483, fax 03 9882 8214, email info@burkeroadpharmacy.com.au, ABN 70764240081
- [ ] Update SEO.tsx localBusinessSchema with correct phone/email/ABN
- [ ] Update Layout.tsx footer with correct contact details
- [ ] Update Contact.tsx with correct contact details
- [ ] Update Home.tsx with correct contact details
- [ ] Update MobileActionBar.tsx with correct phone number
- [ ] Update WhatsAppButton.tsx with correct WhatsApp number
- [ ] Update all other pages referencing old placeholder contact details

## Phase 9: Contact Details Update (User-Verified)
- [x] Update business.ts with verified phone/mobile/fax/email/ABN
- [x] Update SEO.tsx localBusinessSchema with correct details
- [x] Update all pages referencing old placeholder contact details

## Phase 10: Booking Link Update
- [x] Update business.ts booking URL to MedAdvisor
- [ ] Update all vaccination booking CTAs site-wide
- [ ] Update all Chemist Care Now booking CTAs site-wide

## Phase 10b: Prescription Upload iframe Replacement
- [x] Create PrescriptionUploadEmbed component (iframe to burkerx.lovable.app)
- [x] Replace UploadPrescription page with iframe embed
- [x] Replace ConditionDetail prescription upload CTA with iframe embed
- [x] Replace ArticleDetail prescription upload CTA with iframe embed
- [x] Update Home.tsx prescription upload CTAs to point to /upload-prescription
- [x] Update business.ts booking URL to MedAdvisor
- [x] Update Services.tsx vaccination section to add Book button
- [x] Update ChemistCareNow.tsx to add Book button
