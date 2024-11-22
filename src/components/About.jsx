import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      style={{
        background: "linear-gradient(to bottom, #000033, #4b0082)", // Gradiente dal blu scuro al violetto scuro per l'esterno
        padding: "1px", // Aggiungi un bordo sottile
        borderRadius: "20px", // Angoli arrotondati
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.8), 0px 0px 20px rgba(75, 0, 130, 0.8)", // Ombra profonda con glow viola scuro
        border: "2px solid transparent", // Bordo trasparente per lasciare solo l'effetto glow
        position: "relative",
      }}
      className='w-full rounded-[20px] overflow-hidden'
    >
      {/* Parte interna della card con fondo uniforme scuro */}
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{
          backgroundColor: "#1a1a2e", // Sfondo scuro per l'interno della card
          borderRadius: "20px", // Mantiene gli angoli arrotondati
        }}
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

    
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>   

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[]17px max-w-3xl leading-[30px]">
     
I'm a Master's student in Computer Engineering at the University of Trieste with a strong drive to learn and tackle new challenges. 
My academic journey, combined with work experience, has helped me build solid time-management and multitasking skills.
I have a solid foundation in Java, C, and Python, and I'm eager to apply my knowledge practically. 
My primary interest is in cybersecurity, where I'm keen to deepen my expertise and explore collaborative opportunities.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) =>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  );
};


export default SectionWrapper(About, "about");