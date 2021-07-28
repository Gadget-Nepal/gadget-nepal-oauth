import Vue from "vue";
import VueRouter from "vue-router"
import store from "./store"


Vue.use(VueRouter)

const App = ()=> import("./components/App");
const Login = () => import("./components/auth/Login");
const Register = () => import("./components/auth/Register");
const Settings = () => import("./components/pages/Settings");

const opts = {
    mode: "history",
    routes: [
        {
            path: "/",
            component: App,
            beforeEnter(to, from, next) {
                if (store.getters.GET_ACCESS_TOKEN) {
                    next();
                } else {
                    next("/login");
                }
            },
            children: [
                {
                    path: "",
                    component: Settings
                },
                {
                    path: "settings",
                    component: Settings
                }
            ]
        },
        {
            path: "/login",
            beforeEnter(to, from, next) {
                if (store.getters.GET_ACCESS_TOKEN) {
                    next("/");
                } else {
                    next();
                }
            },
            component: Login,
        },
        {
            path: "/register",
            beforeEnter(to, from, next) {
                if (store.getters.GET_ACCESS_TOKEN) {
                    next("/");
                } else {
                    next();
                }
            },
            component: Register,
        },
    ]
}
export default new VueRouter(opts)
