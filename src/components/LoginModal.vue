<template>
    <v-dialog :value="modaLogin" width="500" persistent>

        <v-card>

            <v-card-title class="headline secondary white--text " primary-title>
                Log In
            </v-card-title>


            <v-form ref="formLogin" @submit.prevent="sendData()" >

                <v-container grid-list-lg>
                    <v-layout wrap>

                        <v-flex xs12 md6>
                            <v-text-field v-model="username" label="Username"
                                          :rules="[rules.required]"
                            ></v-text-field>
                        </v-flex>


                        <v-flex xs12 md6>
                            <v-text-field v-model="password" label="Password"
                                          :rules="[rules.required, rules.min]"
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                </v-container>



                <v-card-actions class="mt-3">
                    <v-btn flat @click="dismissLogin()" color="secondary">
                        Cancel
                    </v-btn>

                    <v-btn flat @click="sendData()" color="secondary">
                        Enter
                    </v-btn>

                </v-card-actions>


            </v-form>

        </v-card>

    </v-dialog>


</template>

<script>
import { mapGetters } from 'vuex';

export default {

    data: () => ({
        dialog: false,
        username: '',
        password: '',
        rules: {
            required: v => !!v || 'Is required',
            min: v => v.length >= 8 || 'Min 8 characters',
        },
    }),
    computed: {
        ...mapGetters(['modaLogin']),
    },
    methods: {
        dismissLogin()
        {
            this.$store.commit('setModalLogin', false);
        },
        sendData()
        {
            if ( this.$refs.formLogin.validate() ) {
                alert('Form Validate');
            } else {
                alert('Form Invalidate');
            }

        },
    }

};
</script>

<style scoped>
</style>
