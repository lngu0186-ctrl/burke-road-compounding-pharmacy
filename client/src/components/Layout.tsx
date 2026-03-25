/**
 * Layout — Burke Road Compounding Pharmacy
 * Design: Refined Apothecary / Modern Medical
 * - Deep forest green nav (#1a4d2e) with white text
 * - Playfair Display logo text, Inter nav links
 * - Sticky header with dropdown menus
 * - Comprehensive footer with contact info
 */
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Phone, MapPin, Clock, Mail } from "lucide-react";

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
      { label: "Chemist Care Now", href: "/services#chemist-care-now" },
      { label: "Dose Administration Aids", href: "/services#daa" },
      { label: "MedAdvisor", href: "/services#medadvisor" },
      { label: "DVA & Veteran Cards", href: "/services#dva" },
    ],
  },
  {
    label: "Compounding",
    href: "/compounding",
    children: [
      { label: "About Compounding", href: "/compounding" },
      { label: "Browse by Condition", href: "/conditions" },
      { label: "Hormone Therapy", href: "/conditions/hormone-therapy" },
      { label: "Pain Management", href: "/conditions/pain-management" },
      { label: "Dermatology", href: "/conditions/dermatology" },
      { label: "Women's Health", href: "/conditions/womens-health" },
      { label: "Men's Health", href: "/conditions/mens-health" },
      { label: "Paediatrics", href: "/conditions/paediatrics" },
      { label: "Veterinary", href: "/conditions/veterinary" },
    ],
  },
  { label: "Knowledge Centre", href: "/knowledge-centre" },
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
      >
        {item.label}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div
          onMouseLeave={() => setOpen(false)}
          className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
        >
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#f0f7f4] hover:text-[#1a4d2e] font-medium transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
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
      <div className="bg-[#1a4d2e] text-white text-center py-2 px-4 text-sm font-medium">
        📋 Send us your prescription via photo — call{" "}
        <a href="tel:0398898622" className="underline hover:no-underline">
          (03) 9889 8622
        </a>{" "}
        or{" "}
        <a
          href="https://wa.me/61398898622"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline"
        >
          WhatsApp
        </a>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-40 bg-[#1a4d2e] shadow-lg">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <img
                src={`${CDN}/logo-final-square_18df8581.png`}
                alt="Burke Road Pharmacy Logo"
                className="h-10 w-10 rounded-lg object-cover"
              />
              <div className="hidden sm:block">
                <div
                  className="text-white font-bold text-base leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Burke Road
                </div>
                <div className="text-white/80 text-xs leading-tight">
                  Compounding Pharmacy
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
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
                📋 Prescribers Only
              </Link>
              <a
                href="tel:0398898622"
                className="flex items-center gap-1.5 px-4 py-2 bg-[#84cc16] hover:bg-[#65a30d] text-gray-900 text-sm font-bold rounded-lg transition-all"
              >
                <Phone className="w-4 h-4" />
                Book Vaccination
              </a>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white rounded-md hover:bg-white/10"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#1a4d2e] border-t border-white/10 pb-4">
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
                  📋 Prescribers Only
                </Link>
                <a
                  href="tel:0398898622"
                  className="block w-full text-center px-4 py-2.5 bg-[#84cc16] text-gray-900 text-sm font-bold rounded-lg"
                >
                  📞 Book Vaccination
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Page Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-[#1a4d2e] text-white">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={`${CDN}/logo-final-square_18df8581.png`}
                  alt="Burke Road Pharmacy"
                  className="h-12 w-12 rounded-lg object-cover"
                />
                <div>
                  <div
                    className="font-bold text-lg leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Burke Road
                  </div>
                  <div className="text-white/70 text-xs">Compounding Pharmacy</div>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Serving the Camberwell community with personalised healthcare since 1963.
              </p>
              <div className="flex gap-3 mt-4">
                <img src={`${CDN}/logo-pga_7c5cced5.png`} alt="PGA" className="h-8 opacity-80 object-contain" />
                <img src={`${CDN}/logo-ipa_72a08de3.png`} alt="IPA" className="h-8 opacity-80 object-contain" />
                <img src={`${CDN}/logo-qcpp_92a72def.png`} alt="QCPP" className="h-8 opacity-80 object-contain" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3
                className="font-semibold text-white mb-4 text-sm uppercase tracking-wider"
              >
                Quick Links
              </h3>
              <ul className="space-y-2">
                {[
                  { label: "Home", href: "/" },
                  { label: "Services", href: "/services" },
                  { label: "Compounding", href: "/compounding" },
                  { label: "Browse by Condition", href: "/conditions" },
                  { label: "Knowledge Centre", href: "/knowledge-centre" },
                  { label: "Practitioners Hub", href: "/practitioners" },
                  { label: "Prescribers Portal", href: "/prescribers" },
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
                <li>PBS Dispensing</li>
                <li>Compounding</li>
                <li>Vaccinations</li>
                <li>Chemist Care Now</li>
                <li>Dose Administration Aids</li>
                <li>MedAdvisor App</li>
                <li>DVA &amp; Veteran Cards</li>
                <li>Australia-wide Delivery</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                Contact Us
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-white/80">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#84cc16]" />
                  <span>
                    Shop 3/1 Burke Road<br />
                    Camberwell VIC 3124
                  </span>
                </li>
                <li className="flex items-center gap-2 text-sm text-white/80">
                  <Phone className="w-4 h-4 shrink-0 text-[#84cc16]" />
                  <a href="tel:0398898622" className="hover:text-white">
                    (03) 9889 8622
                  </a>
                </li>
                <li className="flex items-center gap-2 text-sm text-white/80">
                  <Mail className="w-4 h-4 shrink-0 text-[#84cc16]" />
                  <a
                    href="mailto:info@burkeroadpharmacy.com.au"
                    className="hover:text-white"
                  >
                    info@burkeroadpharmacy.com.au
                  </a>
                </li>
                <li className="flex items-start gap-2 text-sm text-white/80">
                  <Clock className="w-4 h-4 mt-0.5 shrink-0 text-[#84cc16]" />
                  <div>
                    <div>Mon–Fri: 9:00am – 6:00pm</div>
                    <div>Saturday: 9:00am – 1:00pm</div>
                    <div>Sunday: Closed</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">
            <p>
              © {new Date().getFullYear()} Burke Road Compounding Pharmacy. All rights reserved.
            </p>
            <p>ABN: 12 345 678 901 | AHPRA Registered Pharmacists</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
