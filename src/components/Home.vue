<template>
  <v-row id="home"></v-row>
  <v-row class="padding-navbar"></v-row>
  <v-container>
    <v-row class="mobile-view">
      <v-col cols="12" md="6">
        <div class="image-container">
          <img :src="myphotoSrc" alt="MyPhoto" />
        </div>
      </v-col>
      <v-col cols="12" md="6" class="introduction-container">
        <h1>Introduction</h1>
        <div v-for="(paragraph, index) in info.description" :key="index">
          <p class="introduction">{{ paragraph }}</p><br>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import '../styles/home.css'
  import '../styles/padding-navbar.css'

  import info from '../assets/info.js'
  import myphoto from '../assets/images/myphoto.png'

  const myphotoSrc = myphoto;
</script>