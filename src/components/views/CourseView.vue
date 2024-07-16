<template>
    <PagePadding>
        <div v-if="course">
            <TheBigContainer>
                <v-row class="mr-5">
                    <!-- Course Details -->
                    <v-col cols="12" lg="5">
                        <div class="border-none">
                            <v-card-text v-if="course">
                                <!-- Tutor Information -->
                                <div class="flex gap-5 align-middle">
                                    <v-avatar size="64" class="mb-4">
                                        <img :src="course.teachers[0].img" alt="Tutor Image">
                                    </v-avatar>
                                    <div>
                                        <h2 class="text-xl font-bold">{{ course.teachers[0].name }}</h2>
                                        <p class="text-sm text-gray-600">Course Tutor</p>
                                    </div>
                                </div>

                                <!-- Course Information -->
                                <div class="flex gap-3 align-middle mb-4 items-center">
                                    <h1 class="text-2xl font-bold relative text-center">{{ course.name }}</h1>
                                    <div v-if="course.isBestSeller"
                                        class="w-min bg-yellow-500 text-white text-sm py-2 px-2 my-2 rounded">
                                        Bestseller
                                    </div>
                                </div>

                                <p class="text-gray-700 mb-4">{{ course.description }}</p>
                                <TheButton :text="buttonText" :center="false" class="mb-4 mt-2 mx-auto md:mx-0"
                                    @click="addToCart(course)"></TheButton>

                                <!-- Course Achievements -->
                                <p class="text-lg text-gray-700 mb-4">Course Achievements</p>
                                <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                                    <div v-for="achievement in achievements" :key="achievement.title"
                                        class="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-center align-middle">
                                        <i :class="achievement.icon" class="text-green-main text-3xl m-auto"></i>
                                        <div class="my-3">
                                            <h3 class="text-md text-center">{{ achievement.title }}</h3>
                                        </div>
                                        <div class="text-center">
                                            <p class="text-2xl font-bold">{{ achievement.value }}</p>
                                        </div>
                                    </div>
                                </div>

                                <!-- Technologies Used -->
                                <p class="text-lg text-gray-700 mb-4">Technologies Used</p>
                                <v-slide-group show-arrows>
                                    <template v-slot:prev>
                                        <v-btn icon class="mr-5">
                                            <i class="fa-solid fa-arrow-left"></i>
                                        </v-btn>
                                    </template>
                                    <template v-slot:next>
                                        <v-btn icon class="ml-5">
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </v-btn>
                                    </template>
                                    <v-slide-group-item v-for="tech in course.technologies" :key="tech"
                                        v-slot="{ isSelected, toggle }">
                                        <v-btn :class="isSelected ? '!bg-green-main' : 'default'" class="ma-2" rounded
                                            @click="toggle">
                                            {{ tech }}
                                        </v-btn>
                                    </v-slide-group-item>
                                </v-slide-group>
                            </v-card-text>
                        </div>
                    </v-col>
                    <v-spacer></v-spacer>
                    <!-- Course Video -->
                    <v-col cols="12" lg="6">
                        <div>
                            <v-card-text v-if="course.img">
                                <v-responsive>
                                    <iframe :src="`${course.video}`" frameborder="0" allowfullscreen
                                        class="w-full h-64 md:h-96"></iframe>
                                </v-responsive>
                            </v-card-text>
                            <v-card-text v-else>
                                <TheSpinner></TheSpinner>
                            </v-card-text>
                        </div>
                    </v-col>
                </v-row>
            </TheBigContainer>
        </div>
        <div v-else>
            <div v-if="loading">
                <TheSpinner></TheSpinner>
            </div>
            <div v-else>
                <NotFoundView></NotFoundView>
            </div>
        </div>
    </PagePadding>
</template>

<script>
import NotFoundView from "@/components/views/NotFoundView.vue";

export default {
    name: "CourseView",
    components: {
        NotFoundView,
    },
    data() {
        return {
            course: null,
            loading: true,
        };
    },
    computed: {
        achievements() {
            return [
                { title: "Rating", value: this.course ? this.course.rating : "-", icon: "fas fa-star" },
                { title: "Number of Students", value: this.course ? this.course.numOfStudents : "-", icon: "fa-solid fa-people-group" },
                { title: "Duration (hours)", value: this.course ? this.course.duration : "-", icon: "fa-solid fa-clock" },
                { title: "Completed Students", value: this.course ? this.course.numOfFinishedStudents : "-", icon: "fa-solid fa-graduation-cap" },
                { title: "Reviews", value: this.course ? this.course.numOfReviews : "-", icon: "fa-solid fa-comments" },
            ];
        },
        price() {
            return "Buy Now For $" + this.course.price
        },
        buttonText() {
            // Check if course is already in cart to determine button text
            return this.isInCart ? "Added To Cart" : this.price;
        },
        isInCart() {
            // Check if course is already in cart
            const cartItems = this.$store.state.cartModule.cartItems;
            return cartItems.some(item => item.id === this.course.id);
        }
    },
    async created() {
        try {
            const course = await this.$store.dispatch("courseModule/getCourse", this.$route.params.id);
            if (course) {
                this.course = course;
            } else {
                console.error("Course not found");
            }
        } catch (error) {
            console.error("An error occurred while fetching the course:", error);
        } finally {
            this.loading = false;
        }
    },
    methods: {
        addToCart(course) {
            this.$store.dispatch("cartModule/addToCart", course);
        },
    },
};
</script>

<style scoped>
/* Add any scoped styles for your component here */
</style>
