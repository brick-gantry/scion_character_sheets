<template>
  <fieldset id="attributes">
    <legend>Attributes</legend>
    <table>
      <tbody>
      <tr>
        <td></td>
        <td>Mental</td>
        <td>Physical</td>
        <td>Social</td>
      </tr>
      <tr>
        <td>Power</td>
        <td>
          <AttributeInput v-model="sheet.attributes.Intellect" name="Intellect"/>
        </td>
        <td>
          <AttributeInput v-model="sheet.attributes.Cunning" name="Cunning"/>
        </td>
        <td>
          <AttributeInput v-model="sheet.attributes.Resolve" name="Resolve"/>
        </td>
      </tr>
      <tr>
        <td>Finesse</td>
        <td>
          <AttributeInput v-model="sheet.attributes.Might" name="Might"/>
        </td>
        <td>
          <AttributeInput v-model="sheet.attributes.Dexterity" name="Dexterity"/>
        </td>
        <td>
          <AttributeInput v-model="sheet.attributes.Stamina" name="Stamina"/>
        </td>
      </tr>
      <tr>
        <td>Resistance</td>
        <td>
          <AttributeInput v-model="sheet.attributes.Presence" name="Presence"/>
        </td>
        <td>
          <AttributeInput v-model="sheet.attributes.Manipulation" name="Manipulation"/>
        </td>
        <td>
          <AttributeInput v-model="sheet.attributes.Composure" name="Composure"/>
        </td>
      </tr>
      </tbody>
    </table>
  </fieldset>
</template>

<script setup>
import AttributeInput from '@/components/AttributeInput';
import {inject} from 'vue';

const sheet = inject('sheet');
</script>

<style lang="less" scoped>
#attributes {
  tr:first-child {
    td {
      padding-bottom: .5rem;
      font-weight: bold;
    }
  }

  td:first-child {
    text-align: end;
    padding-right: 1rem;
    font-weight: bold;
  }

  tr:not(:first-child) {
    td:not(:first-child) {
      padding: .25rem .75rem .25rem .25rem;
    }
  }
}
</style>