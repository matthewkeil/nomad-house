<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class TaskDetails extends Vue {}
</script>

<template>
  <div>
    <h1>{{ $route.params.task }}</h1>
  </div>
</template>
