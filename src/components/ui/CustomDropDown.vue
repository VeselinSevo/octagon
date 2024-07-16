<template>
    <div class="relative inline-block w-full">
        <div @click="toggleDropdown"
            class="cursor-pointer bg-white border rounded p-2 flex justify-between items-center">
            <span>{{ modelValue ? modelValue.name : 'Select a card' }}</span>
            <i class="fa fa-chevron-down"></i>
        </div>
        <div v-if="isOpen" class="absolute w-full mt-1 bg-white border rounded shadow-lg z-10">
            <div v-for="card in cardsSource" :key="card.name" @click="selectCard(card)"
                class="cursor-pointer p-2 hover:bg-gray-100 flex items-center gap-4">
                <div class="w-14 h-12">
                    <img :src="card.img" class="w-full h-full object-cover" />
                </div>
                <p>{{ card.name }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        cardsSource: {
            type: Array,
            required: true
        },
        modelValue: {
            type: Object,
            default: null
        },
    },
    data() {
        return {
            isOpen: false,
            isCardSelected: false,
            isPrestine: true,
            counter: 0
        };
    },
    methods: {
        handleClickOutside(event) {
            if (!this.$el.contains(event.target) && this.counter) {
                this.$emit("changePrestine")
                this.isOpen = false;
            }
        },
        toggleDropdown() {
            if (this.counter > 0)
                this.isPrestine = false

            if (!this.isPrestine && !this.isCardSelected) {
                this.$emit("changePrestine")
            }
            this.isOpen = !this.isOpen;
            this.counter++;
        },
        selectCard(card) {
            this.$emit('update:modelValue', card);
            this.isCardSelected = true
            // this.$emit("changePrestine");
            this.isOpen = false;
        }
    },
    mounted() {
        document.addEventListener('click', this.handleClickOutside);
    },
    beforeUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    }
};
</script>

<style scoped>
/* Add any scoped styles for your component here */
</style>
