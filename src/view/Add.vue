<template>
  <v-container>
        <h1>Add new Post</h1>
        <v-form  v-model="valid" >
            <v-text-field
            v-model="post.title"
            label="Title"
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
            <v-btn :disabled="!valid" @click="add" dark>Create</v-btn>
        </v-form>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data () {
        return {
            post: {
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
    methods: {
        ...mapActions({
            create: 'create'
        }),
        add () {
            this.create(this.post)
            this.$router.push('/')
        }
    }
}
</script>