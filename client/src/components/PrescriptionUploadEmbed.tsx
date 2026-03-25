/**
 * PrescriptionUploadEmbed
 *
 * Renders the Burke Road Rx upload form as an embedded iframe.
 * Use this component anywhere a prescription upload CTA is required —
 * condition detail pages, article sidebars, the dedicated upload page, etc.
 *
 * The iframe source is https://burkerx.lovable.app
 */

const EMBED_URL = "https://burkerx.lovable.app";

interface PrescriptionUploadEmbedProps {
  /** Optional additional className for the wrapper div */
  className?: string;
  /**
   * Height of the iframe. Defaults to "700px".
   * Pass "auto" to use a fixed minimum that scrolls internally.
   */
  height?: string;
  /** Whether to show the section heading above the iframe */
  showHeading?: boolean;
}

export default function PrescriptionUploadEmbed({
  className = "",
  height = "700px",
  showHeading = true,
}: PrescriptionUploadEmbedProps) {
  return (
    <div className={`w-full ${className}`}>
      {showHeading && (
        <div className="mb-6">
          <h2
            className="text-2xl font-bold mb-2"
            style={{ fontFamily: "var(--font-display)", color: "var(--brp-text)" }}
          >
            Upload Your Prescription
          </h2>
          <p className="text-sm" style={{ color: "var(--brp-muted)" }}>
            Send your prescription securely online. Our pharmacists will review it and
            contact you to confirm your order.
          </p>
        </div>
      )}
      <div
        className="w-full rounded-2xl overflow-hidden border border-border shadow-sm"
        style={{ minHeight: height }}
      >
        <iframe
          src={EMBED_URL}
          title="Upload Your Prescription — Burke Road Compounding Pharmacy"
          width="100%"
          height={height}
          style={{ border: 0, display: "block", minHeight: height }}
          allow="camera; microphone; clipboard-write"
          loading="lazy"
        />
      </div>
      <p className="mt-3 text-xs text-center" style={{ color: "var(--brp-muted)" }}>
        Your information is transmitted securely and handled in accordance with the
        Privacy Act 1988 and Australian pharmacy privacy standards.
      </p>
    </div>
  );
}
