<template>
  <v-row id="about"></v-row>
  <v-row class="padding-navbar"></v-row>
  <v-container>
    <v-row>
      <v-col class="title">
        <span data-aos="fade">About me</span>
        <hr class="title_line">
      </v-col>
    </v-row>

    <v-row class="mobile-view">
      <v-col cols="12" md="6">
        <div id="education_container">
          <div id="edu_timeline" class="edu_display_box">
            <Timeline :data="education" />
          </div>
        </div> <!-- education-container -->
      </v-col>

      <v-col cols="12" md="6" class="experience-container">
        <div class="working">
          <div id="edu_timeline" class="edu_display_box">
            <Timeline :data="experience" />
          </div>
        </div>
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script setup>
  import '../styles/padding-navbar.css'
  import '../styles/about.css'
  import '../styles/main.css'
  import Timeline from './widgets/timeline.vue'
  import info from '../assets/info.js'

  defineProps({
    name: {
      type: String,
      default: 'About'
    }
  });

  const education = {
    title: 'Education',
    data: info.education,
  };

  const experience = {
    title: 'Working Experience',
    data: info.experiences,
  };
</script>
