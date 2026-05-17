import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  ChevronRight, 
  Stethoscope, 
  Smile, 
  Eye, 
  Heart, 
  Plane, 
  Star, 
  CheckCircle2, 
  Phone,
  Menu,
  X,
  ShieldCheck,
  Award,
  Clock
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-12 h-12 bg-sapphire rounded-xl flex items-center justify-center text-champagne font-bold text-2xl shadow-lg shadow-sapphire/30 group-hover:rotate-3 transition-transform">CT</div>
          <span className="font-playfair text-2xl font-bold text-sapphire tracking-tight">The Caring Touch</span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#services" className="text-slate-600 hover:text-sapphire transition-colors font-medium text-sm uppercase tracking-wider">Services</a>
          <a href="#about" className="text-slate-600 hover:text-sapphire transition-colors font-medium text-sm uppercase tracking-wider">Experience</a>
          <a href="#testimonials" className="text-slate-600 hover:text-sapphire transition-colors font-medium text-sm uppercase tracking-wider">Stories</a>
          <a href="#appointment" className="bg-sapphire text-arctic px-7 py-3 rounded-full font-bold text-sm uppercase tracking-widest flex items-center gap-2 hover:bg-sapphire-light transition-all active:scale-95 shadow-xl shadow-sapphire/20 group">
            Book Consultation <Calendar size={16} className="group-hover:rotate-12 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button className="md:hidden text-sapphire p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-2xl md:hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              <a href="#services" onClick={() => setIsOpen(false)} className="text-slate-600 font-semibold text-lg hover:text-sapphire transition-colors">Services</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="text-slate-600 font-semibold text-lg hover:text-sapphire transition-colors">Experience</a>
              <a href="#testimonials" onClick={() => setIsOpen(false)} className="text-slate-600 font-semibold text-lg hover:text-sapphire transition-colors">Stories</a>
              <a href="#appointment" onClick={() => setIsOpen(false)} className="bg-sapphire text-arctic w-full py-4 rounded-2xl font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-sapphire/30">
                Book Consultation <Calendar size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-0 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd1e24a94?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Medical Suite" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-sapphire/80 via-transparent to-transparent z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center py-12 md:py-20 flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-white space-y-8"
        >
          <div className="inline-flex items-center gap-2 bg-champagne/20 text-champagne px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md border border-champagne/30">
            <Award size={14} fill="currentColor" /> 
            <span className="text-[10px] sm:text-xs">The Gold Standard in Healthcare</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-playfair font-bold leading-[1.1] tracking-tight">
            Precision Care.<br />
            <span className="text-champagne italic">Uncompromising Luxury.</span>
          </h1>
          <p className="text-arctic/70 text-lg lg:text-xl max-w-xl leading-relaxed font-light">
            Experience a new era of medical excellence where clinical precision meets five-star hospitality. Specialized care designed around your absolute comfort and well-being.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            <a href="#appointment" className="bg-champagne text-sapphire px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-white transition-all active:scale-95 shadow-2xl shadow-champagne/40 group">
              Book Premium Consultation <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="px-10 py-5 rounded-full font-bold text-lg text-white border border-white/30 hover:bg-white/10 transition-all backdrop-blur-sm text-center">
              Explore Services
            </a>
          </div>
          
          <div className="flex items-center gap-8 pt-12 border-t border-white/10">
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-champagne">99.9%</span>
              <span className="text-xs text-arctic/50 uppercase tracking-widest font-semibold">Success Rate</span>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-champagne">24/7</span>
              <span className="text-xs text-arctic/50 uppercase tracking-widest font-semibold">Concierge Support</span>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-champagne">15+</span>
              <span className="text-xs text-arctic/50 uppercase tracking-widest font-semibold">Expert Specialists</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, description, color }) => (
  <motion.div 
    whileHover={{ y: -12, transition: { duration: 0.3 } }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="group p-10 rounded-[2rem] bg-white border border-slate-100 hover:border-champagne/40 transition-all cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-champagne/10"
  >
    <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center text-white mb-8 transition-transform group-hover:rotate-6 shadow-lg`}>
      <Icon size={32} />
    </div>
    <h3 className="text-3xl font-playfair font-bold text-sapphire mb-4">{title}</h3>
    <p className="text-slate-500 mb-8 leading-relaxed font-light text-lg">{description}</p>
    <a href="#appointment" className="text-sapphire font-bold flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-wider text-sm">
      Learn More <ChevronRight size={16} />
    </a>
  </motion.div>
);

const ServicesHub = () => {
  const services = [
    { 
      icon: Smile, 
      title: "Family Dentistry", 
      description: "Comprehensive care for all ages, focusing on trust, preventative health, and lifelong oral wellness.", 
      color: "bg-blue-600" 
    },
    { 
      icon: Star, 
      title: "Cosmetic Dentistry", 
      description: "Artistic perfection in smile design, veneers, and whitening to bring out your most confident self.", 
      color: "bg-purple-600" 
    },
    { 
      icon: Eye, 
      title: "Eye Care", 
      description: "Precision diagnostics and advanced surgical interventions for crystal clear vision and long-term eye health.", 
      color: "bg-emerald-600" 
    },
    { 
      icon: Heart, 
      title: "Cardiac Care", 
      description: "Life-saving expertise with state-of-the-art cardiovascular monitoring and preventative heart health strategies.", 
      color: "bg-rose-600" 
    },
    { 
      icon: Stethoscope, 
      title: "Aviation Medicine", 
      description: "Elite specialization for pilots and aviation crews, meeting the most rigorous global medical standards.", 
      color: "bg-amber-600" 
    },
  ];

  return (
    <section id="services" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20 space-y-4">
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          className="text-champagne font-bold uppercase tracking-[0.3em] text-xs"
        >
          Multi-Specialty Hub
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-5xl lg:text-7xl font-playfair font-bold text-sapphire"
        >
          World-Class Specializations
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((s, idx) => (
          <ServiceCard key={idx} {...s} />
        ))}
        <div className="md:col-span-2 lg:col-span-1 bg-sapphire rounded-[2rem] p-10 text-white flex flex-col justify-between relative overflow-hidden group cursor-pointer shadow-2xl shadow-sapphire/40">
          <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-champagne to-transparent pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-4xl font-playfair font-bold mb-6">Comprehensive Wellness</h3>
            <p className="text-arctic/70 mb-10 leading-relaxed font-light text-lg">
              Integrated care where all specialties coordinate for your overall health. The ultimate concierge medical experience.
            </p>
          </div>
          <div className="relative z-10 flex items-center gap-2 font-bold text-champagne group-hover:translate-x-2 transition-transform uppercase tracking-widest text-sm">
            <a href="#appointment" className="flex items-center gap-2">
              View All Specializations <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  const highlights = [
    { 
      title: "State-of-the-Art Tech", 
      desc: "Digital scanning, 3D imaging, and robotic-assisted procedures for absolute precision.", 
      icon: ShieldCheck 
    },
    { 
      title: "Patient Comfort", 
      desc: "Luxury lounges, noise-cancelling headphones, and a stress-free, boutique environment.", 
      icon: Heart 
    },
    { 
      title: "Board-Certified Experts", 
      desc: "A curated team of specialists recognized globally for their expertise and surgical precision.", 
      icon: Award 
    },
  ];

  return (
    <section id="about" className="py-32 bg-arctic">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1516549655169-d77becc2a9bb?auto=format&fit=crop&q=80&w=1000" 
            alt="Medical Technology" 
            className="rounded-[3rem] shadow-2xl"
          />
          <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 hidden md:block">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-champagne/20 text-champagne rounded-full flex items-center justify-center font-bold text-2xl">
                15+
              </div>
              <div >
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Years of Excellence</p>
                <p className="text-sm text-sapphire font-bold">Award Winning Clinic</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <div className="text-champagne font-bold uppercase tracking-[0.3em] text-xs">The Luxury Experience</div>
          <h2 className="text-5xl lg:text-7xl font-playfair font-bold text-sapphire leading-tight">
            Where Science Meets <span className="text-champagne italic">Hospitality</span>
          </h2>
          <div className="space-y-8">
            {highlights.map((h, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="text-sapphire bg-sapphire/10 p-2 rounded-full h-fit">
                  <h.icon size={28} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-sapphire mb-2">{h.title}</h4>
                  <p className="text-slate-500 leading-relaxed font-light text-lg">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Elena Rodriguez",
      role: "Patient",
      text: "The level of care at The Caring Touch is simply breathtaking. From the moment I walked in, I felt like a guest in a five-star hotel rather than a patient in a clinic.",
      img: "https://images.unsplash.com/photo-1544005613-13867c2b5ee3?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Marcus Chen",
      role: "Commercial Pilot",
      text: "As an aviation specialist, I require absolute precision. The team here understands the rigor of aviation medicine and provided a seamless experience.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7238f57?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Sarah Jenkins",
      role: "Patient",
      text: "My smile transformation was an artistic masterpiece. The attention to detail and the overall luxury atmosphere made the process stress-free.",
      img: "https://images.unsplash.com/photo-1438761681033-728165670083?auto=format&fit=crop&q=80&w=200"
    }
  ];

  return (
    <section id="testimonials" className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-20 space-y-4">
        <div className="text-champagne font-bold uppercase tracking-[0.3em] text-xs">Patient Stories</div>
        <h2 className="text-5xl lg:text-7xl font-playfair font-bold text-sapphire">Voices of Trust</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {reviews.map((r, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="p-10 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-shadow"
          >
            <div className="flex gap-5 items-center mb-8">
              <img src={r.img} alt={r.name} className="w-20 h-20 rounded-full object-cover ring-4 ring-champagne/20" />
              <div>
                <h4 className="font-bold text-sapphire text-lg">{r.name}</h4>
                <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">{r.role}</p>
              </div>
            </div>
            <p className="text-slate-500 italic leading-relaxed text-lg font-light">"{r.text}"</p>
            <div className="flex gap-1 mt-8 text-champagne">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="appointment" className="bg-slate-900 text-arctic py-28 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-champagne rounded-xl flex items-center justify-center text-sapphire font-bold text-2xl shadow-lg shadow-champagne/30">CT</div>
            <span className="font-playfair text-2xl font-bold text-white tracking-tight">The Caring Touch</span>
          </div>
          <p className="text-arctic/50 leading-relaxed max-w-xs font-light text-lg">
            Defining the pinnacle of healthcare excellence. Providing specialized, luxury medical services tailored to the most discerning patients.
          </p>
          <div className="flex gap-6 text-arctic/30">
            <a href="#" className="hover:text-champagne transition-all transform hover:scale-110"><Phone size={24} /></a>
            <div className="w-6 h-6 bg-arctic/10 rounded-full hover:bg-champagne transition-colors cursor-pointer" />
            <div className="w-6 h-6 bg-arctic/10 rounded-full hover:bg-champagne transition-colors cursor-pointer" />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-12">
          <div className="space-y-6">
            <h4 className="font-bold text-white uppercase text-xs tracking-[0.2em]">Specialties</h4>
            <ul className="space-y-3 text-arctic/50 font-light">
              <li><a href="#services" className="hover:text-champagne transition-all pl-1">- Family Dentistry</a></li>
              <li><a href="#services" className="hover:text-champagne transition-all pl-1">- Cosmetic Dentistry</a></li>
              <li><a href="#services" className="hover:text-champagne transition-all pl-1">- Eye Care</a></li>
              <li><a href="#services" className="hover:text-champagne transition-all pl-1">- Cardiac Care</a></li>
              <li><a href="#services" className="hover:text-champagne transition-all pl-1">- Aviation Medicine</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-white uppercase text-xs tracking-[0.2em]">Clinic</h4>
            <ul className="space-y-3 text-arctic/50 font-light">
              <li><a href="#about" className="hover:text-champagne transition-all pl-1">- Our Team</a></li>
              <li><a href="#about" className="hover:text-champagne transition-all pl-1">- Our Facility</a></li>
              <li><a href="#appointment" className="hover:text-champagne transition-all pl-1">- Patient Portal</a></li>
              <li><a href="#appointment" className="hover:text-champagne transition-all pl-1">- Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <h4 className="font-bold text-white uppercase text-xs tracking-[0.2em]">Appointment</h4>
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-sm shadow-xl">
            <p className="text-arctic/60 text-sm mb-6 font-light">Ready for a premium experience? Secure your exclusive consultation today.</p>
            <a href="#appointment" className="w-full bg-champagne text-sapphire font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-white transition-all active:scale-95 shadow-xl shadow-champagne/20 uppercase tracking-widest text-xs">
              Book Now <Calendar size={18} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-white/5 text-center text-arctic/30 text-xs uppercase tracking-[0.3em] font-medium">
        © 2026 The Caring Touch. Precision Care. Uncompromising Luxury.
      </div>
    </footer>
  );
};

const FloatingCTA = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-8 right-8 z-50 md:hidden"
    >
      <a href="#appointment" className="bg-champagne text-sapphire p-5 rounded-full shadow-2xl shadow-champagne/50 flex items-center justify-center active:scale-90 transition-transform">
        <Calendar size={28} />
      </a>
    </motion.div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen font-inter antialiased text-slate-900">
      <Navbar />
      <Hero />
      <ServicesHub />
      <ExperienceSection />
      <Testimonials />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default App;
