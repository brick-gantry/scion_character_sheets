<template>
  <fieldset>
    <legend>{{props.legend}}</legend>
    <slot/>
  </fieldset>
</template>

<script setup>
import {defineProps} from "vue";
const props = defineProps(['legend']);
</script>

<style scoped>
fieldset {
  display: flex;
  flex: 1 1 0;
  align-self: start;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
  border-color: #ccc;
}
</style>