import about from "../zh/about";

export default defineI18nLocale(() => ({
    site: {
        name: "模板项目",
    },
    nav: {
        home: "首页",
        about: "关于我们",
    },
    page: {
        home: {
            title: "欢迎来到我的个人网站",
            subtitle: "这是一个基于 Nuxt 3 的现代化公共模板项目。",
        },
        about: about,
    },
    ui: {
        language: "English",
    },
    seo: {
        index: {
            title: "模板项目 - 首页",
            description: "一个基于 Nuxt 3 构建的高品质公共开发模版项目。",
            keywords: "模板项目, Nuxt 3, Tailwind CSS, Vue 3",
        },
        about: about.seo,
    },
}));
