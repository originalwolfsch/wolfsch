<template lang="html">
<!-- Contenedor de todos los productos con su respectivo for -->
    <v-container grid-list-lg>


        <v-navigation-drawer app clipped class="hidden-sm-and-down">
            <menu-categories></menu-categories>
        </v-navigation-drawer>


        <v-layout wrap>

            <product-item v-for="p in products" :product="p"></product-item>
            
        </v-layout>


    </v-container>


</template>

<!-- Los productos almacenados en la base de datos -->
<script>
export default {
    data: () => ({
        products: [
            { title: 'Producto 1', img: 'https://picsum.photos/510/300?random', description: 'Lorem ipsum dolor sit amet.', likes: 10, author: 'ConDish'},
            { title: 'Producto 2', img: 'https://picsum.photos/510/300?random', description: 'Lorem ipsum dolor sit amet.', likes: 5, author: 'criistian-14'},
            { title: 'Producto 3', img: 'https://picsum.photos/510/300?random', description: 'Lorem ipsum dolor sit amet.', likes: 80, author: 'asdasd'},
            { title: 'Producto 4', img: 'https://picsum.photos/510/300?random', description: 'Lorem ipsum dolor sit amet.', likes: 80, author: 'asdasd'},
            { title: 'Producto 4', img: 'https://picsum.photos/510/300?random', description: 'Lorem ipsum dolor sit amet.', likes: 80, author: 'asdasd'},
        ]
    }),
}
</script>

<style lang="css">
</style>
