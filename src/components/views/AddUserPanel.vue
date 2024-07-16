<!-- AddUserForm.vue -->

<template>
    <PagePadding>
        <TheContainer>
            <div class="p-6 bg-white shadow-md rounded-lg">
                <h2 class="text-xl font-semibold mb-4">Add User</h2>
                <form @submit.prevent="addUser">
                    <div class="mb-4">
                        <CustomTextInput id="username" label="Username" v-model="user.username"
                            placeholder="Enter username" />
                    </div>
                    <div class="mb-4">
                        <CustomTextInput id="email" label="Email" v-model="user.email" placeholder="Enter email"
                            type="email" />
                    </div>
                    <div class="mb-4">
                        <CustomTextInput id="password" label="Password" v-model="user.password"
                            placeholder="Enter password" type="password" />
                    </div>
                    <div class="mb-4">
                        <label for="role" class="block text-gray-700 font-bold mb-2">Role</label>
                        <select id="role" v-model="user.role_id"
                            class="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-main">
                            <option value="" disabled>Select role</option>
                            <option v-for="role in roles" :key="role.id" :value="role.id">{{ role.name }}
                            </option>
                        </select>
                    </div>
                    <div class="flex justify-end">
                        <button type="button" @click="$emit('cancel')"
                            class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2">Cancel</button>
                        <button type="submit"
                            class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Add
                            User</button>
                    </div>
                </form>
            </div>
        </TheContainer>
    </PagePadding>
</template>

<script>
import { addUserAdmin, getUserRoles } from '../../../firebaseFunctions';
import { useToast } from 'vue-toastification';

export default {
    name: 'AddUserForm',
    data() {
        return {
            user: {
                username: '',
                email: '',
                password: '',
                role_id: ''
            },
            roles: []
        };
    },
    async created() {
        try {
            // Fetch user roles from Firebase
            this.roles = await getUserRoles();
        } catch (error) {
            console.error('Error fetching user roles:', error.message);
        }

        console.log(this.roles)
    },
    methods: {
        async addUser() {
            try {
                // Validate user input (optional)
                console.log(123)
                console.log(this.user)
                if (!this.user.username || !this.user.email || !this.user.password || !this.user.role_id) {
                    throw new Error('Please fill out all fields.');
                }

                // Add user to Firebase Firestore
                await addUserAdmin(this.user);

                // Reset form fields
                this.user = {
                    username: '',
                    email: '',
                    password: '',
                    role_id: ''
                };

                // Show success toast notification
                const toast = useToast();
                toast.success('User added successfully');
            } catch (error) {
                console.error('Error adding user: ', error.message);
                const toast = useToast();
                toast.error('Failed to add user');
            }
        }

    }
};
</script>

<style scoped>
/* Add scoped styles if needed */
</style>
