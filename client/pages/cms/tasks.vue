<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { cms } from '../../store';

type Column = keyof typeof cms['tasks'];

@Component
export default class Tasks extends Vue {
  get activeTask() {
    return this.$route.params.task;
  }

  get tasks() {
    return cms.tasks;
  }

  get columns() {
    return Object.entries(this.tasks).map(([label, tasks]) => [
      label[0].toUpperCase() + label.slice(1),
      tasks
    ]);
  }

  pickupCard(e: DragEvent, column: Column, index: number) {
    e.dataTransfer!.effectAllowed = 'move';
    e.dataTransfer!.dropEffect = 'move';
    e.dataTransfer!.setData('from', column);
    e.dataTransfer!.setData('task-index', '' + index);
  }

  dropCard(e: DragEvent, to: Column, newIndex: number) {
    const from = e.dataTransfer!.getData('from') as Column;
    const taskIndex = +e.dataTransfer!.getData('task-index');
    cms.moveTask({ from, taskIndex, to, newIndex });
  }

  closeDialog() {
    this.$router.go(-1);
  }
}
</script>

<template>
  <div>
    <!-- eslint-disable-next-line -->
    <v-dialog :value="!!activeTask" v-on:click:outside="closeDialog">
      <nuxt-child />
    </v-dialog>
    <v-row class="board" justify="space-around">
      <v-col v-for="([label, tasks], columnIndex) in columns" :key="columnIndex" cols="12" md="4">
        <h2>{{ label }}</h2>
        <v-sheet
          class="pa-12"
          color="grey lighten-3"
          @dragover.prevent
          @dragenter.prevent
          @drop.self="dropCard($event, label.toLowerCase(), 0)"
        >
          <nuxt-link
            v-for="(item, index) in tasks"
            :key="index"
            :to="{ path: `/cms/tasks/${item}` }"
          >
            <v-card
              class="card"
              draggable
              @dragstart="pickupCard($event, label.toLowerCase(), index)"
              @drop.self="dropCard($event, label.toLowerCase(), index)"
              @dragover.prevent
              @dragenter.prevent
            >
              {{ item }}
            </v-card>
          </nuxt-link>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<style scss scoped>
.board {
  width: 100%;
}
.card {
  padding: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
