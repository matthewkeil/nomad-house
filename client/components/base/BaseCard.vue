<template>
  <v-card tile flat v-bind="$attrs" v-on="$listeners">
    <slot />
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BaseCard'
});
</script>
