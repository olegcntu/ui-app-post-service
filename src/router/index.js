import About from "../pages/about/About";
import Posts from "../pages/Posts/Posts";
import PostIdPage from "../pages/post/PostIdPage";
import Login from "../pages/login/Login";

export const publicRoutes = [
    {path: '/about', component: About, exact: true},
    {path: '/posts', component: Posts, exact: true},
    {path: '/login', component: Login, exact: true},
]

export const privateRoutes = [
    {path: '/posts/:id', component: PostIdPage, exact: true},
    {path: '/about', component: About, exact: true},
    {path: '/posts', component: Posts, exact: true},
]