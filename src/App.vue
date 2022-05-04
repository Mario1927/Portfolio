<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import NavBar from './components/NavBar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Work from './components/Work.vue'
import Social from './components/Social.vue'
import Email from './components/Email.vue'

</script>

<template>
  <div id="main" :class="dark ? 'dark' : 'ligth'">
    <div class="bg-slate-100 dark:bg-[#0a192f]">
      <NavBar />
      <Social />
      <Email />
      <Home />
      <About />
      <Skills />
      <Work />      
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['dark'])
  }
}
</script>
