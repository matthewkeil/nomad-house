<template>
  <v-app>
    <v-container fluid>
      <nuxt-child />
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({ layout: 'base' })
export default class CMS extends Vue {}
</script>
