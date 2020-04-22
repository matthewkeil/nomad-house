<template>
    <div>
    <articles>
      <!-- <banner /> -->
    </articles>
    <!-- <about />
    <subscribe />
    <social /> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ArticleList from '@/components/blog/ArticleList.vue';
// // import ArticleFeed from '@/components/blog/ArticleFeed.vue';

export default Vue.extend({
  layout: 'base',

  components: {
    ArticleList
      // About: () => import('@/components/home/About'),
      // Banner: () => import('@/components/home/Banner'),
      // Social: () => import('@/components/home/Social'),
      // Subscribe: () => import('@/components/home/Subscribe')
    }
});
</script>
