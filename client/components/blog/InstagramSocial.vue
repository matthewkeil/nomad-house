<template>
  <v-container pa-0 grid-list-md>
    <BaseSubheading>On Instagram</BaseSubheading>
    <v-layout wrap>
      <v-flex v-for="(post, i) in posts" :key="i" xs4>
        <BaseCard tag="a" :href="post.href" height="88" color="grey lighten-2">
          <v-img
            v-if="post.src"
            height="100%"
            :src="require(`@/assets/demo/instagram/${post.src}`)"
          />
        </BaseCard>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import BaseSubheading from '@/components/base/BaseSubheading.vue';
import BaseCard from '@/components/base/BaseCard.vue';

export default Vue.extend({
  name: 'InstagramSocial',
  components: {
    BaseSubheading,
    BaseCard
  },
  data: () => ({
    posts: [
      { src: 'adventurealtitude.jpg' },
      { src: 'garden.jpg' },
      { src: 'pigduck.jpg' },
      { src: 'rain.jpg' },
      { src: 'spices.jpg' },
      { src: 'sunset.jpg' }
    ]
  })
});
</script>
