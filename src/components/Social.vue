<template>
    <!-- Close Button -->
    <div className='hidden md:flex fixed flex-col bottom-[150px] left-[0.5rem]'>
        <ul className="animate__bounce">
            <li className='w-[100px] h-[50px] flex justify-between items-center animate__animated animate__slideInLeft'>
                <a className='flex justify-between items-center w-full text-[#f9b82c] dark:text-white duration-300' href='https://www.linkedin.com/in/mario1927/' target='_blank' rel="noreferrer"> 
                   <fa :icon="['fab', 'linkedin']" class="fa-xl" />
                </a>
            </li>
            <li className='w-[100px] h-[50px] flex justify-between items-center animate__animated animate__slideInLeft'>
                <a className='flex justify-between items-center w-full text-[#f9b82c] dark:text-white duration-300' href='https://github.com/Mario1927' target='_blank' rel="noreferrer"> 
                    <fa :icon="['fab', 'github']" class="fa-xl" />
                </a>
            </li>
            <li className='w-[100px] h-[50px] flex justify-between items-center animate__animated animate__slideInLeft'>
                <a className='flex justify-between items-center w-full text-[#f9b82c] dark:text-white duration-300' href='mailto:hernandez.mario@correounivalle.edu.co' target='_blank' rel="noreferrer"> 
                   <fa icon="envelope" class="fa-xl" />
                </a>
            </li>
            <li className='w-[100px] h-[50px] flex justify-between items-center animate__animated animate__slideInLeft'>
                <a className='flex justify-between items-center w-full text-[#f9b82c] dark:text-white duration-300' :href="link" target='_blank' rel="noreferrer"> 
                    <span class="mx-1"><fa icon="file-pdf" class="fa-xl" /></span>
                </a>
            </li>
        </ul>
        <div className="w-[2px] h-[140px] flex fixed bottom-[0px] left-[1.15rem] border border-[#0a192f] dark:border-[#f9b82c] mx-auto mt-2 animate__animated animate__backInUp"/>
    </div>
</template>

<script>

export default {
    computed: {
        link(){
            return this.$store.state.lang === 'en' ? 'https://drive.google.com/file/d/1dAsOim6CO8D45TihSuxrSJyG-stJD3XD/view?usp=sharing' : 'https://drive.google.com/file/d/1aMk9dMyl2PQ0L-c7CfW9DMp5Iq_4cYxL/view?usp=sharing'
        }
    }
}
</script>

<style scoped>
    a:hover {
        color: rgb(219 39 119);
    }
</style>