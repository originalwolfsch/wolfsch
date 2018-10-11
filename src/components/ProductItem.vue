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
                <v-btn flat @click="like(product.likes)" ><v-icon left :color="likeColor">far fa-heart</v-icon>{{ product.likes}}</v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>

</template>

<script>

export default {
    props: ['product'],
    data: () => ({
        liked: false,
    }),
    methods: {
        like(nLikes)
        {
            this.liked = !this.liked;

            if (this.liked) {
                this.product.likes++;
            } else {
                this.product.likes--;
            }
        }
    },
    computed: {
        likeColor()
        {
            return this.liked ? 'red' : '';
        }
    }

}

</script>


<style lang="css">
</style>
