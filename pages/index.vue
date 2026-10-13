<script setup lang="ts">
const { t } = useI18n();
usePageSeo({ titleKey: "home.title", descriptionKey: "home.description", schemaType: "WebSite" });
</script>

<template>
  <section class="glass card space-y-4">
    <h1 class="text-3xl font-bold">{{ t("home.title") }}</h1>
    <p class="muted">{{ t("home.introduction") }}</p>
  </section>
</template>
