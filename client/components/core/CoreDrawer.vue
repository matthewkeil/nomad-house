<template>
  <v-navigation-drawer v-model="drawerOpen" app dark temporary>
    <v-list>
      <v-list-item
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        :href="link.href"
        @click="onClick($event, link)"
      >
        <v-list-item-title v-text="link.text" />
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { core } from '../../store';

@Component
export default class CoreDrawer extends Vue {
  get links() {
    return core.links;
  }

  get drawerOpen() {
    return core.drawerOpen;
  }

  set drawerOpen(open: boolean) {
    core.toggleDrawer(open);
  }

  onClick(e: MouseEvent, link: any) {
    e.stopPropagation();
    if (link.to === '/') {
      this.$vuetify.goTo(0);
      core.toggleDrawer(false);
      return;
    }
    if (link.to || !link.href) return;
    this.$vuetify.goTo(link.href);
    core.toggleDrawer(false);
  }
}
</script>
