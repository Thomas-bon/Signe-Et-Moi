<template>
  <nav>
    <div id="allButtonNav" ref="navContainer">
      <!-- Cercle indicateur -->
      <div v-if="showIndicator" class="indicator" :style="{ left: indicatorPosition + 'px' }"><span></span></div>

      <!-- Boutons de navigation -->
      <RouterLink to="/" :class="{ active: $route.path === '/' }" ref="home" @click="updateIndicator('home')">
        <img src="../../src/assets/icons/iconHome.svg" alt="Icone de maison" class="buttonNav" id="homeIcon">
      </RouterLink>

      <RouterLink to="/learn" :class="{ active: $route.path === '/learn' }" ref="learn"
        @click="updateIndicator('learn')">
        <img src="../../src/assets/icons/iconQuiz.svg" alt="Icone de Livre" class="buttonNav" id="learnIcon">
      </RouterLink>

      <RouterLink to="/revise" :class="{ active: $route.path === '/revise' }" ref="revise"
        @click="updateIndicator('revise')">
        <img src="../../src/assets/icons/iconBook.svg" alt="Icone de Livre" class="buttonNav" id="reviseIcon">
        <div id="reviseIcon" alt="Icone de livre"></div>
      </RouterLink>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      indicatorPosition: 0, // Position initiale du cercle
      showIndicator: false,
    };
  },
  mounted() {
    this.setInitialIndicator();
    window.addEventListener("resize", this.setInitialIndicator); // Ajuster si redimensionnement
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.setInitialIndicator);
  },
  methods: {

    //animation rond qui se déplace sur les icones
    updateIndicator(refName) {
      this.$nextTick(() => {
        const icon = this.$refs[refName]?.$el || this.$refs[refName];
        const navContainer = this.$refs.navContainer;
        if (icon && navContainer) {
          const iconRect = icon.getBoundingClientRect();
          const navRect = navContainer.getBoundingClientRect();
          this.indicatorPosition = iconRect.left - navRect.left + (iconRect.width / 2) - 40;
          this.showIndicator = true;
        }
      });
    },
    setInitialIndicator() {
      if (this.$route.path === "/") {
        this.updateIndicator("home");
      } else if (this.$route.path === "/learn") {
        this.updateIndicator("learn");
      } else if (this.$route.path === "/revise") {
        this.updateIndicator("revise");
      } else {
        this.showIndicator = false; 
      }
    }

  },
  watch: {
    $route() {
      this.setInitialIndicator();
    }
  }
};
</script>

<style scoped>
.indicator {
  position: absolute;
  bottom: 45px;
  width: 80px;
  height: 80px;
  background: var(--secondary-color);
  border-radius: 50%;
  transition: left 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
}

.buttonNav {
  width: 50px;
  height: 50px;
  transition: transform 0.6s ease;
}

.active .buttonNav {
  transform: translateY(-30px);
}

#allButtonNav {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20%;
  padding: 15px 0;
}

nav {
  height: 10vh;
  width: 100vw;
  position: absolute;
  bottom: 0;
  background-color: #212121;
  border-radius: 20px 20px 0 0;
}



</style>
