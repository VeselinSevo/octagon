<template>
    <div class="bg-blue-main py-14">
        <TheContainer>
            <section class="waves-bg py-20 relative overflow-hidden">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center">
                        <h1 ref="heading"
                            class="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl transition-all duration-1000 ease-in-out transform opacity-0 translate-y-10">
                            <span class="block xl:inline">Elevate Your Skills</span>
                            <span class="block text-indigo-300 xl:inline"> with Our Expert Courses</span>
                        </h1>
                        <p ref="description"
                            class="mt-3 max-w-md mx-auto text-base text-indigo-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl transition-all duration-1000 ease-in-out transform opacity-0 translate-y-10">
                            Discover a wide range of courses designed to help you master new skills and advance your
                            career. Enroll today and start learning from industry experts.
                        </p>
                        <div class="mt-10 sm:flex sm:justify-center">
                            <div class="rounded-md shadow">
                                <a href="/courses"
                                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10 transition-all duration-1000 ease-in-out transform opacity-0 translate-y-10"
                                    ref="button">
                                    View Courses
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </TheContainer>
    </div>
</template>

<script>
export default {
    mounted() {
        setTimeout(() => {
            this.$refs.heading.classList.remove('opacity-0', 'translate-y-10');
            this.$refs.description.classList.remove('opacity-0', 'translate-y-10');
            this.$refs.button.classList.remove('opacity-0', 'translate-y-10');
        }, 100); // Add a small delay
    }
};
</script>

<style scoped></style>
