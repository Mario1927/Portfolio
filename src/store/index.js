import { createStore } from "vuex"

export const store = createStore({
    state() {
        return {
            dark: false
        }
    },
    mutations: {
        SET_DARK: (state, bool) => {
            state.dark = bool
        }
    },
    getters: { 
        dark: state => state.dark
    }
})