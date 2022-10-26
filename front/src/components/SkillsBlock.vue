<template>
  <TitleBox legend="Skills" id="skills" style="align-self: stretch">
    <div class="col">
      <SkillInput v-for="skill in skills.slice(0, skills.length/2)" :key="skill" v-model="sheet.skills[skill]"
                  :name="skill"/>
    </div>
    <div class="col">
      <SkillInput v-for="skill in skills.slice(skills.length/2)" :key="skill" v-model="sheet.skills[skill]"
                  :name="skill"/>
    </div>
  </TitleBox>
</template>

<script setup>
import {skills} from "@/resources";
import SkillInput from '@/components/SkillInput';
import TitleBox from "@/components/TitleBox";
import {inject} from 'vue';

const sheet = inject('sheet');
</script>

<style lang="less" scoped>

#skills {
  gap: 2rem;
  align-self: stretch;
  justify-content: center;

  .col {
    flex-direction: column;
  }

  div > .SkillInput {
    align-self: stretch;
    padding: .25rem;
  }
}
</style>