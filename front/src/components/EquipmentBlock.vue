<template>
  <TitleBox id="equipment" legend="Equipment">
    <TextBlockInput v-model="sheet.equipment"/>
  </TitleBox>
</template>

<script setup>
import TextBlockInput from '@/components/TextBlockInput';
import TitleBox from "@/components/TitleBox";
import {inject} from 'vue';
const sheet = inject('sheet');
</script>

<style scoped>
#equipment {
  align-items: start;
}
</style>