<template>
  <TitleBox id="weapons_armor" legend="Weapons & Armor">
    <TextBlockInput v-model="sheet.weapons_armor"/>
  </TitleBox>
</template>

<script setup>
import TextBlockInput from '@/components/TextBlockInput';
import TitleBox from "@/components/TitleBox";
import {inject} from 'vue';
const sheet = inject('sheet');
</script>

<style scoped>
#weapons_armor {
  align-items: start;
}
</style>