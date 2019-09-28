import axios from 'axios'

export default {
    state: {
        proxi: 'https://cors-anywhere.herokuapp.com/',
        api: 'https://travelus.fun/api/v1/countries',
        posts: []
    },
    getters: {
        getAll: (state) => {
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
                        console.log(response.data.data)
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
}