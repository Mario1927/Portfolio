<template>
    <div id='home' className='w-full md:w-[90%] mx-auto min-h-screen flex flex-row bg-slate-100 dark:bg-[#0a192f]'>
        <div className='max-w-[1000px] m-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-xl text-pink-600 my-4'>{{ text.title }}</p>
            <h1 className='text-4xl md:text-7xl font-bold text-[#0a192f] dark:text-[#ccd6f6]'>Mario Hernández</h1>
            <h2 className='text-3xl md:text-6xl font-bold text-[#f9b82c] max-w-[750px]'>{{ text.subtitle }}</h2>
            <p className='text-slate-700 font-medium dark:text-slate-100 dark:font-normal  py-4 max-w-[750px] text-justify my-4'>{{ text.text }}</p>
            <div>
                <button className='text-[#233554] dark:text-white border-[#f9b82c] dark:border-slate-100  font-semibold border-2 rounded px-6 py-3 my-2 flex items-center hover:bg-pink-600 dark:hover:bg-pink-600 hover:border-pink-600 hover:text-white duration-300' v-scroll-to="'#works'">
                    {{ text.button }}
                </button>
                
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            eng: {
                title: 'Hi, my name is',
                subtitle: 'I\'m a Full Stack Developer and Geographer',
                text: 'Currently, I could say that I\'m enjoying the web development world alongside my other passion the Geography, everyday on this tech world has become a opportunity to keep learning about new features that later I try to include on my works and improve them.',
                button: 'View work'
            },
            es: {
                title: 'Hola, mi nombre es',
                subtitle: 'Soy un Desarrollador Full Stack y Geógrafo',
                text: 'Actualmente, puedo decir que estoy disfrutando del mundo del desarrollo web junto a mi otra pasión la Geografía, cada día en el mundo del desarrollo se ha convertido en una oportunidad para seguir aprendiendo sobre nuevas características, implementaciones y demás, las cuáles siempre trato de incluir en mis trabajos para que tengan una mejoría constante.',
                button: 'Ver mis trabajos'
            }
        }
    }, 
    computed: {
        text() {
            return this.$store.state.lang === 'en' ? this.eng : this.es
        }
    }
}
</script>