<template>
    <v-app-bar app color="primary" dark dense elevate-on-scroll flat>
        <v-app-bar-title><h5><strong>OAuth2 Server</strong></h5></v-app-bar-title>
        <v-tabs right>
            <v-tab to="/settings">
                <v-icon left>fas fa-cog</v-icon>
                Settings
            </v-tab>
            <v-menu v-model="menu" :close-on-content-click="false" offset-overflow offset-y
                    origin="center center"
                    transition="slide-x-reverse-transition">
                <template v-slot:activator="{ on, attrs }">
                    <v-tab v-bind="attrs" v-on="on" small text>
                        <v-icon>fas fa-user-circle</v-icon>
                    </v-tab>
                </template>
                <v-expand-transition/>
                <v-container class="pa-0 ma-0" flat>
                    <v-list class="pa-0 ma-0" dense>
                        <v-list-item>
                            <v-list-item-avatar>
                                <v-img height="100%" src="/storage/assets/images/sarangcode_logo_only.png"></v-img>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title class="pa-0 ma-0"><h5>Sarangcode Technology</h5>
                                </v-list-item-title>
                                <v-list-item-subtitle><h6>OAuth2 Server</h6></v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider class="pa-0 ma-0"></v-divider>
                        <v-list-item :to="'/change-password'" router @click="menu = !menu">
                            <v-list-item-icon>
                                <v-icon>fas fa-key</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Change Password</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="logout(), menu = !menu">
                            <v-list-item-icon>
                                <v-icon>fas fa-sign-out-alt</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Logout</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-container>
            </v-menu>
        </v-tabs>
    </v-app-bar>

</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: "AppBar"
    data() {
        return {
            menu: false,
        }
    },
    methods: {
        logout() {
            var mypointer = this;
            this.$store
                .dispatch("logout")
                .then(function (response) {
                    if (response.data.status == 200) {
                        mypointer.$router.push("/login").catch(() => {
                        });
                    }
                })
        },
    },
    computed: {
        ...mapGetters({
            user: 'GET_USER'
        })
    }

}
</script>

<style scoped>

</style>
