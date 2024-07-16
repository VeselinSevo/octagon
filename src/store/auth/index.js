// store/modules/authModule.js
export default {
    namespaced: true,
    state: {
        isLoggedIn: false,
        user: null,
    },
    mutations: {
        setIsLoggedIn(state, payload) {
            state.isLoggedIn = payload;
        },
        setUser(state, payload) {
            state.user = payload;
        },
    },
    actions: {
        async setIsLoggedIn(context, payload) {
            context.commit("setIsLoggedIn", payload);
        },
        login(context, payload) {
            // Clear user authentication state
            context.commit("setIsLoggedIn", true);
            context.commit("setUser", payload);

            // Remove user data from local storage
            localStorage.setItem("email", payload.email);
            localStorage.setItem("username", payload.username);
            localStorage.setItem("password", payload.password);
        },
        logout({ commit }) {
            // Clear user authentication state
            commit("setIsLoggedIn", false);
            commit("setUser", null);

            // Remove user data from local storage
            localStorage.removeItem("email");
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        },
        checkLocalStorageLogin(context) {
            const username = localStorage.getItem("username");
            const password = localStorage.getItem("password");
            const email = localStorage.getItem("email");
            if (username && password && email) {
                // Assuming you have a way to verify these credentials,
                // here you just set the state to logged in if they exist
                context.commit("setIsLoggedIn", true);
            } else {
                context.commit("setIsLoggedIn", false);
            }
        },
    },
    getters: {
        getIsLoggedIn(state) {
            return state.isLoggedIn;
        },
    },
};
