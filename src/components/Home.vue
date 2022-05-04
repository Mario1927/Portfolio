<template>
    <div id='home' className='w-full md:w-[90%] mx-auto h-screen flex flex-row bg-slate-100 dark:bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-xl text-pink-600 my-4'>Hi, my name is</p>
            <h1 className='text-4xl md:text-7xl font-bold text-[#0a192f] dark:text-[#ccd6f6]'>Mario Hernández</h1>
            <h2 className='text-3xl md:text-6xl font-bold text-[#f9b82c] max-w-[750px]'>I'm a Full Stack Developer and Geographer</h2>
            <p className='text-slate-700 font-medium dark:text-slate-100 dark:font-normal  py-4 max-w-[750px] text-justify my-4'>Currently, I could say that I'm enjoying the web development world alongside my other passion the Geography, everyday on this tech world has become a opportunity to keep improving and learning something new for me and my works.</p>
            <div>
                <button className='text-[#233554] dark:text-white border-[#233554] dark:border-slate-100 font-semibold border-2 rounded px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 hover:text-white duration-300' v-scroll-to="'#works'">
                    View work
                </button>
                
            </div>
        </div>
    </div>
</template>

<script>
import darkBackground from '../assets/BackgroundDark.gif'

export default {
    data() {
        return {
            darkBackground
        }
    },
}
</script>