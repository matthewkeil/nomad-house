<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class CMS extends Vue {}
</script>

<template>
  <v-app>
    <v-container fluid>
      <nuxt-child />
    </v-container>
  </v-app>
</template>
