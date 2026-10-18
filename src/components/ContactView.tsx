import React, { useState } from 'react';

interface ContactViewProps {
  email: string;
  location?: string;
  instagramUrl?: string;
  instagramHandle?: string;
}

export const ContactView: React.FC<ContactViewProps> = ({
  email = 'anvishahlines@gmail.com',
  instagramUrl = 'https://www.instagram.com/aunvi20/',
  instagramHandle = 'aunvi20'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const subjectLine = formData.subject.trim() || `Inquiry from ${formData.name.trim()} (via anvistevens.com)`;
  const bodyContent = `From: ${formData.name.trim()} (${formData.email.trim()})\nSubject: ${subjectLine}\n\nMessage:\n${formData.message.trim()}`;

  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(bodyContent)}`;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(bodyContent)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setLoading(true);

    // Promptly launch mailto and present the confirmation state in ~350ms
    setTimeout(() => {
      try {
        window.location.href = mailtoUrl;
      } catch {
        // Handled by the fallback buttons on the confirmation screen
      }
      setLoading(false);
      setSubmitted(true);
    }, 350);
  };

  const handleCopy = async () => {
    const fullText = `To: ${email}\n${bodyContent}`;
    try {
      await navigator.clipboard.writeText(fullText);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="py-12 sm:py-20 px-4">
      <div className="max-w-xl mx-auto flex flex-col items-center">
        {/* Title */}
        <div className="text-center mb-10">
          <h3 className="font-gallery text-2xl sm:text-3xl text-stone-900 font-normal">
            Contact Anvi Stevens
          </h3>
        </div>

        {/* Direct Email Link */}
        <div className="mb-10 text-center flex flex-col items-center gap-3">
          <a
            href={`mailto:${email}`}
            className="font-gallery text-xl sm:text-2xl text-stone-900 hover:text-stone-600 transition-colors border-b border-stone-300 pb-0.5 tracking-wide"
          >
            {email}
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.2em] text-stone-500 hover:text-stone-900 flex items-center gap-1.5 transition-colors"
          >
            <span>Instagram: @{instagramHandle}</span>
            <svg className="w-3 h-3 text-stone-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>

        {/* Form Container */}
        <div className="w-full bg-white p-6 sm:p-8 border border-stone-200/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center mx-auto mb-4 text-stone-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="font-gallery text-xl sm:text-2xl text-stone-900 mb-2">Inquiry Ready to Send</h4>
              <p className="text-xs sm:text-[13px] text-stone-600 font-light max-w-md mx-auto leading-relaxed mb-6">
                Your message has been prepared for <strong className="font-medium text-stone-900">{email}</strong>. If your email application did not launch automatically, choose an option below:
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
                <a
                  href={mailtoUrl}
                  className="w-full sm:w-auto px-4 py-2.5 bg-stone-900 text-white text-xs uppercase tracking-wider font-medium hover:bg-stone-800 transition-colors inline-flex items-center justify-center gap-1.5"
                >
                  <span>Open in Mail App</span>
                  <span>↗</span>
                </a>
                <a
                  href={gmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2.5 bg-white border border-stone-300 text-stone-800 text-xs uppercase tracking-wider font-medium hover:border-stone-900 hover:text-stone-950 transition-colors inline-flex items-center justify-center gap-1.5"
                >
                  <span>Open in Gmail</span>
                  <span>↗</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="w-full sm:w-auto px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer"
                >
                  {copied ? '✓ Copied!' : 'Copy Message'}
                </button>
              </div>

              <div className="pt-4 border-t border-stone-100">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="text-xs uppercase tracking-widest text-stone-500 hover:text-stone-900 underline underline-offset-4 cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-500 font-medium mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full px-3.5 py-2.5 text-xs text-stone-800 bg-stone-50/50 border border-stone-200 focus:outline-none focus:border-stone-900 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-500 font-medium mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@domain.com"
                  className="w-full px-3.5 py-2.5 text-xs text-stone-800 bg-stone-50/50 border border-stone-200 focus:outline-none focus:border-stone-900 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-500 font-medium mb-1.5">
                  Subject / Artwork of Interest
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Inquiry regarding 'Nature of Things'"
                  className="w-full px-3.5 py-2.5 text-xs text-stone-800 bg-stone-50/50 border border-stone-200 focus:outline-none focus:border-stone-900 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-500 font-medium mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please write your inquiry or thoughts here..."
                  className="w-full px-3.5 py-2.5 text-xs text-stone-800 bg-stone-50/50 border border-stone-200 focus:outline-none focus:border-stone-900 transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-stone-900 text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-stone-800 transition-colors cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-3.5 w-3.5 text-white" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                      </svg>
                      <span>Opening email...</span>
                    </>
                  ) : (
                    'Send Inquiry'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
