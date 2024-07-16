<template>
    <PagePadding>
        <TheContainer>
            <TheTitle title="Login"></TheTitle>
            <div class="flex justify-center">
                <form @submit.prevent="handleLogin" class="w-1/2">
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
                        <TheButton text="Login" :center="true" :isSubmit="true"></TheButton>
                    </div>
                    <div v-if="errorMessage" class="pt-5">
                        <v-alert :text="errorMessage" title="Login failed" type="error"></v-alert>
                    </div>
                </form>
            </div>
        </TheContainer>
    </PagePadding>

</template>

<script>
import { getAllUsers, getUserRole } from '/firebaseFunctions.js';

export default {
    name: 'LoginView',
    data() {
        return {
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
            }

            return valid;
        },
        async handleLogin() {
            if (!this.validateForm()) {
                return;
            }

            try {
                const users = await getAllUsers();

                let userFound = false;


                (async () => {
                    const promises = users.map(async user => {
                        if (user.password === this.password && user.email === this.email) {
                            localStorage.setItem('username', this.username);
                            localStorage.setItem('password', this.password);
                            localStorage.setItem('email', this.email);
                            let userData = { 'username': user.username, 'password': user.password, 'email': user.email }



                            this.$store.dispatch('authModule/login', userData);
                            const roleName = await getUserRole(user.role_id)
                            userFound = true;

                            console.log(roleName)
                            if (userFound) {
                                if (roleName == 'admin') {
                                    this.$router.push({ name: 'admin-home' });
                                } else {
                                    this.$router.push({ name: 'home' });
                                }
                            }
                        }
                    });
                    await Promise.all(promises);
                    if (!userFound) {
                        this.errorMessage = 'Invalid email or password';
                    }
                })();





            } catch (error) {
                console.error('Error fetching users:', error);
                this.errorMessage = 'Login failed. Please try again later.';
            }
        },
    },
};
</script>

<style scoped>
/* No additional styles needed as we're using Tailwind CSS classes */
</style>
