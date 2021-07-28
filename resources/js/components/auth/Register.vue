<template>
    <v-app>
        <v-container fill-height fluid>
            <v-row justify="center" align="center">
                <v-col cols="4">
                    <div class="d-flex justify-content-center align-items-center custom-login-title">
                        <v-img max-width="120" src="/storage/assets/images/sarangcode_logo_only.png"/>
                        <v-divider class="mx-4" vertical></v-divider>
                        <div class="d-flex flex-column">
                            <h3><strong>Sarangcode Technology</strong></h3>
                            <h4>OAuth2 Server - Register</h4>
                        </div>
                    </div>

                    <v-divider></v-divider>
                    <p>Welcome to registration of user in Sarangcode OAuth. Enter the necessary credentials to
                        continue.</p>
                    <v-divider></v-divider>
                    <v-form>
                        <v-text-field
                            :error-messages="nameErrors"
                            v-model="name"
                            append-icon="fas fa-user"
                            autocomplete="on"
                            autofocus
                            color="#2E897B"
                            label="Name"
                            outlined
                            placeholder="Enter Name"
                            hint="Sarangcode Technology"
                            @input="$v.name.$touch()"
                            @blur="$v.name.$touch()"
                        ></v-text-field>
                        <v-text-field
                            :error-messages="usernameErrors"
                            v-model="email"
                            append-icon="fas fa-envelope"
                            autocomplete="on"
                            autofocus
                            color="#2E897B"
                            label="Username"
                            outlined
                            placeholder="Enter username"
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
                            @input="$v.password.$touch()"
                            @blur="$v.password.$touch()"
                        ></v-text-field>
                        <v-text-field
                            :error-messages="confirmPasswordErrors"
                            v-model="password_confirmation"
                            :append-icon="showConfirmPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"
                            :type="showConfirmPassword ? 'text' : 'password'"
                            @click:append="showConfirmPassword = !showConfirmPassword"
                            autocomplete="on"
                            color="#2E897B"
                            label="Confirm Password"
                            outlined
                            placeholder="Enter confirm password"
                            @input="$v.password_confirmation.$touch()"
                            @blur="$v.password_confirmation.$touch()"
                        ></v-text-field>
                        <v-divider></v-divider>
                        <v-btn block class="ma-2 secondary-button-background" dark x-large
                               @click="register">
                            <span>Register</span>
                        </v-btn>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
    </v-app>

</template>

<script>
import {validationMixin} from 'vuelidate'
import {email, minLength, required, sameAs} from "vuelidate/lib/validators";


export default {
    mixins: [validationMixin],
    name: "Login",
    data() {
        return {
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
            showPassword: false,
            showConfirmPassword: false,
        };
    },
    validations: {
        name: {required},
        email: {required, email},
        password: {required, minLength: minLength(8)},
        password_confirmation: {required, sameAsPassword: sameAs('password')},
    },
    computed: {
        nameErrors() {
            const errors = [];
            if (!this.$v.name.$dirty) return errors;
            !this.$v.name.required && errors.push('Name is required.');
            return errors;
        },
        usernameErrors() {
            const errors = [];
            if (!this.$v.email.$dirty) return errors;
            !this.$v.email.required && errors.push('Username is required.');
            !this.$v.email.email && errors.push('Enter a valid email format.');
            return errors;
        },
        passwordErrors() {
            const errors = [];
            if (!this.$v.password.$dirty) return errors;
            !this.$v.password.required && errors.push('Password is required.');
            !this.$v.password.minLength && errors.push('Password must be minimum 8 characters.');
            return errors;
        },
        confirmPasswordErrors() {
            const errors = [];
            if (!this.$v.password_confirmation.$dirty) return errors;
            !this.$v.password_confirmation.required && errors.push('Confirm Password is required.');
            !this.$v.password_confirmation.sameAsPassword && errors.push('Password doesn\'t match');
            return errors;
        }
    },

    methods: {
        register() {
            const temp = this;
            this.$store.dispatch('loginOrRegister', {
                route: "register",
                data: {
                    name: temp.name,
                    email: temp.email,
                    password: temp.password,
                    password_confirmation: temp.password_confirmation,
                }
            }).then(function (response) {
                temp.$router.push("/login");
            }).catch(function (error) {
                console.log(error);
            });
        }

    },

}
</script>

<style scoped>

</style>
