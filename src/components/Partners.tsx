import React, { useEffect, useRef, useState } from 'react';
import { Quote, Star, Award } from 'lucide-react';
import { useLanguage } from '../Context/LanguageContext'; // لازم يكون عندك LanguageContext

const Partners = () => {
  const { language } = useLanguage(); // 'en' أو 'ar'
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const partners = [
    { name: 'HUAWEI', logo: 'H', color: 'from-[#EB2427] to-[#941B20]', category: 'Network solutions (LAN | WAN | UC | UPS | CCTV)' },
    { name: 'HP ARUBA', logo: 'A', color: 'from-[#EB2427] to-[#941B20]', category: 'Data Network' },
    { name: 'CISCO', logo: 'C', color: 'from-[#EB2427] to-[#941B20]', category: 'Routing & Switching | Wireless | UC | Network Security' },
    { name: 'JUNIPER', logo: 'J', color: 'from-[#EB2427] to-[#941B20]', category: 'Network Solutions | Routing & Switching' },
    { name: 'COMMSCOPE', logo: 'CS', color: 'from-[#EB2427] to-[#941B20]', category: 'Cabling Solutions (UTP Copper | Fiber Optic)' },
    { name: 'HP', logo: 'HP', color: 'from-[#EB2427] to-[#941B20]', category: 'ICT solutions' },
    { name: 'ALCATEL', logo: 'AL', color: 'from-[#EB2427] to-[#941B20]', category: 'Business Telephony & UC' },
    { name: 'Leviton', logo: 'L', color: 'from-[#EB2427] to-[#941B20]', category: 'Cabling Solutions' },
    { name: 'AVAYA', logo: 'AV', color: 'from-[#EB2427] to-[#941B20]', category: 'Audio Video Systems' },
    { name: 'NEC', logo: 'N', color: 'from-[#EB2427] to-[#941B20]', category: 'Multimedia Projectors & Screens' },
    { name: 'MIRCOM', logo: 'M', color: 'from-[#EB2427] to-[#941B20]', category: 'Intercom System' },
    { name: 'EXTERITY', logo: 'E', color: 'from-[#EB2427] to-[#941B20]', category: 'IP TV Solutions' },
    { name: 'AXIS', logo: 'AX', color: 'from-[#EB2427] to-[#941B20]', category: 'Audio Visual Systems' },
    { name: 'Carrier', logo: 'CR', color: 'from-[#EB2427] to-[#941B20]', category: 'Fire & Security Systems' },
    { name: 'EDWARDS', logo: 'ED', color: 'from-[#EB2427] to-[#941B20]', category: 'Fire detection & Alarm Systems' },
    { name: 'BOUYER', logo: 'B', color: 'from-[#EB2427] to-[#941B20]', category: 'Public Address System | Audio Solutions' },
    { name: 'CHRISTIE', logo: 'CH', color: 'from-[#EB2427] to-[#941B20]', category: 'Projection & Video Wall' },
    { name: 'CLEAR ONE', logo: 'CO', color: 'from-[#EB2427] to-[#941B20]', category: 'Audio Conferencing & Video Solutions' },
    { name: 'ATLAD IED', logo: 'AI', color: 'from-[#EB2427] to-[#941B20]', category: 'Communication Systems' },
    { name: 'SAPLING', logo: 'S', color: 'from-[#EB2427] to-[#941B20]', category: 'Master Clock Systems' },
    { name: 'APC', logo: 'APC', color: 'from-[#EB2427] to-[#941B20]', category: 'UPS Systems' },
    { name: 'EXTRON', logo: 'EX', color: 'from-[#EB2427] to-[#941B20]', category: 'A/V Systems' },
    { name: 'BELDEN', logo: 'B', color: 'from-[#EB2427] to-[#941B20]', category: 'Signal Transmission & Networking Products' },
    { name: 'SUPERIOR ESSEX', logo: 'SE', color: 'from-[#EB2427] to-[#941B20]', category: 'Wiring & Cabling Solutions' },
  ];

  const testimonials = [
    {
      quote: {
        en: "AMT has completed multiple projects for KFU, providing robust network infrastructure across 50+ buildings for thousands of users.",
        ar: "أكملت AMT العديد من المشاريع لجامعة الملك فيصل، موفرة بنية تحتية قوية للشبكات في أكثر من 50 مبنى لآلاف المستخدمين."
      },
      author: "Dr. Ahmed Al-Salem",
      position: { en: "IT Director", ar: "مدير تقنية المعلومات" },
      company: "King Faisal University",
      rating: 5,
      avatar: "AA"
    },
    {
      quote: {
        en: "AMT's solution successfully connected our refinery network while ensuring strict safety standards and operational efficiency.",
        ar: "نجحت حلول AMT في ربط شبكة مصفاة ياسرف مع ضمان معايير السلامة الصارمة والكفاءة التشغيلية."
      },
      author: "Mohammed Al-Fahad",
      position: { en: "Project Manager", ar: "مدير المشروع" },
      company: "YASREF Refinery",
      rating: 5,
      avatar: "MF"
    }
  ];

  const texts = {
    header: language === 'ar' ? 'شركاؤنا' : 'OUR PARTNERS',
    subtitle: language === 'ar' ? 'موثوقون من قبل قادة الصناعة' : 'Trusted by Industry Leaders',
    description: language === 'ar' 
      ? 'نتعاون مع المؤسسات الرائدة لتقديم حلول مبتكرة تدفع عجلة الابتكار والنمو.' 
      : 'We collaborate with leading organizations to deliver cutting-edge solutions that drive innovation and growth.',
    testimonialsTitle: language === 'ar' ? 'ماذا يقول عملاؤنا' : 'What Our Clients Say'
  };

  return (
    <section id="partners" ref={sectionRef} className="py-24 bg-[#E5E5E5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-[#EB2427] mb-6">
            <Award className="w-5 h-5 text-[#EB2427]" />
            <span className="text-[#941B20] font-semibold text-lg tracking-wide">{texts.header}</span>
          </div>
          
          <h2 className="font-display font-black text-5xl lg:text-7xl text-[#941B20] mb-6 leading-tight">{texts.subtitle}</h2>
          <p className="text-xl text-[#941B20]/70 max-w-3xl mx-auto leading-relaxed">{texts.description}</p>
        </div>

        {/* Partners Grid */}
        <div className={`mb-24 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
            {partners.map((partner, index) => (
              <div key={index} className="group relative col-span-1 h-28">
                <div className={`absolute inset-0 bg-gradient-to-br ${partner.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3 blur-sm`}></div>
                <div className="relative h-full bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 border border-gray-100 group-hover:border-[#EB2427] overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gray-50 to-transparent rounded-bl-2xl"></div>
                  <div className="flex flex-col items-center justify-center h-full p-4">
                    <div className={`w-12 h-12 mb-2 bg-gradient-to-br ${partner.color} rounded-xl flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300`}>
                      {partner.logo}
                    </div>
                    <div className="text-[#941B20] font-medium text-xs text-center group-hover:text-[#EB2427] transition-colors duration-300">
                      {partner.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h3 className="font-display font-bold text-3xl lg:text-4xl text-[#941B20] mb-4">{texts.testimonialsTitle}</h3>
            <div className="w-32 h-1 bg-gradient-to-r from-[#EB2427] to-[#941B20] mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 border border-gray-100 overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#EB2427]/5 to-[#941B20]/5 rounded-bl-3xl"></div>
                <div className="absolute -top-4 -left-4 text-6xl text-[#EB2427]/10 font-serif">
                  <Quote className="w-12 h-12" />
                </div>
                <div className="relative z-10">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#EB2427] fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-[#941B20]/80 leading-relaxed mb-6 italic">{testimonial.quote[language]}</blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#EB2427] to-[#941B20] rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">{testimonial.avatar}</div>
                    <div>
                      <div className="font-bold text-[#941B20]">{testimonial.author}</div>
                      <div className="text-sm text-[#941B20]/70">{testimonial.position[language]}</div>
                      <div className="text-xs text-[#EB2427] font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
