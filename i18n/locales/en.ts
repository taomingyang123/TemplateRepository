import about from "../en/about";

export default defineI18nLocale(() => ({
    site: {
        name: "Template Project",
    },
    nav: {
        home: "Home",
        about: "About Us",
    },
    page: {
        home: {
            title: "Welcome to my website",
            subtitle: "A modern public web application template based on Nuxt 3.",
        },
        about: about,
    },
    ui: {
        language: "中文",
    },
    seo: {
        index: {
            title: "Template Project - Home",
            description: "A high-quality public starter template based on Nuxt 3.",
            keywords: "template project, Nuxt 3, Tailwind CSS, Vue 3",
        },
        about: about.seo,
    },
}));
