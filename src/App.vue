<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Demo</span>
        <span class="font-weight-light">Countries</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field v-model="searchQuery"></v-text-field>
      <v-btn
        text
        @click="search(searchQuery)"
      >
        <span class="mr-2">Поиск</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'App',
    data () {
        return {
            searchQuery: ''
        }
    },
    methods: {
        ...mapActions({
            search: 'search'
        })
    }
};
</script>
