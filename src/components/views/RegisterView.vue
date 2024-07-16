<template>
    <PagePadding>
        <TheContainer>
            <TheTitle title="Register"></TheTitle>
            <div class="flex justify-center">
                <form @submit.prevent="handleRegister" class="w-1/2">
                    <div class="mb-5">
                        <v-text-field v-model="username" variant="solo" label="Username" placeholder="johndoe"
                            type="text" hide-details="auto" class="w-full"></v-text-field>
                        <span v-if="errors.username" class="text-red-500 text-sm">{{ errors.username }}</span>
                    </div>
                    <div class="mb-5">
                        <v-text-field v-model="email" variant="solo" label="Email address"
                            placeholder="johndoe@gmail.com" type="email" hide-details="auto"
                            class="w-full"></v-text-field>
                        <span v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</span>
                    </div>
                    <div class="mb-5">
                        <v-text-field v-model="password" variant="solo" label="Password"
                            placeholder="Enter your password" type="password" hide-details="auto"
                            class="w-full"></v-text-field>
                        <span v-if="errors.password" class="text-red-500 text-sm">{{ errors.password }}</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <TheButton text="Register" :center="true" :isSubmit="true"></TheButton>
                    </div>
                    <div v-if="errorMessage" class="pt-5">
                        <v-alert text="errorMessage" title="Registration failed" type="error">{{ errorMessage
                            }}</v-alert>
                    </div>
                </form>
            </div>
        </TheContainer>
    </PagePadding>
</template>

<script>
import { addUser } from '/firebaseFunctions';

export default {
    name: 'RegisterView',
    data() {
        return {
            username: '',
            email: '',
            password: '',
            errors: {},
            errorMessage: '',
        };
    },
    methods: {
        validateForm() {
            this.errorMessage = ''
            this.errors = {};
            let valid = true;

            if (!this.username) {
                this.errors.username = 'Username is required';
                valid = false;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!this.email) {
                this.errors.email = 'Email is required';
                valid = false;
            } else if (!emailPattern.test(this.email)) {
                this.errors.email = 'Invalid email address';
                valid = false;
            }

            if (!this.password) {
                this.errors.password = 'Password is required';
                valid = false;
            } else if (this.password.length < 6) {
                this.errors.password = 'Password must be at least 6 characters';
                valid = false;
            }

            return valid;
        },
        async handleRegister() {
            if (!this.validateForm()) {
                return;
            }

            try {
                const newUser = {
                    username: this.username,
                    email: this.email,
                    password: this.password,
                };

                // Save user data to Firestore
                await addUser(newUser);

                this.username = '';
                this.email = '';
                this.password = '';

                this.$router.push({ name: 'login' });
            } catch (error) {
                console.error('Error registering user:', error);
                this.errorMessage = 'Registration failed. Please try again later.';
            }
        },
    },
};
</script>

<style scoped>
/* No additional styles needed as we're using Tailwind CSS classes */
</style>
