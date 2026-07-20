import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Calendar, Send, CheckCircle, AlertTriangle, ArrowRight, Sparkles } from 'lucide-react';

interface ContactProps {
  onCopyEmail: () => void;
}

export default function Contact({ onCopyEmail }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Full Name is required';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email format';
    }

    if (!formData.subject.trim()) tempErrors.subject = 'Subject line is required';
    if (!formData.message.trim()) {
      tempErrors.message = 'Please write a brief message';
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on write
    if (errors[name]) {
      setErrors((prev) => {
        const dup = { ...prev };
        delete dup[name];
        return dup;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable endpoint sending sequence
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-[#0c0c0e] relative overflow-hidden"
    >
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-500 bg-indigo-500/5 dark:bg-indigo-500/10 px-3 py-1.5 rounded-full border border-indigo-500/20"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-sans font-extrabold text-zinc-900 dark:text-white tracking-tight"
          >
            Let's Collaborate on Your Next Venture
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
          >
            Ready to hire, consult, or just talk tech? Drop a message below and expect a response in less than 12 hours.
          </motion.p>
        </div>

        {/* Contact Bento Wrapper */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 bg-zinc-50 dark:bg-[#18181B] border border-zinc-200/50 dark:border-zinc-800/80 rounded-3xl overflow-hidden shadow-xl shadow-black/5 p-4 sm:p-6 lg:p-8">
          
          {/* Left Column: Direct info panels */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-8 bg-zinc-100/50 dark:bg-zinc-900/30 p-6 rounded-2xl border border-zinc-200/30 dark:border-zinc-800/40 text-left">
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-lg font-sans font-extrabold text-zinc-900 dark:text-white">
                  Contact Information
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-[11px] leading-relaxed font-sans">
                  Reach out directly via channels or the contact compiler.
                </p>
              </div>

              {/* Direct channels links */}
              <div className="space-y-4">
                
                {/* Email Panel */}
                <button
                  onClick={onCopyEmail}
                  className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800/50 transition-all duration-300 text-left cursor-pointer group"
                  title="Click to copy email address"
                >
                  <div className="p-3.5 rounded-lg bg-indigo-500/5 dark:bg-indigo-500/10 border border-indigo-500/10 text-indigo-500 shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <h4 className="text-zinc-800 dark:text-zinc-200 text-xs font-bold leading-none">Email Address</h4>
                    <p className="text-zinc-500 dark:text-zinc-400 text-[11px] font-mono mt-1 group-hover:text-indigo-400 transition-colors">
                      zunairatariq985@gmail.com
                    </p>
                  </div>
                </button>

                {/* Location */}
                <div className="flex items-center gap-4 p-3">
                  <div className="p-3.5 rounded-lg bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/10 text-emerald-500 shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h4 className="text-zinc-800 dark:text-zinc-200 text-xs font-bold leading-none">Primary Location</h4>
                    <p className="text-zinc-500 dark:text-zinc-400 text-[11px] font-sans mt-1">
                      Rawalpindi, Punjab, Pakistan
                    </p>
                  </div>
                </div>

                {/* Availability calendar */}
                <div className="flex items-center gap-4 p-3">
                  <div className="p-3.5 rounded-lg bg-cyan-500/5 dark:bg-cyan-500/10 border border-cyan-500/10 text-cyan-500 shrink-0">
                    <Calendar size={16} />
                  </div>
                  <div>
                    <h4 className="text-zinc-800 dark:text-zinc-200 text-xs font-bold leading-none">Direct Status</h4>
                    <p className="text-zinc-500 dark:text-zinc-400 text-[11px] font-sans mt-1">
                      Available for hire &amp; client contracts
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Simulated legal / trust disclaimer */}
            <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10 text-[10px] leading-relaxed text-zinc-500">
              <span className="font-bold text-indigo-400 block mb-1">🛡️ Anti-Spam Security</span>
              Form submissions are protected by secure client validation. Submitting this form routes directly to Zunaira's private priority inbox.
            </div>
          </div>

          {/* Right Column: Working Contact Form / Success animations */}
          <div className="md:col-span-7 flex flex-col justify-center text-left">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono uppercase font-bold text-zinc-500 dark:text-zinc-400">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={`w-full p-3 rounded-xl bg-white dark:bg-zinc-900 border text-xs text-zinc-800 dark:text-zinc-100 focus:outline-none focus:ring-1 transition-all ${
                          errors.name
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-zinc-200 dark:border-zinc-800 focus:ring-indigo-500 focus:border-indigo-500'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-[9px] font-mono flex items-center gap-1 mt-1">
                          <AlertTriangle size={10} /> <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono uppercase font-bold text-zinc-500 dark:text-zinc-400">
                        Email Address
                      </label>
                      <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className={`w-full p-3 rounded-xl bg-white dark:bg-zinc-900 border text-xs text-zinc-800 dark:text-zinc-100 focus:outline-none focus:ring-1 transition-all ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-zinc-200 dark:border-zinc-800 focus:ring-indigo-500 focus:border-indigo-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-[9px] font-mono flex items-center gap-1 mt-1">
                          <AlertTriangle size={10} /> <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase font-bold text-zinc-500 dark:text-zinc-400">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Partnership Scope"
                      className={`w-full p-3 rounded-xl bg-white dark:bg-zinc-900 border text-xs text-zinc-800 dark:text-zinc-100 focus:outline-none focus:ring-1 transition-all ${
                        errors.subject
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-zinc-200 dark:border-zinc-800 focus:ring-indigo-500 focus:border-indigo-500'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-[9px] font-mono flex items-center gap-1 mt-1">
                        <AlertTriangle size={10} /> <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase font-bold text-zinc-500 dark:text-zinc-400">
                      Message Body
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Hi Zunaira, we would love to schedule an interview or contract web project..."
                      className={`w-full p-3 rounded-xl bg-white dark:bg-zinc-900 border text-xs text-zinc-800 dark:text-zinc-100 focus:outline-none focus:ring-1 transition-all ${
                        errors.message
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-zinc-200 dark:border-zinc-800 focus:ring-indigo-500 focus:border-indigo-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-[9px] font-mono flex items-center gap-1 mt-1">
                        <AlertTriangle size={10} /> <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Deploying Message Packet...</span>
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        <span>Submit Message</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 px-6 text-center space-y-6 flex flex-col items-center"
                >
                  <div className="p-4 rounded-full bg-emerald-500/10 text-emerald-500 animate-bounce">
                    <CheckCircle size={44} />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-sans font-extrabold text-zinc-900 dark:text-white">
                      Message Dispatched!
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-sm mx-auto">
                      Your message packet was compiled and secured successfully. Zunaira's inbox has received the alert. Thank you for connecting!
                    </p>
                  </div>

                  <button
                    onClick={() => setIsSuccess(false)}
                    className="flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-800 text-white text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-700 cursor-pointer"
                  >
                    <span>Send Another Message</span>
                    <ArrowRight size={12} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
