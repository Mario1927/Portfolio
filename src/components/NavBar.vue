<template>
  <div id="navbar" className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-100 dark:bg-[#0a192f] text-[#233554] font-semibold dark:text-gray-300 animate__lightSpeedInRight z-20 duration-300'>
      <div className="w-[10%]">
        <img :src=Logo alt="Brand Logo" className="w-[60px]"/>
      </div>

      <!-- Menu -->
      <ul className='hidden items-center justify-end md:flex animate__animated animate__backInRight'>
        <li className="hover:text-pink-600 duration-300 px-4 cursor-pointer" v-scroll-to="'#home'">{{ text.home }}</li>
        <li className="hover:text-pink-600 duration-300 px-4 cursor-pointer" v-scroll-to="'#about'">{{ text.about }}</li>
        <li className="hover:text-pink-600 duration-300 px-4 cursor-pointer" v-scroll-to="'#skills'">{{ text.skills }}</li>
        <li className="hover:text-pink-600 duration-300 px-4 cursor-pointer" v-scroll-to="'#works'">{{ text.works }}</li>
        <li className="hover:text-pink-600 duration-300 px-4 cursor-pointer" v-scroll-to="'#contact'">{{ text.contact }}</li>
        <li className="hover:text-[#0a192f] dark:hover:text-slate-100 duration-300 px-4 cursor-pointer text-[#f9b82c]"><ThemeToggle/></li>
        <LanguageToggle/>
     </ul>

     <!-- Hamburger -->
     <div @click="toggleMenu" className="md:hidden z-10">
         <fa v-if="!isOpen" icon="bars"/>
         <fa v-else icon="xmark" />
     </div>

    <!-- Mobile Menu -->
    <Transition name="mobile-transition" enter-active-class="animate__animated animate__backInRight animate__faster" leave-active-class="animate__animated animate__backInRight animate__fast animate__backOutRight">
        <ul v-show="isOpen" className='absolute top-0 left-0 w-full h-screen bg-slate-100 dark:bg-[#0a192f] flex flex-col justify-center items-center'>
            <li className="py-6 text-4xl px-4 cursor-pointer text-[#f9b82c]"><ThemeToggle/></li>
            <li className="text-3xl"><LanguageToggle/></li>
            <li className='py-6 text-4xl px-4 cursor-pointer' @click="onStart().then(() => {$scrollTo('#' + 'home')})">{{ text.home }}</li>
            <li className='py-6 text-4xl px-4 cursor-pointer' @click="onStart().then(() => {$scrollTo('#' + 'about')})">{{ text.about }}</li>
            <li className='py-6 text-4xl px-4 cursor-pointer' @click="onStart().then(() => {$scrollTo('#' + 'skills')})">{{ text.skills }}</li>
            <li className='py-6 text-4xl px-4 cursor-pointer' @click="onStart().then(() => {$scrollTo('#' + 'works')})">{{ text.works }}</li>
            <li className='py-6 text-4xl px-4 cursor-pointer' @click="onStart().then(() => {$scrollTo('#' + 'contact')})">{{ text.contact }}</li>
        </ul>
    </Transition>
  </div>
</template>

<script>
import Logo from '../assets/logo.png'
import { debounce } from 'vue-debounce'
import ThemeToggle from './ThemeToggle.vue'
import 'animate.css'
import LanguageToggle from './LanguageToggle.vue'

window.onscroll = debounce(function() {
    if(this.prevScrollpos > window.pageYOffset) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar").style.boxShadow = "0px 1px 5px rgba(0,0,0,0.5)";
    } else {
        document.getElementById("navbar").style.top = "-80px";
    }
    this.prevScrollpos = window.pageYOffset;
    if(this.prevScrollpos === 0) {
        document.getElementById("navbar").style.boxShadow = "none";
    }
}, 50)

export default {
    data() {
        return {
            isOpen: false,
            Logo,
            prevScrollpos: window.pageYOffset,
            eng: {
                home: "Home",
                about: "About",
                skills: "Skills",
                works: "Works",
                contact: "Contact",
            },
            es: {
                home: "Inicio",
                about: "Sobre mí",
                skills: "Habilidades",
                works: "Proyectos",
                contact: "Contacto",
            }
        }
    },
    computed: {
        text() {
            return this.$store.state.lang === 'en' ? this.eng : this.es
        }
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen;
        },
        onStart() {
            this.toggleMenu();
            return new Promise(resolve => setTimeout(resolve, 400))
        }
    },
    components: {
        ThemeToggle,
        LanguageToggle
    }
}
</script>