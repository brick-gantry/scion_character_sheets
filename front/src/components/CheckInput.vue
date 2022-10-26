<template>
  <svg>
    <rect id="box" :x="o" :y="o" :width="hw" :height="hw" :rx="r" :ry="r"/>
    <g id="check" v-if="props.checked">
      <line :x1="x1" :y1="y1" :x2="x2" :y2="y2"/>
      <line :x1="x2" :y1="y2" :x2="x3" :y2="y3"/>
    </g>
  </svg>
</template>

<script setup>
import {computed, defineProps} from "vue";

const props = defineProps(['checked']);

const rem = computed(() => parseFloat(getComputedStyle(document.documentElement).fontSize));
function get_rem(v) {
  return v * rem.value;
}
const o = computed(() => get_rem(.05));
const hw = computed(() => get_rem(.9));
const r = computed(() => get_rem(.2));

const x1 = computed(() => get_rem(.25));
const y1 = computed(() => get_rem(.5));
const x2 = computed(() => get_rem(.4));
const y2 = computed(() => get_rem(.75));
const x3 = computed(() => get_rem(.75));
const y3 = computed(() => get_rem(.25));

// const calc_fill = computed(() => props.checked ? 'black' : 'none');
</script>

<style scoped lang="less">
svg {
  width: 1rem;
  height: 1rem;

  #box {
    stroke-width: 1;
    stroke: black;
    fill: none;
  }

  line {
    stroke-width: 2;
    stroke: black;
  }
}
</style>