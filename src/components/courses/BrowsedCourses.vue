<template>
    <div class="py-5 md:py-8 lg:py-14">
        <TheContainer>
            <TheTitle :title="search" subtitle="Explore endless learning opportunities" />
            <div v-if="!loading">
                <CoursesDisplay :coursesSource="courses" />
            </div>
            <div v-if="loading">
                <v-row>
                    <v-col cols="12" md="4" v-for="n in 3" :key="n">
                        <v-skeleton-loader class="mx-auto border d-flex justify-center" max-width="300"
                            type="image, article, button"></v-skeleton-loader>
                    </v-col>
                </v-row>
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
            baseStarClass: 'fa-solid fa-star',
            loading: true
        };
    },
    computed: {
        courses() {
            return this.$store.getters['courseModule/getSearchedCourses'];
        },
        search() {
            const searchTerm = this.$store.getters['courseModule/getSearchTerm'];
            if (searchTerm) {
                return "Search result for: " + searchTerm;
            }
            return "Display of all our courses";
        }
    },
    created() {
        this.loadCoursesBasedOnQuery();
    },
    watch: {
        '$store.state.courseModule.serachTerm': function (newSearchTerm) {
            this.loadCoursesBasedOnQuery(newSearchTerm);
        }
    },
    methods: {
        loadCoursesBasedOnQuery(query = this.$route.query.q) {
            this.loading = true;
            setTimeout(() => {
                this.$store.dispatch("courseModule/loadSearchedCourses", query);
                this.loading = false;
            }, 500)
        }
    }
}
</script>
