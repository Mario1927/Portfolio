<template>
          <div id='skills' className='w-full md:w-[90%] h-screen mx-auto bg-slate-100 dark:bg-[#0a192f] text-[#0a192f] dark:text-gray-300'>
          <div className='max-w-[750px] mx-auto py-4 px-5 flex flex-col justify-center w-full h-full'>
              <div>
                  <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                  <p className='py-4 text-[#f9b82c] font-medium dark:font-normal'>// These are the technologies I've worked with</p>
              </div>
    
              <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 font-bold dark:font-normal'>
                  <div className='bg-slate-200 dark:bg-[#0a192f] shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' :src='HTML' alt="HTML icon" />
                      <p className='mt-4'>HTML</p>
                  </div>
                  <div className='bg-slate-200 dark:bg-[#0a192f] shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' :src='CSS' alt="HTML icon" />
                      <p className='mt-4'>CSS</p>
                  </div>
                  <div className='bg-slate-200 dark:bg-[#0a192f] shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' :src='JavaScript' alt="HTML icon" />
                      <p className='mt-4'>JAVASCRIPT</p>
                  </div>
                  <div className='bg-slate-200 dark:bg-[#0a192f] shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' :src='ReactImg' alt="HTML icon" />
                      <p className='mt-4'>REACT</p>
                  </div>
                  <div className='bg-slate-200 dark:bg-[#0a192f] shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' :src='VueImg' alt="HTML icon" />
                      <p className='mt-4'>VUE</p>
                  </div>
                  <div className='bg-slate-200 dark:bg-[#0a192f] shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' :src='Git' alt="HTML icon" />
                      <p className='mt-4'>GIT</p>
                  </div>
                  <div className='bg-slate-200 dark:bg-[#0a192f] shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' :src='Node' alt="HTML icon" />
                      <p className='mt-4'>NODE JS</p>
                  </div>
                  <div className='bg-slate-200 dark:bg-[#0a192f] shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' :src='Mongo' alt="HTML icon" />
                      <p className='mt-4'>MONGO DB</p>
                  </div>
                  <div className='bg-slate-200 dark:bg-[#0a192f] shadow-md shadow-[#040c16] py-2 hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' :src='PostgreSQL' alt="HTML icon" />
                      <p className='mt-4'>POSTGRESQL</p>
                  </div>
              </div>
          </div>
        </div>
</template>

<script>
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import VueImg from '../assets/vue.png';
import Node from '../assets/node.png';
import Git from '../assets/git.png';
import Mongo from '../assets/mongo.png';
import PostgreSQL from '../assets/postgres.png';

export default {
    data() {
        return {
            HTML,
            CSS,
            JavaScript,
            ReactImg,
            Node,
            Git,
            Mongo,
            PostgreSQL,
            VueImg
        }
    }
}
</script>