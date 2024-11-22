import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "./canvas";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Francesca Craievich",
          from_email: form.email,
          to_email: "franci.craievich2000@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
    className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
  >
    <motion.div
    variants={slideIn("left", "tween", 0.2, 1)}
    style={{
      background: "linear-gradient(to bottom, #151030, #000000)", // Gradiente dal violetto scuro al nero
      color: "#ffffff", // Testo bianco
      padding: "2rem",
      borderRadius: "1rem",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
    }}
  >

    <p style={{ color: "#cccccc", fontWeight: "300" }}>Get in touch</p>
    <h3 style={{ color: "#ffffff", fontSize: "2rem", fontWeight: "700" }}>Contact.</h3>
  
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      style={{
        marginTop: "3rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      <label style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ marginBottom: "0.5rem", color: "#ffffff" }}>Your Name</span>
        <input
          type='text'
          name='name'
          value={form.name}
          onChange={handleChange}
          placeholder="What's your good name?"
          style={{
            backgroundColor: "#1a1a2e", // Blu scuro per i box
            color: "#ffffff", // Testo bianco
            padding: "1rem",
            borderRadius: "0.5rem",
            border: "1px solid #333", // Bordo scuro
            outline: "none",
            fontWeight: "500",
          }}
        />
      </label>
  
      <label style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ marginBottom: "0.5rem", color: "#ffffff" }}>Your Email</span>
        <input
          type='email'
          name='email'
          value={form.email}
          onChange={handleChange}
          placeholder="What's your web address?"
          style={{
            backgroundColor: "#1a1a2e", // Blu scuro per i box
            color: "#ffffff", // Testo bianco
            padding: "1rem",
            borderRadius: "0.5rem",
            border: "1px solid #333", // Bordo scuro
            outline: "none",
            fontWeight: "500",
          }}
        />
      </label>
  
      <label style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ marginBottom: "0.5rem", color: "#ffffff" }}>Your Message</span>
        <textarea
          rows={7}
          name='message'
          value={form.message}
          onChange={handleChange}
          placeholder='What you want to say?'
          style={{
            backgroundColor: "#1a1a2e", // Blu scuro per i box
            color: "#ffffff", // Testo bianco
            padding: "1rem",
            borderRadius: "0.5rem",
            border: "1px solid #333", // Bordo scuro
            outline: "none",
            fontWeight: "500",
          }}
        />
      </label>
  
      <button
        type='submit'
        style={{
          backgroundColor: "#4b0082", // Violetto scuro per il bottone
          color: "#ffffff", // Testo chiaro
          padding: "1rem 2rem",
          borderRadius: "0.5rem",
          fontWeight: "bold",
          outline: "none",
          cursor: "pointer",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
          border: "1px solid #333",
        }}
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
   
  </motion.div>
  <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
</div>

  );
};

export default SectionWrapper(Contact, "contact");