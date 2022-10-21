<script setup>
import { RouterLink, RouterView } from "vue-router";
import ProfilSection from "@/components/ProfilSection.vue";
</script>

<template>
  <header>
    <img 
    class="logo"
    src="../src/assets/Foto.jpg" 
    alt="Foto Fauzi" 
    width="210"
    height="230"
    />

    <div class="wrapper">
      <ProfilSection />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh; 
}

.logo {
  display: block;
  margin: 0 auto 0.25rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  transition: 0.3s;
}

nav a:first-of-type {
  border: 0;
}
</style>
