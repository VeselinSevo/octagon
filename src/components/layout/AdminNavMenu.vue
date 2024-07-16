<template>
    <ul class="flex gap-7 list-none">
        <RouterLink :to="{ name: 'admin-home', query: $route.query }" class="cursor-pointer hover:text-green-main"
            active-class="text-green-main border-b-4 border-green-main">
            Home
        </RouterLink>
        <RouterLink :to="{ name: 'admin-courses', query: $route.query }" class="cursor-pointer hover:text-green-main"
            active-class="text-green-main border-b-4 border-green-main">
            All Courses
        </RouterLink>
        <RouterLink :to="{ name: 'admin-my-learning', query: $route.query }"
            class="cursor-pointer hover:text-green-main" active-class="text-green-main border-b-4 border-green-main">
            My Courses
        </RouterLink>
        <RouterLink :to="{ name: 'admin-panel' }" class="cursor-pointer hover:text-green-main"
            active-class="text-green-main border-b-4 border-green-main">
            Admin
        </RouterLink>
        <!-- Logout button -->
        <button @click="logout" class="cursor-pointer hover:text-green-main text-sm sm:text-base">
            Logout
        </button>
    </ul>
</template>

<script>
export default {
    name: 'NavMenu',
    methods: {
        logout() {
            // Dispatch action to logout user
            this.$store.dispatch('authModule/logout')
                .then(() => {
                    // Navigate to login page or homepage after successful logout
                    this.$router.push({ name: 'login' });
                })
                .catch(error => {
                    console.error('Failed to logout:', error);
                });
        }
    },
}
</script>

<style scoped>
/* No styles needed as we're using Tailwind CSS classes */
</style>