import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import PrescriptionUploadEmbed from "@/components/PrescriptionUploadEmbed";
import { BUSINESS } from "@/config/business";
import { Phone, Clock } from "lucide-react";

export default function UploadPrescription() {
  return (
    <>
      <SEO
        title="Upload Your Prescription"
        description="Upload your prescription securely to Burke Road Compounding Pharmacy. We'll prepare your medication for pickup or Australia-wide delivery."
        canonical="/upload-prescription"
      />

      {/* Hero */}
      <section className="py-16" style={{ backgroundColor: "var(--brp-green-800)" }}>
        <div className="container">
          <Breadcrumb items={[{ label: "Upload Prescription" }]} />
          <div className="max-w-2xl mt-4">
            <div
              className="brp-badge mb-4"
              style={{
                backgroundColor: "rgba(201,169,110,0.15)",
                color: "var(--brp-brass-300)",
                borderColor: "rgba(201,169,110,0.3)",
              }}
            >
              Prescription Services
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Upload your prescription
            </h1>
            <p className="text-white/80 text-lg max-w-xl">
              Send your prescription securely online. Our pharmacists will review it and
              contact you to confirm your order — ready for pickup or Australia-wide delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16" style={{ backgroundColor: "var(--brp-cream)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-10 items-start">

            {/* iframe embed — takes up 2/3 width on desktop */}
            <div className="lg:col-span-2">
              <PrescriptionUploadEmbed showHeading={false} height="750px" />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* What happens next */}
              <div className="brp-card p-6">
                <h3
                  className="font-bold mb-4"
                  style={{ fontFamily: "var(--font-display)", color: "var(--brp-text)" }}
                >
                  What happens next?
                </h3>
                <ol className="space-y-3">
                  {[
                    "We receive your prescription and verify it",
                    "Our pharmacist reviews and prepares your medication",
                    "We contact you to confirm pickup or delivery",
                    "Your medication is ready — usually within 1–2 business days",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm" style={{ color: "#374151" }}>
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                        style={{ backgroundColor: "var(--brp-green-800)" }}
                      >
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Prefer to call */}
              <div className="brp-card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Phone className="w-5 h-5" style={{ color: "var(--brp-green-700)" }} />
                  <h3
                    className="font-bold"
                    style={{ fontFamily: "var(--font-display)", color: "var(--brp-text)" }}
                  >
                    Prefer to call?
                  </h3>
                </div>
                <p className="text-sm mb-3" style={{ color: "var(--brp-muted)" }}>
                  Our pharmacists are available during business hours.
                </p>
                <a
                  href={`tel:${BUSINESS.phone.landlineE164}`}
                  className="inline-flex items-center gap-2 px-4 py-2 font-semibold rounded-lg text-sm text-white"
                  style={{ backgroundColor: "var(--brp-green-800)" }}
                >
                  <Phone className="w-4 h-4" /> {BUSINESS.phone.landline}
                </a>
              </div>

              {/* Trading hours */}
              <div className="brp-card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5" style={{ color: "var(--brp-green-700)" }} />
                  <h3
                    className="font-bold"
                    style={{ fontFamily: "var(--font-display)", color: "var(--brp-text)" }}
                  >
                    Trading hours
                  </h3>
                </div>
                <div className="space-y-1 text-sm" style={{ color: "#374151" }}>
                  <div className="flex justify-between">
                    <span style={{ color: "var(--brp-muted)" }}>Mon – Fri</span>
                    <span className="font-medium">{BUSINESS.hours.monFri}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "var(--brp-muted)" }}>Saturday</span>
                    <span className="font-medium">{BUSINESS.hours.saturday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "var(--brp-muted)" }}>Sunday</span>
                    <span className="font-medium" style={{ color: "var(--brp-muted)" }}>
                      {BUSINESS.hours.sunday}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
