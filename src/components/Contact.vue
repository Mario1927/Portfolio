<template>
  <div id='contact' className='w-full md:w-[90%] mx-auto min-h-screen flex flex-row bg-slate-100 dark:bg-[#0a192f]'>
    <form method="POST" action="https://getform.io/f/bc1973b9-3837-47fa-8e1e-29d2d37b9c0a" className='max-w-[750px] m-auto p-4 flex flex-col justify-center w-full h-full' data-aos="fade-in">
        <div className="pb-8">
            <p className='text-4xl text-[#0a192f] dark:text-gray-300 font-bold inline border-b-4 border-pink-600'>{{ text.title }}</p>
            <p className='py-4 text-[#f9b82c] font-medium dark:font-normal'>{{ text.subtitle}}</p>
        </div>
        <input type="text" name="name" :placeholder="text.p_name" className="bg-slate-300 dark:bg-[#112240] text-[#0a192f] dark:text-gray-100 placeholder:text-[#41577d] dark:placeholder:text-gray-500 p-2 mb-4 rounded" />
        <input type="email" name="email" :placeholder="text.p_email" className="bg-slate-300 dark:bg-[#112240] text-[#0a192f] dark:text-gray-100 placeholder:text-[#41577d] dark:placeholder:text-gray-500 p-2 mb-4 rounded" />
        <textarea name="message" rows="10" :placeholder="text.p_message + '...'" className="bg-slate-300 dark:bg-[#112240] text-[#0a192f] dark:text-gray-100 placeholder:text-[#41577d] dark:placeholder:text-gray-500 p-2 mb-4 rounded" />
        <div className="w-full flex justify-center items-center">
          <button type="submit" className='w-full max-w-[130px] text-[#233554] dark:text-white border-[#f9b82c] dark:border-slate-100  font-semibold border-2 rounded px-6 py-2 my-2 flex justify-center items-center hover:bg-pink-600 dark:hover:bg-pink-600 hover:border-pink-600 hover:text-white duration-300'>
                    {{ text.button }}
          </button>
        </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eng: {
        title: 'Contact',
        subtitle: '// Submit the form below or shoot me an email - hernandez.mario@correounivalle.edu.co',
        p_name: 'Name',
        p_email: 'Email',
        p_message: 'Message',
        button: 'Submit',
      },
      es: {
        title: 'Contacto',
        subtitle: '// Envíame un mensaje o un correo electrónico - hernandez.mario@correounivalle.edu.co',
        p_name: 'Nombre',
        p_email: 'Correo electrónico',
        p_message: 'Mensaje',
        button: 'Enviar',
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

<style>

</style>