import axios from 'axios'

export default {
    state: {
        proxi: 'https://cors-anywhere.herokuapp.com/',
        api: 'http://45.12.18.189',
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
                    .get(state.proxi + state.api + '/posts')
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
        create ({state, dispatch}, post) {
            axios
                .post(state.proxi + state.api + '/create/post', post)
                .then((response) => {
                    console.log(response)
                    dispatch('upload')
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        update ({state}, post) {
            axios
            .post(state.proxi + state.api + '/update/' + post.id, post)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
        },
        destroy ({state, dispatch}, id) {
            axios
            .delete(state.proxi + state.api + '/post/' + id)
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