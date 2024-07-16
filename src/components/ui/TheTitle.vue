<template>

    <div class="text-center lg:text-left py-5">
        <h1 class="text-4xl font-bold text-blue-main mb-2">{{ title }}</h1>
        <h2 class="text-xl text-gray-600">{{ subtitle }}</h2>
    </div>

</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
            required: false,
        },
    },
};
</script>

<style scoped>
/* No styles needed as we're using Tailwind CSS classes */
</style>