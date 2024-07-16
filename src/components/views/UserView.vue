<template>
    <div class="flex flex-col min-h-screen">
        <TheBanner></TheBanner>
        <TheNavigation />
        <main class="flex-grow flex justify-center align-middle items-center ">
            <RouterView />
        </main>
        <TheFooter />
    </div>
</template>

<script>
import TheNavigation from '@/components/layout/TheNavigation.vue';
import TheBanner from '@/components/layout/TheBanner.vue';
import TheFooter from '../layout/TheFooter.vue';

export default {
    name: 'UserView',
    components: {
        TheNavigation,
        TheBanner,
        TheFooter
    },
};
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>