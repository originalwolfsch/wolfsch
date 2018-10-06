<template>
  <v-app>

      <v-toolbar color="primary" dark app clipped-left>
          <v-toolbar-side-icon class="hidden-md-and-up" @click="showMenu = true"></v-toolbar-side-icon>

          <v-toolbar-items>
              <v-btn flat to="/" class="headline ">WolfSCH</v-btn>
          </v-toolbar-items>

          <v-spacer></v-spacer>

          <v-flex md2 xs6 >
              <!-- <v-text-field label="Search" append-icon="fa-search" ></v-text-field> -->
              <v-text-field label="Search" class="mr-2"></v-text-field>
          </v-flex>

                <login-modal></login-modal>

          <v-toolbar-items class="hidden-sm-and-down">
             

              <v-btn flat>Sign UP</v-btn>
              
          </v-toolbar-items>
         

      </v-toolbar>


      <v-navigation-drawer v-model="showMenu" app class="hidden-md-and-up">
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

          </v-list>

          <menu-categories></menu-categories>

      </v-navigation-drawer>




      <v-content>
          <router-view></router-view>
      </v-content>



  </v-app>
    
</template>

<script>
export default {
  data: () => ({
    showMenu: false
    
  }),

};
</script>
