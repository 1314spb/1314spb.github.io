<template>
  <v-row id="contact"></v-row>
  <v-row class="padding-navbar"></v-row>
  <v-container class="contact">
    <v-row>
      <div class="wrapper">
        <a :href="link.linkedin" target="_blank" class="link">
          <div class="button">
            <div class="icon">
              <img src="@/assets/link_images/linkedin.png" alt="LinkedIn-Icon" />
            </div>
            <span class="button_text">LinkedIn</span>
          </div>
        </a>

        <a :href="link.github" target="_blank" class="link">
          <div class="button">
            <div class="icon">
              <img src="@/assets/link_images/github.png" alt="Github-Icon" />
            </div>
            <span class="button_text">Github</span>
          </div>
        </a>
      </div>
    </v-row>
    
    <v-row>
      <div class="copyright">
        <span>© 2024 Copyright: Sin Chung Ho</span><br>
        <span>Built by Vue.js</span>
      </div>
    </v-row>

  </v-container>
  
</template>


<script setup>
  import '../styles/padding-navbar.css'
  import '../styles/main.css'
  import '../styles/contact.css'
  import info from '../assets/info.js'
  defineProps({
    name: {
      type: String,
      default: 'Contact'
    }
  });

  const link = info.links;
  console.log(link);
</script>
