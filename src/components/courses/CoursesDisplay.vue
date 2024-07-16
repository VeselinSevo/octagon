<template>
    <div>
        <div v-if="coursesSource.length">
            <TheGrid>
                <li class="grid-item" v-for="(course, index) in coursesSource" :key="index">

                    <CourseCard :course="course">

                    </CourseCard>
                </li>
            </TheGrid>
        </div>
        <div v-else class="pt-8 text-center text-gray-500">
            <div class="flex flex-row gap-1 align-middle items-center justify-center">
                <!-- <img src="/img/not-found.png" class="h-20 w-20 rounded-full mr-4" alt="Avatar"> -->
                <!-- <font-awesome-icon :icon="['fas', 'magnifying-glass']" /> -->
                <i class="fa-solid fa-magnifying-glass text-green-main"></i>
                <p class="text-lg font-semibold">No courses available</p>
            </div>
        </div>
    </div>
</template>

<script>

import CourseCard from './CourseCard.vue';


export default {
    name: 'HomeCourses',
    components: {
        CourseCard
    },

    data() {
        return {
            baseStarClass: 'fa-solid fa-star'
        };
    },
    props: ['coursesSource'],

}
</script>