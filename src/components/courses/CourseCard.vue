<template>
    <TheCard>
        <div class="relative">
            <div v-if="course.isBestSeller"
                class="absolute top-2 left-2 bg-yellow-500 text-white text-sm py-1 px-2 rounded">
                Bestseller</div>
            <img :src="course.img" :alt="course.name" class="w-full h-40 rounded mb-3 object-cover">

        </div>
        <h1 class="text-2xl">{{ course.name }}</h1>
        <div class="w-100 py-2 flex gap-2 items-center justify-center text-blue-main">
            <span class="flex items-center">
                <i class="far fa-clock mr-1"></i>
                <span>{{ course.duration }}h</span>
            </span>
            <span>|</span>
            <span class="flex items-center">
                <i class="fa-solid fa-people-group mr-1"></i>
                <span>{{ course.numOfStudents }}+</span>
            </span>
        </div>
        <p class="description text-gray-700 overflow-hidden line-clamp-3">{{ course.description }}</p>


        <div class="rating flex items-center justify-center mt-2">
            <span v-for="(star, index) in getStars(course.rating)" :key="index">
                <i class="text-yellow-600 fa-solid" :class="star"></i>
            </span>
            <span class="pl-2 text-gray-500">({{ course.numOfReviews }})</span>
        </div>
        <p class="my-2">${{ course.price }}</p>
        <TheButton :href="`courses/${course.id}`" :center="true" text="See More"></TheButton>
        <ul class="flex justify-center mt-2">
            <li v-for="(teacher, index) in course.teachers" :key="index" class="mx-1">
                <TheProfileAvatar :src="teacher.img" :alt="teacher.id" />
            </li>
        </ul>
    </TheCard>
</template>

<script>
import TheCard from '../ui/TheCard.vue';
import TheButton from '../ui/TheButton.vue';
import TheProfileAvatar from '../ui/TheProfileAvatar.vue';

export default ({
    props: ['course'],
    components: {
        TheCard,
        TheButton,
        TheProfileAvatar,
    },
    methods: {
        getStars(rating) {
            const stars = [];
            for (let i = 1; i <= 5; i++) {
                if (rating >= i) {
                    stars.push('fa-star');
                } else if (rating >= i - 0.5) {
                    stars.push("fa-star-half-alt");
                } else {
                    stars.push('fa-star-o');
                }
            }
            return stars;
        }
    },
})
</script>
