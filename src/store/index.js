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
        }
    },
    actions: {
        uploadData ({commit,state}) {
            axios
                .get(state.proxi + state.api)
                .then(response => {
                        commit('setPosts', response.data.data)
                    })
                .catch(error => {
                    console.log(error);
                    })
        }
    }
})