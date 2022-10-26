<template>
  <div class="container VirtueInput">
    <input v-model="value.left">
    <div>
      <ToggleInput v-for="idx in 5" :key="idx" :checked="value.rating === idx" @click="set_rating(idx)"/>
    </div>
    <input v-model="value.right">
  </div>
</template>

<script setup>
import {computed, defineEmits, defineProps} from "vue";
import ToggleInput from "@/components/ToggleInput";

const props = defineProps(['modelValue', 'name']);
const emits = defineEmits(['update:checked', 'update:rating', 'update:specialty']);
const value = computed({
  get: () => props.modelValue,
  set: value => emits('update:modelValue', value)
});

function set_rating(r) {
  value.value.rating = r;
}
</script>

<style scoped lang="less">
.container {
  input {
    border: none;
    outline: none;
    background: transparent;
    border-bottom: 1px solid #333;
    width: 5rem;
  }
}
</style>