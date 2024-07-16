<template>
    <PagePadding>
        <TheBigContainer>
            <div class="container mx-auto p-6">
                <h1 class="text-2xl font-bold mb-4">Shopping Cart</h1>
                <div v-if="cartItems && cartItems.length">
                    <CartItem v-for="item in cartItems" :key="item.id" :item="item" @remove="removeItem(item)" />
                    <div class="mt-6 text-right">
                        <p class="text-lg font-semibold">Total: ${{ cartTotal ? cartTotal : '0.00' }}</p>
                        <TheButton class="mt-5" href="checkout" text="Proceed to Checkout" />
                    </div>
                </div>
                <div v-else>
                    <p class="text-center text-gray-600">Your cart is empty.</p>
                </div>
            </div>
        </TheBigContainer>
    </PagePadding>
</template>

<script>
import CartItem from '@/components/cart/CartItem.vue';

export default {
    components: {
        CartItem
    },
    data() {
        return {
            cartItems: [],
            cartTotal: 0,
        };
    },
    created() {
        this.fetchCartItems();
        this.fetchCartTotal();
    },
    methods: {
        fetchCartItems() {
            this.cartItems = this.$store.state.cartModule.cartItems;
        },
        fetchCartTotal() {
            this.cartTotal = this.$store.getters['cartModule/cartTotal'];
        },
        removeItem(item) {
            this.$store.dispatch('cartModule/removeFromCart', item.id);
        }
    },
    watch: {
        '$store.state.cartModule.cartItems'(newValue) {
            this.cartTotal = this.$store.getters['cartModule/cartTotal'];
            this.cartItems = newValue;
        },
        '$store.getters["cartModule/cartTotal"]'(newValue) {
            this.cartTotal = newValue;
        }
    }
};
</script>

<style scoped>
/* Add any scoped styles here */
</style>
