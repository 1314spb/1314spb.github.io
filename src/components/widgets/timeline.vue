<template>
  <div class="timelineBox_container">
    <p
      class="title1"
      data-aos="fade"
      data-aos-once="true"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-duration="1000"
    >
      {{ data.title }}
    </p>
    <ul
      class="timeline"
      v-for="(e, idx) in data.data"
      :key="e.name"
      :style="{ 'transition-delay': idx / 8 + 's' }"
      data-aos="fade-up"
      data-offset="10"
      data-aos-once="true"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-duration="500"
    >
      <li>
        <div class="info_box">
          <div class="title2">{{ e.name }}, {{ e.place }}</div>
          <div class="title3">
            {{ e.degree || e.position }}
          </div>
          <div class="date">{{ e.date }}</div>
          <div class="description">
            {{ e.description }}
          </div>
          <div class="span_box">
            <span
            class="badge"
            v-for="s in e.skills"
            :key="s"
            >{{ s }}</span
            >
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import '../../styles/about.css'
import '../../styles/timeline.css'

export default {
  name: "Timeline",
  props: {
    data: {
      type: Object,
    },
  },
};
</script>
