<template>
  <v-app class="custom_background">
    <v-app-bar app>
      <v-toolbar-title>Sin Chung Ho</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="scrollTo('home')" class="nav_button glowing_btn">Home</v-btn>
      <v-btn text @click="scrollTo('about')" class="nav_button glowing_btn">About</v-btn>
      <v-btn text @click="scrollTo('skills')" class="nav_button glowing_btn">Skills</v-btn>
      <!-- <v-btn text @click="scrollTo('portfolio')" class="nav_button">Portfolio</v-btn> -->
      <v-btn text @click="scrollTo('contact')" class="nav_button glowing_btn">Contact</v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
  import './styles/main.css'
  
  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
</script>

<style scoped>
@media screen and (max-width: 580px) {
  #app {
    width: fit-content;
  }
}

.tooltip[aria-hidden="true"] {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.5s, visibility 0.5s;
}

.tooltip[aria-hidden="false"] {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.5s;
}

.custom_background {
  background-color: #181A20;
}
</style>