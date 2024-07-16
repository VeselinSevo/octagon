<template>
  <div class="flex justify-between">
    <ul class="flex gap-4 sm:gap-7 list-none">
      <RouterLink :to="{ path: '/home', query: $route.query }"
        class="cursor-pointer hover:text-green-main text-sm sm:text-base py-2"
        active-class="text-green-main border-b-4 border-green-main">
        Home
      </RouterLink>
      <RouterLink :to="{ path: '/courses', query: $route.query }"
        class="cursor-pointer hover:text-green-main text-sm sm:text-base py-2"
        active-class="text-green-main border-b-4 border-green-main">
        All Courses
      </RouterLink>
      <RouterLink v-if="isLoggedIn" :to="{ path: '/my-learning', query: $route.query }"
        class="cursor-pointer hover:text-green-main text-sm sm:text-base py-2"
        active-class="text-green-main border-b-4 border-green-main">
        My Courses
      </RouterLink>
    </ul>

    <ul class="flex gap-4 sm:gap-7 list-none place-content-center align-middle">
      <RouterLink v-if="!isLoggedIn" :to="{ path: '/register', query: $route.query }"
        class="cursor-pointer hover:text-green-main text-sm sm:text-base py-2"
        active-class="text-green-main border-b-4 border-green-main">
        Register
      </RouterLink>
      <RouterLink v-if="!isLoggedIn" :to="{ path: '/login', query: $route.query }"
        class="cursor-pointer hover:text-green-main text-sm sm:text-base py-2"
        active-class="text-green-main border-b-4 border-green-main">
        Login
      </RouterLink>
      <RouterLink v-if="isLoggedIn" :to="{ path: '/profile', query: $route.query }"
        class="cursor-pointer hover:text-green-main text-sm sm:text-base py-2"
        active-class="text-green-main border-b-4 border-green-main">
        <i class="text-xl fa-solid fa-user"></i>
      </RouterLink>

      <div v-if="cartTotalItems">
        <v-badge color="success" :content="cartTotalItems">
          <RouterLink :to="{ path: '/cart', query: $route.query }"
            class="cursor-pointer hover:text-green-main text-sm sm:text-base py-2"
            active-class="text-green-main border-b-4 border-green-main">
            <i class="ml-2 text-xl fa-solid fa-cart-shopping"></i>
          </RouterLink>
        </v-badge>
      </div>
      <div v-else>
        <RouterLink :to="{ path: '/cart', query: $route.query }"
          class="cursor-pointer hover:text-green-main text-sm sm:text-base py-2"
          active-class="text-green-main border-b-4 border-green-main">
          <i class="ml-2 text-xl fa-solid fa-cart-shopping"></i>
        </RouterLink>
      </div>

      <!-- Logout button -->
      <button v-if="isLoggedIn" @click="logout" class="cursor-pointer hover:text-green-main text-sm sm:text-base">
        Logout
      </button>



    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  data() {
    return {
      isLoggedIn: this.$store.state.authModule.isLoggedIn
    }
  },
  methods: {
    logout() {
      // Dispatch action to logout user
      this.$store.dispatch('authModule/logout')
        .then(() => {
          // Navigate to login page or homepage after successful logout
          this.$router.push({ name: 'login' });
        })
        .catch(error => {
          console.error('Failed to logout:', error);
        });
    }
  },
  // computed: {
  //   isUserLoggedIn() {
  //     return this.$store.state.authModule.isLoggedIn;
  //   }
  // },
  // Ne moze ovako, watch se poziva samo kad se promeni vrednost. Medjutim to znaci da se
  // promeni vrednost od kako je ova komponenta mountovana. 
  // U trenutku kad je komponenta mountovana loggin je vec promenjen na true(jer se to menja u main.js kad se app pravi) 
  // tako da se ovo nece izvrsiti(vrednost nije PROMENJENA OD KAKO JE KOMPONENTA MOUNTOVANA)

  //VAZNO: NE MOZE AKO JE POCETAN STATE FALSE, AKO JE POCETAN STATE  isLoggedIn: this.$store.state.authModule.isLoggedIn ONDA MOZE
  watch: {
    '$store.state.authModule.isLoggedIn': function (newIsLoggedIn) {
      console.log(123)
      this.isLoggedIn = newIsLoggedIn;
    },
    '$store.getters["cartModule/cartTotalItems"]'(newValue) {
      this.cartTotal = newValue;
    }
  },

  computed: {
    cartTotalItems() {
      return this.$store.getters['cartModule/cartTotalItems'];
    },
  }
}
</script>


<style scoped>
/* No styles needed as we're using Tailwind CSS classes */
</style>
