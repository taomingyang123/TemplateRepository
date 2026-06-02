<template>
    <div class="space-y-8 text-center max-w-2xl mx-auto py-12">
        <!-- 首页标题与描述 -->
        <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            {{ t("page.home.title") }}
        </h1>
        <p class="text-lg text-gray-500 dark:text-gray-400">
            {{ t("page.home.subtitle") }}
        </p>
        <!-- 引导链接按钮 -->
        <div class="flex justify-center gap-4">
            <UButton :to="localePath('/about')" size="lg" color="primary">
                {{ t("nav.about") }}
            </UButton>
        </div>
    </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

// 设置首页的 SEO 元数据
useSeoMeta({
    title: t("seo.index.title"),
    description: t("seo.index.description"),
    ogTitle: t("seo.index.title"),
    ogDescription: t("seo.index.description"),
    keywords: t("seo.index.keywords"),
});
</script>
