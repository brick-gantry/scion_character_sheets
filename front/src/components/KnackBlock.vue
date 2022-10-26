<template>
  <TitleBox id="knacks" legend="Knacks">
    <TextBlockInput v-model="sheet.knacks"/>
  </TitleBox>
</template>

<script setup>
import TextBlockInput from '@/components/TextBlockInput';
import TitleBox from "@/components/TitleBox";
import {inject} from 'vue';

const sheet = inject('sheet');
</script>

<style scoped>
#knacks {
  align-items: start;
}
</style>