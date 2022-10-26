<template>
  <TitleBox id="paths" legend="Paths" class="col">
    <PathInput v-for="(path, path_idx) in sheet.paths" :key="path_idx"
               v-model="sheet.paths[path_idx]"/>
  </TitleBox>
</template>

<script setup>
import PathInput from '@/components/PathInput';
import TitleBox from "@/components/TitleBox";
import {inject} from 'vue';

const sheet = inject('sheet');
</script>

<style scoped>

</style>