<template>
  <TitleBox id="momentum" legend="Momentum">
    <MomentumInput v-model="sheet.momentum"/>
  </TitleBox>
</template>

<script setup>
import MomentumInput from '@/components/MomentumInput';
import TitleBox from "@/components/TitleBox";
import {inject} from 'vue';

const sheet = inject('sheet');
</script>

<style scoped>

</style>