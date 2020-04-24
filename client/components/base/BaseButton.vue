<template>
  <!-- TODO Same issues with class binding not working -->
  <v-btn fab small color="primary" :style="styles" v-bind="$attrs" v-on="$listeners">
    <slot />
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BaseButton',

  inheritAttrs: false,

  props: {
    square: Boolean
  },

  computed: {
    styles() {
      return {
        borderRadius: this.square ? '2px' : undefined
      };
    }
  }
});
</script>
