<template>
    <div class="bg-blue-main py-14">
        <TheContainer>
            <TheGrid>
                <TheCard v-for="advantage in advantages" :key="advantage.title" class="bg-white text-main-blue p-6">
                    <div class="flex justify-center align-middle">
                        <div class="icon-container mb-5 flex items-center justify-center">
                            <i v-if="advantage.icon.fontawesome"
                                :class="advantage.icon.fontawesome + ' text-3xl text-white'"></i>
                            <img v-else :src="advantage.icon.flaticon" alt="icon" class="w-12 h-12 text-white" />
                        </div>
                    </div>

                    <h2 class="text-xl font-bold mb-2">{{ advantage.title }}</h2>
                    <p class="mb-5">{{ advantage.description }}</p>
                    <TheButton :center="true" text="Learn More" />
                </TheCard>
            </TheGrid>
        </TheContainer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            advantages: []
        };
    },
    async created() {
        try {
            const response = await fetch('/advantages.json');
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();
            this.advantages = data;
        } catch (error) {
            console.error('Error fetching advantages:', error);
        }
    }
};
</script>

<style scoped>
.icon-container {
    @apply w-16 h-16 rounded-full bg-icon-gradient;
}
</style>
