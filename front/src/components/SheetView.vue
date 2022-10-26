<template>
  <div class="sheet-container">
    <div id="header" class="sheet-row">
      <HeaderBlock/>
    </div>
    <div class="sheet-row">
      <AttributesBlock/>
      <HealthBlock/>
    </div>
    <div class="sheet-row">
      <SkillsBlock/>
    </div>
    <div class="sheet-row">
      <div class="col">
        <PathsBlock/>
        <CallingBlock/>
        <KnackBlock/>
      </div>
      <div class="col">
        <MomentumBlock/>
        <DeedsBlock/>
        <ContactsBlock/>
      </div>
      <div class="col">
        <VirtueBlock/>
        <div>
          <WeaponsArmorBlock/>
          <EquipmentBlock/>
        </div>
        <ExperienceBlock/>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import {defineProps, provide, reactive, watch} from "vue";
import AttributesBlock from "@/components/AttributesBlock";
import HealthBlock from "@/components/HealthBlock";
import HeaderBlock from "@/components/HeaderBlock";
import SkillsBlock from "@/components/SkillsBlock";
import PathsBlock from "@/components/PathsBlock";
import CallingBlock from "@/components/CallingBlock";
import KnackBlock from "@/components/KnackBlock";
import MomentumBlock from "@/components/MomentumBlock";
import DeedsBlock from "@/components/DeedsBlock";
import ContactsBlock from "@/components/ContactsBlock";
import VirtueBlock from "@/components/VirtueBlock";
import WeaponsArmorBlock from "@/components/WeaponsArmorBlock";
import EquipmentBlock from "@/components/EquipmentBlock";
import ExperienceBlock from "@/components/ExperienceBlock";

const props = defineProps(['character']);

const sheet = reactive(await load_sheet(props.character));
watch(sheet, async () => save_sheet(sheet));
provide('sheet', sheet);

async function load_sheet(character) {
  return (await axios.get(`/api/sheet/${character}`)).data;
}

function save_sheet(sheet) {
  axios.post(`/api/sheet/${sheet.sheet_name}`, sheet)
}
</script>

<style lang="less" scoped>
div, fieldset {
  display: flex;
  align-self: start;
}

fieldset {
  margin: .5rem;
  border-color: #ccc;
  justify-content: center;
  align-items: center;
}

legend {
  font-weight: bold;
}

.sheet-container {
  flex-direction: column;
  flex: 0 1 auto;
  align-self: start;

  .sheet-row {
    flex-direction: row;
    align-self: stretch;
    justify-content: space-between;

    .col {
      flex-direction: column;

      * {
        align-self: stretch;
      }
    }
  }
}

#header {
  justify-content: center;
  align-items: center;
  align-self: center;
}


</style>
