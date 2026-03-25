import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noIndex?: boolean;
  jsonLd?: object;
}

const SITE_NAME = "Burke Road Compounding Pharmacy";
const BASE_URL = "https://burkeroadpharmacy.com.au";
const DEFAULT_OG_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/93092134/Sz8SP7v55RRQvADhiwfHx5/hero-pharmacy-modern_742c27b2.jpg";

export default function SEO({
  title,
  description = "Burke Road Compounding Pharmacy in Camberwell, Melbourne. Personalised compounding, PBS dispensing, vaccinations and Chemist Care Now. QCPP accredited since 1963.",
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  noIndex = false,
  jsonLd,
}: SEOProps) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Camberwell Melbourne`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={`${BASE_URL}${canonical}`} />}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_NAME} />
      {canonical && <meta property="og:url" content={`${BASE_URL}${canonical}`} />}
      <meta property="og:locale" content="en_AU" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}

/* ── Pre-built JSON-LD schemas ── */

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Pharmacy",
  name: "Burke Road Compounding Pharmacy",
  description:
    "QCPP-accredited compounding pharmacy in Camberwell, Melbourne. Personalised medications, PBS dispensing, vaccinations, and Chemist Care Now.",
  url: "https://burkeroadpharmacy.com.au",
  telephone: "+61398825386",
  faxNumber: "+61398828214",
  email: "info@burkeroadpharmacy.com.au",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1031 Burke Road",
    addressLocality: "Camberwell",
    addressRegion: "VIC",
    postalCode: "3124",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -37.8432,
    longitude: 145.0726,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
  },
  hasMap: "https://maps.google.com/?q=1031+Burke+Road+Camberwell+VIC+3124",
  priceRange: "$$",
  currenciesAccepted: "AUD",
  paymentAccepted: "Cash, Credit Card, EFTPOS, Medicare",
  areaServed: {
    "@type": "City",
    name: "Melbourne",
  },
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `https://burkeroadpharmacy.com.au${item.url}`,
  })),
});
