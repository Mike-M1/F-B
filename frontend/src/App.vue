<template>
  <div>
    <LogIn />
  <!-- <header class="flex flex-col">
  
    <HeroSection />
    
    <SocialProof />
    <Benefits />
    <CTA />
    <Plans/>
    <Testimonials />
    <CTA/>
    <Footer/>
   
    <NavBar />
    <div class="flex flex-col justify-between p-10 items-center text-white">
      <h1 class=" text-1xl ">The flo</h1>
      <h1>Main Section</h1>
    </div>
    <div class="flex flex-row justify-center">
    <RouterView class="flex" />
    
    </div>
  </header>

  <RouterView /> -->
  </div>
</template>

<script>
// import NavBar from './components/NavBar.vue'
// import HeroSection from './views/HeroSection.vue';
// import SocialProof from './views/SocialProof.vue';
// import Benefits from './views/Benefits.vue';
// import CTA from './views/CTA.vue';
// import Plans from './views/Plans.vue';
// import Testimonials from './views/Testimonials.vue';
import LogIn from './views/LogIn.vue';


export default {
  name: 'App',
  components: {
    // NavBar,
    // HeroSection,
    // SocialProof,
    // Benefits,
    // CTA,
    // Plans,
    // Testimonials,
    LogIn
  }
}


</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
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
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
