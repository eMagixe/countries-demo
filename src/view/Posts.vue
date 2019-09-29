<template>
    <v-container>
            <v-card
                class="mx-auto mb-3"
                max-width="100%"
                v-for="post in posts" :key="post.id"
            >
            <v-img
                src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
                height="200px"
            ></v-img>

            <v-card-title>
                <h4>{{ post.title }}</h4>
            </v-card-title>

            <v-card-text>
                <p class="grey--text subtitle-1">{{ post.description }}</p>
            </v-card-text>

            <v-card-actions>
                <v-btn text>Редактировать</v-btn>

                <v-btn
                text
                color="purple"
                @click="destroy(post.id)"
                >
                Удалить
                </v-btn>

                <div class="flex-grow-1"></div>

                <v-btn
                icon
                @click="show = !show"
                >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
            </v-card-actions>

            <v-expand-transition>
                <div v-show="show">
                <v-card-text v-html="post.content">
                </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    data () {
        return {
            show: false
        }
    },
    methods: {
        ...mapActions({
            upload: 'upload',
            destroy: 'destroy'
        })
    },
    created () {
        this.upload()
    },
    updated () {
        this.upload()
    },
    computed: {
        ...mapGetters({
            posts: 'getAll'
        })
    }
}
</script>
