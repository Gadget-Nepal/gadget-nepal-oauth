<template>
    <v-app>
        <app-bar/>
        <!-- Sizes your content based upon application components -->
        <v-main>
            <!-- Provides the application the proper gutter -->
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-main>
        <v-footer app>
            <!-- -->
        </v-footer>
    </v-app>

</template>

<script>
export default {
    methods: {
        getUsers() {
            this.$store.dispatch('makeGetRequest', {
                route: "users"
            }).then(function (response) {
                console.log(response)
            }).catch(function (error) {
                console.log(error)
            });
        },

    },

}
</script>

<style scoped lang="scss">
.v-tabs {
    .v-tab {
        text-decoration: none;
    }
}
.v-list{
    .v-list-item{
        text-decoration: none;
    }
}


</style>
