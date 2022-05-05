import { createStore } from "vuex"

const theme = JSON.stringify(localStorage.getItem("theme"))
const bool = theme !== 'null' ? theme == '"dark"' ? true : false : true

const lang = JSON.stringify(localStorage.getItem("lang"))
const langSet = lang !== 'null' ? lang == '"en"' ? 'en' : 'es' : 'en'

export const store = createStore({
    state() {
        return {
            dark: bool,
            lang: langSet
        }
    },
    mutations: {
        SET_DARK: (state, bool) => {
            state.dark = bool
        },
        SET_LANG: (state, lang) => {
            state.lang = lang
        }
    },
    getters: { 
        dark: state => state.dark,
        lang: state => state.lang
    }
})