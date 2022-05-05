<template>
  <div className='w-full md:w-[90%] mx-auto flex flex-col bg-slate-100 dark:bg-[#0a192f] text-center justify-center items-center'>
      <ul className="animate__bounce flex justify-center items-center w-[300px]">
          <li className='w-[30px] h-[50px] px-2 mx-auto flex justify-between items-center'>
              <a className='flex justify-between items-center w-full text-[#f9b82c] dark:text-white duration-300' href='https://www.linkedin.com/in/mario1927/' target='_blank' rel="noreferrer"> 
                  <fa :icon="['fab', 'linkedin']" class="fa-xl" />
              </a>
          </li>
          <li className='w-[25px] h-[50px] px-2 mx-auto flex justify-between items-center'>
              <a className='flex justify-between items-center w-full text-[#f9b82c] dark:text-white duration-300' href='https://github.com/Mario1927' target='_blank' rel="noreferrer"> 
                  <fa :icon="['fab', 'github']" class="fa-xl" />
              </a>
          </li>
          <li className='w-[25px] h-[50px] px-2 mx-auto flex justify-between items-center'>
              <a className='flex justify-between items-center w-full text-[#f9b82c] dark:text-white duration-300' href='mailto:hernandez.mario@correounivalle.edu.co' target='_blank' rel="noreferrer"> 
                  <fa icon="envelope" class="fa-xl" />
              </a>
          </li>
          <li className='w-[25px] h-[50px] px-2 mx-auto flex justify-between items-center'>
              <a className='flex justify-between items-center w-full text-[#f9b82c] dark:text-white duration-300' :href="link" target='_blank' rel="noreferrer"> 
                  <span class="mx-1"><fa icon="file-pdf" class="fa-xl" /></span>
              </a>
          </li>
      </ul>
    <span className='text-[#0a192f] dark:text-gray-300 text-sm font-medium dark:font-normal'>{{ text.subtitle }}</span>
    <span className='text-[#f9b82c] font-medium'>{{ text.title }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eng: {
        subtitle: '// Design inspired on Brittany Chiang & Code Commerce',
        title: 'Built by Mario Hernández'
      },
      es: {
        subtitle: '// Diseño inspirado en Brittany Chiang & Code Commerce',
        title: 'Desarrollado por Mario Hernández'
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