import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_KEY || 'c3fcc3d2-a6d1-46d7-8ab7-3cb9dd7b8ca2';

const INITIAL_FORM_STATE = { name: '', email: '', subject: '', message: '', botcheck: '' };

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const resetTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.botcheck) return;

    setStatus('loading');

    const submissionData = new FormData();
    submissionData.append('access_key', WEB3FORMS_ACCESS_KEY);
    submissionData.append('name', formData.name);
    submissionData.append('email', formData.email);
    submissionData.append('subject', formData.subject || 'Pesan dari Portofolio');
    submissionData.append('message', formData.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: submissionData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData(INITIAL_FORM_STATE);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }

    if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    resetTimerRef.current = setTimeout(() => {
      setStatus('idle');
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-transparent bg-dot-grid overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs text-gray-500 uppercase tracking-[0.25em] font-semibold mb-4">
            {t('txt_get_in_touch')}
          </p>
          <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] font-black text-black leading-[1.05] tracking-tight italic">
            {t('txt_contact')}
          </h2>
          <p className="text-gray-500 text-sm mt-4">{t('txt_contact_subtitle')}</p>
        </div>

        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-extrabold text-black mb-1">{t('txt_send_msg')}</h3>
              <p className="text-xs text-gray-500 mb-6 shrink-0">{t('txt_usually_respond')}</p>

              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  checked={Boolean(formData.botcheck)}
                  onChange={(e) => setFormData({ ...formData, botcheck: e.target.checked ? '1' : '' })}
                  className="hidden"
                  aria-hidden="true"
                />

                <div>
                  <label htmlFor="contact-name" className="sr-only">
                    {t('placeholder_name')}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder={t('placeholder_name')}
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="sr-only">
                    {t('placeholder_email')}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder={t('placeholder_email')}
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" className="sr-only">
                    {t('placeholder_subject')}
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder={t('placeholder_subject')}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="sr-only">
                    {t('placeholder_msg')}
                  </label>
                  <textarea
                    id="contact-message"
                    placeholder={t('placeholder_msg')}
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-400 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 shrink-0">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className={`w-full py-3 rounded-xl text-sm font-semibold transition-all ${
                      status === 'success'
                        ? 'bg-green-600 hover:bg-green-700 text-white'
                        : status === 'error'
                          ? 'bg-red-600 hover:bg-red-700 text-white'
                          : status === 'loading'
                            ? 'bg-gray-400 cursor-not-allowed text-white'
                            : 'bg-black text-white hover:bg-gray-800'
                    }`}
                  >
                    {status === 'loading'
                      ? t('btn_sending')
                      : status === 'success'
                        ? t('btn_sent_success')
                        : status === 'error'
                          ? t('btn_sent_error')
                          : t('btn_send_msg')}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
