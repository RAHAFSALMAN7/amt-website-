import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowUp } from 'lucide-react';
import Logo from '../assets/LOGOAMT.png';
import { useLanguage } from '../Context/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();
  const [mapExpanded, setMapExpanded] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const translations = {
    en: {
      bottom: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
      copyright: '© 2025 Advanced Micro Technologies. All rights reserved.',
      officeHoursTitle: 'Office Hours',
      officeHoursTime: ['Sunday-Thursday : 8 AM - 5:30 PM', 'Friday & Saturday : Closed'],
      contactUsTitle: 'Contact Us',
      mapTitle: 'Our Location',
    },
    ar: {
      bottom: ['سياسة الخصوصية', 'شروط الخدمة', 'سياسة ملفات الارتباط'],
      copyright: '© 2025 التقنية المتقدمة. جميع الحقوق محفوظة.',
      officeHoursTitle: 'أوقات العمل',
      officeHoursTime: ['الأحد - الخميس : 8 صباحًا - 5:30 مساءً', 'الجمعة والسبت : مغلق'],
      contactUsTitle: 'تواصل معنا',
      mapTitle: 'الموقع',
    },
  };

  const t = translations[language];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn' },
    { icon: Twitter, label: 'Twitter' },
    { icon: Github, label: 'GitHub' },
  ];

  return (
    <footer className="bg-white text-[#851A18] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row justify-between items-start gap-12 text-left">

        {/* اللوغو + شهادات ISO */}
        <div className="flex-1 flex flex-col items-start gap-4">
          <img src={Logo} alt="AMT Logo" className="w-60 h-auto object-contain" />

          <div className="flex gap-6 mt-2 flex-wrap">
            {/* ISO 9001 */}
            <div className="flex flex-col items-start text-sm md:text-base">
              <img src="/images/Logo_of_the_ISO.png" alt="ISO 9001 Logo" className="w-32 h-auto object-contain" />
              <a href="/pdf/AMT_iso.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline mt-1">
                ISO 9001:2015
              </a>
              <div>Quality Management Systems</div>
            </div>
            {/* ISO 45001 */}
            <div className="flex flex-col items-start text-sm md:text-base">
              <img src="/images/Logo_of_the_ISO.png" alt="ISO 45001 Logo" className="w-32 h-auto object-contain" />
              <a href="/pdf/amt_iso2.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline mt-1">
                ISO 45001:2018
              </a>
              <div>Safety Management Systems</div>
            </div>
          </div>
        </div>

        {/* عمود Contact Us */}
        <div className="flex-1 flex flex-col items-start text-left">
          <span className="font-semibold mb-3">{t.contactUsTitle}</span>
          <div className="space-y-4 text-sm md:text-base"> {/* المسافة بين كل سطر */}
            <div>Tel.: +966 13 810 05 47</div>
            <div>Fax: +966 13 810 05 46</div>
            <div>Email: info@amt-arabia.com</div>
          </div>

          {/* مسافة أكبر قبل Office Hours */}
          <div className="mt-8">
            <span className="font-semibold mb-3 block">{t.officeHoursTitle}</span>
            <div className="space-y-3 text-sm md:text-base"> {/* المسافة بين سطور Office Hours */}
              <div>{t.officeHoursTime[0]}</div>
              <div>{t.officeHoursTime[1]}</div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return (
                <div key={i} className="p-3 rounded-full bg-white/30 transition-colors" title={social.label}>
                  <Icon className="w-5 h-5" />
                </div>
              );
            })}
          </div>
        </div>

        {/* عمود الخريطة */}
        <div className="flex-1 flex flex-col items-start mt-6 lg:mt-0 text-left">
          <span className="font-semibold mb-2 text-lg">{t.mapTitle}</span>

          <iframe
            onClick={() => setMapExpanded(!mapExpanded)}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.0388390304133!2d50.182273099999996!3d26.292840899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49ef5d1bf00919%3A0xcad792212a73a548!2sAdvanced%20Micro%20Technologies%20Co.%20AMT%20arabia!5e0!3m2!1sen!2s!4v1756469840100!5m2!1sen!2s"
            width={mapExpanded ? 600 : 200}
            height={mapExpanded ? 400 : 200}
            style={{
              borderRadius: mapExpanded ? '0%' : '50%',
              border: '0',
              cursor: 'pointer',
              transition: 'all 0.3s ease-in-out',
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-300 pt-6 flex flex-col lg:flex-row justify-between text-left text-sm">
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
