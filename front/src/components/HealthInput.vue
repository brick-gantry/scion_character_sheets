<template>
  <div class="container">
    <span>{{ value.name }}</span>
    <CheckInput v-if="value.checked !== undefined" :checked="value.checked" @click="value.checked = !value.checked"/>
  </div>
</template>

<script setup>
import {computed, defineEmits, defineProps} from "vue";
import CheckInput from "@/components/CheckInput";

const props = defineProps(['modelValue']);
const emits = defineEmits(['update:modelValue']);
const value = computed({
  get: () => props.modelValue,
  set: value => emits('update:modelValue', value)
});
</script>

<style scoped lang="less">
.container {
  align-self: stretch;
  justify-content: space-between;
  gap: .5rem;

  input {
    flex-grow: 0;
  }
}
</style>