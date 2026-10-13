import { siteConfig } from "./site.js";
import { canonicalPagePath } from "./seoPolicy.js";

export const SITE_URL = siteConfig.url;

// Add new public page paths and their real content update dates here.
// These drive prerender, sitemap, redirects, robots headers and SEO checks.
export const PAGE_ROUTES = [
  { path: "/", lastmod: "2026-10-13" },
];
export const BASE_INDEXABLE_ROUTES = PAGE_ROUTES.map(page => page.path);

export const localizedRoute = (path, locale) => canonicalPagePath(
  locale === "en" ? path : path === "/" ? "/zh" : `/zh${path}`,
);

export const INDEXABLE_ROUTES = PAGE_ROUTES.flatMap(page => [
  localizedRoute(page.path, "en"), localizedRoute(page.path, "zh"),
]);

export const SITEMAP_URLS = PAGE_ROUTES.flatMap(page => {
  const alternatives = [
    { hreflang: "en", href: `${SITE_URL}${localizedRoute(page.path, "en")}` },
    { hreflang: "zh-CN", href: `${SITE_URL}${localizedRoute(page.path, "zh")}` },
    { hreflang: "x-default", href: `${SITE_URL}${localizedRoute(page.path, "en")}` },
  ];
  return ["en", "zh"].map(locale => ({
    loc: localizedRoute(page.path, locale), lastmod: page.lastmod, alternatives,
  }));
});
