import { motion } from "motion/react";
import { 
  BookOpen, 
  Brain, 
  GraduationCap, 
  MousePointer2, 
  Dna, 
  Activity, 
  Library, 
  ArrowRight,
  Mail,
  ChevronRight,
  Zap
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent-purple/30 selection:text-accent-purple font-sans overflow-hidden">
      {/* Floating Pill Nav */}
      <nav className="fixed w-full z-50 top-4 px-4 flex justify-center">
        <div className="bg-white/90 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-full px-6 py-3 flex items-center justify-between w-full max-w-4xl">
          <div className="flex items-center gap-2">
            <span className="font-display font-black tracking-tight text-xl text-slate-900">EMPOWERHER LAB.</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-500 uppercase tracking-wider">
            <a href="#about" className="hover:text-accent-purple transition-colors">Origin</a>
            <a href="#literacy" className="hover:text-accent-purple transition-colors">Literacy</a>
            <a href="#initiative" className="hover:text-accent-purple transition-colors">Initiatives</a>
            <a href="#advocacy" className="hover:text-accent-purple transition-colors">Advocacy</a>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center justify-center bg-slate-900 text-white px-5 py-2 rounded-full font-bold text-sm tracking-wide hover:bg-slate-800 transition-colors">
            Support Us
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-40 pb-20 md:pt-48 md:pb-32 min-h-[90vh] flex flex-col justify-center bg-[#fdfcfb]">
        {/* Abstract Background Shapes */}
        <div className="absolute top-20 -right-20 w-[500px] h-[500px] bg-brand-pink rounded-full blur-3xl opacity-60 -z-10 animate-pulse" />
        <div className="absolute bottom-10 -left-20 w-[400px] h-[400px] bg-brand-purple rounded-full blur-3xl opacity-60 -z-10" />

        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center max-w-5xl mx-auto"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 bg-white/50 backdrop-blur rounded-full text-accent-purple text-xs font-bold uppercase tracking-widest mb-8"
            >
              <Zap size={14} className="fill-accent-purple" />
              <span>Independent Research & Literacy</span>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-display font-black tracking-tighter text-slate-900 leading-[0.9] mb-8">
              Bridge the gap. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-purple to-accent-pink italic font-serif">Rewire the mind.</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-slate-600 leading-relaxed max-w-2xl font-serif font-medium mb-12">
              EmpowerHer Lab bridges computational science with early childhood cognitive development. Founded by Wadika Faisal, EIT, we apply engineering logic to neuroplasticity.
            </p>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#initiatives" className="relative group overflow-hidden inline-flex items-center justify-center gap-3 bg-slate-900 text-white font-bold tracking-wide uppercase px-10 py-5 rounded-full text-sm">
                <span className="relative z-10 flex items-center gap-2">Explore Initiatives <ArrowRight size={18} /></span>
                <div className="absolute inset-0 bg-accent-purple transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Marquee Banner */}
      <div className="bg-slate-900 text-brand-purple py-4 overflow-hidden border-y border-slate-800">
        <div className="marquee-track items-center gap-8 font-display italic text-2xl md:text-3xl whitespace-nowrap opacity-80">
          <span>* NEUROPLASTICITY *</span>
          <span className="font-sans font-bold not-italic">STEM EDUCATION</span>
          <span>* COGNITIVE HYGIENE *</span>
          <span className="font-sans font-bold not-italic">QUANTUM LOGIC</span>
          <span>* EARLY DEVELOPMENT *</span>
          <span className="font-sans font-bold not-italic">ALGORITHMIC RESILIENCE</span>
          <span>* NEUROPLASTICITY *</span>
          <span className="font-sans font-bold not-italic">STEM EDUCATION</span>
          <span>* COGNITIVE HYGIENE *</span>
          <span className="font-sans font-bold not-italic">QUANTUM LOGIC</span>
          <span>* EARLY DEVELOPMENT *</span>
          <span className="font-sans font-bold not-italic">ALGORITHMIC RESILIENCE</span>
        </div>
      </div>

      {/* The Origin Story */}
      <section id="about" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/3 sticky top-32"
            >
              <div className="text-accent-purple/20 font-display font-black text-6xl md:text-8xl leading-none mb-2 select-none">01</div>
              <h3 className="text-4xl md:text-5xl font-display font-black tracking-tight text-slate-900 mb-6">The Origin Story</h3>
              <p className="text-accent-purple font-bold tracking-widest uppercase text-sm mb-8 flex items-center gap-2">
                <Dna size={18} /> The Catalyst
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="bg-brand-purple p-8 md:p-10 rounded-[2rem]">
                <p className="text-lg text-slate-800 leading-relaxed font-serif">
                  When Wadika's youngest sister was six months old, she suffered a partial brain stroke, spending her childhood navigating a challenging recovery. For years, the family witnessed the intersection of fragility and the immense potential of the human brain. This experience redefined Wadika's trajectory, moving beyond pure computational curiosity toward the practical application of neuroplasticity.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-100 p-8 md:p-10 rounded-[2rem] shadow-sm relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 opacity-5">
                  <Brain size={200} />
                </div>
                <p className="text-lg text-slate-700 leading-relaxed font-serif relative z-10">
                  When her sister turned 14, Wadika spent four years exclusively tutoring her through the rigorous Alberta high school science curriculum. By applying engineering logic to the brain’s neuroplasticity, she deconstructed complex systems into digestible cognitive frameworks. The result? Her sister was successfully admitted to university engineering. This lived experience is the heartbeat of EmpowerHer Lab.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STEM Neuro-Literacy Bento Grid */}
      <section id="literacy" className="py-32 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="text-accent-purple/20 font-display font-black text-6xl md:text-8xl leading-none mb-4 select-none">02</div>
            <h3 className="text-4xl md:text-5xl font-display font-black tracking-tight text-slate-900 mb-6">STEM Neuro-Literacy</h3>
            <p className="text-xl text-slate-600 font-serif max-w-2xl">
              Acting as a translational bridge, we provide the public with accessible tools to democratize complex neurological science.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Bento 1: Large */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-slate-900 text-white rounded-[2.5rem] p-10 md:p-12 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                <BookOpen size={120} strokeWidth={1} />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <Library className="text-brand-pink" size={24} />
                </div>
                <h4 className="text-3xl font-display font-black mb-4">Curated Reading Lists</h4>
                <p className="text-slate-300 font-serif text-lg leading-relaxed max-w-md">
                  Deep-dives into peer-reviewed research on neuroplasticity, cognitive development, and the long-term impact of early health interventions.
                </p>
              </div>
            </motion.div>

            {/* Bento 2: Tall */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-brand-pink rounded-[2.5rem] p-10 md:p-12 text-slate-900 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="bg-white p-4 rounded-2xl inline-block w-max mb-8 shadow-sm">
                <GraduationCap className="text-accent-pink" size={32} />
              </div>
              <div>
                <h4 className="text-2xl font-display font-black mb-4">Science Glossaries</h4>
                <p className="font-serif text-lg text-slate-700">
                  Making the inaccessible, accessible. Breaking down quantum computing and neuro-biology nomenclature.
                </p>
              </div>
            </motion.div>

            {/* Bento 3: Wide */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-3 bg-brand-yellow rounded-[2.5rem] p-10 md:p-12 relative overflow-hidden"
            >
              <div className="absolute right-0 bottom-0 opacity-10">
                <Activity size={250} strokeWidth={0.5} />
              </div>
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 justify-between">
                <div className="max-w-xl">
                  <h4 className="text-3xl font-display font-black mb-4">Cognitive Hygiene Toolkits</h4>
                  <p className="font-serif text-xl text-slate-800">
                    Downloadable systems flowcharts explaining brain health and practical methods for maintaining neural integrity in daily life.
                  </p>
                </div>
                <button className="whitespace-nowrap px-8 py-4 bg-slate-900 text-white rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform flex items-center gap-2">
                  Get Toolkit <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Literacy Initiative */}
      <section id="initiatives" className="py-32 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 flex justify-center py-10"
            >
              {/* CSS 3D Book Cover */}
              <div className="relative w-72 h-96 perspective-[1200px] group">
                <div className="w-full h-full relative transition-transform duration-700 [transform-style:preserve-3d] group-hover:-rotate-y-12 shadow-2xl rounded-r-3xl rounded-l-md border-l-[12px] border-slate-900 bg-white">
                  
                  {/* Book Spine Detail */}
                  <div className="absolute top-0 bottom-0 left-0 w-2 bg-gradient-to-r from-black/20 to-transparent z-20 mix-blend-color-burn"></div>

                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFFDF0] via-[#FDF2F8] to-[#F5F3FF] rounded-r-3xl rounded-l-sm overflow-hidden flex flex-col gap-6 p-8 text-center border-t border-r border-b border-white z-10">
                    <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/40 rounded-full blur-3xl"></div>
                    <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-accent-purple/10 rounded-full blur-2xl"></div>
                    
                    {/* Abstract illustration */}
                    <div className="relative z-10 mt-4 flex justify-center h-32 items-center">
                      <div className="relative w-24 h-24 flex items-center justify-center">
                        {/* Orbital rings */}
                        <div className="absolute w-full h-full border-[3px] border-accent-purple rounded-full rotate-45 opacity-60 mix-blend-multiply"></div>
                        <div className="absolute w-full h-full border-[3px] border-accent-pink rounded-full -rotate-45 opacity-60 mix-blend-multiply"></div>
                        <div className="absolute w-full h-full border-[3px] border-accent-yellow rounded-full opacity-60 mix-blend-multiply"></div>
                        {/* Nucleus */}
                        <div className="w-8 h-8 bg-slate-900 rounded-full relative z-10 shadow-lg flex items-center justify-center">
                          <Activity size={16} className="text-white" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative z-10 mt-auto flex flex-col items-center">
                      <span className="bg-slate-900 text-white text-[10px] font-sans font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-6">Volume 01</span>
                      <h4 className="text-4xl font-display font-black tracking-tighter leading-none mb-1 text-slate-900">THE LITTLE</h4>
                      <h4 className="text-4xl font-display font-black tracking-tighter leading-[0.9] text-accent-purple">QUANTUM<br/>ECONOMIST</h4>
                      <div className="w-12 h-1 bg-slate-200 mt-6 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Book Pages Edge effect */}
                  <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-l from-slate-100 to-white transform translate-x-full rounded-r-md border-y border-r border-slate-200" style={{ transform: 'rotateY(90deg)', transformOrigin: 'left' }}></div>
                </div>
                
                {/* Shadow underneath */}
                <div className="absolute -bottom-6 left-10 right-0 h-8 bg-slate-900/20 blur-xl rounded-[100%] transition-opacity group-hover:opacity-60 duration-500"></div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <div className="flex flex-col items-start mb-6">
                <div className="text-accent-purple/20 font-display font-black text-6xl md:text-8xl leading-none mb-4 select-none">03</div>
                <span className="px-4 py-1.5 rounded-full bg-accent-yellow/10 text-accent-yellow text-xs font-bold uppercase tracking-widest inline-block">
                  Coming Soon
                </span>
              </div>
              <h3 className="text-5xl font-display font-black tracking-tight text-slate-900 mb-8">The Literacy Initiative</h3>
              <div className="space-y-6 text-xl text-slate-600 font-serif leading-relaxed">
                <p>
                  A new series of baby and toddler books designed for the curious minds of tomorrow. Using <strong className="text-slate-900 border-b-2 border-accent-pink">"Serve and Return"</strong> interaction design, these books actively stimulate neural growth.
                </p>
                <div className="p-6 bg-slate-50 border-l-4 border-accent-purple rounded-r-2xl text-lg text-slate-800">
                  <p className="font-sans font-bold text-xs uppercase tracking-widest text-accent-purple mb-2">Social Impact</p>
                  A dedicated percentage of all book proceeds will be donated directly to leading neurological and brain health research organizations.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Anti-Doom Scroll Campaign */}
      <section id="advocacy" className="py-32 bg-slate-900 text-white relative flex items-center justify-center overflow-hidden min-h-[80vh]">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
          <MousePointer2 size={600} className="text-brand-pink" strokeWidth={0.5} />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[12vw] sm:text-8xl md:text-9xl font-display font-black tracking-tighter leading-none mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500">
              RECLAIM<br/>YOUR FOCUS.
            </h2>
            <div className="max-w-2xl mx-auto mb-10">
              <div className="text-white/10 font-display font-black text-6xl md:text-8xl leading-none mb-6 select-none">04</div>
              <h3 className="text-3xl font-bold font-sans tracking-tight mb-4 text-brand-pink">The Anti-Doom Scroll Campaign</h3>
              <p className="text-xl font-serif text-slate-400 leading-relaxed">
                Protecting cognitive focus and dopamine regulation from algorithmic social media loops. We're launching an upcoming sticker campaign and digital guidebook to reclaim mental bandwidth in a digital age.
              </p>
            </div>
            
            <button className="group bg-white text-slate-900 px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-brand-pink transition-colors inline-flex items-center gap-3 relative z-10">
              Pre-order Guidebook 
              <span className="bg-slate-900 text-white rounded-full p-2 group-hover:translate-x-1 transition-transform">
                <ArrowRight size={16} />
              </span>
            </button>

            {/* Sticker Area */}
            <div className="mt-20 relative h-64 max-w-3xl mx-auto drop-shadow-2xl">
              {/* Sticker 1: Stochastic Noise */}
              <motion.div 
                initial={{ rotate: -20, y: 30, opacity: 0, x: -50 }}
                whileInView={{ rotate: -12, y: 0, opacity: 1, x: 0 }}
                whileHover={{ scale: 1.1, rotate: -8 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="absolute left-0 top-12 bg-brand-yellow text-slate-900 border-[6px] border-white px-8 py-6 rounded-3xl shadow-xl cursor-grab active:cursor-grabbing"
              >
                <div className="absolute top-2 left-2 w-2 h-2 bg-slate-900/10 rounded-full"></div>
                <div className="absolute bottom-2 right-2 w-2 h-2 bg-slate-900/10 rounded-full"></div>
                <div className="font-display font-black text-2xl italic tracking-tighter leading-none">Stochastic<br/>Noise.</div>
              </motion.div>

              {/* Sticker 2: Close Tab */}
              <motion.div 
                initial={{ rotate: 10, y: 40, opacity: 0 }}
                whileInView={{ rotate: 6, y: -20, opacity: 1 }}
                whileHover={{ scale: 1.1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 20 }}
                className="absolute left-1/2 -translate-x-1/2 top-4 bg-accent-pink text-white border-[6px] border-white px-10 py-5 rounded-full shadow-2xl flex items-center justify-center gap-3 cursor-grab active:cursor-grabbing z-20"
              >
                <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-pink"></div>
                </div>
                <span className="font-sans font-black uppercase tracking-widest text-lg whitespace-nowrap">Close Tab</span>
              </motion.div>

              {/* Sticker 3: Stop the Scroll */}
              <motion.div 
                initial={{ rotate: 20, y: 30, opacity: 0, x: 50 }}
                whileInView={{ rotate: 15, y: 10, opacity: 1, x: 0 }}
                whileHover={{ scale: 1.1, rotate: 25 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
                className="absolute right-0 top-10 bg-accent-purple text-white border-[6px] border-white p-8 rounded-[2.5rem] rounded-tr-lg shadow-xl flex flex-col items-center justify-center cursor-grab active:cursor-grabbing"
              >
                <Activity size={32} className="mb-3 opacity-90" />
                <span className="font-sans font-black uppercase tracking-[0.2em] text-sm leading-tight text-center">Stop<br/>The<br/>Scroll</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Racing for Research */}
      <section className="py-32 bg-[#FFFAF0] border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-accent-yellow/30 font-display font-black text-6xl md:text-8xl leading-none mb-4 select-none">05</div>
              <h3 className="text-5xl md:text-6xl font-display font-black tracking-tight text-slate-900 mb-8">Racing for Research</h3>
              <p className="text-2xl text-slate-700 font-serif leading-relaxed mb-6">
                Wadika runs 10ks, half-marathons, and marathons as dedicated fundraising events.
              </p>
              <p className="text-lg text-slate-600 font-serif leading-relaxed mb-10">
                Raising financial support and awareness for organizations that champion brain recovery and research. Physical advocacy for mental resilience.
              </p>
              <div className="flex gap-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-50 font-sans">
                  <div className="text-4xl font-black text-accent-yellow mb-1">🏁</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-slate-500">Next Race</div>
                  <div className="text-lg font-bold text-slate-900">Summer 2026</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-16 rounded-[4rem] shadow-xl border border-orange-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <Activity size={200} />
              </div>
              <ul className="space-y-8 relative z-10 w-full">
                {[
                  { title: "Sponsor a Race", highlight: "Support neurology directly" },
                  { title: "Join the Team", highlight: "Run with us virtually" },
                  { title: "Donate to Research", highlight: "100% impact" }
                ].map((item, i) => (
                  <li key={i} className="flex flex-col group cursor-pointer border-b border-slate-100 pb-8 last:border-0 last:pb-0">
                    <span className="text-3xl font-display font-black text-slate-900 group-hover:text-accent-yellow transition-colors">{item.title}</span>
                    <span className="font-sans font-bold text-sm tracking-widest uppercase text-slate-400 mt-2">{item.highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-24 bg-white text-slate-900 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-3xl font-display font-black mb-6">EMPOWERHER LAB.</h2>
              <p className="text-xl font-serif text-slate-600 max-w-md mb-8 leading-relaxed">
                Support our mission to fund brain health research and promote STEM neuro-literacy.
              </p>
              <a href="mailto:empowerherlab@gmail.com" className="inline-flex items-center gap-3 text-lg font-bold font-sans hover:text-accent-purple transition-colors">
                <Mail size={24} /> empowerherlab@gmail.com
              </a>
            </div>
            
            <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100">
              <h3 className="font-black font-display text-2xl mb-4">Join The Protocol</h3>
              <p className="font-serif text-lg text-slate-600 mb-8">Receive early access to cognitive hygiene toolkits and research notes.</p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-white border border-slate-200 rounded-full px-6 py-4 text-lg font-sans outline-none focus:border-accent-purple focus:ring-4 ring-accent-purple/10 transition-all"
                />
                <button type="button" className="bg-slate-900 text-white rounded-full px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-slate-800 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-200 text-sm font-sans font-bold text-slate-400 uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} EmpowerHer Lab.</p>
            <p className="mt-4 md:mt-0">Independent Research Initiative</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
