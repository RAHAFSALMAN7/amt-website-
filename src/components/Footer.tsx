import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowUp } from 'lucide-react';
import Logo from '../assets/LOGOAMT.png';
import { useLanguage } from '../Context/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const translations = {
    en: {
      bottom: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
      copyright: '© 2025 Advanced Micro Technologies. All rights reserved.',
    },
    ar: {
      bottom: ['سياسة الخصوصية', 'شروط الخدمة', 'سياسة ملفات الارتباط'],
      copyright: '© 2025 التقنية المتقدمة. جميع الحقوق محفوظة.',
    },
  };

  const t = translations[language];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn' },
    { icon: Twitter, label: 'Twitter' },
    { icon: Github, label: 'GitHub' },
  ];

  const contactInfo = [
    { icon: Mail, info: 'info@amt-arabia.com' },
    { icon: Phone, info: '+966 13 810 05 47' },
    { icon: MapPin, info: 'NSH Towers, King Fahd Road, Riyadh' },
  ];

  return (
    <footer className="bg-white text-[#851A18] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* اللوغو على الشمال */}
        <div className="flex-1">
          <img src={Logo} alt="AMT Logo" className="w-100 h-auto object-contain" />
        </div>

        {/* معلومات الاتصال + أيقونات التواصل على اليمين */}
        <div className="flex-1 flex flex-col items-start lg:items-end space-y-4">
          {/* Contact Info */}
          <div className="space-y-3">
            {contactInfo.map((contact, i) => {
              const Icon = contact.icon;
              return (
                <div key={i} className="flex items-center space-x-3 lg:space-x-0 lg:justify-end">
                  <Icon className="w-5 h-5" />
                  <span>{contact.info}</span>
                </div>
              );
            })}
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return (
                <div
                  key={i}
                  className="p-3 rounded-full bg-white/30 transition-colors"
                  title={social.label}
                >
                  <Icon className="w-5 h-5" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-300 pt-6 flex flex-col lg:flex-row justify-between text-sm">
        <span>{t.copyright}</span>
        <div className="flex space-x-4 mt-3 lg:mt-0">
          {t.bottom.map((link, i) => (
            <span key={i}>{link}</span>
          ))}
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="fixed right-8 bottom-8 bg-[#851A18] p-4 rounded-full text-white hover:scale-110 transition-transform"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
