<template>
    <!-- Close Button -->
    <div className='hidden md:flex fixed flex-col top-[65%] left-[0.5rem]'>
        <ul>
            <li className='w-[100px] h-[50px] flex justify-between items-center'>
                <a className='flex justify-between items-center w-full text-white duration-300' href='https://www.linkedin.com/in/mario1927/' target='_blank' rel="noreferrer"> 
                   <fa :icon="['fab', 'linkedin']" class="fa-xl" />
                </a>
            </li>
            <li className='w-[100px] h-[50px] flex justify-between items-center'>
                <a className='flex justify-between items-center w-full text-white duration-300' href='https://github.com/Mario1927' target='_blank' rel="noreferrer"> 
                    <fa :icon="['fab', 'github']" class="fa-xl" />
                </a>
            </li>
            <li className='w-[100px] h-[50px] flex justify-between items-center'>
                <a className='flex justify-between items-center w-full text-white duration-300' href='mailto:hernandez.mario@correounivalle.edu.co' target='_blank' rel="noreferrer"> 
                   <fa icon="envelope" class="fa-xl" />
                </a>
            </li>
            <li className='w-[100px] h-[50px] flex justify-between items-center'>
                <a className='flex justify-between items-center w-full text-white duration-300' href='/' target='_blank' rel="noreferrer"> 
                    <span class="mx-1"><fa icon="file-pdf" class="fa-xl" /></span>
                </a>
            </li>
        </ul>
        <div className="w-[2px] h-[135px] flex fixed top-[87.5%] left-[1.15rem] border mx-auto mt-2"/>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    a:hover {
        color: rgb(219 39 119);
    }
</style>