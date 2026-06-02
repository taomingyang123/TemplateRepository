<template>
    <header class="border-b border-gray-200 dark:border-gray-800 bg-white/75 dark:bg-gray-900/75 backdrop-blur sticky top-0 z-50">
        <UContainer class="flex items-center justify-between h-16">
            <!-- 网站标志与名称 -->
            <NuxtLink :to="localePath('/')" class="flex items-center gap-2">
                <UIcon name="i-heroicons-cube-transparent" class="w-8 h-8 text-primary-500" />
                <h1 class="text-xl font-bold text-gray-900 dark:text-white">{{ t("site.name") }}</h1>
            </NuxtLink>

            <!-- 操作按钮（多语言及暗黑模式切换） -->
            <div class="flex items-center gap-2">
                <UButton color="gray" variant="ghost" @click="toggleLocale">
                    {{ localeLabel }}
                </UButton>
                <UButton :icon="colorModeIcon" color="gray" variant="ghost" @click="toggleColorMode" />
            </div>
        </UContainer>
    </header>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const { t, locale } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

const toggleColorMode = () => {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};

const toggleLocale = () => {
    const newLocale = locale.value === "en" ? "zh" : "en";
    navigateTo(switchLocalePath(newLocale));
};

const localeLabel = computed(() => (locale.value === "en" ? "EN" : "中文"));
const colorModeIcon = computed(() => (colorMode.value === "dark" ? "i-heroicons-sun-20-solid" : "i-heroicons-moon-20-solid"));
</script>

