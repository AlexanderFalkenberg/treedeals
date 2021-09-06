require("./bootstrap");

import Vue from "vue";
import VueCompositionApi from "@vue/composition-api";
import VueRichTextRenderer from "@marvr/storyblok-rich-text-vue-renderer";
import { createInertiaApp } from "@inertiajs/inertia-vue";
import { ZiggyVue } from "ziggy";
import VueI18n from "vue-i18n";
import MasonryWall from "@yeger/vue2-masonry-wall";

Vue.use(VueI18n);
Vue.use(VueCompositionApi);
Vue.use(MasonryWall);
Vue.use(VueRichTextRenderer);
Vue.use(ZiggyVue);

import { i18n } from "./plugins/i18n";

createInertiaApp({
    resolve: name => import(`./Pages/${name}`),
    setup({ el, App, props }) {
        new Vue({
            i18n,
            render: h => h(App, props)
        }).$mount(el);
    }
});
