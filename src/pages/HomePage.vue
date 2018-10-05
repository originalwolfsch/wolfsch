<template lang="html">
    <v-layout>

        <v-navigation-drawer v-model="drawer" permanent class="hidden-sm-and-down">
            <v-list two-line>

                <v-subheader>Categories</v-subheader>

                <v-list-tile to="/lolis">
                    <v-list-tile-content>
                        <v-list-title>Lolis</v-list-title>
                    </v-list-tile-content>


                </v-list-tile>


                <v-list-tile to="/trapitos">

                    <v-list-tile-content>
                        <v-list-tile-title>Trapitos</v-list-tile-title>
                    </v-list-tile-content>


                </v-list-tile>


            </v-list>
        </v-navigation-drawer>

        <!-- TENES UNA MEJOR IDEA DE COMO HACER QUE ESTO SE HAGA RESPONSIVE? -->

        <v-container class="mt-0" grid-list-xl>

            <v-layout row wrap>
                <v-flex xs12 sm4 md4>
                    <v-img class="mr-3" src="https://picsum.photos/510/300?random"></v-img>
                </v-flex>

                <v-flex xs12 sm4 md4>


                    <v-img class="mr-3" src="https://picsum.photos/510/300?random"></v-img>

                </v-flex>
                <v-flex xs12 sm4 md4>


                    <v-img class="mr-3" src="https://picsum.photos/510/300?random"></v-img>

                </v-flex>
                
            </v-layout>


        </v-container>



    </v-layout>


</template>

<script>
    export default {
    }
</script>

<style lang="css">
</style>