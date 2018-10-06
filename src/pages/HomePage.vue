<template lang="html">
    <v-container grid-list-lg>


        <v-navigation-drawer app clipped class="hidden-md-and-down" >
            <menu-categories></menu-categories>
        </v-navigation-drawer>



        <v-layout wrap>

            <product-item v-for="p in products" :product="p"></product-item>

        </v-layout>


    </v-container>


</template>

<script>
export default {
    data: () => ({
        products: [
            { title: 'Producto 1', img: 'https://picsum.photos/510/300?random', description: 'Lorem ipsum dolor sit amet.', likes: 10},
            { title: 'Producto 2', img: 'https://picsum.photos/510/300?random', description: 'Lorem ipsum dolor sit amet.', likes: 5},
            { title: 'Producto 3', img: 'https://picsum.photos/510/300?random', description: 'Lorem ipsum dolor sit amet.', likes: 80},
            { title: 'Producto 4', img: 'https://picsum.photos/510/300?random', description: 'Lorem ipsum dolor sit amet.', likes: 80},
        ]
    }),
}
</script>

<style lang="css">
</style>
