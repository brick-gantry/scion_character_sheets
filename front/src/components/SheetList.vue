<template>
  <div class="container">
    <button @click="show_modal = true">New</button>
    <router-link v-for="character in characters" :key="character" :to="'/' + character">{{ character }}</router-link>
  </div>
  <ModaView :show="show_modal">
    <template #header>
      Sheet Name
    </template>
    <template #body>
      <input v-model="modal_sheet_name"/>
    </template>
    <template #footer>
      <button @click="create_sheet(modal_sheet_name)">Create</button>
      <button @click="show_modal=false">Cancel</button>
    </template>
  </ModaView>
</template>

<script setup>
import axios from 'axios';
import {ref} from 'vue';
import ModaView from '@/components/ModalView';
import {new_sheet} from "@/resources";
import {router} from "@/router";

const show_modal = ref(false);
const modal_sheet_name = ref('');

const characters = (await axios.get('/api/sheet')).data;

async function create_sheet(sheet_name) {
  const sheet = new_sheet();
  sheet.sheet_name = sheet_name;
  await axios.post(`/api/sheet/${sheet_name}`, sheet);
  router.push('/' + sheet_name);
}
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
