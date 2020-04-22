<template>
  <v-app-bar app flat>
    <v-app-bar-nav-icon class="hidden-md-and-up" @click="toggleDrawer" />
    <v-container mx-auto py-0>
      <v-layout>
        <v-img
          :src="require('@/assets/img/logo.png')"
          class="mr-5"
          contain
          height="48"
          width="48"
          max-width="48"
          @click="$vuetify.goTo(0)"
        />
        <v-btn
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          class="ml-0 hidden-sm-and-down"
          text
          @click="onClick($event, link)"
        >
          {{ link.text }}
        </v-btn>
        <v-spacer />
        <v-text-field
          append-icon="mdi-magnify"
          text
          hide-details
          solo-inverted
          style="max-width: 300px;"
        />
      </v-layout>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import { core } from '../../store';

export default Vue.extend({
  name: 'CoreToolbar',
  computed: {
    links: () => core.links
  },
  methods: {
    toggleDrawer: () => core.toggleDrawer(),
    // TODO: these should be links not buttons that require a method
    onClick(e: MouseEvent, link: any) {
      e.stopPropagation();
      if (link.to || !link.href) return;
      this.$vuetify.goTo(link.href);
    }
  }
});
</script>
