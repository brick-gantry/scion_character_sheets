<template>
  <TitleBox id="contacts" legend="Contacts">
    <TextBlockInput v-model="sheet.contacts"/>
  </TitleBox>
</template>

<script setup>
import TextBlockInput from '@/components/TextBlockInput';
import TitleBox from "@/components/TitleBox";
import {inject} from 'vue';

const sheet = inject('sheet');
</script>

<style scoped>

</style>