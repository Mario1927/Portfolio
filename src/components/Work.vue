<template>
  <div id='works' className='flex w-full md:w-[90%] my-auto mx-auto text-[#0a192f] dark:text-gray-300 bg-slate-100 dark:bg-[#0a192f]'>
      <div className='max-w-[750px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-[#0a192f] dark:text-gray-300 border-pink-600'>
                Work
            </p>
            <p className='py-3 text-[#112240] font-medium dark:text-slate-300 dark:font-normal'>// Check out some of my recent work</p>
        </div>

        <!-- First project -->
        <div className='flex bg-slate-300 dark:bg-[#112240] bg-cover px-8 py-12 md:bg-transparent dark:md:bg-transparent md:p-0 mb-12'>
            <div className="flex flex-col md:w-[60%] py-4">
                <div className="flex flex-col relative top-[-35px]">
                    <span className="text-[#f9b82c] dark:text-[#64ffda] text-sm font-medium">Featured Project</span>
                    <h3 className=" text-2xl font-semibold">Videogames App</h3>
                </div>
                <div className="md:p-4 md:w-[130%] rounded md:bg-slate-300 dark:md:bg-[#112240] z-10">
                    <p className=" text-sm text-justify font-medium dark:font-normal">
                        A SPA that consumes data from an external API, and allows general and detailed information of more than 500,000 video games to be displayed, among the functionalities it allows filtering and ordering video games by different variables such as genre, platforms, name, rating.
                    </p>
                </div>
                <div className="flex md:w-[130%] z-10 pt-4">
                    <ul className="flex flex-wrap text-sm font-medium text-[#4a6087] dark:text-slate-400" :style="{'-webkit-text-stroke': '0.1px black'}">
                        <li className="pr-4"> <p>React</p> </li>
                        <li className="pr-4"> <p>Redux</p> </li>
                        <li className="pr-4"> <p>Styled Components</p> </li>
                        <li className="pr-4"> <p>Express</p> </li>
                        <li className="pr-4"> <p>PostgreSQL</p> </li>
                        <li className="pr-4"> <p>Rawg.io API</p> </li>
                    </ul>
                </div>
                <div className="flex relative bottom-[-20px]">
                    <a className='flex justify-between items-center dark:text-white pr-4 hover:text-pink-600 duration-300' href='https://github.com/Mario1927/Videogames' target='_blank' rel="noreferrer"> 
                        <fa :icon="['fab', 'github']" class="fa-lg" />
                    </a>
                    <a className='flex justify-between items-center dark:text-white pr-4 hover:text-pink-600 duration-300' href='https://videogames-gold.vercel.app/' target='_blank' rel="noreferrer"> 
                        <fa icon="arrow-up-right-from-square" class="fa-lg" />
                    </a>
                </div>
            </div>
            <a className="hidden md:flex w-[70%] h-[250px] my-auto z-0 overflow-hidden" href='https://videogames-gold.vercel.app/' target='_blank' rel="noreferrer">
                <div className="bg md:flex w-full h-full my-auto z-0 bg-cover hover:bg-transparent duration-300" :style="{'background-image': 'url(' + VideogamesPrj + ')'}"/>
            </a>
        </div>

        <!-- Second project -->
        <div className='flex bg-slate-300 dark:bg-[#112240] bg-cover px-8 py-12 md:bg-transparent dark:md:bg-transparent md:p-0 mb-12'>
            <a className="hidden md:flex w-[70%] h-[250px] my-auto z-0 overflow-hidden" href='https://eztinerary.vercel.app/' target='_blank' rel="noreferrer">
                <div className="bg md:flex w-full h-full my-auto z-0 bg-cover hover:bg-transparent duration-300" :style="{'background-image': 'url(' + EztineraryPrj + ')'}"/>
            </a>
            <div className="flex flex-col md:w-[60%] py-4">
                <div className="flex flex-col relative top-[-35px] text-right">
                    <span className="text-[#f9b82c] dark:text-[#64ffda] text-sm font-medium">Featured Project</span>
                    <h3 className=" text-2xl font-semibold">Eztinerary Travel App</h3>
                </div>
                <div className="md:p-4 md:w-[130%] relative md:right-[30%]  rounded md:bg-slate-300 dark:md:bg-[#112240] z-10">
                    <p className=" text-sm text-justify font-medium dark:font-normal">
                        A SPA for searching and planning tourist activities. On this groupal project there was an implementation of the SCRUM methodology, my principal tasks were focused on the back-end by using Node, Typescript, Moongose, route authentication and authorization through Passport, JWT, Cookies, BCrypt, among other technologies used.
                    </p>
                </div>
                <div className="flex md:w-[130%] relative md:right-[30%] z-10 pt-4">
                    <ul className="flex flex-wrap md:justify-end text-sm font-medium text-[#4a6087] dark:text-slate-400" :style="{'-webkit-text-stroke': '0.1px black'}">
                        <li className="md:pl- pr-4 md:pr-0"> <p>React</p> </li>
                        <li className="md:pl-4 pr-4 md:pr-0"> <p>Redux</p> </li>
                        <li className="md:pl-4 pr-4 md:pr-0"> <p>Express</p> </li>
                        <li className="md:pl-4 pr-4 md:pr-0"> <p>Typescript</p> </li>
                        <li className="md:pl-4 pr-4 md:pr-0"> <p>Moongose</p> </li>
                        <li className="md:pl-4 pr-4 md:pr-0"> <p>Passport</p> </li>
                        <li className="md:pl-4 pr-4 md:pr-0"> <p>JWT</p> </li>
                        <li className="md:pl-4 pr-4 md:pr-0"> <p>BCrypt</p> </li>
                        <li className="md:pl-4 pr-4 md:pr-0"> <p>SCRUM</p> </li>
                    </ul>
                </div>
                <div className="flex relative bottom-[-20px] justify-end">
                    <a className='flex justify-between items-center dark:text-white pl-4 hover:text-pink-600 duration-300' href='https://github.com/henry-equipo-ocho/proyecto-grupal' target='_blank' rel="noreferrer"> 
                        <fa :icon="['fab', 'github']" class="fa-lg" />
                    </a>
                    <a className='flex justify-between items-center dark:text-white pl-4 hover:text-pink-600 duration-300' href='https://eztinerary.vercel.app/' target='_blank' rel="noreferrer"> 
                        <fa icon="arrow-up-right-from-square" class="fa-lg" />
                    </a>
                </div>
            </div>
        </div>

        <!-- Third project -->
        <div className='flex bg-slate-300 dark:bg-[#112240] bg-cover px-8 py-12 md:bg-transparent dark:md:bg-transparent md:p-0 mb-12'>
            <div className="flex flex-col md:w-[60%] py-4">
                <div className="flex flex-col relative top-[-35px]">
                    <span className="text-[#f9b82c] dark:text-[#64ffda] text-sm font-medium">Featured Project</span>
                    <h3 className=" text-2xl font-semibold">Weather App</h3>
                </div>
                <div className="md:p-4 md:w-[130%] rounded md:bg-slate-300 dark:md:bg-[#112240] z-10">
                    <p className=" text-sm text-justify font-medium dark:font-normal">
                        A React/Redux Weather App, that I've been working on, it has the following functionalities: IP o GPS geolocation, Search multiple locations, Weekly forecast (Switchable), Record user preferences, Customize alerts for searchbar, Responsive design.
                    </p>
                </div>
                <div className="flex md:w-[130%] z-10 pt-4">
                    <ul className="flex flex-wrap text-sm font-medium text-[#] text-[#4a6087] dark:text-slate-400" :style="{'-webkit-text-stroke': '0.1px black'}">
                        <li className="pr-4"> <p>React</p> </li>
                        <li className="pr-4"> <p>Redux</p> </li>
                        <li className="pr-4"> <p>OpenWeather API</p> </li>
                        <li className="pr-4"> <p>Geoapify API</p> </li>
                        <li className="pr-4"> <p>IPGeolocation API</p> </li>
                    </ul>
                </div>
                <div className="flex relative bottom-[-20px]">
                    <a className='flex justify-between items-center dark:text-white pr-4 hover:text-pink-600 duration-300' href='https://github.com/Mario1927/weather' target='_blank' rel="noreferrer"> 
                        <fa :icon="['fab', 'github']" class="fa-lg" />
                    </a>
                    <a className='flex justify-between items-center dark:text-white pr-4 hover:text-pink-600 duration-300' href='https://weather-mario1927.vercel.app/' target='_blank' rel="noreferrer"> 
                        <fa icon="arrow-up-right-from-square" class="fa-lg" />
                    </a>
                </div>
            </div>
            <a className="hidden md:flex w-[70%] h-[250px] my-auto z-0 overflow-hidden" href='https://weather-mario1927.vercel.app/' target='_blank' rel="noreferrer">
                <div className="bg w-full h-full bg-cover hover:bg-transparent duration-300" :style="{'background-image': 'url(' + WeatherPrj + ')'}"/>
            </a>
        </div>
      </div>
  </div>
</template>

<script>
import VideogamesPrj from '../assets/Videogames.png'
import EztineraryPrj from '../assets/Eztinerary.png'
import WeatherPrj from '../assets/Weather-GIF.gif'

export default {
    data() {
        return {
            VideogamesPrj,
            EztineraryPrj,
            WeatherPrj,
        }
    }
}
</script>

<style scoped>
    .bg {
        background-color: rgba(0, 128, 128, 0.6);
        background-blend-mode: lighten;
        border-radius: 0.25rem;
    }

    .bg:hover {
        cursor: pointer;
    }
</style>