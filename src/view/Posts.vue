<template>
    <v-container>
            <v-card
                class="mx-auto mb-3"
                max-width="100%"
                v-for="post in posts" :key="post.id"
            >
            <v-img
                :src="post.image"
                height="200px"
            ></v-img>

            <v-card-title>
                <h3>{{ post.title }}</h3>
            </v-card-title>

            <v-card-text>
                <p class="grey--text subtitle-1">{{ post.description }}</p>
            </v-card-text>

            <v-card-actions>
                <v-btn :to="'/post/' + post.id" text>Подробнее</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    methods: {
        ...mapActions({
            upload: 'upload',
            destroy: 'destroy'
        })
    },
    created () {
        this.upload()
    },
    computed: {
        ...mapGetters({
            posts: 'getAll'
        })
    }
}
</script>
