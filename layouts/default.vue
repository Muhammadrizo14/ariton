<template>
  <div class="wrapper">
    <AppHeader />
    <main>
      <slot/>
    </main>
    <AppFooter/>
  </div>
</template>

<script setup>

import AppHeader from "~/components/layouts/AppHeader.vue";
import AppFooter from "~/components/layouts/AppFooter.vue";
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  main {
    flex: 1;
  }
}
</style>