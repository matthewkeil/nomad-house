<script lang="ts">
import Vue from 'vue';
import CoreToolbar from '@/components/core/Toolbar.vue';
import CoreDrawer from '@/components/core/Drawer.vue';

export default Vue.extend({
  components: {
    CoreToolbar,
    CoreDrawer
  }
});
</script>

<template>
  <v-app>
    <CoreToolbar />
    <CoreDrawer />
    <nuxt />
  </v-app>
</template>
