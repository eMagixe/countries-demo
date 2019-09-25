<template>
    <v-container>
        <div v-for="post in uploadPosts" :key="post.id">
            {{ post.title }}
        </div>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            posts: []
        }
    },
    created () {
        this.$store.dispatch('uploadData')
    },
    computed: {
        uploadPosts () {
            return this.$store.getters.getPosts
        }
    }
}
</script>
