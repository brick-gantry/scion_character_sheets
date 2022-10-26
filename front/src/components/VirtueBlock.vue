<template>
  <TitleBox legend="Virtue" id="virtue">
    <VirtueInput v-model="sheet.virtue"/>
  </TitleBox>
</template>

<script setup>
import {inject} from 'vue';
import VirtueInput from "@/components/VirtueInput";
import TitleBox from "@/components/TitleBox";

const sheet = inject('sheet');
</script>

<style scoped>

</style>