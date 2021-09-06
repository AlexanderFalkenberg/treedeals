import Vue from "vue/dist/vue.js";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
    en: {
        "Schnäppchen und Gutscheine": "Discounts and Coupons",
        "Unseren Gewinn investieren wir in Baumbestände weltweit":
            "We invest our profit into treeprojects around the world",
        "Große Auswahl nachhaltiger Produkte":
            "Wide range of sustainable products"
    },
    ru: {},
    de: {
        "Schnäppchen und Gutscheine": "Schnäppchen und Gutscheine",
        "Unseren Gewinn investieren wir in Baumbestände weltweit":
            "Unseren Gewinn investieren wir in Baumbestände weltweit",
        "Große Auswahl nachhaltiger Produkte":
            "Große Auswahl nachhaltiger Produkte"
    }
};

export let i18n = new VueI18n({
    locale: `${process.env.MIX_APP_LOCALE}`,
    fallbackLocale: "de",
    messages // set locale messages
});
