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
  X
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <nav className="fixed top-0 w-full z-50 glass transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-sapphire rounded-lg flex items-center justify-center text-champagne font-bold text-xl">CT</div>
          <span className="font-playfair text-2xl font-bold text-sapphire tracking-tight">The Caring Touch</span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-slate hover:text-sapphire transition-colors font-medium">Services</a>
          <a href="#about" className="text-slate hover:text-sapphire transition-colors font-medium">Experience</a>
          <a href="#testimonials" className="text-slate hover:text-sapphire transition-colors font-medium">Stories</a>
          <button className="bg-sapphire text-arctic px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-sapphire-light transition-all active:scale-95 shadow-lg shadow-sapphire/20">
            Book Consultation <Calendar size={18} />
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button className="md:hidden text-sapphire" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <a href="#services" onClick={() => setIsOpen(false)} className="text-slate font-medium py-2">Services</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="text-slate font-medium py-2">Experience</a>
              <a href="#testimonials" onClick={() => setIsOpen(false)} className="text-slate font-medium py-2">Stories</a>
              <button className="bg-sapphire text-arctic w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2">
                Book Consultation <Calendar size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-sapphire/90 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1629909606777-1c77773a6f3a?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Clinic Interior" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-champagne/20 text-champagne px-4 py-1 rounded-full text-sm font-semibold backdrop-blur-md border border-champagne/30">
            <Star size={14} fill="currentColor" /> 
            <span>The Gold Standard in Healthcare</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-playfair font-bold leading-[1.1] leading-tight">
            Precision Care.<br />
            <span className="text-gradient">Uncompromising Luxury.</span>
          </h1>
          <p className="text-arctic/80 text-lg lg:text-xl max-w-xl leading-relaxed">
            Experience a new era of medical excellence where clinical precision meets five-star hospitality. Specialized care designed around your comfort and well-being.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-champagne text-sapphire px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-champagne-light transition-all active:scale-95 shadow-xl shadow-champagne/30 group">
              Book Premium Consultation <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full font-bold text-lg text-white border border-white/30 hover:bg-white/10 transition-all backdrop-blur-sm">
              Explore Services
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, description, color }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group p-8 rounded-3xl bg-white border border-slate-200 hover:border-champagne/50 transition-all cursor-pointer shadow-sm hover:shadow-xl hover:shadow-champagne/10"
  >
    <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center text-white mb-6 transition-transform group-hover:rotate-6`}>
      <Icon size={28} />
    </div>
    <h3 className="text-2xl font-playfair font-bold text-sapphire mb-3">{title}</h3>
    <p className="text-slate mb-6 leading-relaxed">{description}</p>
    <a href="#" className="text-sapphire font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
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
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          className="text-champagne font-bold uppercase tracking-widest text-sm"
        >
          Multi-Specialty Hub
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-4xl lg:text-6xl font-playfair font-bold text-sapphire"
        >
          World-Class Specializations
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, idx) => (
          <ServiceCard key={idx} {...s} />
        ))}
        {/* Special Highlight Card */}
        <div className="md:col-span-2 lg:col-span-1 bg-sapphire rounded-3xl p-8 text-white flex flex-col justify-between relative overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-champagne to-transparent pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-3xl font-playfair font-bold mb-4">Comprehensive Wellness</h3>
            <p className="text-arctic/70 mb-8 leading-relaxed">
              Integrated care where all specialties coordinate for your overall health. The ultimate concierge medical experience.
            </p>
          </div>
          <div className="relative z-10 flex items-center gap-2 font-bold text-champagne group-hover:translate-x-2 transition-transform">
            View All Specializations <ChevronRight size={18} />
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
      icon: CheckCircle2 
    },
    { 
      title: "Patient Comfort", 
      desc: "Luxury lounges, noise-cancelling headphones, and a stress-free, boutique environment.", 
      icon: CheckCircle2 
    },
    { 
      title: "Board-Certified Experts", 
      desc: "A curated team of specialists recognized globally for their expertise and surgical precision.", 
      icon: CheckCircle2 
    },
  ];

  return (
    <section id="about" className="py-24 bg-arctic">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd1e24a94?auto=format&fit=crop&q=80&w=1000" 
            alt="Medical Technology" 
            className="rounded-3xl shadow-2xl"
          />
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-champagne/20 text-champagne rounded-full flex items-center justify-center font-bold text-xl">
                15+
              </div>
              <div>
                <p className="text-xs text-slate font-semibold uppercase">Years of Excellence</p>
                <p className="text-sm text-sapphire font-bold">Award Winning Clinic</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="text-champagne font-bold uppercase tracking-widest text-sm">The Luxury Experience</div>
          <h2 className="text-4xl lg:text-6xl font-playfair font-bold text-sapphire leading-tight">
            Where Science Meets <span className="text-gradient">Hospitality</span>
          </h2>
          <div className="space-y-6">
            {highlights.map((h, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="text-champagne bg-champagne/10 p-1 rounded-full h-fit">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-sapphire">{h.title}</h4>
                  <p className="text-slate leading-relaxed">{h.desc}</p>
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
      img: "https://i.pravatar.cc/150?u=elena"
    },
    {
      name: "Marcus Chen",
      role: "Commercial Pilot",
      text: "As an aviation specialist, I require absolute precision. The team here understands the rigor of aviation medicine and provided a seamless experience.",
      img: "https://i.pravatar.cc/150?u=marcus"
    },
    {
      name: "Sarah Jenkins",
      role: "Patient",
      text: "My smile transformation was an artistic masterpiece. The attention to detail and the overall luxury atmosphere made the process stress-free.",
      img: "https://i.pravatar.cc/150?u=sarah"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-16 space-y-4">
        <div className="text-champagne font-bold uppercase tracking-widest text-sm">Patient Stories</div>
        <h2 className="text-4xl lg:text-6xl font-playfair font-bold text-sapphire">Voices of Trust</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((r, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm"
          >
            <div className="flex gap-4 items-start mb-6">
              <img src={r.img} alt={r.name} className="w-16 h-16 rounded-full object-cover ring-2 ring-champagne/30" />
              <div>
                <h4 className="font-bold text-sapphire">{r.name}</h4>
                <p className="text-xs text-slate uppercase font-semibold">{r.role}</p>
              </div>
            </div>
            <p className="text-slate italic leading-relaxed">"{r.text}"</p>
            <div className="flex gap-1 mt-6 text-champagne">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-sapphire text-arctic py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-champagne rounded-lg flex items-center justify-center text-sapphire font-bold text-xl">CT</div>
            <span className="font-playfair text-2xl font-bold text-white tracking-tight">The Caring Touch</span>
          </div>
          <p className="text-arctic/60 leading-relaxed max-w-xs">
            Defining the pinnacle of healthcare excellence. Providing specialized, luxury medical services tailored to the most discerning patients.
          </p>
          <div className="flex gap-4 text-arctic/40">
            <a href="#" className="hover:text-champagne transition-colors"><Phone size={20} /></a>
            <a href="#" className="hover:text-champagne transition-colors"><div className="w-5 h-5 bg-arctic/20 rounded-full" /></a>
            <a href="#" className="hover:text-champagne transition-colors"><div className="w-5 h-5 bg-arctic/20 rounded-full" /></a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-bold text-white uppercase text-sm tracking-widest">Specialties</h4>
            <ul className="space-y-2 text-arctic/60">
              <li><a href="#" className="hover:text-champagne transition-colors">Family Dentistry</a></li>
              <li><a href="#" className="hover:text-champagne transition-colors">Cosmetic Dentistry</a></li>
              <li><a href="#" className="hover:text-champagne transition-colors">Eye Care</a></li>
              <li><a href="#" className="hover:text-champagne transition-colors">Cardiac Care</a></li>
              <li><a href="#" className="hover:text-champagne transition-colors"> la-Aviation Medicine</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-white uppercase text-sm tracking-widest">Clinic</h4>
            <ul className="space-y-2 text-arctic/60">
              <li><a href="#" className="hover:text-champagne transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-champagne transition-colors">Our Facility</a></li>
              <li><a href="#" className="hover:text-champagne transition-colors">Patient Portal</a></li>
              <li><a href="#" className="hover:text-champagne transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="font-bold text-white uppercase text-sm tracking-widest">Appointment</h4>
          <div className="bg-sapphire-light p-6 rounded-2xl border border-white/10">
            <p className="text-arctic/80 text-sm mb-4">Ready for a la-premium experience? Book your slot now.</p>
            <button className="w-full bg-champagne text-sapphire font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-champagne-light transition-all active:scale-95">
              Book Now <Calendar size={18} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-center text-arctic/40 text-sm">
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
      className="fixed bottom-6 right-6 z-50 md:hidden"
    >
      <button className="bg-champagne text-sapphire p-4 rounded-full shadow-2xl shadow-champagne/40 flex items-center justify-center active:scale-90 transition-transform">
        <Calendar size={24} />
      </button>
    </motion.div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen font-inter">
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
