<template>
  <TitleBox id="health" legend="Health">
    <HealthInput v-for="(_, health_idx) in sheet.health" :key="health_idx"
                 v-model="sheet.health[health_idx]"/>
  </TitleBox>
</template>

<script setup>
import HealthInput from '@/components/HealthInput';
import TitleBox from "@/components/TitleBox";
import {inject} from 'vue';
const sheet = inject('sheet');
</script>

<style lang="less">
#health {
  align-self: stretch;
  gap: .5rem;
  flex-direction: column;
}
</style>