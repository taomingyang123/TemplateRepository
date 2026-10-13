<script setup lang="ts">
const { locale } = useI18n();
useHead(() => ({ htmlAttrs: { lang: locale.value === "zh" ? "zh-CN" : "en" } }));
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
