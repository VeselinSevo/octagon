import { createWebHistory, createRouter } from "vue-router";
import store from "@/store/index"; // Adjust the import path to your store
import HomeView from "@/components/views/HomeView.vue";
import MyLearningView from "@/components/views/MyLearningView.vue";
import BrowsedCoursesView from "@/components/views/BrowsedCoursesView.vue";
import CourseView from "@/components/views/CourseView.vue";
import FirebaseView from "@/components/views/FirebaseView.vue";
import AdminView from "@/components/views/AdminView.vue";
import AdminPanel from "@/components/views/AdminPanel.vue";
import LoginView from "@/components/views/LoginView.vue";
import RegisterView from "@/components/views/RegisterView.vue";
import UserView from "@/components/views/UserView.vue";
import CheckoutUserInfoView from "@/components/views/CheckoutUserInfoView.vue";
import CartView from "@/components/views/CartView.vue";
import DisplayUsers from "@/components/views/DisplayUsersPanel.vue";
import DisplayCourses from "@/components/views/DisplayCoursesPanel.vue";
import AddUserPanel from "@/components/views/AddUserPanel.vue";
import { getUserRole, getUserByEmail } from "../../firebaseFunctions";

const routes = [
    {
        path: "/",
        component: UserView,
        name: "user",
        children: [
            { path: "", redirect: { name: "home" } },
            { path: "home", component: HomeView, name: "home" },
            {
                path: "my-learning",
                component: MyLearningView,
                name: "my-learning",
                beforeEnter: (to, from, next) => {
                    if (store.getters["authModule/getIsLoggedIn"]) {
                        next();
                    } else {
                        next({ name: "login" });
                    }
                },
            },
            {
                path: "cart",
                component: MyLearningView,
                name: "cart",
                beforeEnter: (to, from, next) => {
                    if (store.getters["authModule/getIsLoggedIn"]) {
                        next();
                    } else {
                        next({ name: "login" });
                    }
                },
            },
            {
                path: "profile",
                component: MyLearningView,
                name: "profile",
                beforeEnter: (to, from, next) => {
                    if (store.getters["authModule/getIsLoggedIn"]) {
                        next();
                    } else {
                        next({ name: "login" });
                    }
                },
            },
            { path: "courses", component: BrowsedCoursesView, name: "courses" },
            { path: "courses/:id", component: CourseView, name: "course" },
            {
                path: "login",
                component: LoginView,
                name: "login",
                beforeEnter: (to, from, next) => {
                    if (store.getters["authModule/getIsLoggedIn"]) {
                        next({ name: "home" });
                    } else {
                        next();
                    }
                },
            },
            {
                path: "register",
                component: RegisterView,
                name: "register",
                beforeEnter: (to, from, next) => {
                    if (store.getters["authModule/getIsLoggedIn"]) {
                        next({ name: "home" });
                    } else {
                        next();
                    }
                },
            },
            { path: "cart", component: CartView, name: "cart" },
            {
                path: "checkout",
                component: CheckoutUserInfoView,
                name: "checkout",
            },
        ],
    },
    {
        path: "/admin",
        component: AdminView,
        name: "admin",
        // Uncomment and adjust the following beforeEnter if you need to check for admin role
        beforeEnter: async (to, from, next) => {
            try {
                // const userId =
                //     localStorage.getItem("id") ||
                //     store.getters["authModule/getIsLoggedIn"];
                const email = localStorage.getItem("email");
                const user = await getUserByEmail(email);

                console.log("User email: ", email);
                console.log("User: ", user);
                if (user) {
                    const userRole = await getUserRole(user.role_id);
                    if (userRole === "admin") {
                        next();
                    } else {
                        next({ name: "home" });
                    }
                } else {
                    next({ name: "home" });
                }
            } catch (error) {
                console.log(error);
            }
        },
        children: [
            { path: "", redirect: { name: "admin-home" } },
            { path: "home", component: HomeView, name: "admin-home" },
            {
                path: "my-learning",
                component: MyLearningView,
                name: "admin-my-learning",
            },
            {
                path: "courses",
                component: BrowsedCoursesView,
                name: "admin-courses",
            },
            {
                path: "courses/:id",
                component: CourseView,
                name: "admin-course",
            },
            {
                path: "firebase",
                component: FirebaseView,
                name: "admin-firebase",
            },
            {
                path: "admin-panel",
                component: AdminPanel,
                name: "admin-panel",
                children: [
                    {
                        path: "users/add",
                        component: AddUserPanel,
                    },
                    {
                        path: "users/display",
                        component: DisplayUsers,
                    },
                    // {
                    //     path: "users/edit/:id",
                    //     component: EditUserPanel,
                    // },
                    // {
                    //     path: "courses/add",
                    //     component: AddCourse,
                    // },
                    {
                        path: "courses/display",
                        component: DisplayCourses,
                    },
                ],
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
