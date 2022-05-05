<template>
  <fa @click="toggleTheme" icon="sun" class="fa-beat" v-if="dark" />
  <fa @click="toggleTheme" icon="moon" class="fa-beat" v-else />
</template>

<script>
import { mapGetters, mapMutations } from "vuex"
export default {
    computed: {
        ...mapGetters(["dark"])
    },
    methods: {
        ...mapMutations(["SET_DARK"]),
        toggleTheme() {
            this.SET_DARK(!this.dark),
            window.localStorage.setItem("theme", !this.dark ? "light" : "dark")
        },
    },
}
</script>