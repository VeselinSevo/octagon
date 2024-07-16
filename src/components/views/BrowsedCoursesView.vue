<template>
    <PagePadding>
        <BrowsedCourses />
        <!-- <RouterView /> -->
    </PagePadding>
</template>

<script>

import BrowsedCourses from '../courses/BrowsedCourses.vue';


export default {
    name: 'HomeView',
    components: {
        BrowsedCourses,
    }
}
</script>