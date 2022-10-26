<template>
  <div class="container CallingInput">
    <input v-model="value.name">
    <div>
      <ToggleInput v-for="idx in 5" :key="idx" :checked="value.rating >= idx" @click="set_rating(idx)"/>
    </div>
  </div>
</template>

<script setup>
import {computed, defineEmits, defineProps} from "vue";
import ToggleInput from "@/components/ToggleInput";

const props = defineProps(['modelValue']);
const emits = defineEmits(['update:modelValue']);
const value = computed({
  get: () => props.modelValue,
  set: value => emits('update:modelValue', value)
});

function set_rating(r) {
  if (value.value.rating === r)
    value.value.rating -= 1;
  else
    value.value.rating = r;
}
</script>

<style scoped lang="less">
.container {
  justify-content: space-between;
  gap: .5rem;

  input {
    border: none;
    outline: none;
    background: transparent;
    border-bottom: 1px solid black;
  }
}
</style>