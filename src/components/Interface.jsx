import { motion } from "framer-motion";
import { navLinks, services, technologies, experiences, projects, education, certifications } from "../constants";
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import LogoLoop from './LogoLoop';
import FloatingLines from './FloatingLines';
import SpotlightCard from './SpotlightCard';
import TiltedCard from './TiltedCard';
import TextPressure from './TextPressure';
import RotatingText from './RotatingText';
import { FaRobot, FaBrain, FaCode, FaProjectDiagram } from 'react-icons/fa';

const getServiceIcon = (title) => {
    switch(title) {
        case "AI Agent Developer": return <FaRobot size={48} color="#38bdf8" />;
        case "LLM & RAG Engineer": return <FaBrain size={48} color="#38bdf8" />;
        case "Full Stack AI Builder": return <FaCode size={48} color="#38bdf8" />;
        case "Workflow Automation": return <FaProjectDiagram size={48} color="#38bdf8" />;
        default: return <FaCode size={48} color="#38bdf8" />;
    }
};

const Navbar = () => {
    return (
        <motion.nav 
            className="nav-container"
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
            <div className="nav-logo">
                <span style={{color: '#fff'}}>ABHISHEK</span>
            </div>
            <div className="nav-links">
                {navLinks.map((link) => (
                    <a key={link.id} href={`#${link.id}`} className="nav-item">
                        {link.title}
                    </a>
                ))}
            </div>
            <div>
                <a href="#contact" className="sleek-pill">Connect →</a>
            </div>
        </motion.nav>
    );
};

const Section = (props) => {
  const { children, id, ...rest } = props;
  return (
    <motion.section
      id={id}
      className="section-container"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
      viewport={{ once: true, margin: "-100px" }}
      {...rest}
    >
      <div className="section-content">
        {children}
      </div>
    </motion.section>
  );
};

export const Interface = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send('service_Abhi456', 'template_66fneyc', {
          from_name: form.name,
          to_name: "Abhishek",
          from_email: form.email,
          to_email: "abhishekbarote@gmail.com",
          message: form.message,
        }, 'NV69a_UPBUdZchKpd')
      .then(() => {
        return emailjs.send('service_Abhi456', 'template_2t5af3p', {
            name: form.name, email: form.email, title: "Portfolio Inquiry", message: form.message,
          }, 'NV69a_UPBUdZchKpd').catch(err => { throw new Error(`Auto-reply failed: ${err.text || err.message}`); });
      })
      .then(() => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        alert(`Failed to send message.`);
      });
  };

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Navbar />

      {/* HERO SECTION */}
      <Section id="home" style={{ position: 'relative', width: '100%', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: 0 }}>
        {/* Floating Lines Background */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none', opacity: 0.8 }}>
          <FloatingLines
            linesGradient={["#7dd3fc", "#38bdf8", "#0284c7"]}
            animationSpeed={1}
            interactive
            bendRadius={5}
            bendStrength={-0.5}
            mouseDamping={0.05}
            parallax
            parallaxStrength={0.2}
          />
        </div>
        {/* Fade to background color at the bottom */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '20vh', background: 'linear-gradient(to bottom, transparent, #070707)', zIndex: 1, pointerEvents: 'none' }} />
        
        <div className="hero-container">
            {/* TEXT COLUMN */}
            <div className="hero-text">
                <div style={{ position: 'relative', width: '100%', marginBottom: '1rem', minHeight: '80px', display: 'flex', alignItems: 'center' }}>
                  <TextPressure
                    text="Abhishek Barote"
                    flex
                    alpha={false}
                    stroke={false}
                    width
                    weight
                    italic
                    textColor="#ffffff"
                    strokeColor="#5227FF"
                    minFontSize={56}
                  />
                </div>
                <div className="hero-subtitle" style={{ minHeight: '30px' }}>
                    <RotatingText 
                        texts={[
                            "Artificial Intelligence Engineer",
                            "ML Engineer",
                            "Data Engineer"
                        ]} 
                    />
                </div>
                <div className="hero-buttons">
                    <a href="#about" className="sleek-pill" style={{ background: '#fff', color: '#000', padding: '0.75rem 2.5rem', fontWeight: 600, fontSize: '0.9rem' }}>
                        About Me
                    </a>
                    <a href="#projects" className="sleek-pill-dark" style={{ padding: '0.75rem 2.5rem', fontSize: '0.9rem' }}>
                        View Work
                    </a>
                </div>
            </div>

            {/* IMAGE COLUMN */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hero-image-wrapper"
            >
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <TiltedCard
                        imageSrc="https://i.ibb.co/0jD6z8q4/Screenshot-2026-04-26-021256.png"
                        altText="Abhishek Barote"
                        captionText="Abhishek Barote"
                        containerHeight="400px"
                        containerWidth="400px"
                        imageHeight="400px"
                        imageWidth="400px"
                        rotateAmplitude={12}
                        scaleOnHover={1.05}
                        displayOverlayContent
                        overlayContent={
                            <p style={{ fontWeight: 'bold', fontSize: '1.5rem', textShadow: '0 4px 8px rgba(0,0,0,0.8)' }}>
                                Abhishek Barote
                            </p>
                        }
                    />
                </div>
            </motion.div>
        </div>
      </Section>

      {/* ABOUT APP/SERVICES */}
      <Section id="about">
        <div className="glass" style={{ padding: '3rem', marginBottom: '3rem' }}>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Professional Summary</h2>
            <p style={{ color: '#aaa', fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
                AI-focused Computer Engineering graduate with hands-on experience building production-ready AI applications, automation workflows, and open-source software. Strong foundation in backend development, API design, and workflow orchestration. Seeking roles in AI applications, automation, and software development.
            </p>
        </div>

        <div className="grid-container">
            {services.map((service, index) => (
             <SpotlightCard 
                key={service.title} 
                spotlightColor="rgba(56, 189, 248, 0.15)"
             >
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    {getServiceIcon(service.title)}
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '600', textAlign: 'center' }}>
                        {service.title}
                    </h3>
                </div>
            </SpotlightCard>
            ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience">
        <h2 className="section-title">Experience & Education</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {experiences.map((exp, index) => (
                <motion.div key={index} className="experience-card glass" whileHover={{ scale: 1.01 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                            {exp.icon && (
                                <div style={{ background: exp.iconBg || 'transparent', padding: '0.5rem 1rem', borderRadius: '0.5rem', width: '140px', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                    <img src={exp.icon} alt={exp.company_name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                </div>
                            )}
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{exp.title}</h3>
                                <p style={{ fontSize: '1rem', color: '#888', margin: '0.25rem 0 0 0' }}>{exp.company_name}</p>
                            </div>
                        </div>
                        <div className="sleek-pill-dark" style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem' }}>
                            {exp.date}
                        </div>
                    </div>
                    <ul style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {exp.points.map((point, i) => (
                            <li key={i} style={{ color: '#aaa', fontSize: '0.9rem', display: 'flex', gap: '0.75rem' }}>
                                <span style={{ color: '#fff' }}>•</span> {point}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            ))}
            
            {/* Education Block */}
            <motion.div className="experience-card glass" whileHover={{ scale: 1.01 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{education.degree}</h3>
                        <p style={{ fontSize: '1rem', color: '#888', marginTop: '0.25rem' }}>{education.institution}</p>
                    </div>
                    <div className="sleek-pill-dark" style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem' }}>
                        {education.date}
                    </div>
                </div>
                <p style={{ color: '#aaa', fontSize: '0.9rem', marginTop: '1rem' }}>{education.gpa}</p>
            </motion.div>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid-container">
        {projects.map((project, index) => (
          <motion.div key={index} className="project-card glass" whileHover={{ y: -5 }}>
            <div className="project-image-container">
              <img src={project.image} alt={project.name} className="project-image" />
              <div style={{ position: 'absolute', top: '1rem', right: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <a href={project.source_code_link} target="_blank" className="sleek-pill-dark" style={{ padding: '0.25rem', borderRadius: '50%', width: '32px', height: '32px' }}>
                     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="github" style={{ width: '100%', height: '100%', filter: 'invert(1)' }} />
                  </a>
              </div>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{project.name}</h3>
              <p style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: '#aaa', lineHeight: '1.6' }}>{project.description}</p>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {project.tags.map((tag) => (
                  <span key={tag.name} style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.05)', padding: '0.2rem 0.6rem', borderRadius: '4px', color: '#888' }}>
                    #{tag.name}
                  </span>
                ))}
              </div>
              {project.live_link && (
                 <div style={{ marginTop: '1.5rem' }}>
                    <a href={project.live_link} target="_blank" className="sleek-pill" style={{ width: '100%', padding: '0.5rem', background: 'linear-gradient(45deg, #1f2937, #374151)', border: '1px solid #4b5563', textAlign: 'center', display: 'block' }}>View Live Instance</a>
                 </div>
              )}
            </div>
          </motion.div>
        ))}
        </div>
      </Section>

       {/* SKILLS */}
       <Section id="skills">
        <h2 className="section-title" style={{ textAlign: 'center' }}>Core Technologies</h2>
        <div style={{ position: 'relative', width: '100%', maxWidth: '100%', margin: '0 auto', overflow: 'hidden' }}>
          <LogoLoop
            logos={technologies}
            speed={60}
            direction="left"
            gap={40}
            hoverSpeed={0}
            fadeOut={true}
            fadeOutColor="transparent"
            ariaLabel="Core Technologies Loop"
            renderItem={(tech, key) => (
              <div className="glass" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', minWidth: '140px', transition: 'transform 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                 <img src={tech.icon} alt={tech.name} style={{ width: '40px', height: '40px' }} />
                 <span style={{ fontSize: '0.8rem', fontWeight: '500', color: '#ccc' }}>{tech.name}</span>
              </div>
            )}
          />
        </div>
      </Section>

      {/* CERTIFICATIONS */}
      <Section id="certifications">
        <h2 className="section-title">Certifications</h2>
        <div className="cert-grid">
            {certifications.map((cert, index) => (
                <motion.div key={index} className="project-card glass" whileHover={{ y: -5 }} style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '1.5rem', backgroundColor: '#0a0a0a', borderTopLeftRadius: '1.5rem', borderTopRightRadius: '1.5rem' }}>
                        <div style={{ width: '100%', aspectRatio: '1.414' }}>
                            <TiltedCard
                                imageSrc={cert.image}
                                altText={cert.title}
                                containerWidth="100%"
                                containerHeight="100%"
                                imageWidth="100%"
                                imageHeight="100%"
                                rotateAmplitude={10}
                                scaleOnHover={1.04}
                                borderRadius="8px"
                                objectFit="contain"
                            />
                        </div>
                    </div>
                    <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', height: '100%' }}>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', lineHeight: '1.4' }}>{cert.title}</h3>
                            <p style={{ fontSize: '0.9rem', color: '#888', marginTop: '0.25rem' }}>{cert.issuer}</p>
                        </div>
                        
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                            <span className="sleek-pill-dark" style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem' }}>
                                {cert.date}
                            </span>
                        </div>
                        
                        {cert.link && (
                            <div style={{ marginTop: '1rem' }}>
                                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="sleek-pill" style={{ width: '100%', padding: '0.5rem', background: 'linear-gradient(45deg, #1f2937, #374151)', border: '1px solid #4b5563', textAlign: 'center', display: 'block', fontSize: '0.9rem' }}>
                                    View Credential
                                </a>
                            </div>
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
      </Section>

      {/* CONTACT */}
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden', paddingBottom: '6rem' }}>
        {/* Floating Lines Background for Footer (Reversed/Rotated) */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '50vh', zIndex: 0, pointerEvents: 'none', opacity: 0.6, transform: 'rotate(180deg)' }}>
          <FloatingLines
            linesGradient={["#0284c7", "#38bdf8", "#7dd3fc"]}
            animationSpeed={0.8}
            interactive
            bendRadius={5}
            bendStrength={-0.5} 
            mouseDamping={0.05}
            parallax
            parallaxStrength={0.2}
          />
        </div>
        {/* Gradient to blend the top edge of the lines into black background */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '50vh', background: 'linear-gradient(to bottom, #070707 0%, transparent 100%)', zIndex: 1, pointerEvents: 'none' }} />

        <Section id="contact" style={{ position: 'relative', zIndex: 2 }}>
          <div className="glass" style={{ padding: '3rem', width: '100%', maxWidth: '900px', margin: '0 auto' }}>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '1rem' }}>Initialize Contact</h2>
            <p style={{ textAlign: 'center', color: '#888', marginBottom: '2rem' }}>Open a channel to discuss opportunities.</p>
            <form className="form-group" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    value={form.name} 
                    onChange={handleChange}
                    placeholder="Identification (Name)" 
                    className="form-input" 
                    required
                />
                <input 
                    type="email" 
                    name="email" 
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Comms Link (Email)" 
                    className="form-input" 
                    required
                />
                <textarea 
                    rows={5} 
                    name="message" 
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Transmit Message..." 
                    className="form-input" 
                    required
                />
               <button type="submit" disabled={loading} className="sleek-pill" style={{ marginTop: '1rem', padding: '0.75rem', width: '100%', background: 'linear-gradient(45deg, #059669, #10b981)', border: 'none', fontWeight: 'bold', letterSpacing: '1px' }}>
                  {loading ? "Transmitting..." : "Send Transmission →"}
               </button>
            </form>
        </div>
      </Section>
      </div>
    </div>
  );
};

export default Interface;
