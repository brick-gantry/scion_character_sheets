<template>
  <svg>
    <ellipse :rx="rx" :ry="ry" :cx="c" :cy="c" :style="{fill: calc_fill}"/>
  </svg>
</template>

<script setup>
import {computed, defineProps} from "vue";

const props = defineProps(['checked']);

const rem = computed(() => parseFloat(getComputedStyle(document.documentElement).fontSize));
const rx = computed(() => .3 * rem.value);
const ry = computed(() => .4 * rem.value);
const c = computed(() => .5 * rem.value);

const calc_fill = computed(() => props.checked ? 'black' : 'none');
</script>

<style scoped lang="less">
svg {
  width: 1rem;
  height: 1rem;
  ellipse {
    stroke-width: 2;
    stroke: black;
  }
}
</style>