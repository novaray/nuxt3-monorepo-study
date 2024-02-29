<script setup lang="ts">
const config = useRuntimeConfig();
</script>

<template>
  <div>
    <UiTheMessage />
    {{config.public.publicApiBase}}
  </div>
</template>
