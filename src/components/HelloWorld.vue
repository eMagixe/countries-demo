<template>
    <v-container>
        <div v-for="post in posts" :key="post.id">
            {{ post.id }} - {{ post.title }}
        </div>
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    methods: {
        ...mapActions({
            upload: 'uploadData'
        })
    },
    created () {
        this.upload()
    },
    computed: {
        ...mapGetters({
            posts: 'getPosts'
        })
    }
}
</script>
