import { createApp } from "vue";
import App from "./App.vue";
import store from "@/store/index";
import router from "@/router/router";
import TheButton from "@/components/ui/TheButton.vue";
import TheCard from "@/components/ui/TheCard.vue";
import TheContainer from "@/components/ui/TheContainer.vue";
import TheBigContainer from "@/components/ui/TheBigContainer.vue";
import TheGrid from "@/components/ui/TheGrid.vue";
import TheSpinner from "@/components/ui/TheSpinner.vue";
import TheTitle from "@/components/ui/TheTitle.vue";
import PagePadding from "@/components/ui/PagePadding.vue";
import ConfirmModal from "@/components/ui/ConfirmModal.vue";
import CustomTextInput from "@/components/ui/CustomTextInput.vue";

import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

import "vuetify/styles";

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
    components,
    directives,
});

const app = createApp(App);

app.use(store);
app.use(router);
store.dispatch("authModule/checkLocalStorageLogin");
store.dispatch("cartModule/initCartFromLocalStorage");
app.use(vuetify);
app.use(Toast, {
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true,
});
app.component("TheSpinner", TheSpinner);
app.component("TheButton", TheButton);
app.component("TheCard", TheCard);
app.component("TheContainer", TheContainer);
app.component("TheBigContainer", TheBigContainer);
app.component("TheGrid", TheGrid);
app.component("TheTitle", TheTitle);
app.component("PagePadding", PagePadding);
app.component("ConfirmModal", ConfirmModal);
app.component("CustomTextInput", CustomTextInput);
app.mount("#app");
