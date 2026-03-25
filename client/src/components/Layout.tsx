/**
 * Layout — Burke Road Compounding Pharmacy
 * 2026 Premium Refactor
 * - All business details imported from config/business.ts
 * - Fraunces display + Plus Jakarta Sans body fonts
 * - Deep forest green (#1a3a2e) brand, brass/gold (#c9a96e) accent
 * - Sticky header with mega-menu dropdowns
 * - Mobile sticky bottom action bar
 * - WhatsApp floating button with pulse animation
 */
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Phone, MapPin, Clock, Mail, Upload } from "lucide-react";
import { BUSINESS, whatsappHref } from "@/config/business";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/93092134/Sz8SP7v55RRQvADhiwfHx5";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services" },
      { label: "PBS Dispensing", href: "/services#pbs" },
      { label: "Vaccinations", href: "/services#vaccinations" },
      { label: "Chemist Care Now", href: "/services/chemist-care-now" },
      { label: "Travel Health", href: "/services/travel-health" },
      { label: "Plant-Based Therapies", href: "/services/plant-based-therapies" },
      { label: "Dose Administration Aids", href: "/services#daa" },
      { label: "Delivery", href: "/services#delivery" },
    ],
  },
  {
    label: "Compounding",
    href: "/compounding",
    children: [
      { label: "About Compounding", href: "/compounding" },
      { label: "Browse by Condition", href: "/conditions" },
      { label: "Hormone Therapy (BHRT)", href: "/conditions/hormone-therapy" },
      { label: "Pain Management", href: "/conditions/pain-management" },
      { label: "Dermatology", href: "/conditions/dermatology" },
      { label: "Women's Health", href: "/conditions/womens-health" },
      { label: "Men's Health", href: "/conditions/mens-health" },
      { label: "Paediatrics", href: "/conditions/paediatrics" },
      { label: "Veterinary", href: "/conditions/veterinary" },
      { label: "Low Dose Naltrexone", href: "/conditions/low-dose-naltrexone" },
    ],
  },
  {
    label: "Knowledge Centre",
    href: "/knowledge-centre",
    children: [
      { label: "All Articles", href: "/knowledge-centre" },
      { label: "Understanding BHRT", href: "/knowledge-centre/understanding-bhrt" },
      { label: "Low Dose Naltrexone", href: "/knowledge-centre/low-dose-naltrexone" },
      { label: "What is Compounding?", href: "/knowledge-centre/what-is-compounding" },
      { label: "PBS Guide", href: "/knowledge-centre/pbs-guide" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

interface DropdownMenuProps {
  item: typeof navItems[0];
  isActive: boolean;
}

function DropdownMenu({ item, isActive }: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
          isActive
            ? "text-white bg-white/20"
            : "text-white/90 hover:text-white hover:bg-white/10"
        }`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md ${
          isActive
            ? "text-white bg-white/20"
            : "text-white/90 hover:text-white hover:bg-white/10"
        }`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div
          onMouseLeave={() => setOpen(false)}
          className="absolute top-full left-0 mt-1 w-60 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
          role="menu"
        >
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#e8f0ec] hover:text-[#1a3a2e] font-medium transition-colors"
              role="menuitem"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/** WhatsApp floating button with pulse animation */
function WhatsAppButton() {
  const [pulsing, setPulsing] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setPulsing(false), 6000);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform
        bottom-24 md:bottom-6
        ${pulsing ? "animate-pulse" : ""}`}
    >
      {/* WhatsApp SVG icon */}
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
}

/** Mobile sticky bottom action bar */
function MobileActionBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-4 h-16">
        <a
          href={`tel:${BUSINESS.phone.landline}`}
          className="flex flex-col items-center justify-center gap-1 text-[#1a3a2e] hover:bg-[#e8f0ec] transition-colors"
          aria-label="Call us"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-medium">Call</span>
        </a>
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-[#25D366] hover:bg-[#e8f0ec] transition-colors"
          aria-label="WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span className="text-[10px] font-medium">WhatsApp</span>
        </a>
        <Link
          href="/upload-prescription"
          className="flex flex-col items-center justify-center gap-1 text-[#1a3a2e] hover:bg-[#e8f0ec] transition-colors"
          aria-label="Upload prescription"
        >
          <Upload className="w-5 h-5" />
          <span className="text-[10px] font-medium">Upload Rx</span>
        </Link>
        <a
          href={BUSINESS.urls.booking}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-[#c9a96e] hover:bg-[#f5edde] transition-colors"
          aria-label="Book appointment"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          <span className="text-[10px] font-medium">Book</span>
        </a>
      </div>
    </div>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Announcement Bar */}
      <a
        href="https://script-share-pro.lovable.app"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-[#1a3a2e] text-white text-center py-2 px-4 text-sm font-medium hover:bg-[#243f33] transition-colors"
        aria-label="Upload your prescription online"
      >
        Upload your prescription now or text us on:{" "}
        <span className="underline font-bold">{BUSINESS.phone.mobile}</span>
      </a>

      {/* Main Navigation */}
      <header className="sticky top-0 z-40 bg-[#1a3a2e] shadow-lg">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <img
                src={`${CDN}/logo-final-square_18df8581.png`}
                alt={`${BUSINESS.displayName} logo`}
                className="h-10 w-10 rounded-lg object-cover"
                width={40}
                height={40}
              />
              <div className="hidden sm:block">
                <div
                  className="text-white font-bold text-base leading-tight"
                  style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                >
                  Burke Road
                </div>
                <div className="text-white/80 text-xs leading-tight">
                  Compounding Pharmacy
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navItems.map((item) => (
                <DropdownMenu
                  key={item.href}
                  item={item}
                  isActive={
                    item.href === "/"
                      ? location === "/"
                      : location.startsWith(item.href)
                  }
                />
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-2">
              <Link
                href="/prescribers"
                className="flex items-center gap-1.5 px-4 py-2 bg-white/15 hover:bg-white/25 text-white text-sm font-semibold rounded-lg border border-white/30 transition-all"
              >
                Prescribers
              </Link>
              <Link
                href="/upload-prescription"
                className="flex items-center gap-1.5 px-4 py-2 bg-[#c9a96e] hover:bg-[#b8955a] text-[#1a3a2e] text-sm font-bold rounded-lg transition-all"
              >
                <Upload className="w-4 h-4" />
                Upload Prescription
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white rounded-md hover:bg-white/10"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#1a3a2e] border-t border-white/10 pb-4">
            <div className="container space-y-1 pt-2">
              {navItems.map((item) => (
                <div key={item.href}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileExpanded(
                            mobileExpanded === item.label ? null : item.label
                          )
                        }
                        className="flex items-center justify-between w-full px-3 py-2.5 text-white/90 text-sm font-medium rounded-lg hover:bg-white/10"
                        aria-expanded={mobileExpanded === item.label}
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            mobileExpanded === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {mobileExpanded === item.label && (
                        <div className="pl-4 space-y-1 mt-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-3 py-2 text-white/80 text-sm hover:text-white hover:bg-white/10 rounded-lg"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2.5 text-white/90 text-sm font-medium rounded-lg hover:bg-white/10"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-3 space-y-2">
                <Link
                  href="/prescribers"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-4 py-2.5 bg-white/15 text-white text-sm font-semibold rounded-lg border border-white/30"
                >
                  Prescribers Portal
                </Link>
                <Link
                  href="/upload-prescription"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-4 py-2.5 bg-[#c9a96e] text-[#1a3a2e] text-sm font-bold rounded-lg"
                >
                  Upload Prescription
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Page Content */}
      <main className="flex-1" id="main-content">{children}</main>

      {/* Footer */}
      <footer className="bg-[#1a3a2e] text-white pb-20 md:pb-0">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={`${CDN}/logo-final-square_18df8581.png`}
                  alt={BUSINESS.displayName}
                  className="h-12 w-12 rounded-lg object-cover"
                  width={48}
                  height={48}
                />
                <div>
                  <div
                    className="font-bold text-lg leading-tight"
                    style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                  >
                    Burke Road
                  </div>
                  <div className="text-white/70 text-xs">Compounding Pharmacy</div>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Serving the Camberwell community with personalised healthcare since {BUSINESS.established}.
              </p>
              {/* Accreditation logos — monochrome */}
              <div className="flex gap-3 mt-4">
                <img src={`${CDN}/logo-pga_7c5cced5.png`} alt="Pharmacy Guild of Australia" className="h-8 opacity-60 object-contain grayscale" width={40} height={32} />
                <img src={`${CDN}/logo-ipa_72a08de3.png`} alt="Independent Pharmacies of Australia" className="h-8 opacity-60 object-contain grayscale" width={40} height={32} />
                <img src={`${CDN}/logo-qcpp_92a72def.png`} alt="QCPP Accredited" className="h-8 opacity-60 object-contain grayscale" width={40} height={32} />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {[
                  { label: "Home", href: "/" },
                  { label: "Services", href: "/services" },
                  { label: "Compounding", href: "/compounding" },
                  { label: "Browse by Condition", href: "/conditions" },
                  { label: "Knowledge Centre", href: "/knowledge-centre" },
                  { label: "About Us", href: "/about" },
                  { label: "Prescribers Portal", href: "/prescribers" },
                  { label: "Upload Prescription", href: "/upload-prescription" },
                  { label: "Contact Us", href: "/contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                Our Services
              </h3>
              <ul className="space-y-2 text-sm text-white/70">
                {[
                  { label: "PBS Dispensing", href: "/services#pbs" },
                  { label: "Compounding", href: "/compounding" },
                  { label: "Vaccinations", href: "/services#vaccinations" },
                  { label: "Chemist Care Now", href: "/services/chemist-care-now" },
                  { label: "Travel Health", href: "/services/travel-health" },
                  { label: "Dose Administration Aids", href: "/services#daa" },
                  { label: "DVA & Veteran Cards", href: "/services#dva" },
                  { label: "Australia-wide Delivery", href: "/services#delivery" },
                ].map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="hover:text-white transition-colors">
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact — NAP as crawlable HTML text */}
            <div>
              <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                Contact Us
              </h3>
              <address className="not-italic">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-white/80">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#c9a96e]" aria-hidden="true" />
                    <span>
                      {BUSINESS.address.full}
                    </span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-white/80">
                    <Phone className="w-4 h-4 shrink-0 text-[#c9a96e]" aria-hidden="true" />
                    <a href={`tel:${BUSINESS.phone.landline}`} className="hover:text-white">
                      {BUSINESS.phone.landline}
                    </a>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-white/80">
                      <Mail className="w-4 h-4 shrink-0 text-[#c9a96e]" aria-hidden="true" />
                      <a href={`mailto:${BUSINESS.email}`} className="hover:text-white">
                        {BUSINESS.email}
                      </a>
                    </li>
                  <li className="flex items-start gap-2 text-sm text-white/80">
                    <Clock className="w-4 h-4 mt-0.5 shrink-0 text-[#c9a96e]" aria-hidden="true" />
                    <div>
                      <div>Mon–Fri: {BUSINESS.hours.monFri}</div>
                      <div>Saturday: {BUSINESS.hours.saturday}</div>
                      <div>Sunday: {BUSINESS.hours.sunday}</div>
                    </div>
                  </li>
                </ul>
              </address>
            </div>
          </div>

          <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">
            <p>
              © {new Date().getFullYear()} {BUSINESS.legalName}. All rights reserved.
            </p>
            <p>ABN: {BUSINESS.abn} | AHPRA Registered Pharmacists</p>
          </div>
        </div>
      </footer>

      {/* Global floating elements */}
      <WhatsAppButton />
      <MobileActionBar />
    </div>
  );
}
