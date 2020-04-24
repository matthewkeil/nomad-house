<template>
  <v-container pa-0>
    <BaseSubheading>Newest Blog Posts</BaseSubheading>
    <v-layout v-for="(article, i) in articles.slice(11, 14)" :key="i" align-center mb-2>
      <v-flex xs12 d-flex>
        <v-img
          :src="require(`@/assets/demo/articles/${article.hero}`)"
          class="mr-3"
          height="36"
          max-width="36"
        />
        <div>
          <div class="subheading">Article Title</div>
          <div class="caption">Date</div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
// Utilities
import { mapState } from 'vuex';
import Vue from 'vue';
import BaseSubheading from '@/components/base/BaseSubheading.vue';

export default Vue.extend({
  name: 'NewestPosts',
  components: {
    BaseSubheading
  },
  computed: {
    ...mapState(['articles'])
  }
});
</script>
