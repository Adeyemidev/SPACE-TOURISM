import { useState } from "react"
import { DESTINATION } from "../DATA/data"
import { useEffect } from "react"
import Aos from "aos"
import 'aos/dist/aos.css'
export const Destination =() =>{
 
const [destination, setdDestination] = useState('Moon')

function changeclick(click){
  return setdDestination(click)}
  useEffect(()=>{
    Aos.init()
  },[])

return(
    
<main id='Destination'>
<div  data-aos="fade-up" data-aos-duration="1000" className="lg:pl-[90px] pb-4 lg:pb-6 pt-[14rem] lg:pt-28 flex justify-center lg:justify-start text-base lg:text-3xl leading-[19.2px] lg:leading-[33.6px] text-white gap-2 lg:gap-4 tracking-[2.7px] lg:tracking-[4.72px] items-center ">
        <h3 className=" text-bold">01</h3>
      <h4 className=" font-normal">PICK YOUR DESTINATION</h4>
      </div>
<section className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-around">
   
<div data-aos="zoom-in-up" data-aos-duration="1000">
  <img className="DestinationMoons" src={DESTINATION[destination].img} alt="moon"  />
</div> 


<div data-aos="zoom-in-up" data-aos-duration="1000">
<menu className='flex justify-center lg:justify-start py-4 text-dark gap-4 text-sm lg:text-base font-normal leading-[16.8px] lg:leading[19.2px] tracking-[2.36px] lg:tracking-[2.7px]'>
<span onClick={()=>changeclick('Moon')} className={`${destination === "Moon"? 'active' : '' }`}>MOON</span> 

<span onClick={()=>changeclick('Mars')}>MARS</span>

<span onClick={()=>changeclick('Europa')}>EUROPA</span>

<span onClick={()=>changeclick('Titans')} >TITIANS</span>
</menu>

     <h1 className="text-white text-5xl lg:text-7xl font-normal leading-[64.18px] lg:leading-[114.6px] text-center lg:text-left">{DESTINATION[destination].Title}</h1>
        <article>{DESTINATION[destination].Article}</article>

        <footer className=' secondstep border-t mx-4 lg:mx-0 border-[#383B4B] mt-4 lg:mt-10 pt-4 lg:pt-6 lg:flex text-center lg:text-left justify-between items-center'>
       <p><span className='text-sm'>{DESTINATION[destination].Distance}</span>
        <h2 className='text-sm'>{DESTINATION[destination].Distance_Number}</h2>
     </p>   
     <p className="pt-4 lg-pt-0"> <span className="text-sm ">{DESTINATION[destination].TRAVEL_TIME}</span>
        <h2 className='text-[28px]'> {DESTINATION[destination].DAYS}</h2></p></footer>
    
</div>
     </section> 
     
  </main>
)
}





