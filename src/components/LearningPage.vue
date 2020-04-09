<template>
<v-app>
    <v-content>
        <v-card>
            <v-img class="mx-auto" max-height="500px" :src="require('../assets/Logo.png')" />
            <v-card-title>
                Title
            </v-card-title>
            <v-card-subtitle>
                Subtitle: Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem delectus modi dolor facilis sed minus a nesciunt, nulla, nobis numquam, consectetur eveniet? Omnis, quia vel suscipit cumque error sed eligendi?
            </v-card-subtitle>
<v-tabs
      v-model="active"
      color="cyan"
      dark
      slider-color="yellow"
    >
      <v-tab>
          Graphs
      </v-tab>
      <v-tab>
          Graphs
      </v-tab>
      <v-tab>
          Graphs
      </v-tab>
    </v-tabs>
        </v-card>
    </v-content>
</v-app>
</template>

<script>
export default {
  name: 'LearningPage'
}
</script>

<style>

</style>