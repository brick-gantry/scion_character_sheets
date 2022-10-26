<template>
  <div class="container FormInput">
    <input v-model="value">
    <label>{{ name }}</label>
  </div>
</template>

<script setup>
import {computed, defineEmits, defineProps} from "vue";

const props = defineProps(['modelValue', 'name']);
const emits = defineEmits(['update:modelValue']);
const value = computed({
  get: () => props.modelValue,
  set: value => emits('update:modelValue', value)
})
</script>

<style scoped lang="less">
.container {
  flex-direction: column;
  padding: .5rem;

  input {
    border: none;
    outline: none;
    background: transparent;
    border-bottom: 1px solid #333;
    width: 12rem;
  }

  label {
    font-weight: bold;
    font-size: .7rem;
  }
}
</style>