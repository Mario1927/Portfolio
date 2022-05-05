<template>
    <div id='about' className='w-full md:w-[90%] min-h-screen flex flex-row mx-auto bg-slate-100 dark:bg-[#0a192f]'>
        <div className='flex flex-col justify-center items-center w-full h-full m-auto px-8'>
            <div className='max-w-[750px] w-full grid grid-cols-2 gap-8'>
                <div className='pb-8'>
                    <p className='text-4xl text-[#0a192f] dark:text-gray-300 font-bold inline border-b-4 border-pink-600'>{{ text.section }}</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[750px] w-full first:grid sm:grid-cols-2 gap-8'>
                    <div className='text-4xl font-bold text-[#f9b82c]'>
                        <p>{{text.title}}</p>
                    </div>
                    <div>
                        <p className='text-slate-700 font-medium dark:text-slate-100 dark:font-normal text-justify my-4'>
                            {{ text.text }} <br> <br> {{ text.subtext }}
                        </p>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            eng: {
                section: 'About',
                title: 'Hi, again. Nice to meet you. Please take a look around.',
                text: 'Since my childhood I\'ve always been interested in tech, loved playing videogames with friends, and try to discover new things on internet. I\'m currently more than 3000km away from home, this had help me to discover and a whole new culture, to be more sociable, open-mind, and to learn how to work as a team with people with different thoughts and ideas.',
                subtext: 'Fast-forward to today, I\'ve had the privilege of working at a sismological observatory, an NGO (offering technology-based solutions for social problematics) and others works related to the Geography. Nowadays I\'m looking forward to gain more experiencie working on tech bussiness.',
            },
            es: {
                section: 'Sobre mi',
                title: 'Hola, de nuevo. ¡Siéntete libre de explorar mi portafolio!',
                text: 'Desde mi niñez, siempre me ha gustado el mundo de la tecnología, me gustaba jugar videojuegos con mis amigos, y tratar de descubrir cosas nuevas en internet. Actualmente me encuentro a más de 3000km de distancia de casa, y esto me ha ayudado a descubrir una nueva cultura, a ser más sociable, abierto, y sobre todo he aprendido a trabajar en equipo con personas con diferentes ideas y pensamientos.',
                subtext: 'Hasta la fecha, he tenido el privilegio de trabajar en un observatorio sismológico, una ONG (que ofrece soluciones tecnológicas para problemas sociales) y otros trabajos relacionados con la Geografía. Ahora mismo estoy buscando obtener mayor experiencia en trabajos relacionados al desarrollo.',
            }
        }
    }, computed: {
        text() {
            return this.$store.state.lang === 'en' ? this.eng : this.es
        }
    }
}
</script>