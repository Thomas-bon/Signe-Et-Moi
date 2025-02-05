<template>

  <nav>
    <div id="allButtonNav">

      <RouterLink to="/" :class="{ 'active': $route.path === '/' }">
          <img src="../../src/assets/HomeIcon.svg" alt="Icone de maison" id="homeButton" class="buttonNav">
          
      </RouterLink>

      <RouterLink to="/learn" :class="{ 'active': $route.path === '/learn' }">
          <img src="../../src/assets/LearnIcon.svg" alt="Icone de Livre" id="learnButton" class="buttonNav">

      </RouterLink>

      <RouterLink to="/revise" :class="{ 'active': $route.path === '/revise' }">
          <img src="../../src/assets/ReviseIcon.svg" alt="Icone de Livre" id="reviseButton" class="buttonNav">

      </RouterLink>

    </div>

  </nav>


</template>

<script>
import { RouterLink, RouterView } from 'vue-router'


</script>

<style>

.cercleSelected {
  width: 80px;
  height: 80px;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
}

.buttonNav {
  width: 40px;
  height: 40px;
  transition: 0.5s ease;
}

.active .buttonNav {
  transform: translateY(-20px);
  /* background-color: red; */

}

#allButtonNav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20%;
  height: 100%;
  width: 100%;
}

nav {
  height: 10vh;
  width: 100vw;
  position: absolute;
  bottom: 0;
  background-color: #212121;

  border-radius: 20px 20px 0px 0px;
}
</style>