<template>
    <div id='about' className='w-full md:w-[90%] h-screen flex flex-row mx-auto bg-slate-100 dark:bg-[#0a192f]'>
        <div className='flex flex-col justify-center items-center w-full h-full mx-auto px-8'>
            <div className='max-w-[750px] w-full grid grid-cols-2 gap-8'>
                <div className='pb-8'>
                    <p className='text-4xl text-[#0a192f] dark:text-gray-300 font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[750px] w-full first:grid sm:grid-cols-2 gap-8'>
                    <div className='text-4xl font-bold text-[#233554] dark:text-[#f9b82c]'>
                        <p>Hi, again. Nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p className='text-slate-700 font-medium dark:text-slate-100 dark:font-normal text-justify my-4'>
                            Since my childhood I've always been interested in tech, loved playing games with friends, and try to discover new things on internet. 
                            I'm currently more than 3000km away from home, this had help me to discover and a whole new culture, to be more sociable, open-mind, 
                            and to learn how to work as a team with people with different thoughts and ideas.
                        </p>
                    </div>
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
    }
}
</script>