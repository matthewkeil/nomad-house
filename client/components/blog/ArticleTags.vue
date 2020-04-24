<template>
  <v-container pa-0>
    <BaseSubheading>Tags</BaseSubheading>
    <v-chip
      v-for="(category, i) in categories"
      :key="i"
      tag
      label
      small
      color="secondary"
      text-color="white"
      >{{ category.text }}</v-chip
    >
  </v-container>
</template>

<script lang="ts">
// Utilities
import { mapGetters } from 'vuex';
import Vue from 'vue';
import BaseSubheading from '@/components/base/BaseSubheading.vue';

export default Vue.extend({
  name: 'ArticleTags',
  computed: {
    ...mapGetters(['categories'])
  }
});
</script>
