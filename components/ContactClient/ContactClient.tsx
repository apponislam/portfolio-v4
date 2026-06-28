'use client';

import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, ArrowRight, MessageSquare, Copy, Check, Phone } from 'lucide-react';
import detailsData from '@/data/details.json';
import { getBrandIcon } from '@/components/BrandIcons/BrandIcons';

export default function ContactClient() {
  const { email, location, socials, phone } = detailsData;

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Validate form inputs
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrors({});
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      setErrors({ form: err.message || 'Failed to send message.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="container mx-auto px-4 md:px-8 pt-6 pb-20 flex flex-col min-h-screen">
      
      {/* 2-Column High-Contrast Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
        
        {/* LEFT COLUMN: Giant Bold Headline & Social Links */}
        <div className="lg:col-span-5 flex flex-col items-start gap-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-neutral-300/40 rounded-full text-[9px] font-bold uppercase tracking-widest text-neutral-500 mb-6 shadow-sm">
              <MessageSquare className="w-3 h-3 text-neutral-400" /> Let's Talk
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter text-neutral-900 leading-[0.9] mb-6">
              Let's build <br />
              something <br />
              amazing.
            </h1>
            
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-semibold max-w-sm">
              Have an idea, project challenge, or just want to connect? Let me know how I can help you shape your next digital product.
            </p>
          </div>

          {/* Direct Contact Cards */}
          <div className="flex flex-col gap-3 w-full max-w-sm">
            {/* Quick Copy Email Widget */}
            <div className="bg-white border border-neutral-300/40 rounded-2xl p-4 flex items-center justify-between shadow-sm group">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-600">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] font-extrabold uppercase tracking-widest text-neutral-400">Direct Email</span>
                  <span className="text-xs font-bold text-neutral-800 break-all">{email}</span>
                </div>
              </div>
              <button 
                onClick={handleCopyEmail}
                className="p-2.5 hover:bg-neutral-50 border border-transparent hover:border-neutral-200 rounded-xl transition-all text-neutral-400 hover:text-black cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Widget */}
            <div className="bg-white border border-neutral-300/40 rounded-2xl p-4 flex items-center gap-3 shadow-sm">
              <div className="p-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-600">
                <MapPin className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] font-extrabold uppercase tracking-widest text-neutral-400">Location</span>
                <span className="text-xs font-bold text-neutral-800">{location}</span>
              </div>
            </div>

            {/* Phone Widget */}
            {phone && (
              <div className="bg-white border border-neutral-300/40 rounded-2xl p-4 flex items-center gap-3 shadow-sm">
                <div className="p-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-600">
                  <Phone className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] font-extrabold uppercase tracking-widest text-neutral-400">Direct Phone</span>
                  <a href={`tel:${phone}`} className="text-xs font-bold text-neutral-800 hover:text-black transition-colors">
                    {phone}
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Social Icons row */}
          <div className="flex flex-wrap gap-2.5">
            {Object.entries(socials).map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white hover:bg-neutral-50 border border-neutral-300/40 text-neutral-800 rounded-2xl shadow-sm hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
                title={name}
              >
                {getBrandIcon(name, "w-5 h-5")}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Premium Light Form Card Container */}
        <div className="lg:col-span-7 bg-white border border-neutral-300/40 rounded-[36px] p-8 sm:p-12 shadow-sm relative overflow-hidden group">
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />
          
          {isSuccess ? (
            <div className="flex flex-col items-center text-center py-12 animate-fade-in text-neutral-900">
              <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-6" />
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-2">
                Message Sent
              </h2>
              <p className="text-neutral-500 text-xs sm:text-sm max-w-sm mb-8 leading-relaxed font-semibold">
                Thank you for reaching out! I will review your inquiry and get back to you shortly.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="inline-flex items-center gap-2 bg-black hover:bg-neutral-800 text-white text-xs font-black uppercase tracking-wider px-8 py-4 rounded-2xl transition-all shadow-sm cursor-pointer"
              >
                Send Another Message
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-neutral-900">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[9px] font-black uppercase tracking-widest text-neutral-500">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full bg-neutral-50/60 border px-5 py-4 rounded-2xl text-xs sm:text-sm font-semibold text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-black transition-all ${
                      errors.name ? 'border-red-500/80 focus:border-red-500' : 'border-neutral-200 focus:border-neutral-400'
                    }`}
                  />
                  {errors.name && <span className="text-red-500 text-[10px] font-bold mt-0.5">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[9px] font-black uppercase tracking-widest text-neutral-500">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full bg-neutral-50/60 border px-5 py-4 rounded-2xl text-xs sm:text-sm font-semibold text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-black transition-all ${
                      errors.email ? 'border-red-500/80 focus:border-red-500' : 'border-neutral-200 focus:border-neutral-400'
                    }`}
                  />
                  {errors.email && <span className="text-red-500 text-[10px] font-bold mt-0.5">{errors.email}</span>}
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-[9px] font-black uppercase tracking-widest text-neutral-500">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry / Collaboration opportunity"
                  className="w-full bg-neutral-50/60 border border-neutral-200 px-5 py-4 rounded-2xl text-xs sm:text-sm font-semibold text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-black transition-all"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[9px] font-black uppercase tracking-widest text-neutral-500">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project concept, timeline, or requirements..."
                  className={`w-full bg-neutral-50/60 border px-5 py-4 rounded-2xl text-xs sm:text-sm font-semibold text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-black transition-all resize-none ${
                    errors.message ? 'border-red-500/80 focus:border-red-500' : 'border-neutral-200 focus:border-neutral-400'
                  }`}
                />
                {errors.message && <span className="text-red-500 text-[10px] font-bold mt-0.5">{errors.message}</span>}
              </div>

              {errors.form && (
                <div className="text-red-500 text-xs font-bold text-center border border-red-200/50 bg-red-50 py-3 px-4 rounded-xl">
                  {errors.form}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-black hover:bg-neutral-800 disabled:bg-neutral-200 disabled:text-neutral-400 text-white text-xs font-black uppercase tracking-widest py-4 rounded-2xl hover:scale-[1.01] active:scale-[0.99] transition-all shadow-md cursor-pointer mt-2"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
