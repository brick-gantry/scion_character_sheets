<template>
  <div class="container SkillInput">
    <CheckInput :checked="value.checked" @click="value.checked = !value.checked"/>
    <span>{{ props.name }}</span>
    <input type="text" v-model="value.specialty">
    <div>
      <ToggleInput v-for="idx in 5" :key="idx" :checked="value.rating >= idx" @click="set_rating(idx)"/>
    </div>
  </div>
</template>

<script setup>
import {computed, defineEmits, defineProps} from "vue";
import ToggleInput from "@/components/ToggleInput";
import CheckInput from "@/components/CheckInput";

const props = defineProps(['modelValue', 'name']);
const emits = defineEmits(['update:checked', 'update:rating', 'update:specialty']);
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
  position: relative;

  input[type=text] {
    border: none;
    outline: none;
    background: transparent;
    border-bottom: 1px solid black;
    flex-grow: 1;
  }
}
</style>