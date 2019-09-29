import Posts from '../view/Posts.vue'
import Post from '../view/Post.vue'
import Add from '../view/Add.vue'

export default [
    {
        path:'/',
        component: Posts
    },
    {
        path:'/post/:id',
        component: Post
    },
    {
        path: '/add',
        component: Add
    }
]