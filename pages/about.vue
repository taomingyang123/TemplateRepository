<template>
    <div class="max-w-2xl mx-auto space-y-8 py-4">
        <!-- 页面标题 -->
        <div class="space-y-2 text-center md:text-left">
            <h1 class="text-3xl font-bold text-gray-900 dark:text-white">{{ t("page.about.page.title") }}</h1>
            <p class="text-lg text-gray-500 dark:text-gray-400">{{ t("page.about.page.subtitle") }}</p>
        </div>

        <UDivider />

        <!-- 使命陈述 -->
        <div class="space-y-3">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white">{{ t("page.about.mission.title") }}</h2>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">{{ t("page.about.mission.content") }}</p>
        </div>

        <!-- 特色列表 -->
        <div class="space-y-3">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white">{{ t("page.about.features.title") }}</h2>
            <ul class="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li v-for="(item, index) in featuresList" :key="index">
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
const { t, tm } = useI18n();

// 获取关于我们的特色特点列表数组
const featuresList = computed(() => {
    const list = tm("page.about.features.list");
    return Array.isArray(list) ? list : [];
});

// 设置页面的 SEO 元数据
useSeoMeta({
    title: t("page.about.seo.title"),
    description: t("page.about.seo.description"),
    ogTitle: t("page.about.seo.title"),
    ogDescription: t("page.about.seo.description"),
});
</script>
