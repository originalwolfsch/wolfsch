<template>
  <v-app>

      <v-toolbar color="primary" dark >
          <v-toolbar-side-icon class="hidden-md-and-up" @click="showMenu = true"></v-toolbar-side-icon>

          <v-toolbar-items>
              <v-btn flat to="/" class="headline ">WolfSCH</v-btn>
          </v-toolbar-items>

          <v-spacer></v-spacer>


          <v-toolbar-items class="hidden-sm-and-down">
              <v-btn flat to="/login"><v-icon left>fa-user</v-icon> Login</v-btn>
              <v-btn flat> <v-icon left>fa-user-plus</i></v-icon> Sign UP</v-btn>
          </v-toolbar-items>

      </v-toolbar>


      <v-navigation-drawer v-model="showMenu" app>
          <v-list two-line>

              <v-subheader>Profile</v-subheader>

              <v-list-tile to="/login">
                  <v-list-tile-content>
                      <v-list-title>Login</v-list-title>
                  </v-list-tile-content>

                  <v-list-tile-action>
                      <v-icon class="mr-1" color="secondary">fa-user</v-icon>
                  </v-list-tile-action>

              </v-list-tile>


              <v-list-tile>
                  <v-list-tile-content>
                      <v-list-tile-title >Sign UP</v-list-tile-title>
                  </v-list-tile-content>

                  <v-list-tile-action>
                      <v-icon color="secondary">fa-user-plus</v-icon>
                  </v-list-tile-action>

              </v-list-tile>

              <v-divider></v-divider>

              <v-subheader>Categories</v-subheader>

              <v-list-tile>
                  <v-list-tile-content>
                      <v-list-tile-title >Lolis</v-list-tile-title>
                  </v-list-tile-content>

                  <v-list-tile-action>
                      <v-icon color="secondary">fa-user-plus</v-icon>
                  </v-list-tile-action>

              </v-list-tile>

              <v-divider></v-divider>

          </v-list>
      </v-navigation-drawer>



      <v-container>
          <router-view></router-view>
      </v-container>


  </v-app>
</template>

<script>

export default {
    data: () => ({
        showMenu: false
    }),

}
</script>
