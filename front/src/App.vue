<template>
  <Suspense>
    <router-view></router-view>
  </Suspense>
</template>

<script setup>

</script>

<style lang="less">
body {
  background: #aaa;
  color: #222;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

div {
  display: flex;
}
</style>
