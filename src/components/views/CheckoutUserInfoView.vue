<template>
    <PagePadding>
        <TheContainer>
            <h1 class="text-2xl font-bold mb-4">Checkout / Personal Info</h1>
            <v-form ref="form" @submit.prevent="submit" v-model="formValid">
                <div class="flex flex-col md:flex-row gap-5 mb-3">
                    <v-text-field v-model="username" :rules="nameRules" label="Name" required></v-text-field>
                    <v-text-field v-model="email" :rules="emailRules" label="Email" required></v-text-field>
                </div>

                <v-text-field class="mb-3" v-model="address" :rules="addressRules" label="Address"
                    required></v-text-field>

                <v-text-field class="mb-3" v-model="phoneNumber" :rules="phoneNumberRules" label="Phone Number"
                    required></v-text-field>

                <div class="mb-5">
                    <CustomDropDown @changePrestine="handleChangePrestine"
                        :class="{ 'border-b-2 border-red-600 text-red-600': !selectedCard && (isSubmitAttempted || !isCardPrestine) }"
                        v-model="selectedCard" :cardsSource="cardsSource"></CustomDropDown>
                </div>

                <div v-if="!selectedCard && (isSubmitAttempted || !isCardPrestine)">
                    <p class="text-red-700 text-xs ml-4">Payment method is required</p>
                </div>


                <div v-if="selectedCard">
                    <div class="flex gap-3 items-center my-5">
                        <div class="w-14 h-12">
                            <img :src="selectedCard.img" class="w-full h-full object-cover" />
                        </div>

                        <p>{{ selectedCard.name }}</p>


                    </div>
                    <v-text-field class="mb-3" v-model="cardNumber" :rules="cardNumberRules" label="Card Number"
                        required></v-text-field>
                </div>

                <!-- <v-btn :loading="loading" class="mt-2 bg-green-main" type="submit">
                    Submit
                </v-btn> -->
                <div class="mt-6 text-right">
                    <TheButton type="submit" class="mt-5" href="checkout" text="Next" />
                </div>
            </v-form>
        </TheContainer>
    </PagePadding>
</template>

<script>
import CustomDropDown from '../ui/CustomDropDown.vue';

export default {
    components: {
        CustomDropDown
    },
    data() {
        return {
            isSubmitAttempted: false,
            isCardPrestine: true,
            formValid: false,
            loading: false,
            username: localStorage.getItem('username') || '',
            email: localStorage.getItem('email') || '',
            address: '',
            phoneNumber: '',
            selectedCard: null,
            cardNumber: '',
            cardsSource: [],
            nameRules: [
                v => !!v || 'Name is required',
                v => v.length >= 3 || 'Name must be at least 3 characters'
            ],
            emailRules: [
                v => !!v || 'Email is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
            ],
            addressRules: [
                v => !!v || 'Address is required'
            ],
            phoneNumberRules: [
                v => !!v || 'Phone number is required',
                v => /^\d+$/.test(v) || 'Phone number must be numeric'
            ],
            cardNumberRules: [
                v => !!v || 'Card number is required',
                v => /^\d+$/.test(v) || 'Card number must be numeric'
            ]
        };
    },
    methods: {
        async submit() {
            this.isSubmitAttempted = true
            if (!this.$refs.form.validate()) {
                return;
            }

            this.loading = true;

            // Mock API call delay
            setTimeout(() => {
                alert(JSON.stringify({
                    name: this.name,
                    email: this.email,
                    address: this.address,
                    phoneNumber: this.phoneNumber,
                    selectedCard: this.selectedCard
                }, null, 2));
                this.loading = false;
            }, 1000);
        },
        handleChangePrestine() {
            this.isCardPrestine = false
        }
    },
    async created() {
        const data = await fetch('/cards.json');
        const cards = await data.json();
        this.cardsSource = cards;
    }
};
</script>

<style scoped>
/* Add any scoped styles for your component here */
</style>
