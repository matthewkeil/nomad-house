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
  },
  data() {
    return {
      articles: [
        {
          title: 'Moroccan Days',
          author: 'John L',
          category: 'Travel',
          hero: 'moroccandays.jpg'
        },
        {
          title: 'Swedish Fishing',
          author: 'Rachel L',
          category: 'Leisure',
          hero: 'autumnclouds.jpg'
        },
        {
          title: 'The Adventure Begins',
          hero: 'snowcup.jpg',
          prominent: true
        },
        {
          title: 'Paris in Spring',
          author: 'John L',
          category: 'Travel',
          hero: 'christmas.jpg'
        },
        {
          title: 'Youthful Independence',
          author: 'Rachel L',
          category: 'Political',
          hero: 'july4.jpg'
        },
        {
          title: 'Trial By Fire',
          author: 'Anthony R',
          category: 'Cooking',
          hero: 'firepots.jpg'
        },
        {
          title: 'Water Ventures',
          author: 'Rachel L',
          category: 'Leisure',
          hero: 'jellyfish.jpg'
        },
        {
          title: 'Mt. Zekial',
          author: 'Rachel L',
          category: 'Travel',
          hero: 'mountaincabin.jpg'
        },
        {
          title: 'Cozumel Caves',
          author: 'Rachel L',
          category: 'Travel',
          hero: 'lightcave.jpg'
        },
        {
          title: 'Amazing Ireland',
          author: 'Rachel L',
          category: 'Travel',
          hero: 'greengrass.jpg'
        },
        {
          title: 'Cabin Fever',
          author: 'Rachel L',
          category: 'Travel',
          hero: 'snowcabin.jpg'
        },
        {
          title: 'To the ancient ruins',
          author: 'Rachel L',
          category: 'Travel',
          hero: 'ruins.jpg'
        },
        {
          title: 'New fashion trends',
          author: 'Rachel L',
          category: 'Travel',
          hero: 'umbrella.jpg'
        },
        {
          title: 'Go on a vacation',
          author: 'Rachel L',
          category: 'Travel',
          hero: 'adventurecave.jpg'
        }
      ]
    };
  }
});
</script>
