import axios from 'axios'

export default {
    state: {
        proxi: 'https://cors-anywhere.herokuapp.com/',
        api: 'https://travelus.fun/api/v1/countries',
        posts: [],
        current: {}
    },
    getters: {
        getAll: (state) => {
            return state.posts
        },
        getCurrent: (state) => {
            return state.current
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
                    .get(state.proxi + 'http://45.12.18.189/posts')
                    .then(response => {
                        commit('setPosts', response.data)
                    })
                    .catch(error => {
                        console.error(error)
                    })
        },
        show ({state}, id) {
            state.current = state.posts.filter((post) => {
                return post.id == id || false
            })
        },
        create ({state}, post) {
            axios
                .post(state.proxi + 'http://45.12.18.189/create/post', post)
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error)
                });
        },
        destroy ({state, dispatch}, id) {
            axios
            .delete(state.proxi + 'http://45.12.18.189/post/' + id)
            .then(response => {
                dispatch('upload')
                console.log(response)
            })
            .catch(error => {
                console.error(error)
            })
        },
        search ({commit, dispatch}, query) {
            if(query === '') dispatch('upload')
            else commit('searchPosts', query)
        }
    }
}