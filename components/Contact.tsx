"use client";

import { useState } from "react";
import { Mail, MapPin, Briefcase, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate API request delay
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormState({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const contactDetails = [
    {
      icon: <Mail className="text-brand-primary" size={20} />,
      title: "Direct Email",
      value: "appon.islam@example.com",
      link: "mailto:appon.islam@example.com",
    },
    {
      icon: <MapPin className="text-brand-primary" size={20} />,
      title: "Location",
      value: "Dhaka, Bangladesh",
      link: "https://maps.google.com",
    },
    {
      icon: <Briefcase className="text-brand-primary" size={20} />,
      title: "Work Availability",
      value: "Open to Remote & Relocation",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 md:px-12 container mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <p className="text-sm font-black text-brand-primary tracking-widest uppercase">
          Connect
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
          Let&apos;s Build Something Great Together
        </h2>
        <div className="h-1.5 w-16 bg-brand-primary rounded-full mx-auto" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Contact Info Widgets */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-brand-dark">
              Start a Conversation
            </h3>
            <p className="text-base text-brand-dark/75 leading-relaxed">
              Have a projects proposal, a question about database architecture, or just want to say hi? Send a message and I will get back to you within 24 hours.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {contactDetails.map((detail, idx) => (
              <div
                key={idx}
                className="glass-panel p-5 rounded-2xl border border-brand-primary/10 flex items-center gap-4 hover:border-brand-primary/20 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-brand-accent/50 text-brand-primary flex items-center justify-center">
                  {detail.icon}
                </div>
                <div>
                  <h4 className="text-xs font-black text-brand-dark/50 uppercase tracking-widest">
                    {detail.title}
                  </h4>
                  {detail.link ? (
                    <a
                      href={detail.link}
                      className="text-sm font-bold text-brand-dark hover:text-brand-primary transition-colors mt-0.5 block"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-sm font-bold text-brand-dark mt-0.5">
                      {detail.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Message Form */}
        <div className="lg:col-span-7 glass-panel rounded-3xl p-6 md:p-8 border border-brand-primary/10 shadow-lg relative">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 animate-fade-in-up">
              <div className="p-4 rounded-full bg-brand-accent text-brand-primary">
                <CheckCircle size={48} />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark">
                Message Sent Successfully!
              </h3>
              <p className="text-sm text-brand-dark/75 max-w-sm">
                Thank you for reaching out. Appon will review your inquiry and reply as soon as possible.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="px-6 py-2.5 rounded-full bg-brand-primary text-brand-bg font-semibold text-sm hover:bg-brand-secondary transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-brand-dark/75 uppercase tracking-wide">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-brand-primary/15 bg-white/50 text-brand-dark focus:border-brand-primary focus:bg-white focus:ring-2 focus:ring-brand-primary/10 outline-none transition-all text-sm"
                    placeholder="e.g. Jane Doe"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-brand-dark/75 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-brand-primary/15 bg-white/50 text-brand-dark focus:border-brand-primary focus:bg-white focus:ring-2 focus:ring-brand-primary/10 outline-none transition-all text-sm"
                    placeholder="e.g. jane@domain.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-bold text-brand-dark/75 uppercase tracking-wide">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-brand-primary/15 bg-white/50 text-brand-dark focus:border-brand-primary focus:bg-white focus:ring-2 focus:ring-brand-primary/10 outline-none transition-all text-sm"
                  placeholder="What is your request about?"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold text-brand-dark/75 uppercase tracking-wide">
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-brand-primary/15 bg-white/50 text-brand-dark focus:border-brand-primary focus:bg-white focus:ring-2 focus:ring-brand-primary/10 outline-none transition-all text-sm resize-none"
                  placeholder="Hi Appon, let's talk about..."
                />
              </div>

              {/* Status Alert */}
              {status === "error" && (
                <div className="p-4 rounded-xl bg-red-50 text-red-700 border border-red-200 flex items-center gap-3 text-sm">
                  <AlertCircle size={20} className="shrink-0" />
                  <span>An error occurred. Please try again or email directly.</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-brand-primary text-brand-bg font-bold shadow-md hover:bg-brand-secondary transition-all disabled:opacity-50"
              >
                {status === "sending" ? (
                  <>Sending Message...</>
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
