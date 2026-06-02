export default defineNuxtConfig({
    // css: ["~/assets/css/main.css"],
    modules: ["@nuxt/ui", "@nuxtjs/i18n", "@nuxtjs/seo"],
    app: {
        head: {
            title: "Tiny QR Toolkit",
            titleTemplate: "%s - Tiny QR Toolkit",
            meta: [
                { name: "description", content: "Generate, optimize, beautify, decode, and batch create QR codes." },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
            ],
            link: [
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;600;700&display=swap",
                },
            ],
        },
    },
    i18n: {
        locales: [
            { code: "en", name: "English", file: "en.ts" },
            { code: "zh", name: "中文", file: "zh.ts" },
        ],
        lazy: true,
        langDir: "locales",
        vueI18n: "i18n.config.ts",
        strategy: "prefix_except_default",
        defaultLocale: "en",
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: "qr_locale",
            redirectOn: "root",
        },
    },
    nitro: {
        preset: "cloudflare-module",
        // Fix for resvg-js native bindings build error
        rollupConfig: {
            external: ["@resvg/resvg-js"],
        },
        // Alternatively, use wasm if available, but externalizing usually fixes the 'resolve' error
    },
    site: {
        url: "https://qr-tinystool.com",
        name: "Tiny QR Toolkit",
        description: "Generate, optimize, beautify, and decode QR codes.",
        defaultLocale: "en",
    },
    sitemap: {
        enabled: true,
    },

    robots: {
        enabled: true,
    },
    compatibilityDate: "2026-01-14",
});
