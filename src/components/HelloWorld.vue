<template>
    <v-container>
            <v-card
                class="mx-auto mb-3"
                max-width="100%"
                v-for="post in posts" :key="post.id"
            >
            <v-img
                :src="'http://travelus.fun/' + post.arcane_seo_options.og_ref_image"
                height="200px"
            ></v-img>

            <v-card-title>
                <h4>{{ post.title }}</h4>
            </v-card-title>

            <v-card-text>
                <p class="grey--text subtitle-1">{{ post.excerpt }}</p>
            </v-card-text>

            <v-card-actions>
                <v-btn text>Share</v-btn>

                <v-btn
                text
                color="purple"
                >
                Explore
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
                <v-card-text v-html="post.content_html">
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
            upload: 'upload'
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
