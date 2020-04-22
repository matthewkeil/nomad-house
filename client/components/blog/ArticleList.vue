<template>
  <section>
    <feed>
      <slot />
    </feed>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import ArticleFeed from '@/components/blog/ArticleFeed.vue';

export default Vue.extend({
      components: {
        ArticleFeed
      }
})
</script>
