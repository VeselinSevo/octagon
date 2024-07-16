<template>
    <div class="flex flex-col min-h-screen">
        <AdminNavigation />
        <main class="flex-grow flex justify-center align-middle items-center">
            <RouterView />
        </main>
        <TheFooter />
    </div>
</template>

<script>
import AdminNavigation from '@/components/layout/AdminNavigation.vue';
import TheFooter from '../layout/TheFooter.vue';

export default {
    name: 'UserView',
    components: {
        AdminNavigation,
        TheFooter
    },
};
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>