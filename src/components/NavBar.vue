<template>
  <div id="navbar" className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-transparent text-gray-300 z-20 duration-300'>
      <div>
          <img :src=Logo alt="Brand Logo" className="w-[30px]"/>
      </div>

      <!-- Menu -->
      <ul className='hidden md:flex'>
        <li className="hover:text-pink-600 duration-300 px-4 cursor-pointer" v-scroll-to="'#home'">Home</li>
        <li className="hover:text-pink-600 duration-300 px-4 cursor-pointer" v-scroll-to="'#about'">About</li>
        <li className="hover:text-pink-600 duration-300 px-4 cursor-pointer" v-scroll-to="'#skills'">Skills</li>
        <li className="hover:text-pink-600 duration-300 px-4 cursor-pointer" v-scroll-to="'#works'">Works</li>
        <li className="hover:text-pink-600 duration-300 px-4 cursor-pointer" v-scroll-to="'#contact'">Contact</li>
     </ul>

     <!-- Hamburger -->
     <div @click="toggleMenu" className="md:hidden z-10">
         <fa v-if="!isOpen" icon="bars"/>
         <fa v-else icon="xmark" />
     </div>

    <!-- Mobile Menu -->
    <ul v-show="isOpen" className='absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'>
        <li className='py-6 text-4xl px-4 cursor-pointer'>Home</li>
        <li className='py-6 text-4xl px-4 cursor-pointer'>About</li>
        <li className='py-6 text-4xl px-4 cursor-pointer'>Skills</li>
        <li className='py-6 text-4xl px-4 cursor-pointer'>Works</li>
        <li className='py-6 text-4xl px-4 cursor-pointer'>Contact</li>
    </ul>
  </div>
</template>

<script>
import Logo from '../assets/logo.png'

window.onscroll = function() {
    if(this.prevScrollpos > window.pageYOffset) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-80px";
    }
    this.prevScrollpos = window.pageYOffset;
}

export default {
    data() {
        return {
            isOpen: false,
            Logo,
            prevScrollpos: window.pageYOffset,
        }
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen;
        },
    },
}
</script>