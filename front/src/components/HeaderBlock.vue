<template>
  <div id="header" class="col">
    <div class="row">
      <FormInput v-model="sheet.name" name="Name"/>
      <FormInput v-model="sheet.patron" name="Patron"/>
      <FormInput v-model="sheet.scion_type" name="Scion Type"/>
    </div>
    <div class="row">
      <FormInput v-model="sheet.player" name="Player"/>
      <FormInput v-model="sheet.pantheon" name="Pantheon"/>
      <FormInput v-model="sheet.chronicle" name="Chronicle"/>
    </div>
  </div>
</template>

<script setup>
import FormInput from "@/components/FormInput";
import {inject} from 'vue';

const sheet = inject('sheet');
</script>

<style scoped lang="less">
#header {

}
</style>