import { useRoute, Link } from "wouter";
import { ArrowLeft, Clock, Calendar, User, ArrowRight } from "lucide-react";
import { getArticleBySlug, articles } from "@/data/articles";
import SEO, { breadcrumbSchema } from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import { BUSINESS } from "@/config/business";
import NotFound from "./NotFound";

/**
 * ArticleDetail — Knowledge Centre article page
 * Renders article content with SEO, breadcrumbs, and related articles
 */
export default function ArticleDetail() {
  const [, params] = useRoute("/knowledge-centre/:slug");
  const slug = params?.slug ?? "";
  const article = getArticleBySlug(slug);

  if (!article) return <NotFound />;

  const relatedArticles = articles
    .filter((a) => a.slug !== slug && a.category === article.category)
    .slice(0, 3);

  const breadcrumbs = [
    { label: "Knowledge Centre", href: "/knowledge-centre" },
    { label: article.title, href: `/knowledge-centre/${slug}` },
  ];

  return (
    <>
      <SEO
        title={article.title}
        description={article.excerpt}
        canonical={`/knowledge-centre/${slug}`}
        ogType="article"
        jsonLd={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Knowledge Centre", url: "/knowledge-centre" },
          { name: article.title, url: `/knowledge-centre/${slug}` },
        ])}
      />
      <div style={{ backgroundColor: "var(--brp-cream)" }}>
        {/* Header */}
        <div className="brp-gradient py-16 text-white">
          <div className="container">
            <Breadcrumb items={breadcrumbs} className="mb-4" />
            <div className="max-w-3xl">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                style={{
                  backgroundColor: "rgba(201,169,110,0.25)",
                  color: "var(--brp-brass-300)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {article.category}
              </span>
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                {article.author && (
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {article.author}
                  </span>
                )}
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(article.publishedAt).toLocaleDateString("en-AU", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {article.readTimeMinutes} min read
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Excerpt / lead */}
              <p
                className="text-lg leading-relaxed mb-8 font-medium"
                style={{
                  color: "var(--brp-green-700)",
                  fontFamily: "var(--font-body)",
                  borderLeft: "4px solid var(--brp-brass-500)",
                  paddingLeft: "1.25rem",
                }}
              >
                {article.excerpt}
              </p>

              {/* Article content */}
              {article.content ? (
                <div
                  className="prose prose-lg max-w-none"
                  style={{ fontFamily: "var(--font-body)", color: "var(--brp-text)" }}
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              ) : (
                <div
                  className="rounded-xl p-8 text-center"
                  style={{ backgroundColor: "var(--brp-green-50)" }}
                >
                  <p style={{ color: "var(--brp-muted)", fontFamily: "var(--font-body)" }}>
                    Full article content coming soon. Please contact our pharmacy for more information.
                  </p>
                </div>
              )}

              {/* TGA Disclaimer */}
              <div
                className="mt-12 rounded-xl p-6 border"
                style={{
                  backgroundColor: "var(--brp-brass-100)",
                  borderColor: "var(--brp-brass-300)",
                }}
              >
                <p className="text-sm" style={{ color: "var(--brp-text)", fontFamily: "var(--font-body)" }}>
                  <strong>Medical Disclaimer:</strong> This article is intended for general
                  information purposes only and does not constitute medical advice. Always
                  consult a qualified healthcare professional before making any changes to
                  your medications or treatment plan. Compounded medications require a valid
                  prescription from a registered Australian healthcare provider.
                </p>
              </div>

              {/* Back link */}
              <div className="mt-8">
                <Link
                  href="/knowledge-centre"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
                  style={{ color: "var(--brp-green-600)", fontFamily: "var(--font-body)" }}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Knowledge Centre
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div
                className="rounded-2xl p-6 text-white"
                style={{ backgroundColor: "var(--brp-green-800)" }}
              >
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Have questions?
                </h3>
                <p className="text-white/80 text-sm mb-5" style={{ fontFamily: "var(--font-body)" }}>
                  Our compounding pharmacists are here to help. Call us or upload your prescription.
                </p>
                <div className="space-y-3">
                  <a
                    href={`tel:${BUSINESS.phone.landline}`}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90"
                    style={{
                      backgroundColor: "var(--brp-brass-500)",
                      color: "var(--brp-green-900)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    Call Us
                  </a>
                  <a
                    href="/upload-prescription"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm border border-white/30 transition-all hover:bg-white/10"
                    style={{ color: "white", fontFamily: "var(--font-body)" }}
                  >
                    Upload Prescription
                  </a>
                </div>
              </div>

              {/* Related condition */}
              {article.relatedConditionSlug && (
                <div
                  className="rounded-2xl p-6 border"
                  style={{
                    backgroundColor: "white",
                    borderColor: "var(--border)",
                  }}
                >
                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ fontFamily: "var(--font-display)", color: "var(--brp-green-800)" }}
                  >
                    Related Condition
                  </h3>
                  <Link
                    href={`/conditions/${article.relatedConditionSlug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
                    style={{ color: "var(--brp-green-600)", fontFamily: "var(--font-body)" }}
                  >
                    View condition page <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}

              {/* Related articles */}
              {relatedArticles.length > 0 && (
                <div
                  className="rounded-2xl p-6 border"
                  style={{ backgroundColor: "white", borderColor: "var(--border)" }}
                >
                  <h3
                    className="text-lg font-bold mb-4"
                    style={{ fontFamily: "var(--font-display)", color: "var(--brp-green-800)" }}
                  >
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {relatedArticles.map((a) => (
                      <Link
                        key={a.slug}
                        href={`/knowledge-centre/${a.slug}`}
                        className="block group"
                      >
                        <h4
                          className="text-sm font-semibold leading-snug mb-1 group-hover:underline"
                          style={{ color: "var(--brp-green-800)", fontFamily: "var(--font-display)" }}
                        >
                          {a.title}
                        </h4>
                        <span className="text-xs" style={{ color: "var(--brp-muted)", fontFamily: "var(--font-body)" }}>
                          {a.readTimeMinutes} min read
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
