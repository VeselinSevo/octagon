<template>
    <PagePadding>
        <TheBigContainer>
            <Table :rows="courses" @edit="editRow" @delete="deleteRow"
                :heading="['Name', 'Price', 'Number Of Students', 'Duration', 'Actions']"
                :keys="['name', 'price', 'numOfStudents', 'duration']" />
        </TheBigContainer>
    </PagePadding>
</template>

<script>

import Table from '@/components/ui/TheTable.vue';

export default {
    components: {
        Table
    },
    // data() {
    //     return {
    //         courses: []
    //     }
    // },
    async created() {
        // Fetch the courses when the component is created
        await this.$store.dispatch('courseModule/loadCourses');
    },
    // async created() {
    //     let data = await fetch('http://localhost:3000/courses')
    //     this.courses = await data.json()
    // },
    computed: {
        courses() {
            console.log(this.$store.getters['courseModule/getCourses'])
            return this.$store.getters['courseModule/getCourses']
        }
    },
    // watch: {
    //     "this.$store.getters['courseModule/getCourses']"() {

    //     }
    // }
    methods: {
        editRow(row) {
            // Handle edit logic
            console.log('Edit', row);
        },
        deleteRow(row) {
            this.$store.dispatch('courseModule/deleteCourse', row.id)
        }
    }
};
</script>