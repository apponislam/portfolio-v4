'use client';

import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import detailsData from '@/data/details.json';

export default function Contact() {
  const { email, location, socials } = detailsData;


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
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <main className="container mx-auto px-4 md:px-8 py-12 md:py-20 flex flex-col">
      <div className="mb-16">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
          Get In Touch
        </h1>
        <p className="text-neutral-500 text-sm max-w-xl leading-relaxed">
          Have an idea, project, or opportunity you would like to discuss? Drop a message below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
        {/* Info Column */}
        <div className="md:col-span-2 flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white border border-neutral-100 rounded-xl shadow-sm">
                <Mail className="w-5 h-5 text-neutral-800" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-neutral-800 mb-1">Email</h3>
                <a href={`mailto:${email}`} className="text-sm text-neutral-500 hover:text-black transition-colors">
                  {email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white border border-neutral-100 rounded-xl shadow-sm">
                <MapPin className="w-5 h-5 text-neutral-800" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-neutral-800 mb-1">Location</h3>
                <p className="text-sm text-neutral-500">{location}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-200/50 pt-8">
            <h3 className="text-sm font-bold text-neutral-800 mb-4">Connect</h3>
            <div className="flex flex-wrap gap-2 text-xs font-semibold">
              {Object.entries(socials).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-700 hover:text-black rounded-full hover:scale-105 active:scale-95 transition-all uppercase tracking-wider text-[10px]"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="md:col-span-3 bg-white border border-neutral-100 rounded-2xl p-6 sm:p-8 shadow-sm">
          {isSuccess ? (
            <div className="flex flex-col items-center text-center py-12 animate-fade-in">
              <CheckCircle2 className="w-16 h-16 text-green-500 mb-6" />
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">Message Sent Successfully</h2>
              <p className="text-neutral-500 text-sm max-w-sm mb-8">
                Thank you for reaching out! I will review your message and get back to you as soon as possible.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="inline-flex items-center gap-1.5 bg-black hover:bg-neutral-800 text-white text-xs font-semibold px-6 py-3 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                Send another message
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-bold text-neutral-700">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full bg-neutral-50 border px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors ${
                    errors.name
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-neutral-200 focus:border-black'
                  }`}
                />
                {errors.name && <span className="text-red-500 text-xs mt-0.5">{errors.name}</span>}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-bold text-neutral-700">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`w-full bg-neutral-50 border px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors ${
                    errors.email
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-neutral-200 focus:border-black'
                  }`}
                />
                {errors.email && <span className="text-red-500 text-xs mt-0.5">{errors.email}</span>}
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-xs font-bold text-neutral-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  className="w-full bg-neutral-50 border border-neutral-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-black transition-colors"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-bold text-neutral-700">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project..."
                  className={`w-full bg-neutral-50 border px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors resize-none ${
                    errors.message
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-neutral-200 focus:border-black'
                  }`}
                />
                {errors.message && <span className="text-red-500 text-xs mt-0.5">{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-black hover:bg-neutral-800 disabled:bg-neutral-500 text-white text-xs font-semibold py-3.5 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-sm cursor-pointer mt-2"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
