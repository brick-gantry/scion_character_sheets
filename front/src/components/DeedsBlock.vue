<template>
  <TitleBox id="deeds" class="col" legend="Deeds">
    <DeedInput v-model="sheet.short_deed" name="Short"/>
    <DeedInput v-model="sheet.long_deed" name="Long"/>
    <DeedInput v-model="sheet.band_deed" name="Band"/>
  </TitleBox>
</template>

<script setup>
import DeedInput from '@/components/DeedInput';
import TitleBox from "@/components/TitleBox";
import {inject} from 'vue';

const sheet = inject('sheet');
</script>

<style scoped>

</style>