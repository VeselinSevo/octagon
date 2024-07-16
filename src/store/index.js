// store/index.js
import { createStore } from "vuex";
import courseModule from "./courses/index";
import authModule from "./auth/index";
import cartModule from "./cart/index";

export default createStore({
    modules: {
        courseModule,
        authModule,
        cartModule,
    },
});
