<template>
  <v-container id="social" tag="section" grid-list-xl>
    <v-layout wrap>
      <v-flex xs12 md4>
        <InstagramSocial />
      </v-flex>
      <v-flex xs12 md4>
        <NewestPosts />
      </v-flex>
      <v-flex xs12 md4>
        <ArticleTags />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import NewestPosts from '@/components/blog/NewestPosts.vue';
import InstagramSocial from '@/components/blog/InstagramSocial.vue';
import ArticleTags from '@/components/blog/ArticleTags.vue';

export default Vue.extend({
  name: 'SocialMedia',

  components: {
    NewestPosts,
    InstagramSocial,
    ArticleTags
  }
});
</script>
