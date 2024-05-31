import { useEffect, useState } from "react"
import { TECH } from "../DATA/data"
import Aos from "aos"
import 'aos/dist/aos.css'
export const Technology = ()=>{
useEffect(()=>{
  Aos.init()
})
const [tech, setTech] = useState('SPACE')

function clickTech (changeTech){
setTech(changeTech)}


  return(<main id="Technology">
    
    <div data-aos="fade-up" data-aos-duration="1000" className="lg:pl-[90px] pt-28 flex text-3xl leading-[33.6px] text-white gap-4 tracking-[4.72px] items-center  text-center">
        <h3 className="text-bold">03</h3>
      <h4 className="font-normal ">SPACE LAUNCH 101</h4>
      </div>
      <section className="flex flex-wrap lg:flex-nowrap items-center justify-between">
        <div data-aos="zoom-in-up" data-aos-duration="1000" className="lg:pl-[90px]">  

        <menu className="flex flex-row md:flex-col text-dark gap-y-4 text-4xl font-normal leading-[19px] tracking-[2.7px]">
            <span onClick={() => clickTech("SPACE")} className= {`${tech === "SPACE"? 'bg-white text-black' : 'text-white '} rounded-full border  px-6 py-6`}>1</span>
            <span onClick={() => clickTech("LAUNCH")} className={`${tech === "LAUNCH"? 'bg-white text-black' : 'text-white'} rounded-full border px-6 py-6`}>2</span>
            <span onClick={() => clickTech("SPACE_CAPSULE")} className={`${tech === "SPACE_CAPSULE"? 'bg-white text-black' : 'text-white '} rounded-full border px-6 py-6`}>3</span>
        </menu>
           
        </div>
         <div data-aos="zoom-in-up" data-aos-duration="1000"> <h1 className="text-white text-sm lg:text-base tracking-[2.36px] lg:tracking-[2.7px]  font-normal leading-[16.8px] lg:leading-[19.2px] py-6">{TECH[tech].title}</h1>
            <p className="text-2xl sm:text-[40px] md:text-5xl font-normal leading-[27.5px] lg:leading-[64.18px] pb-10 text-white">{TECH[tech].Name}</p>
              <article>{TECH[tech].Article}</article>
       </div>
        <div data-aos="zoom-in-up" data-aos-duration="1000">
          <img src={TECH[tech].img} alt="moon" style={{ height: '440px', width: '514px', objectFit:'cover' }} />
        </div>
      </section>
  
  
  


  </main>)
}