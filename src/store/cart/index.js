// cart/index.js
const cartModule = {
    namespaced: true,
    state: {
        cartItems: [],
    },
    mutations: {
        setCartItems(state, cartItems) {
            state.cartItems = cartItems;
        },
        addToCart(state, course) {
            // Check if the course is already in cart
            const existingCourse = state.cartItems.find(
                (item) => item.id === course.id
            );
            if (!existingCourse) {
                state.cartItems.push(course);
                localStorage.setItem("cart", JSON.stringify(state.cartItems));
            }
        },
        removeFromCart(state, courseId) {
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== courseId
            );
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
    },
    actions: {
        initCartFromLocalStorage({ commit }) {
            const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
            commit("setCartItems", cartItems);
        },
        addToCart(context, course) {
            context.commit("addToCart", course);
        },
        removeFromCart(context, courseId) {
            context.commit("removeFromCart", courseId);
        },
    },
    getters: {
        cartItems(state) {
            return state.cartItems;
        },
        cartTotal(state) {
            return state.cartItems
                .reduce((total, item) => total + item.price, 0)
                .toFixed(2);
        },
        cartTotalItems(state) {
            return state.cartItems.length;
        },
    },
};

export default cartModule;
