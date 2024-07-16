<template>
    <div class="fixed inset-0 flex items-center justify-center bg-black/75" @click.self="$emit('cancel')">
        <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 class="text-2xl font-semibold mb-4">Edit User</h2>

            <div class="mb-4">
                <CustomTextInput label="Username" type="text" id="username" placeholder="Username"
                    v-model="localUser.username" />
            </div>
            <div class="mb-4">
                <CustomTextInput label="Email" type="email" id="email" placeholder="Email" v-model="localUser.email" />
            </div>
            <div class="mb-4">
                <label for="role" class="block text-gray-700 font-bold mb-2">Role</label>
                <select id="role" v-model="localUser.role_id"
                    class="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-main">
                    <option value="" disabled>Select role</option>
                    <option v-for="role in roles" :key="role.id" :value="role.id">{{ role.name }}</option>
                </select>
            </div>
            <div class="flex justify-end">
                <button @click="$emit('cancel')"
                    class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2">Cancel</button>
                <button @click="save"
                    class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Save</button>
            </div>
        </div>
    </div>
</template>

<script>

import { getUserRoles } from '../../../../firebaseFunctions';

export default {
    name: 'EditUserModal',
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            localUser: { ...this.user },
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
    },
    methods: {
        save() {
            // Update localStorage if editing own user
            console.log(this.localUser, "Local")
            const loggedInEmail = localStorage.getItem('email');
            if (loggedInEmail === this.localUser.email) {
                localStorage.setItem('username', this.localUser.username);
                localStorage.setItem('email', this.localUser.email);
                localStorage.setItem('password', this.localUser.password);
            }

            this.$emit('save', this.localUser);
        }
    }
};
</script>
