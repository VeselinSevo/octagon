<template>
    <PagePadding>
        <TheContainer>
            <TheTitle title="404 Page not found" subtitle="This page does not exist."></TheTitle>
            <div class="flex justify-center">
                <router-link to="/" class="px-4 py-2 bg-green-main text-white rounded hover:bg-green-600">
                    Go to Home
                </router-link>
            </div>

        </TheContainer>
    </PagePadding>

</template>

<script>

export default {
    name: 'NotFound',
}
</script>

<style scoped>
/* You can add scoped styles here if needed */
</style>
