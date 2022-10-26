<template>
  <div class="container">
    {{ name }}
    <div style="align-self: end">
      <ToggleInput v-for="idx in 5" :key="idx" :checked="value >= idx" @click="set_rating(idx)"/>
    </div>
  </div>
</template>

<script setup>
import {computed, defineEmits, defineProps} from "vue";
import ToggleInput from "@/components/ToggleInput";

const props = defineProps(['modelValue', 'name']);
const emits = defineEmits(['update:modelValue', 'update:rating', 'update:specialty']);
const value = computed({
  get: () => props.modelValue,
  set: value => emits('update:modelValue', value)
});

function set_rating(r) {
  if (value.value === r)
    value.value -= 1;
  else
    value.value = r;
  if (value.value === 0)
    value.value = 1;
}
</script>

<style scoped lang="less">
.container {
  justify-content: space-between;
  gap: .5rem;
}
</style>