<template>
    <img class="m-2 rounded-full w-10 h-10" :src="src" :alt="alt" />
</template>

<script>
export default {
    props: ['src', 'alt']
}
</script>

<style scoped>
/* No styles needed as we're using Tailwind CSS classes */
</style>