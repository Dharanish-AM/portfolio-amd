import { useState } from 'react';
import type { FormEvent } from 'react';
import { Mail, Send } from 'lucide-react';
import { Section } from './Section';
import { resumeData } from '../data/resume';

import { TiltCard } from './TiltCard';
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:${resumeData.personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Section id="contact" className="mb-20">
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 relative z-10">
        <TiltCard className="h-full">
            <div className="h-full p-6 md:p-10 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] backdrop-blur-md relative overflow-hidden flex flex-col justify-between group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl -z-10 group-hover:bg-violet-500/20 transition-colors duration-500" />
                
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[var(--text-primary)] leading-tight">
                        Let's work <br />
                        <span className="text-violet-400">together!</span>
                    </h2>
                    <p className="text-[var(--text-secondary)] mb-8 md:mb-12 text-base md:text-lg leading-relaxed max-w-md">
                        Have a project in mind or just want to say hi? 
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>
                </div>
                
                <div className="flex flex-col gap-6 md:gap-8">
                    <div className="group/item flex items-center gap-4 md:gap-5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                        <div className="p-3 md:p-4 bg-[var(--bg-card-hover)] rounded-2xl text-violet-400 shadow-inner group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300">
                            <Mail size={24} className="md:w-7 md:h-7" />
                        </div>
                        <div>
                            <p className="text-sm text-[var(--text-tertiary)] font-medium mb-1">Email</p>
                            <a href={`mailto:${resumeData.personal.email}`} className="text-lg md:text-xl font-medium hover:text-violet-400 transition-colors break-all">
                                {resumeData.personal.email}
                            </a>
                        </div>
                    </div>

                    <div className="flex gap-3 md:gap-4">
                       {resumeData.personal.social.map((social) => (
                          <a 
                            key={social.name} 
                            href={social.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="p-3 md:p-4 bg-[var(--bg-card-hover)] rounded-2xl text-[var(--text-secondary)] hover:text-white hover:bg-violet-500 hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-violet-500/25"
                            aria-label={social.name}
                          >
                             <social.icon size={20} className="md:w-6 md:h-6" />
                          </a>
                       ))}
                    </div>
                </div>
            </div>
        </TiltCard>

        <TiltCard className="h-full">
            <div className="h-full p-6 md:p-10 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] backdrop-blur-md relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 md:gap-6 h-full justify-center">
                    <div className="space-y-5 md:space-y-6">
                        <div className="relative group">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-5 py-3 md:px-6 md:py-4 rounded-2xl bg-[var(--bg-primary)]/50 border border-[var(--border-card)] text-[var(--text-primary)] focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-all placeholder:text-[var(--text-tertiary)] peer"
                                placeholder=" "
                            />
                            <label 
                                htmlFor="name" 
                                className="absolute left-5 top-3 md:left-6 md:top-4 text-[var(--text-tertiary)] text-sm md:text-base duration-300 transform -translate-y-1 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-violet-400"
                            >
                                Your Name
                            </label>
                        </div>

                        <div className="relative group">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-5 py-3 md:px-6 md:py-4 rounded-2xl bg-[var(--bg-primary)]/50 border border-[var(--border-card)] text-[var(--text-primary)] focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-all placeholder:text-[var(--text-tertiary)] peer"
                                placeholder=" "
                            />
                            <label 
                                htmlFor="email" 
                                className="absolute left-5 top-3 md:left-6 md:top-4 text-[var(--text-tertiary)] text-sm md:text-base duration-300 transform -translate-y-1 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-violet-400"
                            >
                                Your Email
                            </label>
                        </div>

                        <div className="relative group">
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-5 py-3 md:px-6 md:py-4 rounded-2xl bg-[var(--bg-primary)]/50 border border-[var(--border-card)] text-[var(--text-primary)] focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-all resize-none placeholder:text-[var(--text-tertiary)] peer"
                                placeholder=" "
                            />
                            <label 
                                htmlFor="message" 
                                className="absolute left-5 top-3 md:left-6 md:top-4 text-[var(--text-tertiary)] text-sm md:text-base duration-300 transform -translate-y-1 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-violet-400"
                            >
                                Tell me about your project
                            </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="group w-full flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-bold text-base md:text-lg py-3 md:py-4 px-6 md:px-8 rounded-2xl transition-all shadow-lg hover:shadow-violet-500/25 active:scale-95 transform hover:-translate-y-1"
                    >
                        <span>Send Message</span>
                        <Send size={18} className="md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>
            </div>
        </TiltCard>
      </div>
    </Section>
  );
};
