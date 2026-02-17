
import { motion } from "framer-motion";
import { services, technologies, experiences, projects } from "../constants";
import { useState, useEffect } from "react";

import emailjs from '@emailjs/browser';

const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className="section-container"
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      <div className="section-content">
        {children}
      </div>
    </motion.section>
  );
};

export const Interface = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_Abhi456',
        'template_66fneyc',
        {
          from_name: form.name,
          to_name: "Abhishek",
          from_email: form.email,
          to_email: "abhishekbarote@gmail.com",
          message: form.message,
        },
        'NV69a_UPBUdZchKpd'
      )
      .then(
        () => {
          // Success for notification, now send auto-reply
          emailjs.send(
            'service_Abhi456',
            'template_2t5af3p',
            {
              name: form.name,
              email: form.email,
              title: "Portfolio Inquiry", 
            },
            'NV69a_UPBUdZchKpd'
          );

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
          alert(`Failed to send message. Error: ${error.text || error.message || JSON.stringify(error)}`);
        }
      );
  };

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="center-content">
      {/* HUD HEADER */}
      <div className="hud-header">
        <div className="scifi-border p-4 glass">
            <h3 className="hud-text">PLAYER: ABHISHEK</h3>
            <p className="hud-subtext">CLASS: AI ENGINEER</p>
        </div>
        <div className="scifi-border p-4 glass">
            <h3 className="hud-text">SYS: ONLINE</h3>
            <p className="hud-subtext">LOC: PORTFOLIO_V1</p>
        </div>
      </div>

      {/* HUD FOOTER */}
      <div className="hud-footer">
         <div className="scifi-border glass w-full max-w-md p-2">
            <div className="flex justify-between mb-1">
                <span className="hud-text text-xs">XP PROGRESS</span>
                <span className="hud-text text-xs">{Math.round(scrollProgress * 100)}%</span>
            </div>
            <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                <div 
                    className="bg-cyan-400 h-full transition-all duration-300 ease-out" 
                    style={{ width: `${scrollProgress * 100}%` }}
                ></div>
            </div>
         </div>
      </div>

      <Section>
        <h1 className="hero-text">
          Hi, I'm <span className="highlight">Abhishek</span>
        </h1>
        <p className="hero-subtext">
          I build AI agents, RAG systems, and scalable software.
        </p>
        <motion.div
           initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 1.5,
            },
          }}
        >
          <a href="#contact" className="cta-btn">Contact Me</a>
        </motion.div>
      </Section>

      <Section>
        <h2 className="section-title">About Me</h2>
        <div className="grid-container">
            {services.map((service, index) => (
             <div key={service.title} className="card glass">
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <img src={service.icon} alt={service.title} style={{width: 50, height: 50, marginBottom: 10}} />
                    <h3 className="section-title" style={{fontSize: '20px', textAlign: 'center', marginBottom: 0}}>
                        {service.title}
                    </h3>
                </div>
            </div>
            ))}
        </div>
      </Section>

      <Section>
        <h2 className="section-title">Work Experience</h2>
        <div className="flex-col">
            {experiences.map((experience, index) => (
            <div
                key={index}
                className="experience-card"
            >
                <div className="experience-header"> 
                   <h3 style={{fontSize: '24px', fontWeight: 'bold'}}>{experience.title}</h3>
                   <p style={{fontSize: '16px', fontWeight: '600', color: '#aaa6c3'}}>
                    {experience.company_name}
                    </p>
                </div>
                
                <p style={{fontSize: '14px', color: '#aaa6c3', opacity: 0.6, marginTop: '0.5rem'}}>
                    {experience.date}
                </p>

                <ul style={{marginTop: '1.25rem', paddingLeft: '1.25rem', listStyle: 'disc'}}>
                    {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        style={{fontSize: '14px', paddingLeft: '0.25rem', marginBottom: '0.5rem'}}
                    >
                        {point}
                    </li>
                    ))}
                </ul>
            </div>
            ))}
        </div>
      </Section>

      <Section>
        <h2 className="section-title">Projects</h2>
        <div className="grid-container">
        {projects.map((project, index) => (
          <div key={`project-${index}`} className="project-card glass">
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
              <div className="project-links">
                <div
                  onClick={() => window.open(project.source_code_link, "_blank")}
                  className="icon-btn"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"
                    alt="github"
                    style={{width: '50%', height: '50%', filter: 'invert(1)'}}
                  />
                </div>
              </div>
            </div>

            <div style={{padding: '1.25rem'}}>
              <h3 style={{fontSize: '24px', fontWeight: 'bold'}}>{project.name}</h3>
              <p style={{marginTop: '0.5rem', fontSize: '14px', color: '#aaa6c3'}}>{project.description}</p>
            </div>

            <div style={{padding: '0 1.25rem 1.25rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
              {project.tags.map((tag) => (
                <p
                  key={tag.name}
                  style={{fontSize: '14px'}}
                  className={tag.color} 
                >
                  #{tag.name}
                </p>
              ))}
            </div>
             {project.live_link && (
                 <div style={{padding: '0 1.25rem 1.25rem'}}>
                    <a href={project.live_link} target="_blank" style={{color: '#60a5fa', fontSize: '14px'}}>View Live Demo</a>
                 </div>
             )}
          </div>
        ))}
      </div>
      </Section>

       <Section>
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          {technologies.map((tech) => (
            <div key={tech.name} className="skill-item glass">
               <img src={tech.icon} alt={tech.name} style={{width: '40px', height: '40px', marginBottom: '0.5rem'}} />
               <span style={{fontSize: '12px', fontWeight: '600'}}>{tech.name}</span>
            </div>
          ))}
        </div>
      </Section>

       <Section id="contact">
        <h2 className="section-title">Contact</h2>
        <div className="contact-form glass">
            <p style={{fontSize: '18px', fontWeight: '500', marginBottom: '1rem'}}>Get in touch</p>
            <form className="form-group" onSubmit={handleSubmit}>
               <label className="form-group">
                    <span style={{fontWeight: '500'}}>Your Name</span>
                    <input 
                        type="text" 
                        name="name" 
                        value={form.name} 
                        onChange={handleChange}
                        placeholder="What's your name?" 
                        className="form-input" 
                        required
                    />
               </label>
               <label className="form-group">
                    <span style={{fontWeight: '500'}}>Your Email</span>
                    <input 
                        type="email" 
                        name="email" 
                        value={form.email}
                        onChange={handleChange}
                        placeholder="What's your email?" 
                        className="form-input" 
                        required
                    />
               </label>
                <label className="form-group">
                    <span style={{fontWeight: '500'}}>Your Message</span>
                    <textarea 
                        rows={7} 
                        name="message" 
                        value={form.message}
                        onChange={handleChange}
                        placeholder="What do you want to say?" 
                        className="form-input" 
                        required
                    />
               </label>
               <button type="submit" disabled={loading} className="cta-btn">
                  {loading ? "Sending..." : "Send"}
               </button>
            </form>
        </div>
      </Section>
      <div style={{ paddingBottom: '4rem' }} />
    </div>
  );
};

export default Interface;
