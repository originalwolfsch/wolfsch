<template>
    <v-dialog v-model="dialog" width="500" class="hidden-sm-and-down">

        <v-btn flat slot="activator">Login</v-btn>
        <v-card>

            <v-card-title class="headline secondary white--text " primary-title>
                Login
            </v-card-title>

            <v-card-text>
            <v-form ref="form">
                    <v-text-field v-model="username" label="Username" required></v-text-field>
                    <v-text-field v-model="username" label="Password" required> </v-text-field>

                    
                    <v-card-actions>
                        <v-checkbox label="Remember my user"></v-checkbox>
                        <v-spacer></v-spacer>

                        <v-btn flat @click="dialog = false">
                            Cancel
                        </v-btn>

                        <v-btn flat @click="submit">
                            Enter
                        </v-btn>

                    </v-card-actions>
            
                    
            </v-form>

            </v-card-text>

    </v-card>

    </v-dialog>


</template>

<script>
export default {

  data: () => ({
    dialog: false
  })
  
};
</script>

<style scoped>
</style>