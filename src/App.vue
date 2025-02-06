<script>
import { RouterLink, RouterView } from 'vue-router'
import navigationBar from "./components/nav.vue"
import { callWithAsyncErrorHandling } from 'vue';
import { score } from "./stores/score"

export default {
  name: "Home",
  data() {
    return {
      route: this.$route
    }
  },

  mounted() {
    const name = localStorage.getItem("userName");

    if (!name) {
      this.$router.push("/what-is-your-name")
    }

  },

  computed: {
    showNavbar() {
      return this.$route.path !== '/what-is-your-name'

    }
  },

  components: {
    navigationBar,
    RouterLink,
    RouterView

  },

  watch: {
    $route(to, from) {
      score.reset();
    }
  }


}

</script>

<template>



  <RouterView />


  <navigationBar v-if="showNavbar" />

</template>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  overflow: hidden;
}
</style>
