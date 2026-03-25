// Legacy constants — prefer importing from @/config/business for new code
export const PHARMACY_PHONE = "03 9882 5386";
export const PHARMACY_PHONE_RAW = "0398825386";
export const PHARMACY_EMAIL = "info@burkeroadpharmacy.com.au";
export const PHARMACY_ADDRESS = "1031 Burke Road, Camberwell VIC 3124";
export const PHARMACY_MAPS_URL =
  "https://maps.google.com/?q=1031+Burke+Road+Camberwell+VIC+3124";
export const PHARMACY_WHATSAPP = "https://wa.me/61450352483";

// OAuth helper (used by auth system)
export function getLoginUrl(returnPath?: string): string {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const state = encodeURIComponent(JSON.stringify({ origin, returnPath: returnPath ?? "/" }));
  return `${import.meta.env.VITE_OAUTH_PORTAL_URL ?? ""}?app_id=${import.meta.env.VITE_APP_ID ?? ""}&state=${state}`;
}
