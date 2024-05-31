
import { useState } from "react"
import { CREW } from "../DATA/data"
import { useEffect } from "react"
import Aos from "aos"
export const Crew = ()=>{

  useEffect(()=>
  {Aos.init()}
  )

const [crew,  setCrew] = useState('DOUGLAS')

function clickCrew (changeCrew){ 
setCrew(changeCrew)}
    return(<>
    
    <div id="crew">
      <div data-aos="fade-up" data-aos-duration="1000" className="lg:pl-[90px] pt-24 lg:pt-28 flex justify-center lg:justify-start pb-6 lg:pb-0 text-base lg:text-3xl leading-[19.2px] lg:leading-[33.6px] text-white gap-4 tracking-[2.7px] lg:tracking-[4.72px] items-center ">
        <h3  className=" text-bold ">02</h3>
      <h4 className=" font-normal ">MEET YOUR CREW</h4>
      </div>

      <section className="flex flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row text-center lg:text-start items-center justify-center  lg:justify-around ">
        <div data-aos="zoom-in-up" data-aos-duration="1000" className="flex lg:block flex-col-reverse lg:flex-row">
          <div >
            <h1 className="text-white opacity-50 text-base lg:text-4xl font-normal leading-[18.34px] lg:leading-[36.67px]  py-4 lg:py-6">{CREW[crew].title}</h1>
            <p className="text-2xl lg:text-5xl font-normal pb-6 leading-[27.5px] lg:leading-[64.18px] text-white">{CREW[crew].Name}</p>
              <article className="">{CREW[crew].Article}</article>
           
          </div>
          <menu className="flex justify-center lg:justify-start text-dark gap-4 text-base font-normal leading-[19px] pt-12 tracking-[2.7px]">
            <span onClick={() => clickCrew("DOUGLAS")} className={`${crew === "DOUGLAS"? 'bg-white' :'offClickBackground'} rounded-full p-2`}></span>
            <span onClick={() => clickCrew("MARK")} className={`${crew === "MARK"? 'bg-white' : 'offClickBackground'} rounded-full p-2`}></span>
            <span onClick={() => clickCrew("VICTOR")} className={`${crew === "VICTOR"? 'bg-white' : 'offClickBackground'} rounded-full p-2`}></span>
            <span onClick={() => clickCrew("ANSART")}  className={`${crew === "ANSART"? 'bg-white' : 'offClickBackground'} rounded-full p-2`}></span>         
          </menu>
        </div>

        <div data-aos="zoom-in-up" data-aos-duration="1000">
          <img className="border-b" src={CREW[crew].img} alt="moon"  />
        </div>
      </section>
    </div>
    </>)
  }

