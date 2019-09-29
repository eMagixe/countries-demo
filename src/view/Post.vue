<template>
    <v-container>
            <v-card v-if="view"
                class="mx-auto mb-3"
                max-width="100%"
            >
            <v-img
                :src="view.image"
                height="400px"
            ></v-img>

            <v-card-title>
                <h4>{{ view.title }}</h4>
            </v-card-title>

            <v-card-text>
                <p class="subtitle-1">{{ view.description }}</p>
                <p class="grey--text subtitle-3">Опубликовано: {{ view.created_at }}</p>
            </v-card-text>

            <v-card-text>
                <div v-html="view.content"></div>
            </v-card-text>

            <v-card-actions>
                <v-btn
                text
                color="purple"
                @click="destroy(view.id)"
                >
                Удалить
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data () {
        return {
            view: false
        }
    },
    created() {
        this.show(this.$route.params.id)
        let currentPosts = this.$store.getters.getCurrent
        if(currentPosts[0]) this.view  = currentPosts[0]
        console.log(this.view)
    },
    methods: {
        ...mapActions({
            show:'show'
        })
    }
}
</script>
