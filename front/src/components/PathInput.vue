<template>
  <div class="container PathInput">
    <input v-model="value.name">
    <CheckInput :checked="value.checked" @click="value.checked = !value.checked"/>
  </div>
</template>

<script setup>
import {computed, defineEmits, defineProps} from "vue";
import CheckInput from "@/components/CheckInput";

const props = defineProps(['modelValue']);
const emits = defineEmits(['update:value']);
const value = computed({
  get: () => props.modelValue,
  set: value => emits('update:modelValue', value)
});
</script>

<style scoped lang="less">
.container {
  justify-content: space-between;
  input {
    border: none;
    outline: none;
    background: transparent;
    border-bottom: 1px solid black;
    width: 12rem;
  }
}
</style>