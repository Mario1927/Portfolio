<template>
  <div className='w-full md:w-[90%] mx-auto flex flex-col bg-slate-100 dark:bg-[#0a192f] text-center justify-center items-center'>
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