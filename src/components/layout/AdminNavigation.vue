<template>
    <div class="shadow-md">
        <div class="max-w-5xl mx-auto pt-5 px-7">
            <div class="flex justify-between items-center pb-6">
                <NavLogo></NavLogo>
                <div class="w-1/3">
                    <SearchInput placeholder="Search courses..." @search="handleSearch"></SearchInput>
                </div>

            </div>
            <div>
                <AdminNavMenu />
            </div>
        </div>
    </div>

</template>

<script>
import SearchInput from '../ui/SearchInput.vue';
import AdminNavMenu from './AdminNavMenu.vue';
import NavLogo from './NavLogo.vue';

export default {
    name: 'TheNavigation',
    components: {
        SearchInput,
        AdminNavMenu,
        NavLogo
    },
    methods: {
        async handleSearch(searchQuery) {
            this.$store.dispatch('courseModule/setSearchTerm', { searchQuery });

            if (!searchQuery) {
                await this.$router.push({ name: 'admin-courses' });
            } else {
                await this.$router.push({ name: 'admin-courses', query: { q: searchQuery } });
            }
        }
    },
}
</script>

<style scoped>
/* No styles needed as we're using Tailwind CSS classes */
</style>