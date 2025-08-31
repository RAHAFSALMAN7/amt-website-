import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    subject: "",
    budget: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  // تعديل: تحديد نوع e لتجنب تحذير TypeScript
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);

    setFormData({
      company: "",
      email: "",
      subject: "",
      budget: "",
      message: "",
    });
  };

  return (
    <section
      className="relative bg-[#851A18] bg-cover bg-center"
      style={{ backgroundImage: `url(/images/amt66.png)` }}
    >
      {/* الجزء الأسود المائل */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full h-[320px] bg-[#292929] -skew-y-6"></div>

      {/* المحتوى */}
      <div className="min-h-screen flex flex-col items-center justify-center relative z-10">
        {/* العنوان */}
        <div className="w-full max-w-3xl flex justify-start mb-6">
          <h2 className="text-white text-3xl font-bold">contact us</h2>
        </div>

        {/* الفورم */}
        <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl p-10">
          <h3 className="text-[#292929] text-2xl font-semibold mb-8">
            Get in touch
          </h3>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                name="company"
                placeholder="Company Name *"
                required
                value={formData.company}
                onChange={handleChange}
                className="w-full p-4 border rounded text-base"
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 border rounded text-base"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                name="subject"
                placeholder="Subject *"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-4 border rounded text-base"
              />
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full p-4 border rounded text-base"
              >
                <option value="">Budget *</option>
                <option value="100-500">$100-$500</option>
                <option value="500-1000">$500-$1000</option>
                <option value="1000+">$1000+</option>
              </select>
            </div>

            <textarea
              name="message"
              placeholder="Message *"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 border rounded h-48 resize-none text-base"
            />

            <button
              type="submit"
              className="bg-[#851A18] text-white px-8 py-3 rounded font-semibold text-base hover:bg-[#a21f1c] transition-colors"
            >
              get in touch
            </button>
          </form>
        </div>
      </div>

      {/* النص فوق الخريطة مع ظل أحمر شفاف */}
      <div className="relative w-full flex justify-center mt-12 z-10">
        {/* الظل الأحمر */}
        <div className="absolute inset-0 bg-red-500/20"></div>
        <p className="text-white text-3xl font-bold relative z-20">
          our location
        </p>
      </div>

      {/* الخريطة Full Width مع Parallax */}
      <div
        className="w-full h-[400px]"
        style={{
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.0388390304133!2d50.182273099999996!3d26.292840899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49ef5d1bf00919%3A0xcad792212a73a548!2sAdvanced%20Micro%20Technologies%20Co.%20AMT%20arabia!5e0!3m2!1sen!2s!4v1756469840100!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black bg-opacity-50 absolute inset-0"></div>
          <div className="bg-green-500 text-white px-8 py-6 rounded-lg shadow-lg z-50 text-center text-lg">
            ✅ Your message has been sent successfully!
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
