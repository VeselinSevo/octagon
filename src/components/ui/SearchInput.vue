<template>
    <input class="p-2 rounded-lg border border-gray-700 focus:outline-none focus:border-green-main w-full" type="text"
        :placeholder="placeholder" v-model="searchQuery" @input="onInput" />
</template>

<script>
export default {
    props: ['placeholder'],
    data() {
        return {
            searchQuery: '',
            timeout: null // Timeout reference for debouncing
        };
    },
    methods: {
        emitSearch() {
            this.$emit('search', this.searchQuery);
        },
        onInput() {
            clearTimeout(this.timeout); // Clear the previous timeout
            // Set a new timeout
            this.timeout = setTimeout(() => {
                this.emitSearch();
            }, 500); // Delay in milliseconds
        }
    },
    mounted() {
        this.searchQuery = this.$route.query.q;
        // Optional
        // if (this.searchQuery) {
        //     this.$emit('search', this.searchQuery);
        //     console.log(this.$route)
        //     console.log(this.$route.query.q)
        // }
    },
    beforeUnmount() {
        // Clear the timeout if the component is destroyed
        clearTimeout(this.timeout);
    }
};
</script>
