<script setup lang="ts">
const { t, locale } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const siteName = useRuntimeConfig().public.siteName;
</script>

<template>
  <header class="flex flex-wrap items-center justify-between gap-4">
    <NuxtLink :to="localePath('/')" class="text-xl font-bold">{{ siteName }}</NuxtLink>
    <nav :aria-label="t('common.navigation')" class="flex items-center gap-4">
      <NuxtLink :to="localePath('/')">{{ t("common.home") }}</NuxtLink>
      <NuxtLink :to="switchLocalePath(locale === 'en' ? 'zh' : 'en')" :lang="locale === 'en' ? 'zh-CN' : 'en'">
        {{ locale === "en" ? "简体中文" : "English" }}
      </NuxtLink>
    </nav>
  </header>
</template>
