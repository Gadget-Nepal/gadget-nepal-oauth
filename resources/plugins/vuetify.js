import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

const opts = {
    theme: {
        themes: {
            light: {
                primary: "#2E897B",
                secondary: "#FF9800",
                accent: "#FF5722",
                error: colors.red,
                success: colors.green
            },
            dark: {
                primary: "#2E897B",
                secondary: "#21695C",
                accent: "#FF5722",
                error: colors.red,
                success: colors.green
            },
        },
    },
    icons: {
        iconfont: 'fa',
    },
}

export default new Vuetify({
});
