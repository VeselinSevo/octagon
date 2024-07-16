<template>
    <div class="w-full">
        <HeroSection />
        <HomeCourses />
        <AboutSection />
    </div>
</template>

<script>

import HomeCourses from '../courses/HomeCourses.vue';
import AboutSection from '../layout/AboutSection.vue';
import HeroSection from '../layout/HeroSection.vue';


export default {
    name: 'HomeView',
    components: {
        HomeCourses,
        AboutSection,
        HeroSection,
    },
    created() {
        // console.log(this.$route)
    }
}
</script>