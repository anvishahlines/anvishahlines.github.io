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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _replyto: formData.email,
          subject: formData.subject || `Inquiry from ${formData.name} (via anvistevens.com)`,
          message: formData.message,
          _template: 'table'
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Fallback to mailto
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(
          formData.subject || 'Artwork Inquiry'
        )}&body=${encodeURIComponent(
          `From: ${formData.name} (${formData.email})\n\n${formData.message}`
        )}`;
        setSubmitted(true);
      }
    } catch {
      // Direct mailto fallback
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(
        formData.subject || 'Artwork Inquiry'
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\n${formData.message}`
      )}`;
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12 sm:py-20 px-4">
      <div className="max-w-xl mx-auto flex flex-col items-center">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-xs sm:text-[13px] tracking-[0.25em] uppercase font-medium text-stone-400 mb-2">
            Inquiries
          </h2>
          <h3 className="font-gallery text-2xl sm:text-3xl text-stone-900 font-normal">
            Contact Anvi Stevens
          </h3>
          <p className="mt-3 text-xs sm:text-sm text-stone-500 font-light max-w-md mx-auto leading-relaxed">
            For acquisitions, exhibition proposals, or artwork inquiries.
          </p>
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
            <div className="text-center py-8">
              <h4 className="font-gallery text-xl text-stone-900 mb-2">Thank you for your message</h4>
              <p className="text-xs text-stone-500 font-light max-w-sm mx-auto leading-relaxed">
                Your message has been sent directly to {email}. Anvi will respond to your inquiry shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                className="mt-6 text-xs uppercase tracking-widest text-stone-700 hover:text-stone-950 underline underline-offset-4 cursor-pointer"
              >
                Send another message
              </button>
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
                  className="w-full py-3 bg-stone-900 text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-stone-800 transition-colors cursor-pointer disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'Send Inquiry'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
