<template>
    <div id='home' className='w-full md:w-[90%] mx-auto h-screen flex flex-row bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-xl text-pink-600 my-4'>Hi, my name is</p>
            <h1 className='text-4xl md:text-7xl font-bold text-[#ccd6f6]'>Mario Hernández</h1>
            <h2 className='text-3xl md:text-6xl font-bold text-[#8892b0] max-w-[750px]'>I'm a Full Stack Developer and Geographer</h2>
            <p className='text-[#8892b0] py-4 max-w-[750px] text-justify my-4'>Currently, I could say that I'm enjoying the web development world alongside my other passion the Geography, everyday on this tech world has become a opportunity to keep improving and learning something new for me and my works.</p>
            <div>
                <button className='text-white border-2 rounded px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300' v-scroll-to="'#works'">
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