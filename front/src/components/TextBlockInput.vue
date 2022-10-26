<template>
  <textarea v-model="value" :rows="rows"/>
</template>

<script setup>
import {computed, defineEmits, defineProps} from "vue";

const props = defineProps(['modelValue']);
const emits = defineEmits(['update:modelValue']);
const value = computed({
  get: () => props.modelValue,
  set: value => emits('update:modelValue', value)
})
const rows = computed(() => Math.max(value.value.split('\n').length, 1));
</script>

<style scoped lang="less">
@line-height: calc(1rem - 1px);
@line-color: #222;

textarea {
  resize: none;
  overflow: hidden;
  width: 100%;
  flex: 1;
  border: none;
  outline: none;
  background: transparent repeating-linear-gradient(to bottom, transparent, transparent @line-height, @line-color @line-height, @line-color 1rem);
}
</style>