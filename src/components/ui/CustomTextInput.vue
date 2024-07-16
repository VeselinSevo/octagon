<template>
    <div>
        <label :for="id" class="block text-gray-700 font-bold mb-2">{{ label }}</label>
        <input :type="type" :placeholder="placeholder" v-model="internalValue" :id="id"
            class="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500 ease-in-out" />
    </div>
</template>

<script>
export default {
    name: 'CustomTextInput',
    props: {
        id: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        },
        modelValue: {
            type: [String, Number],
            default: ''
        },
    },
    computed: {
        internalValue: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit('update:modelValue', value);
            }
        }
    }
};
</script>
