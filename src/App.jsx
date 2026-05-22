import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, Linkedin, Download, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    period: "2015 - Présent",
    title: "Supervision de portefeuille clients et management d'équipe",
    company: "Cabinet d'Expertise",
    description: "Gestion autonome d'un portefeuille de PME/TPE et ETI. Encadrement d'une équipe de collaborateurs comptables. Révision des comptes, clôtures annuelles et présentation des bilans."
  },
  {
    period: "2010 - 2015",
    title: "Accompagnement stratégique et conseil",
    company: "Sonatel Sénégal / Sénégalaise de l'automobile",
    description: "Réalisation de business plans, choix des statuts juridiques et fiscaux optimaux, recherche de financements et mise en place de tableaux de bord prévisionnels."
  },
  {
    period: "2006 - 2010",
    title: "Audit légal et contractuel (CAC)",
    company: "Banque BICIS",
    description: "Conduite de missions de certification des comptes. Analyse des risques internes, contrôle des procédures et rédaction des rapports généraux et spéciaux."
  }
];

const skills = [
  { name: "Expertise technique (Fiscalité & Comptabilité)", percent: 98 },
  { name: "Analyse financière et pilotage", percent: 95 },
  { name: "Maîtrise des outils numériques et Data", percent: 90 },
  { name: "Relation client et posture de conseil", percent: 96 },
  { name: "Gestion de crise et restructuration", percent: 92 }
];

const education = [
  {
    year: "2004 - 2006",
    degree: "Master / Diplôme d'Expertise Comptable",
    school: "Université d'Harvard"
  }
];

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      if (window.scrollY > 50) {
        navRef.current.classList.add('bg-background/80', 'backdrop-blur-xl', 'border-gray-200', 'shadow-sm');
        navRef.current.classList.remove('bg-transparent', 'border-transparent');
      } else {
        navRef.current.classList.add('bg-transparent', 'border-transparent');
        navRef.current.classList.remove('bg-background/80', 'backdrop-blur-xl', 'border-gray-200', 'shadow-sm');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav ref={navRef} className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 px-5 py-3 md:px-8 md:py-4 rounded-full flex items-center gap-4 md:gap-8 text-primary border border-transparent w-[90%] md:w-auto justify-between md:justify-center">
      <div className="font-sans font-bold text-lg tracking-tight cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        MN.
      </div>
      <div className="hidden md:flex items-center gap-6 text-sm font-medium">
        <button onClick={() => scrollTo('about')} className="link-lift hover:text-accent transition-colors">À propos</button>
        <button onClick={() => scrollTo('experience')} className="link-lift hover:text-accent transition-colors">Expérience</button>
        <button onClick={() => scrollTo('skills')} className="link-lift hover:text-accent transition-colors">Compétences</button>
      </div>
      <a href="/cv-moussa-ndoye.pdf" download className="btn-magnetic flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-shadow">
        <Download size={16} />
        <span>CV</span>
      </a>
    </nav>
  );
};

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-element', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.2
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Texture for Architecte Minimal */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop" 
          alt="Minimalist Architecture" 
          className="w-full h-full object-cover opacity-20 grayscale"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl">
        <div className="hero-element w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-accent/20 bg-gray-100 flex items-center justify-center mb-8 shadow-sm overflow-hidden">
          <span className="text-4xl font-sans font-bold text-gray-400">MN</span>
        </div>
        
        <h1 className="hero-element text-5xl md:text-7xl font-sans font-extrabold text-primary tracking-tight leading-tight mb-4">
          Moussa Ndoye
        </h1>
        
        <h2 className="hero-element text-2xl md:text-4xl font-serif italic text-text mb-8">
          Expert Comptable
        </h2>
        
        <div className="hero-element flex flex-wrap justify-center items-center gap-2 md:gap-4 text-sm md:text-base font-mono text-text/80 mb-12">
          <span>20 ans d'expérience</span>
          <span className="hidden md:inline text-accent/50">|</span>
          <span className="md:hidden text-accent/50">•</span>
          <span>Sénégal</span>
          <span className="hidden md:inline text-accent/50">|</span>
          <span className="md:hidden text-accent/50">•</span>
          <span>Harvard Alumni</span>
        </div>
        
        <div className="hero-element flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href="/cv-moussa-ndoye.pdf" download className="btn-magnetic flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-bold shadow-lg">
            <Download size={20} />
            <span>Télécharger CV</span>
          </a>
          <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="btn-magnetic flex items-center justify-center gap-2 bg-transparent border-2 border-primary text-primary px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-colors">
            <span>Me contacter</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-content', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 px-6 max-w-6xl mx-auto">
      <div className="about-content grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-4 md:text-right">
          <h2 className="text-4xl md:text-5xl font-serif italic text-primary">À propos</h2>
        </div>
        
        <div className="hidden md:block col-span-1 h-full w-[2px] bg-accent/20 mx-auto rounded-full"></div>
        
        <div className="md:col-span-7">
          <p className="text-lg md:text-xl text-text leading-relaxed font-sans">
            Je suis un expert comptable qui a travaillé dans des entreprises de premier plan comme <strong className="font-semibold text-primary">Sonatel Sénégal</strong>, la <strong className="font-semibold text-primary">Sénégalaise de l'automobile</strong>, et la <strong className="font-semibold text-primary">banque BICIS</strong>. 
            <br/><br/>
            Fort de <strong className="text-accent font-semibold">20 ans d'expérience</strong>, je suis un expert en la matière. J'ai étudié à l'<strong className="font-semibold text-primary">Université d'Harvard</strong> puis je suis retourné au Sénégal avec une vision claire : participer activement au développement et à la structuration économique de mon pays.
          </p>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.exp-card');
      cards.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          onStart: () => {
            gsap.fromTo(card.querySelector('.exp-dot'), 
              { scale: 0, opacity: 0 }, 
              { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)", delay: 0.3 }
            );
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={containerRef} className="py-24 px-6 bg-white/50 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif italic text-primary text-center mb-20">Expérience</h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-accent/20 -translate-x-1/2"></div>
          
          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`exp-card relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 items-center justify-center z-10">
                  <div className="exp-dot w-3 h-3 bg-accent rounded-full ring-4 ring-background"></div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 p-4">
                  <div className={`bg-background card-hover rounded-[2rem] p-8 border border-gray-100 shadow-sm ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                    <span className="inline-block font-mono text-sm text-accent mb-4 px-3 py-1 bg-accent/5 rounded-full">{exp.period}</span>
                    <h3 className="text-xl font-sans font-bold text-primary mb-2 leading-tight">{exp.title}</h3>
                    <h4 className="text-base font-sans text-text/70 mb-4">{exp.company}</h4>
                    <p className="text-sm text-text leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 75%',
        onEnter: () => {
          gsap.to('.skill-circle', {
            strokeDashoffset: (i, target) => {
              const percent = target.dataset.percent;
              const radius = target.r.baseVal.value;
              const circumference = 2 * Math.PI * radius;
              return circumference - (percent / 100) * circumference;
            },
            duration: 1.5,
            ease: 'power2.out',
            stagger: 0.15
          });

          const counters = gsap.utils.toArray('.skill-percent');
          counters.forEach((counter) => {
            const target = parseInt(counter.dataset.target, 10);
            gsap.to(counter, {
              innerHTML: target,
              duration: 1.5,
              snap: { innerHTML: 1 },
              ease: 'power2.out',
            });
          });
          
          gsap.from('.skill-card', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out'
          });
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={containerRef} className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-serif italic text-primary text-center mb-16">Expertise</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card bg-white card-hover rounded-[2rem] p-8 flex flex-col items-center text-center border border-gray-100 shadow-sm">
            <div className="relative w-24 h-24 mb-6">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" className="stroke-gray-100" strokeWidth="8" fill="none" />
                <circle 
                  cx="50" cy="50" r="40" 
                  className="skill-circle stroke-accent" 
                  strokeWidth="8" 
                  fill="none" 
                  strokeLinecap="round"
                  data-percent={skill.percent}
                  style={{
                    strokeDasharray: 2 * Math.PI * 40,
                    strokeDashoffset: 2 * Math.PI * 40
                  }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mono text-xl font-bold text-primary">
                  <span className="skill-percent" data-target={skill.percent}>0</span>%
                </span>
              </div>
            </div>
            <h3 className="font-sans font-semibold text-primary leading-snug">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

const Education = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.edu-card', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 bg-primary text-background rounded-t-[4rem] mt-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif italic mb-12 text-center text-white">Fondations</h2>
        
        <div className="flex flex-col gap-6">
          {education.map((edu, index) => (
            <div key={index} className="edu-card bg-white/5 rounded-[2rem] p-8 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-sans font-bold text-white mb-1">{edu.degree}</h3>
                  <p className="text-background/70 font-sans">{edu.school}</p>
                </div>
                <div className="font-mono text-accent bg-accent/10 px-4 py-2 rounded-full inline-block self-start md:self-center">
                  {edu.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-element', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={containerRef} className="py-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="contact-element text-4xl md:text-7xl font-serif italic text-primary mb-8 leading-tight">Travaillons ensemble</h2>
        <p className="contact-element text-base md:text-lg text-text/70 mb-12 max-w-2xl mx-auto font-sans">
          Prêt à structurer votre croissance et optimiser vos performances financières ? Discutons de vos enjeux.
        </p>
        
        <div className="contact-element flex flex-wrap justify-center gap-6 mb-16">
          <a href="mailto:contact@moussandoye.sn" className="link-lift flex flex-col items-center gap-3 p-6 bg-white rounded-[2rem] border border-gray-100 shadow-sm min-w-[140px]">
            <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center">
              <Mail size={24} />
            </div>
            <span className="font-sans font-medium text-primary text-sm">Email</span>
          </a>
          
          <a href="tel:+2210000000" className="link-lift flex flex-col items-center gap-3 p-6 bg-white rounded-[2rem] border border-gray-100 shadow-sm min-w-[140px]">
            <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center">
              <Phone size={24} />
            </div>
            <span className="font-sans font-medium text-primary text-sm">Téléphone</span>
          </a>

          <a href="#" className="link-lift flex flex-col items-center gap-3 p-6 bg-white rounded-[2rem] border border-gray-100 shadow-sm min-w-[140px]">
            <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center">
              <Linkedin size={24} />
            </div>
            <span className="font-sans font-medium text-primary text-sm">LinkedIn</span>
          </a>
        </div>
        
        <button className="contact-element btn-magnetic bg-primary text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-sans font-bold text-base md:text-lg shadow-xl flex items-center justify-center gap-3 w-full md:w-auto mx-auto">
          <span>Envoyer un message</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0B] text-white/50 py-12 px-6 rounded-t-[4rem]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-sans text-sm">
          <span className="text-white font-bold tracking-wide">Moussa Ndoye</span> &copy; {new Date().getFullYear()}
        </div>
        
        <div className="flex items-center gap-3 text-xs font-mono bg-white/5 px-4 py-2 rounded-full border border-white/10">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Disponible pour de nouvelles missions
        </div>
        
        <div className="font-sans text-xs">
          Fait avec le vibe coding
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
