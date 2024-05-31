import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"
export const Home = ()=>{

  useEffect(()=>{
    Aos.init()
      },[])

    return(<>
    
   
    <section id='HOME'   className="flex flex-wrap lg:flex-nowrap text-center lg:text-start items-center justify-center lg:justify-around pt-[7rem] lg:pt-40 relative" >
    
   <div data-aos="fade-up" data-aos-duration="2000"  className="lg:pb-10"> <h5 className="text-base md:text-[20px] lg:text-3xl  text-dark font-normal leading-[19.2px] lg:leading-8 tracking-[2.7px] lg:tracking-[4.72px;] ">SO, YOU WANT TO TRAVEL TO</h5>
    <h1 className="text-white lg:leading-10 leading-[100px] text-6xl md:text-8xl font-normal py-2 lg:py-16">SPACE</h1>
    <article >Let’s face it; if you want to go to space,
        you might as well genuinely go to outer space 
        and not hover kind of on the edge of it. 
        Well sit back, and relax because we’ll give
         you a truly out of this world experience!</article></div>

          <div id="hover" data-aos="fade-up" data-aos-duration="2000"  className=" rounded-full"> 
           <h6 className="text-[20px] lg:text-4xl text-black font-normal bg-white
             rounded-full text-center leading-[22.92px] lg:leading-9 lg:px-5 
             py-16 px-8 lg:py-20 tracking-[1.25px] lg:tracking-[2px]">EXPLORE</h6>
             </div> 
    </section></>)
}
