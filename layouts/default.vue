<template>
    <div class="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
        <!-- 头部导航 -->
        <AppHeader />

        <!-- 主体区域 -->
        <main class="flex-grow py-8">
            <UContainer>
                <slot />
            </UContainer>
        </main>

        <!-- 页脚区域 -->
        <footer class="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-8">
            <UContainer class="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
                <!-- 品牌与描述 -->
                <div class="flex flex-col items-center md:items-start gap-1">
                    <span class="font-bold text-gray-900 dark:text-white">{{ t("site.name") }}</span>
                    <span>{{ t("page.home.subtitle") }}</span>
                </div>

                <!-- 导航链接与版权 -->
                <div class="flex flex-col items-center md:items-end gap-2">
                    <div class="flex gap-4">
                        <NuxtLink :to="localePath('/about')" class="hover:text-primary-500">{{ t("nav.about") }}</NuxtLink>
                    </div>
                    <div>&copy; {{ new Date().getFullYear() }} {{ t("site.name") }}. All rights reserved.</div>
                </div>
            </UContainer>
        </footer>
    </div>
</template>

<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";

const { t } = useI18n();
const localePath = useLocalePath();
</script>
