<template>
  <div class="py-5 md:py-14">
    <TheContainer>
      <TheTitle title="Our most popular courses" subtitle="Explore endless learning opertunity" />
      <div>
        <CoursesDisplay :coursesSource="courses" />
      </div>
    </TheContainer>
  </div>
</template>

<script>

import CoursesDisplay from "./CoursesDisplay.vue";
import TheContainer from '../ui/TheContainer.vue';
import TheTitle from '../ui/TheTitle.vue';


export default {
  name: 'HomeCourses',
  components: {
    CoursesDisplay,
    TheContainer,
    TheTitle
  },
  data() {
    return {
      baseStarClass: 'fa-solid fa-star'
    };
  },
  computed: {
    courses() {
      return this.$store.getters['courseModule/getCourses'];
    },
  },
  created() {
    this.$store.dispatch("courseModule/loadCourses")
  },

}
</script>