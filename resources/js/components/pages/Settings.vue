<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <authorized-clients/>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <clients/>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <personal-access-tokens/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "Settings",
    data() {
        return {}
    },
    methods: {},
    created() {
    }
}
</script>

<style scoped>

</style>
