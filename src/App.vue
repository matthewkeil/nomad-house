<template>
  <v-app>
    <v-content>
    <LearningPage>
    </LearningPage>
    </v-content>
  </v-app>
</template>

<script>
import LearningPage from './components/LearningPage';
export default {
  name: 'App',

  components: {
    LearningPage,
  },

  data: () => ({
    //
  }),
};
</script>
