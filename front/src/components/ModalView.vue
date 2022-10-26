<template>
  <div v-if="props.show" class="modal-backdrop">
    <div class="modal">
      <div class="modal-header">
        <slot name="header"/>
      </div>
      <div class="modal-body">
        <slot name="body"/>
      </div>
      <div class="modal-footer">
        <slot name="footer"/>
      </div>
    </div>
  </div>
</template>


<script setup>
import {defineProps} from 'vue';

const props = defineProps(['show']);
</script>


<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ccc;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: .5rem;
}

.modal-header,
.modal-footer {
  padding: .5rem;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #333;
  justify-content: start;
  font-weight: bold;
}

.modal-footer {
  border-top: 1px solid #333;
  justify-content: flex-end;
  flex-direction: row;
  gap: .5rem;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}
</style>