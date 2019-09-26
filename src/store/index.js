import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        proxi: 'https://cors-anywhere.herokuapp.com/',
        api: 'https://travelus.fun/api/v1/countries',
        posts: []
    },
    getters: {
        getPosts: (state) => {
            return state.posts
        }
    },
    mutations: {
        setPosts (state, posts) {
            state.posts = posts
        },
        searchPosts (state, query) {
            state.posts = state.posts.filter((post) => {
                return post.title.indexOf(query) !== -1 || false
            })
        }
    },
    actions: {
        upload ({commit, state}) {
            axios
                .get(state.proxi + state.api)
                .then(response => {
                        commit('setPosts', response.data.data)
                    })
                .catch(error => {
                    console.error(error);
                    })
        },
        search ({commit, dispatch}, query) {
            if(query === '') dispatch('upload')
            else commit('searchPosts', query)
        }
    }
})