<template>
    <div :class="myclasses"
        class="bg-white p-5 rounded-lg text-center block shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ['myclasses']
}
</script>

<style scoped>
/* No styles needed as we're using Tailwind CSS classes */
</style>