import React, { useState } from 'react';
import {
  Mail, Link as LinkedInIcon, GitBranch, Send, AlertCircle, CheckCircle2, X as XIcon
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactSection: React.FC = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim()) newErrors.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Enter a valid email address.';
    if (!form.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!form.message.trim()) newErrors.message = 'Message is required.';
    else if (form.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    // Simulated submission — connect to EmailJS or Formspree to enable real delivery.
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  const socials = [
    { icon: <Mail size={20} />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <LinkedInIcon size={20} />, label: 'LinkedIn', value: 'LinkedIn Profile', href: personalInfo.linkedin },
    { icon: <GitBranch size={20} />, label: 'GitHub', value: personalInfo.github, href: personalInfo.github },
    { icon: <XIcon size={20} />, label: 'Twitter / X', value: 'Twitter Profile', href: personalInfo.twitter },
  ];

  return (
    <section id="contact" className="section-padding" aria-label="Contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <h2 className="section-title">Get in <span className="gradient-text">Touch</span></h2>
          <p className="section-subtitle">Have a question or want to collaborate? I'd love to hear from you!</p>
        </div>

        {/* Email delivery notice */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-amber-400 text-sm">
            <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
            <span>
              <strong>Note:</strong> The contact form is not yet connected to an email delivery service. To enable real email sending, integrate{' '}
              <a href="https://www.emailjs.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-300">EmailJS</a> or{' '}
              <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-300">Formspree</a>.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Let's Connect</h3>
              <p className="text-gray-400 leading-relaxed">
                I'm open to internship opportunities, project collaborations, and general conversations about software development. Reach out through the form or via any of the platforms below.
              </p>
            </div>

            <div className="space-y-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href === '#' ? undefined : s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 group ${
                    s.href === '#'
                      ? 'border-white/5 bg-white/2 cursor-default opacity-50'
                      : 'border-white/10 bg-white/3 hover:border-blue-500/30 hover:bg-blue-500/5'
                  }`}
                  aria-label={s.href === '#' ? `${s.label} — not configured` : `Visit ${s.label}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-colors flex-shrink-0">
                    {s.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">{s.label}</p>
                    <p className="text-gray-300 text-sm truncate max-w-xs">{s.href === '#' ? 'Not configured — update portfolioData.ts' : s.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="animate-fade-in-up animation-delay-200">
            {status === 'success' ? (
              <div className="card flex flex-col items-center justify-center py-16 text-center gap-4 h-full">
                <CheckCircle2 size={48} className="text-green-400" />
                <h3 className="text-white font-bold text-xl">Message Received!</h3>
                <p className="text-gray-400 text-sm">(Demo mode — connect an email service to send real messages.)</p>
                <button onClick={() => setStatus('idle')} className="btn-primary mt-2">Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card space-y-5" noValidate aria-label="Contact form">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">Full Name *</label>
                  <input
                    id="name" name="name" type="text" value={form.name} onChange={handleChange}
                    placeholder="Your name"
                    className={`form-input ${errors.name ? 'border-red-500/50 focus:ring-red-500/30' : ''}`}
                    aria-required="true" aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && <p id="name-error" className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">Email Address *</label>
                  <input
                    id="email" name="email" type="email" value={form.email} onChange={handleChange}
                    placeholder="your.email@example.com"
                    className={`form-input ${errors.email ? 'border-red-500/50 focus:ring-red-500/30' : ''}`}
                    aria-required="true" aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && <p id="email-error" className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1.5">Subject *</label>
                  <input
                    id="subject" name="subject" type="text" value={form.subject} onChange={handleChange}
                    placeholder="What is this about?"
                    className={`form-input ${errors.subject ? 'border-red-500/50 focus:ring-red-500/30' : ''}`}
                    aria-required="true" aria-describedby={errors.subject ? 'subject-error' : undefined}
                  />
                  {errors.subject && <p id="subject-error" className="text-red-400 text-xs mt-1.5">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">Message *</label>
                  <textarea
                    id="message" name="message" value={form.message} onChange={handleChange}
                    rows={5} placeholder="Tell me more..."
                    className={`form-input resize-none ${errors.message ? 'border-red-500/50 focus:ring-red-500/30' : ''}`}
                    aria-required="true" aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && <p id="message-error" className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
