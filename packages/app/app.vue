<script setup lang="ts">
const config = useRuntimeConfig();
</script>

<template>
  <div>
    <UiTheMessage />
    <UiBaseTestQuasarButton />
    {{ config.public.publicApiBase }}
  </div>
</template>
