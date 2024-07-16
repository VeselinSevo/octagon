<template>
    <div class="fixed inset-0 flex items-center justify-center bg-black/75" @click.self="$emit('cancel')">
        <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 class="text-xl font-bold mb-4">{{ message }}</h2>
            <div class="flex justify-end">

                <button @click="cancel"
                    class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2">No</button>
                <button @click="confirm"
                    class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Yes</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        message: {
            type: String,
            required: true
        }
    },
    methods: {
        confirm() {
            this.$emit('confirm');
        },
        cancel() {
            this.$emit('cancel');
        }
    }
};
</script>
