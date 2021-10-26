<template>
  <div id="material-kit">
    <div :class="{ 'nav-open': NavbarStore.showNavbar }">
      <main-nav-bar />
      <div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import MainNavBar from "./layout/MainNavbar.vue";

export default {
  components: {
    MainNavBar
  }
};
</script>

<style>
.wrapper {
  padding-bottom: 50px !important;
}
</style>
