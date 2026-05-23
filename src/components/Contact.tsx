import { useState } from "react";
import type { FormEvent } from "react";
import { Mail, Send, Loader2, CheckCircle, XCircle, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { resumeData } from "../data/resume";
import { TiltCard } from "./TiltCard";
import { TextReveal } from "./TextReveal";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const formPayload = new FormData();
      formPayload.append("access_key", resumeData.personal.web3formsKey);
      formPayload.append("name", formData.name);
      formPayload.append("email", formData.email);
      formPayload.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        // Reset status after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error", error);
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Section id="contact" className="">
      <div className="flex flex-col gap-12">
        <div className="space-y-4">
          <TextReveal
            text="Get in Touch"
            className="text-3xl md:text-4xl font-bold"
          />
          <div className="mt-2 text-[var(--text-secondary)] text-lg">
            Open to opportunities, collaborations, and conversations.
          </div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="h-1 bg-[var(--accent-primary)] rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 relative z-10">
        <TiltCard className="h-full">
          <div className="h-full p-6 md:p-10 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] backdrop-blur-md relative overflow-hidden flex flex-col justify-between group hover:border-[var(--border-card-hover)] transition-colors duration-500">
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-[var(--accent-primary)]/10 rounded-full blur-3xl group-hover:bg-[var(--accent-primary)]/20 group-hover:scale-150 transition-all duration-700 pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[var(--accent-primary)]/5 rounded-full blur-3xl group-hover:bg-[var(--accent-primary)]/15 group-hover:scale-150 transition-all duration-700 pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-6 md:gap-8">
              <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed max-w-md">
                Have a question or just want to say hi? I'm always open to
                discussing new opportunities, creative ideas, or just
                connecting.
              </p>
            </div>

            <div className="relative z-10 flex flex-col gap-4 mt-6 md:mt-8">
              <div className="group/item flex items-center gap-4 md:gap-5 p-4 rounded-2xl bg-[var(--bg-primary)]/20 border border-[var(--border-card)]/30 hover:border-[var(--border-card-hover)] hover:bg-[var(--bg-card-hover)]/30 hover:shadow-xl hover:translate-x-1 transition-all duration-300">
                <div className="p-3 bg-[var(--bg-card-hover)] rounded-2xl text-[var(--accent-primary)] shadow-inner group-hover/item:scale-110 transition-all duration-300">
                  <Mail size={22} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-xs text-[var(--text-tertiary)] font-medium mb-1">
                    Email
                  </p>
                  <a
                    href={`mailto:${resumeData.personal.email}`}
                    className="text-base md:text-lg font-medium hover:text-[var(--accent-primary)] transition-colors break-all"
                  >
                    {resumeData.personal.email}
                  </a>
                </div>
              </div>

              <div className="group/item flex items-center gap-4 md:gap-5 p-4 rounded-2xl bg-[var(--bg-primary)]/20 border border-[var(--border-card)]/30 hover:border-[var(--border-card-hover)] hover:bg-[var(--bg-card-hover)]/30 hover:shadow-xl hover:translate-x-1 transition-all duration-300">
                <div className="p-3 bg-[var(--bg-card-hover)] rounded-2xl text-[var(--accent-primary)] shadow-inner group-hover/item:scale-110 transition-all duration-300">
                  <MapPin size={22} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-xs text-[var(--text-tertiary)] font-medium mb-1">
                    Location
                  </p>
                  <p className="text-base md:text-lg font-medium">
                    {resumeData.personal.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-8 md:mt-12 space-y-6 w-full">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--border-card)] to-transparent opacity-60" />
              <div className="flex gap-3 md:gap-4">
                {resumeData.personal.social.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 md:p-4 bg-[var(--bg-card-hover)] rounded-2xl text-[var(--text-secondary)] hover:text-[var(--bg-primary)] hover:bg-[var(--accent-primary)] hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-md"
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
          <div className="h-full p-6 md:p-10 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] backdrop-blur-md relative overflow-hidden hover:border-[var(--border-card-hover)] transition-colors duration-500">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 md:gap-6 h-full justify-center"
            >
              <div className="space-y-5 md:space-y-6">
                <div className="flex flex-col gap-2 group">
                  <label
                    htmlFor="name"
                    className="text-sm md:text-base font-semibold text-[var(--text-secondary)] transition-colors duration-300 group-focus-within:text-[var(--accent-primary)]"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-3 md:px-6 md:py-4 rounded-2xl bg-[var(--bg-primary)]/50 border border-[var(--border-card)] text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] outline-none transition-all placeholder:text-[var(--text-tertiary)]"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="flex flex-col gap-2 group">
                  <label
                    htmlFor="email"
                    className="text-sm md:text-base font-semibold text-[var(--text-secondary)] transition-colors duration-300 group-focus-within:text-[var(--accent-primary)]"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-3 md:px-6 md:py-4 rounded-2xl bg-[var(--bg-primary)]/50 border border-[var(--border-card)] text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] outline-none transition-all placeholder:text-[var(--text-tertiary)]"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="flex flex-col gap-2 group">
                  <label
                    htmlFor="message"
                    className="text-sm md:text-base font-semibold text-[var(--text-secondary)] transition-colors duration-300 group-focus-within:text-[var(--accent-primary)]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-3 md:px-6 md:py-4 rounded-2xl bg-[var(--bg-primary)]/50 border border-[var(--border-card)] text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] outline-none transition-all resize-none placeholder:text-[var(--text-tertiary)]"
                    placeholder="Enter your message"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === "submitting"}
                className={`group w-full flex items-center justify-center gap-2 font-bold text-base md:text-lg py-3 md:py-4 px-6 md:px-8 rounded-2xl transition-all shadow-lg transform 
                            ${
                              status === "submitting"
                                ? "bg-[var(--bg-card)] text-[var(--text-tertiary)] cursor-wait"
                                : status === "success"
                                ? "bg-[var(--success)] text-white"
                                : status === "error"
                                ? "bg-[var(--error)] text-white"
                                : "bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-white"
                            }`}
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle size={18} />
                    <span>Message Sent!</span>
                  </>
                ) : status === "error" ? (
                  <>
                    <XCircle size={18} />
                    <span>Error. Try Again.</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send
                      size={18}
                      className="md:w-5 md:h-5 group-hover:translate-x-1 transition-transform"
                    />
                  </>
                )}
              </motion.button>

              <input
                type="hidden"
                name="access_key"
                value={resumeData.personal.web3formsKey}
              />
            </form>
          </div>
        </TiltCard>
        </div>
      </div>
    </Section>
  );
};
