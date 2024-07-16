<template>
    <div class="flex flex-col md:flex-row items-center justify-between p-4 border-b border-gray-300">
        <img :src="item.img" alt="Product Image" class="w-20 h-20 object-cover rounded-md mb-4 md:mb-0 md:mr-4">
        <div class="flex flex-col flex-grow">
            <h2 class="text-lg font-semibold">{{ item.name }}</h2>
            <p class="text-gray-600">{{ item.description }}</p>
            <div class="flex items-center mt-2">
                <span class="text-gray-800 mr-4">${{ item.price }}</span>
                <!-- <input type="number" v-model="item.quantity" class="w-16 border border-gray-300 rounded px-2 py-1"> -->
            </div>
        </div>
        <button @click="removeItem" class="ml-4 text-red-500 hover:text-red-700 mt-4 md:mt-0">
            Remove
        </button>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    methods: {
        removeItem() {
            this.$emit('remove', this.item);
        }
    }
};
</script>

<style scoped>
/* Add any scoped styles here */
</style>