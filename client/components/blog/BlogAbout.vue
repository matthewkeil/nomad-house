<template>
  <v-container id="about" tag="section">
    <BaseSubheading>About Us</BaseSubheading>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut tortor tellus. Donec maximus
      curs us pulvinar. Proin vehicula eros mauris, sit amet rutrum libero vestibulum ac. Morbi
      ullamcorper eu lacus vulputate consect. Etur vivamus sagittis accumsan quam eu malesuada.
      Proin et ante vel libero ultrices cursus. Donec felis leo, cu rsus eget hendrerit at, congue
      nec enim.
    </p>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import BaseSubheading from '@/components/base/BaseSubheading.vue';

export default Vue.extend({
  name: 'BlogAbout',
  components: {
    BaseSubheading
  }
});
</script>
