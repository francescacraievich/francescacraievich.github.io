import {
    java,
    python,
    C,
    web,
    galilei,
    cashier,
    bar,
    universita,

    } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web",
      icon: web,
    },
    {
      title: "Java",
      icon: java,
    },
    {
      title: "C",
      icon: C,
    },
    {
      title: "Python",
      icon: python,
    },
  ];
  

  
  const experiences = [
    {
      title: "Scientific High School",
      company_name: "Galileo Galilei high school",
      icon: galilei,
      iconBg: "#383E56",
      date: "Sept 2014 - July 2019",
      description: "I began my studies at the Scientific High School, selecting the Applied Sciences program, which offered computer science hours and did not include Latin, aligning better with my interests. During my fourth year, I had the pleasure of participating in the Probability and Gambling competition, a valuable experience. Meanwhile, after school, I worked part-time as a bartender. ",
      category: "Education",
    },
    {
      title: "Computer Engineering",
      company_name: "University of Trieste",
      icon: universita,
      iconBg: "#E6DEDD",
      date: " Sept 2020 - Oct 2024",
      description: "I quickly adapted to courses in Analysis I and Geometry, and I enjoyed delving further into the discipline by taking my first programming exams in Java and studying digital systems architecture. In my third year, I completed more specialized courses, including two electives: Parallel Programming and Computability, Complexity, and Logic, where I was introduced to C and Python and acquired a deeper appreciation for theoretical computer science. After completing my bachelor's degree, while working weekends as a cashier, I decided to continue my studies with a master’s program in Trieste in Computer Engineering.",
      category: "Education",
    },
    {
      title: "Bartender",
      company_name: "bar Ponchielli",
      icon: bar,
      iconBg: "#383E56",
      date: " Sept 2016 - Dec 2018",
      description:  "Working as a barista taught me the importance of excellent customer service, time management, and multitasking in a fast-paced environment. I honed my communication skills while ensuring customer satisfaction and maintaining a friendly atmosphere.",
      category: "Work",
    },
    {
      title: "Cashier",
      company_name: "Maxì Bosco",
      icon: cashier,
      iconBg: "#E6DEDD",
      date: "July 2021 - Present",
      description: "As a cashier, I developed strong organizational and problem-solving skills by handling transactions efficiently and resolving customer inquiries. I learned to stay focused and deliver exceptional service even during busy periods.",
      category: "Work",
    },
  ];

 
  
  export { services,  experiences, };