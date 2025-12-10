import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { resumeData } from '../data/resume';
import { TiltCard } from './TiltCard';

export const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Background Gradients removed for global Background component */}

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl text-[var(--text-secondary)] font-medium mb-4">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-gradient">
               {resumeData.personal.name}
            </h1>
            <div className="h-10 overflow-hidden">
                <motion.h2 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "circOut" }}
                    className="text-2xl md:text-3xl text-[var(--text-tertiary)] font-light"
                >
                  {resumeData.personal.role}
                </motion.h2>
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-xl"
          >
            I build scalable, secure, and user-centric applications. With a strong foundation in full-stack development, I turn complex problems into elegant solutions.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#projects" className="group flex items-center justify-center gap-2 px-8 py-3 bg-[var(--text-primary)] text-[var(--bg-primary)] rounded-full font-medium hover:scale-105 transition-transform shadow-lg shadow-white/10 hover:shadow-white/20">
              View Projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://docs.google.com/document/d/17laRS8CTAlXNJon7XP5yal49vzY4rIqD/export?format=pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-3 bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-card)] rounded-full font-medium hover:bg-[var(--bg-card-hover)] transition-all hover:scale-105 backdrop-blur-sm">
              <Download size={20} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.5, delay: 0.6 }}
             className="pt-8 flex items-center gap-6 text-[var(--text-secondary)]"
          >
             <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
                 Open to work
             </div>
             <div>
                Location: {resumeData.personal.location}
             </div>
          </motion.div>
        </div>

        {/* Abstract Hero Image/Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden md:block perspective-1000"
        >
          <TiltCard className="w-full">
            <div className="relative z-10 w-full rounded-3xl bg-[var(--bg-card)]/80 backdrop-blur-2xl border border-[var(--border-card)] p-8 flex flex-col justify-between overflow-hidden group hover:border-violet-500/50 transition-colors duration-500 shadow-2xl shadow-black/50">
               {/* Decorative Elements */}
               <div className="absolute -top-20 -right-20 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl group-hover:bg-violet-500/20 transition-colors" />
               <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors" />


               
               {/* Header removed to make space for code */ }
               <div className="mb-6 relative z-10">
                 <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="text-xs text-[var(--text-tertiary)] font-mono ml-2">profile.js</div>
                 </div>
               </div>

                <div className="font-mono text-xs md:text-sm text-slate-300 relative z-10 backdrop-blur-sm bg-[#0a0a0a]/90 p-6 rounded-2xl border border-white/10 shadow-inner overflow-hidden">
                   <p><span className="text-violet-400">const</span> profile <span className="text-slate-500">=</span> <span className="text-yellow-400">{"{"}</span></p>
                   <motion.div
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: 1 }}
                     className="space-y-1"
                   >
                       <p className="pl-4">name: <span className="text-green-400">"{resumeData.personal.name}"</span>,</p>
                       <p className="pl-4">role: <span className="text-blue-400">"Software Developer"</span>,</p>
                       <p className="pl-4 whitespace-normal">mission: <span className="text-orange-400">"Engineering secure, scalable, and intelligent systems."</span>,</p>
                       <p className="pl-4">specialties: [</p>
                       <p className="pl-8 text-yellow-200">"Application Development", "Cloud & DevOps", "Security", "AI & Machine Learning"</p>
                       <p className="pl-4">],</p>
                       <p className="pl-4">principles: [</p>
                       <p className="pl-8 text-yellow-200">"Build with purpose", "Automate everything"</p>
                       <p className="pl-4">],</p>
                       <p className="pl-4">status: <span className="text-purple-400">"Stable… for now"</span></p>
                   </motion.div>
                   <p><span className="text-yellow-400">{"}"}</span>;</p>
                </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
};
