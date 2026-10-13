<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{ error: NuxtError }>();
const { t, locale } = useI18n();
const siteName = useRuntimeConfig().public.siteName;
const isNotFound = computed(() => props.error.statusCode === 404);
const title = computed(() => t(isNotFound.value ? "error.notFound" : "error.unavailable"));

useHead(() => ({
  title: `${title.value} | ${siteName}`,
  htmlAttrs: { lang: locale.value === "zh" ? "zh-CN" : "en" },
  meta: [{ name: "robots", content: "noindex, nofollow" }],
}));
</script>

<template>
  <main class="site-container">
    <h1>{{ error.statusCode }} · {{ title }}</h1>
    <p>{{ t("error.description") }}</p>
    <button type="button" class="btn" @click="clearError({ redirect: locale === 'zh' ? '/zh/' : '/' })">{{ t("common.home") }}</button>
  </main>
</template>
