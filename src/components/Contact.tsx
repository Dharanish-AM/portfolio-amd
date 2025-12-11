import { useState } from "react";
import type { FormEvent } from "react";
import { Mail, Send, Loader2, CheckCircle, XCircle } from "lucide-react";
import { Section } from "./Section";
import { resumeData } from "../data/resume";

import { TiltCard } from "./TiltCard";

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
      formPayload.append("access_key", "4a7c79e4-aa86-4f8c-a54c-4776e8701be5");
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
    <Section id="contact" className="mb-20">
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 relative z-10">
        <TiltCard className="h-full">
          <div className="h-full p-6 md:p-10 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] backdrop-blur-md relative overflow-hidden flex flex-col justify-between group hover:border-[var(--border-card-hover)] transition-colors duration-500">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[var(--text-primary)] leading-tight">
                Get in <br />
                <span className="text-violet-400">Touch</span>
              </h2>
              <p className="text-[var(--text-secondary)] mb-8 md:mb-12 text-base md:text-lg leading-relaxed max-w-md">
                Have a question or just want to say hi? I'm always open to
                discussing new opportunities, creative ideas, or just
                connecting.
              </p>
            </div>

            <div className="flex flex-col gap-6 md:gap-8">
              <div className="group/item flex items-center gap-4 md:gap-5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                <div className="p-3 md:p-4 bg-[var(--bg-card-hover)] rounded-2xl text-violet-400 shadow-inner group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300">
                  <Mail size={24} className="md:w-7 md:h-7" />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-tertiary)] font-medium mb-1">
                    Email
                  </p>
                  <a
                    href={`mailto:${resumeData.personal.email}`}
                    className="text-lg md:text-xl font-medium hover:text-violet-400 transition-colors break-all"
                  >
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
                    className="p-3 md:p-4 bg-[var(--bg-card-hover)] rounded-2xl text-[var(--text-secondary)] hover:text-white hover:bg-violet-500 hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-md"
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
                    Message
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className={`group w-full flex items-center justify-center gap-2 font-bold text-base md:text-lg py-3 md:py-4 px-6 md:px-8 rounded-2xl transition-all shadow-lg active:scale-95 transform 
                            ${
                              status === "submitting"
                                ? "bg-[var(--bg-card)] text-[var(--text-tertiary)] cursor-wait"
                                : status === "success"
                                ? "bg-green-600 hover:bg-green-500 text-white"
                                : status === "error"
                                ? "bg-red-600 hover:bg-red-500 text-white"
                                : "bg-violet-600 hover:bg-violet-500 hover:-translate-y-1 text-white"
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
              </button>

              {/* Access key hidden input not strictly needed since we use append(), but good practice if plain HTML fallback */}
              <input
                type="hidden"
                name="access_key"
                value="4a7c79e4-aa86-4f8c-a54c-4776e8701be5"
              />
            </form>
          </div>
        </TiltCard>
      </div>
    </Section>
  );
};
