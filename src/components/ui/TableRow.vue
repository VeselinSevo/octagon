<template>
    <tr>
        <td v-for="(key, index) in keys" :key="key" class="border px-4 py-2"
            :class="{ 'bg-blue-200': rowData['highlighted'] }">
            {{ rowData[keys[index]] }}
            <span v-if="key === 'username' && rowData['highlighted']"
                class="ml-2 text-xs text-white bg-green-500 px-2 py-1 rounded">
                You
            </span>
        </td>
        <td class="border px-4 py-2 flex items-center" :class="{ 'bg-blue-200': rowData['highlighted'] }">
            <button @click="editRow"
                class="bg-green-main hover:bg-green-secondary text-white font-bold py-1 px-2 rounded mr-2">
                Edit
            </button>
            <button @click="deleteRow" class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                Delete
            </button>
        </td>
    </tr>
</template>

<script>
export default {
    name: 'TableRow',
    props: {
        rowData: {
            type: Object,
            required: true
        },
        keys: {
            type: Array,
            required: true
        }
    },
    methods: {
        editRow() {
            this.$emit('edit', this.rowData);
        },
        deleteRow() {
            this.$emit('delete', this.rowData);
        }
    }
};
</script>
