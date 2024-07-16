<template>
    <div class="overflow-x-auto">
        <table class="min-w-full bg-white border-collapse block md:table">
            <thead class="block md:table-header-group">

                <tr
                    class="border border-gray-300 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">

                    <th v-for="headingValue in heading" :key="headingValue"
                        class="bg-gray-100 border text-left px-4 py-2 block md:table-cell">
                        {{ headingValue }}
                    </th>
                </tr>
            </thead>
            <tbody class="block md:table-row-group">
                <TableRow v-for="(row, index) in rows" :keys="keys" :key="index" :rowData="row" @edit="handleEdit"
                    @delete="handleDelete" />
            </tbody>
        </table>
    </div>
</template>

<script>
import TableRow from './TableRow.vue';

export default {
    name: "TheTable",
    components: {
        TableRow
    },
    props: {
        rows: {
            type: Array,
            required: true
        },
        heading: {
            type: Array,
            required: true
        },
        keys: {
            type: Array,
            required: true
        }
    },
    methods: {
        handleEdit(row) {
            this.$emit('edit', row);
        },
        handleDelete(row) {
            this.$emit('delete', row);
        }
    }
};
</script>