<template>
    <div class="w-full">
        <div class="flex h-screen bg-gray-100">
            <!-- Sidebar -->
            <nav class="w-64 bg-white shadow-md">
                <div class="px-8 py-4">
                    <h1 class="text-2xl font-bold">Admin Panel</h1>
                </div>
                <ul>
                    <!-- Manage Courses -->
                    <li @click="toggleMenu('courses')"
                        :class="{ 'bg-gray-200': $route.path.includes('/admin-panel/courses') }"
                        class="px-8 py-2 cursor-pointer flex justify-between items-center transition-transform duration-300">
                        Manage Courses
                        <i :class="{ 'fa-chevron-down': openMenu === 'courses', 'fa-chevron-right': openMenu !== 'courses' }"
                            class="fas"></i>
                    </li>
                    <transition name="slide-fade">
                        <ul v-show="openMenu === 'courses'" class="pl-8">
                            <li :class="{ 'bg-gray-200': $route.path.includes('/admin-panel/courses/add') }"
                                class="px-8 py-2 hover:bg-gray-200 m-1">
                                <router-link to="/admin/admin-panel/courses/add" class="block">Add
                                    Course</router-link>
                            </li>
                            <li :class="{ 'bg-gray-200': $route.path.includes('/admin-panel/courses/display') }"
                                class="px-8 py-2 hover:bg-gray-200 m-1">
                                <router-link to="/admin/admin-panel/courses/display" class="block">Display
                                    Courses</router-link>
                            </li>
                        </ul>
                    </transition>
                    <!-- Manage Users -->
                    <li @click="toggleMenu('users')"
                        :class="{ 'bg-gray-200': $route.path.includes('/admin-panel/users') }"
                        class="px-8 py-2 cursor-pointer flex justify-between items-center transition-transform duration-300">
                        Manage Users
                        <i :class="{ 'fa-chevron-down': openMenu === 'users', 'fa-chevron-right': openMenu !== 'users' }"
                            class="fas"></i>
                    </li>
                    <transition name="slide-fade">
                        <ul v-show="openMenu === 'users'" class="pl-8">
                            <li :class="{ 'bg-gray-200': $route.path.includes('/admin-panel/users/add') }"
                                class="px-8 py-2 hover:bg-gray-200 m-1">
                                <router-link to="/admin/admin-panel/users/add" class="block">Add User</router-link>
                            </li>
                            <li :class="{ 'bg-gray-200': $route.path.includes('/admin-panel/users/display') }"
                                class="px-8 py-2 hover:bg-gray-200 m-1">
                                <router-link to="/admin/admin-panel/users/display" class="block">Display
                                    Users</router-link>
                            </li>
                        </ul>
                    </transition>
                </ul>
            </nav>
            <!-- Main Content -->
            <div class="flex-1 p-6">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AdminPage',
    data() {
        return {
            openMenu: null
        };
    },
    methods: {
        toggleMenu(menu) {
            this.openMenu = this.openMenu === menu ? null : menu;
        }
    }
};
</script>

<!-- <style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: transform 0.3s ease-in-out;
}

.slide-fade-enter,
.slide-fade-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}
</style> -->