<template>
  <span @click="toggleLang('es')" className="mx-1 hover:text-[#0a192f] dark:hover:text-slate-100 duration-300 cursor-pointer text-[#f9b82c]">
      ES
  </span>
  <span @click="toggleLang('en')" className="mx-1 hover:text-[#0a192f] dark:hover:text-slate-100 duration-300 cursor-pointer text-[#f9b82c]">
      EN
  </span>
</template>

<script>
import { mapGetters, mapMutations } from "vuex"

export default {
    computed: {
        ...mapGetters(["lang"])
    },
    methods: {
        ...mapMutations(["SET_LANG"]),
        toggleLang(lang) {
            this.SET_LANG(lang),
            window.localStorage.setItem("lang",  lang)
        },
    },
}
</script>