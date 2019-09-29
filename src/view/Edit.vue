<template>
  <v-container>
        <h2>Edit</h2>
        <v-form  v-model="valid" >
            <v-text-field
            v-model="post.title"
            label="Title"
            :rules="rules"
            ></v-text-field>
            <v-text-field
            v-model="post.image"
            label="Image"
            :rules="rules"
            ></v-text-field>
            <v-text-field
            v-model="post.slug"
            label="Slug"
            :rules="rules"
            ></v-text-field>
            <v-text-field
            v-model="post.description"
            label="Description"
            :rules="rules"
            ></v-text-field>
            <v-textarea
            class="mt-3"
            outlined
            v-model="post.content"
            label="Content"
            :rules="rules"
            ></v-textarea>
            <v-btn :disabled="!valid" @click="updatePost" dark>Update</v-btn>
             <v-btn class="ml-3" to="/">Назад</v-btn>
        </v-form>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data () {
        return {
            post: {
                        id: '',
                        image: '',
                        title: '',
                        slug: '',
                        description: '',
                        content: ''
                    },
            rules: [
                value => !!value || 'Required.'
            ],
            valid: false
        }
    },
    created() {
        this.show(this.$route.params.id)
        let currentPosts = this.$store.getters.getCurrent
        if(currentPosts[0]) this.post = currentPosts[0]
    },
    methods: {
        ...mapActions({
            update: 'update',
            show:'show'
        }),
        updatePost () {
            this.update(this.post)
        }
    }
}
</script>