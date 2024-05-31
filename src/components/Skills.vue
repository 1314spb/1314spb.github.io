<template>
  <v-row id="skills"></v-row>
  <v-row class="padding-navbar"></v-row>
  <v-container>
    <v-row>
      <v-col class="title">
        <div
          class="text-center"
          data-aos="fade"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <span class="title text-center">Skills</span>
          <hr class="title_line">
        </div>
        
      </v-col>
    </v-row>

    <v-row class="flex_container">
      <div
        class="text-center flex_item"
        v-for="(skill, idx) in skills.data"
        
        data-aos="fade-up"
        data-aos-offset="10"
        data-aos-delay="30"
        :style="{ 'transition-delay': idx / 8 + 's' }"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
      >
        <div class="card" :style="`--clr:hsl(${skill.hue}, 100%, 50%)`">
          <div class="icon_container">
            <img :src="skill.icon" alt="Skill-Icon" />
          </div>

          <div class="skill_category">{{ skill.title }}</div>
          <hr class="centered-hr"/>

          <span class="title3">{{ skill.data.join(", ") }}</span>
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<script setup>
  import { onMounted } from 'vue';
  import '../styles/padding-navbar.css'
  import '../styles/main.css'
  import '../styles/skills.css'
  import info from '../assets/info.js'
  
  defineProps({
    name: {
      type: String,
      default: 'Skills'
    }
  });

  const skills = {
    title: 'Skills',
    data: info.skills,
  };

  onMounted(() => {
    let cards = document.querySelectorAll('.card');

    cards.forEach(card => {
      card.addEventListener('mousemove', function(e) {
        let rect = card.getBoundingClientRect();
        let x = e.clientX - rect.left - 200;
        let y = e.clientY - rect.top - 200;

        card.style.setProperty('--x', x + 'px');
        card.style.setProperty('--y', y + 'px');
      });
    });
  });
</script>
