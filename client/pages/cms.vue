<template>
  <v-app>
    <nuxt-child />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class CMS extends Vue {}
</script>
