<template>
    <!-- <button :type="isSubmit ? 'submit' : 'button'" @click="goToLocation" :class="{ 'm-auto': center }"
        class="min-w-40 bg-green-main text-white px-4 py-2 rounded text-center sm:text-sm block hover:bg-green-secondary cursor-pointer">
        {{ text }}
    </button> -->
    <button :type="isSubmit ? 'submit' : 'button'" @click="goToLocation" :class="{ 'm-auto': center }"
        class="min-w-40 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        {{ text }}
    </button>
</template>

<script>
export default {
    props: {
        text: String,
        isSubmit: {
            type: Boolean,
            requered: false,
            default: false
        },
        href: String,
        center: Boolean
    },
    methods: {
        goToLocation() {
            if (this.href && this.href.length > 1) {
                this.$router.push({ path: this.href, query: this.$route.query })
            }
        }
    }
}
</script>
