<template>
    <v-app>
        <v-container fill-height fluid>
            <v-row justify="center" align="center">
                <v-col cols="4">
                    <div class="d-flex justify-content-center align-items-center custom-login-title">
                        <v-img max-width="120" src="/storage/assets/images/sarangcode_logo_only.png"/>
                        <v-divider class="mx-4" vertical></v-divider>
                        <div class="d-flex flex-column">
                            <h3><strong>Gadget Nepal</strong></h3>
                            <h4>OAuth2 Server - Login</h4>
                        </div>
                    </div>

                    <v-divider></v-divider>
                    <p>Welcome to login of Sarangcode OAuth2 Server. Enter the necessary credentials to continue.</p>
                    <v-divider></v-divider>
                    <v-form>
                        <v-text-field
                            :error-messages="usernameErrors"
                            v-model="email"
                            append-icon="fas fa-user"
                            autocomplete="on"
                            autofocus
                            color="#2E897B"
                            label="Username"
                            outlined
                            placeholder="Enter username"
                            v-on:keyup.enter="login"
                            hint="sarangcode@gmail.com"
                            @input="$v.email.$touch()"
                            @blur="$v.email.$touch()"
                        ></v-text-field>
                        <v-text-field
                            :error-messages="passwordErrors"
                            v-model="password"
                            :append-icon="showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"
                            :type="showPassword ? 'text' : 'password'"
                            @click:append="showPassword = !showPassword"
                            autocomplete="on"
                            color="#2E897B"
                            label="Password"
                            outlined
                            placeholder="Enter password"
                            v-on:keyup.enter="login"
                            @input="$v.password.$touch()"
                            @blur="$v.password.$touch()"
                        ></v-text-field>
                        <v-divider></v-divider>
                        <v-btn block class="ma-2 secondary-button-background" dark x-large
                               @click="login">
                            <span>Login</span>
                        </v-btn>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
import {validationMixin} from 'vuelidate'
import {email, minLength, required} from "vuelidate/lib/validators";

export default {
    mixins: [validationMixin],
    name: "Login",
    data() {
        return {
            email: "er.ajeebrimal@gmail.com",
            password: "password",
            showPassword: false,
        };
    },
    validations: {
        email: {required, email},
        password: {required, minLength: minLength(8)}
    },
    methods: {
        login() {
            const temp = this;
            this.$store.dispatch('loginOrRegister', {
                route: "login",
                data: {
                    email: temp.email,
                    password: temp.password,
                }
            }).then(function (response) {
                temp.$store.commit('SET_USER', response.data.data.user);
                temp.$store.commit('SET_ACCESS_TOKEN', response.data.data.accessToken);
                temp.$router.push("/");
            }).catch(function (error) {
                console.log(error);
            });
        }
    },}
</script>

<style scoped>

</style>
