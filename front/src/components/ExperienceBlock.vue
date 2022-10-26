<template>
  <TitleBox id="experience" class="col">
    <legend>Experience</legend>
    <div class="row">
      <FormInput v-model="sheet.experience.gained" name="Gained"/>
      <FormInput v-model="sheet.experience.spent" name="Spent"/>
    </div>
    <TextBlockInput v-model="sheet.experience.history"/>
  </TitleBox>
</template>

<script setup>
import FormInput from '@/components/FormInput';
import TextBlockInput from '@/components/TextBlockInput';
import TitleBox from "@/components/TitleBox";
import {inject} from 'vue';

const sheet = inject('sheet');
</script>

<style scoped>

</style>