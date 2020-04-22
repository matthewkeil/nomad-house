<template>
  <v-app>
    <CoreToolbar />
    <CoreDrawer />
    <v-content>
      <nuxt />
    </v-content>
    <CoreFooter />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import CoreToolbar from '@/components/core/CoreToolbar.vue';
import CoreDrawer from '@/components/core/CoreDrawer.vue';
import CoreFooter from '@/components/core/CoreFooter.vue';

export default Vue.extend({
  components: {
    CoreToolbar,
    CoreDrawer,
    CoreFooter
  }
});
</script>
