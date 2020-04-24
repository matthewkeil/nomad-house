<template>
  <!-- TODO This is where the class binding syntax breaks -->
  <v-flex
    xs12
    :class="{
      md6: true,
      md4: false
    }"
  >
    <base-card :height="prominent ? 450 : 350" color="grey lighten-1" dark href="#!">
      <v-img
        :src="require(`@/assets/demo/articles/${hero}`)"
        height="100%"
        gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"
      >
        <v-layout v-if="!blog.prominent" fill-height wrap text-xs-right ma-0>
          <v-flex xs12>
            <v-chip
              label
              class="mx-0 mb-2 text-uppercase"
              color="grey darken-3"
              text-color="white"
              small
              @click.stop
              >{{ blog.category }}</v-chip
            >
            <h3 class="title font-weight-bold mb-2">{{ blog.title }}</h3>
            <div class="caption">
              {{ blog.author }}
              <br />Date
            </div>
          </v-flex>
          <v-flex align-self-end>
            <v-chip class="text-uppercase ma-0" color="primary" label small @click.stop
              >Read More</v-chip
            >
          </v-flex>
        </v-layout>
      </v-img>
    </base-card>
  </v-flex>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Feedcard',
  props: {
    hero: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      required: true
    },
    prominent: {
      type: Boolean,
      default: () => false // TODO Check to see if this needs to be a function return or just values is fine
    }
  },
  computed: {
    // TODO Figure out why class binding syntax is breaking in the template
    // classes() {
    //   return {
    //     md6: this.size === 2,
    //     md4: this.size === 3
    //   };
    // }
  }
});
</script>

<style>
/* .v-image__image {
  transition: 0.3s linear;
} */
</style>
