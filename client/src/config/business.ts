/**
 * Burke Road Compounding Pharmacy — Single Source of Truth
 *
 * ALL business details used across the site (footer, contact, schema, meta tags,
 * CTA buttons, maps embeds) MUST be imported from this file.
 * Never hardcode business details anywhere else in the codebase.
 *
 * Last updated: March 2026 — details verified by pharmacy owner.
 */

export const BUSINESS = {
  legalName: 'Burke Road Pharmacy',
  displayName: 'Burke Road Compounding Pharmacy',
  abn: '70 764 240 081',
  established: '1963',

  address: {
    street: '629 Burke Road',
    suburb: 'Camberwell',
    state: 'VIC',
    postcode: '3124',
    country: 'AU',
    full: '629 Burke Road, Camberwell VIC 3124',
    googleMapsQuery: 'Burke+Road+Compounding+Pharmacy+629+Burke+Road+Camberwell+VIC',
    lat: -37.826,
    lng: 145.062,
  },

  phone: {
    landline: '03 9882 5386',
    landlineE164: '+61398825386',
    fax: '03 9882 8214',
    mobile: '0450 352 483',
    mobileE164: '+61450352483',
    whatsapp: '0450 352 483',
    whatsappE164: '+61450352483',
  },

  email: 'info@burkeroadpharmacy.com.au',

  hours: {
    monFri: '9:00am – 6:00pm',
    saturday: '9:00am – 1:00pm',
    sunday: 'Closed',
    schema: [
      'Mo-Fr 09:00-18:00',
      'Sa 09:00-13:00',
    ],
  },

  urls: {
    production: 'https://burkeroadpharmacy.com.au',
    staging: 'https://burkepharm-sz8sp7v5.manus.space',
    googleMaps: 'https://maps.google.com/?q=629+Burke+Road+Camberwell+VIC+3124',
    googleBusinessProfile: '[VERIFY BEFORE LAUNCH]',
    googleReviews: '[VERIFY BEFORE LAUNCH]',
    booking: 'https://www.medadvisor.com.au/Network/BurkeRoadDiscountDrugStore',
    whatsapp: 'https://wa.me/61450352483',
    prescriptionUpload: '/upload-prescription',
  },

  social: {
    facebook: '[VERIFY BEFORE LAUNCH]',
    instagram: '[VERIFY BEFORE LAUNCH]',
  },

  accreditations: {
    qcpp: true,
    pharmacyGuild: true,
    ipa: true,
  },

  seo: {
    description:
      'Burke Road Compounding Pharmacy in Camberwell, Melbourne. Personalised compounding, PBS dispensing, vaccinations, Chemist Care Now and Australia-wide delivery. QCPP accredited. Serving the community since 1963.',
    keywords: [
      'compounding pharmacy Camberwell',
      'compounding pharmacy Melbourne',
      'BHRT Melbourne',
      'bioidentical hormone therapy Melbourne',
      'LDN compounding Melbourne',
      'low dose naltrexone Melbourne',
      'PBS pharmacy Camberwell',
      'travel vaccinations Camberwell',
      'Chemist Care Now Melbourne',
      'compounding pharmacy Boroondara',
    ],
  },
} as const;

export function telHref(number: string = BUSINESS.phone.landlineE164): string {
  return `tel:${number}`;
}

export function whatsappHref(message?: string): string {
  const base = BUSINESS.urls.whatsapp;
  if (message) return `${base}?text=${encodeURIComponent(message)}`;
  return base;
}
