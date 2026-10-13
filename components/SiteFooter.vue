<script setup lang="ts">
const siteName = useRuntimeConfig().public.siteName;
</script>

<template>
  <footer class="muted border-t border-white/10 pt-4 text-sm">{{ siteName }}</footer>
</template>
