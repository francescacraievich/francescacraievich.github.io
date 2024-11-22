import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const EducationCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={experience.date}
    iconStyle={{
      background: experience.iconBg,
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      width: '60px', 
      height: '60px', 
      borderRadius: '50%', 
      overflow: 'hidden',
    }}
    icon={
      <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img
          src={experience.icon}
          alt={experience.company_name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-gray-400 text-[16px]">{experience.company_name}</p>
      {/* Rendi la descrizione un paragrafo semplice */}
      <p className="mt-2 text-gray-300 text-[14px]">{experience.description}</p>
    </div>
  </VerticalTimelineElement>
);

const Education = () => {
  const educationExperiences = experiences.filter((exp) => exp.category === 'Education');

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My academic background</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {educationExperiences.map((experience, index) => (
            <EducationCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
