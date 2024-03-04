// ////// DESTINATION DATA /////////

import moon from '../assets/destination/image-moon.png'
import mars from '../assets/destination/image-mars.png';
import europa from '../assets/destination/image-europa.png'
import titans from '../assets/destination/image-titan.png'

import douglas from '../assets/crew/douglas.png'
import mark from '../assets/crew/image-mark.png';
import victor from '../assets/crew/image-victor.png'
import ansart from '../assets/crew/image-ansari.png'

import lauch from '../assets/technology/launch.jpg'
import spaceport from '../assets/technology/image-spaceport.jpg'
import space from '../assets/technology/image-space.jpg'

export const DESTINATION = { 

Moon:{ 
    img:moon,
    Title: "MOON",
    Article:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    Distance: "AVG. DISTANCE",
    Distance_Number:"384, 400",
    TRAVEL_TIME: "EST TRAVEL TIME",
    DAYS:"3 DAYS"
},

Mars: { 
    img:mars,
    Title: "MARS",
    Article:"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    Distance: "AVG. DISTANCE",
    Distance_Number:"225 MIL. KM",
    TRAVEL_TIME: "EST TRAVEL TIME",
    DAYS:"9 MONTHS"
    },

Europa : { 
    img:europa,
    Title: "EUROPA",
    Article:"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    Distance: "AVG. DISTANCE",
    Distance_Number:"628 MIL. KM",
    TRAVEL_TIME: "EST TRAVEL TIME",
    DAYS:"3 YEARS"
    },
    
Titans: {     
    img:titans,
    Title: "TITAN",
    Article:"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    Distance: "AVG. DISTANCE",
    Distance_Number:"1.6 BIL. KM",
    TRAVEL_TIME: "EST TRAVEL TIME",
    DAYS:"7 YEARS"
            
    }
}

    // //////////// CREW DATA //////////////////

    export const CREW = {

        DOUGLAS: { 
        img: douglas,
        title:'COMMANDER',
        Name: 'DOUGLAS HURLEY',
        Article:'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',

    },

    MARK: { 
        img: mark,
        title:'MISSION SPECIALIST',
        Name: 'MARK SHUTTLEWORTH',
        Article:'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist. ',

    },

    VICTOR: { 
        img: victor,
        title:'PILOT',
        Name: 'VICTOR GLOVER',
        Article:'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',

    },
    
   ANSART: { 
    img:ansart,
        title:'FLIGHT ENGINEER',
        Name: 'ANOUSHEH ANSART',
        Article:'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.  ',

    }
}


// /// ////  TECHNOLOGY DATA //// // ///

export const TECH ={
    SPACE : { 
        img: lauch,
        title:'THE TERMINOLOGY...',
        Name: 'SPACEPORT',
        Article:'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',

    },

    LAUNCH : { 
        img:spaceport,
        title:'THE TERMINOLOGY',
        Name: 'LAUNCH VEHICLE',
        Article:'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earths surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation Standing 150 metres tall its quite an awe-inspiring sight on the launch pad!',

    },

    SPACE_CAPSULE : { 
        img: space,
        title:'THE TERMINOLOGY',
        Name: 'SPACEPORT',
        Article:'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earths atmosphere without wings. Our capsule is where you ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.',

    }
}