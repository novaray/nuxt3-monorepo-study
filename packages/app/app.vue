<script setup lang="ts">
const config = useRuntimeConfig();
</script>

<template>
  <div>
    <UiTheMessage />
    <UiTestQuasarButton />
    {{ config.public.publicApiBase }}
  </div>
</template>
