import { createStore } from "vuex"

const theme = JSON.stringify(localStorage.getItem("theme"))
const bool = theme !== 'null' ? theme == '"dark"' ? true : false : true

export const store = createStore({
    state() {
        return {
            dark: bool
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