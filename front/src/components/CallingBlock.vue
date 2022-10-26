<template>
  <TitleBox id="calling" legend="Callings">
    <CallingInput v-model="sheet.callings[0]"/>
  </TitleBox>
</template>

<script setup>
import CallingInput from '@/components/CallingInput';
import TitleBox from "@/components/TitleBox";
import {inject} from 'vue';

const sheet = inject('sheet');
</script>

<style scoped>

</style>