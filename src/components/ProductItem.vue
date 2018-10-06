<template lang="html">

    <v-flex xs12 sm6 md4>
<!-- Los productos con sus datos -->
        <v-card class="pa-3">
            <v-card-title>
                <h3>{{ product.author }}</h3>
            </v-card-title>
            <v-img :src="product.img"></v-img>
            <v-card-title>
                <div>
                    {{ product.description }}
                </div>
            </v-card-title>
            <v-card-actions>
                <v-btn flat><v-icon left>far fa-heart</v-icon>{{ product.likes}}</v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>
        
</template>

<script>

    export default {
        props: ['product']
    }

</script>


<style lang="css">
</style>