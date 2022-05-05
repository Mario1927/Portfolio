<template>
    <div name="email" className="hidden md:flex fixed flex-col top-[60%] w-full">
        <ul className="flex fixed right-2">
            <li>
                <a className='flex justify-between items-center text-[#f9b82c] dark:text-white' href='mailto:hernandez.mario@correounivalle.edu.co' target='_blank' rel="noreferrer"> 
                   <p :style="{'writingMode': 'vertical-rl'}" className=" text-sm hover:text-pink-600 duration-300">hernandez.mario@correounivalle.edu.co</p>
                </a>
            </li>
        </ul>
        <div className="w-[2px] h-[200px] flex fixed top-[87.5%] border border-[#0a192f] dark:border-[#f9b82c] right-[1.15rem] mx-auto mt-2"/>
    </div>
</template>

<script>
export default {

}
</script>