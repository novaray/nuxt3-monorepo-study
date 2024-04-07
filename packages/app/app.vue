<script setup lang="ts">
const config = useRuntimeConfig();
</script>

<template>
  <div>
    <h3>아래 메시지와 버튼은 같은 저장소의 UI 패키지에서 가져왔습니다.</h3>
    <UiTheMessage />
    <UiBaseTestQuasarButton />
  </div>
</template>
