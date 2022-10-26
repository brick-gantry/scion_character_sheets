<template>
  <ToggleInput v-for="idx in 12" :key="idx" :checked="value >= idx" @click="set_rating(idx)"/>
</template>

<script setup>
import {computed, defineEmits, defineProps} from "vue";
import ToggleInput from "@/components/ToggleInput";

//todo websocket -> live value

const props = defineProps(['modelValue']);
const emits = defineEmits(['update:modelValue']);
const value = computed({
  get: () => props.modelValue,
  set: value => emits('update:modelValue', value)
});

function set_rating(r) {
  if (value.value === r)
    value.value -= 1;
  else
    value.value = r;
}
</script>

<style scoped lang="less">
</style>