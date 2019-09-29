<template>
  <v-app>
    <v-app-bar dark app>
      <v-toolbar-title class="headline text-uppercase">
          <router-link to="/" tag="div" style="cursor:pointer">
            <span>Demo</span>
            <span class="font-weight-light">Countries</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <v-col cols="12" sm="6" md="3">
            <v-text-field
                v-model="searchQuery"
                @keyup.enter="searchCountry(searchQuery)"
                hide-details
                prepend-icon="mdi-magnify"
                single-line
            ></v-text-field>
        </v-col>
        <v-btn to="/add" class="mx-2" small outlined fab>
            <v-icon dark>mdi-plus</v-icon>
        </v-btn>
    </v-app-bar>

    <v-content  xs="12" sm="6" md="3">
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
        ...mapActions ({
            search: 'search'
        }),
        searchCountry(searchQuery) {
            this.search(searchQuery)
           this.$router.push('/')
        }
    }
};
</script>
