import React from "react";

export default function AboutUsPage() {
  const values = [
    {
      icon: "/images/Client Focus.png",
      title: "Client Focus",
      text: "We put clients at the center of everything we do.",
    },
    {
      icon: "/images/Integrity & Transparency.png",
      title: "Integrity & Transparency",
      text: "We act with honesty and openness in all that we do.",
    },
    {
      icon: "/images/Innovation.png",
      title: "Innovation",
      text: "We strive for continuous improvement and creativity.",
    },
    {
      icon: "/images/Commitment & accountability.png",
      title: "Commitment & Accountability",
      text: "We take ownership of our actions and responsibilities.",
    },
    {
      icon: "/images/team work.png",
      title: "Team Work",
      text: "We collaborate and support each other to achieve success.",
    },
    {
      icon: "/images/Layer 1.png",
      title: "Excellence",
      text: "We deliver quality and excellence in everything we do.",
    },
  ];

  return (
    <div className="w-full">
      {/* ===== Section 1: Header with background image and shadow ===== */}
      <section
        className="relative bg-[#851A18] h-[350px] flex items-end bg-cover bg-center"
        style={{ backgroundImage: "url('/images/banaraboutus.png')" }}
      >
        {/* الظل الأحمر الشفاف */}
        <div className="absolute inset-0 bg-red-700 opacity-30"></div>

        <div className="container mx-auto px-6 text-left relative z-10 mb-6">
          <h2 className="text-white text-6xl font-bold tracking-widest uppercase">
            About Us
          </h2>
        </div>
      </section>

      {/* ===== Section 2: Our Company ===== */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/2 order-1 lg:order-1">
            <video
              src="https://res.cloudinary.com/diroi6tnk/video/upload/v1756484424/AMT_ICT-_Low_Current_Systems_-Audio_Visual_Solutions_qzv1uj.mp4"
              controls
              className="w-full h-[350px] object-cover rounded-lg shadow-xl"
            />
          </div>

          <div
            className="lg:w-1/2 order-2 lg:order-2 p-10 rounded-lg text-left"
            style={{
              backgroundColor: "rgba(240,240,240,0.95)",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            }}
          >
            <h3 className="text-[#851A18] text-4xl font-bold mb-6 tracking-wide">
              OUR COMPANY
            </h3>
            <p className="text-[#292929] text-lg leading-relaxed mb-4">
              Advanced Micro Technologies (AMT) specializes in the delivery of
              high-quality network solutions that are customized to fit the
              needs of each client and each project we work on...
            </p>
            <p className="text-[#292929] text-lg leading-relaxed">
              AMT’s focus on innovation as a system integrator means we are
              constantly updating technical capabilities...
            </p>
          </div>
        </div>
      </section>

      {/* ===== Section 3: Our Strategy ===== */}
      <section className="bg-[#2c2c2c] py-24 text-left">
        <div className="container mx-auto px-6 text-white">
          <h3 className="text-3xl lg:text-5xl font-bold mb-12 text-left">
            <span className="block mb-6">
              Our strategy is to become a leading Technology
            </span>
            <span className="block">
              System Integration company in the region
            </span>
          </h3>

          <div className="flex justify-center mb-12">
            <img
              src="/images/985.png"
              alt="Our Strategy"
              className="w-full max-w-5xl h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full text-gray-300 text-2xl leading-relaxed space-y-6 mb-16 text-left">
            <p>
              AMT is a flexible company set up to offer assistance at any phase –
              from your first concept design or proposal development
            </p>
            <p>
              to final commissioning and handover. International partners are carefully
              selected and reviewed...
            </p>
            <p>
              AMT is the best choice for organizations seeking turnkey solutions
              and best practices in ICT, security systems, Audio Video Solutions
              and Low Current Systems...
            </p>
          </div>
        </div>
      </section>

      {/* ===== Section 4: ATM Values ===== */}
      <section className="bg-white py-24 text-left">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl lg:text-5xl font-bold mb-16 text-[#851A18]">
            ATM Values
          </h3>
        </div>

        <div className="w-full bg-[#851A18] py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="p-8 flex flex-col items-center justify-center
                           transform hover:scale-105 hover:-translate-y-2
                           transition-all duration-300 group
                           hover:bg-[#6d1412] hover:shadow-2xl"
              >
                <div
                  className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4
                             transition-transform duration-300 group-hover:scale-110"
                >
                  <img src={value.icon} alt={value.title} className="w-10 h-10" />
                </div>

                <h4 className="text-white text-lg font-semibold">
                  {value.title}
                </h4>

                <p
                  className="text-gray-200 text-sm mt-4 opacity-0
                             group-hover:opacity-100 transition-opacity duration-300"
                >
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Section 5: Customer Support PDF ===== */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-8">
          {/* الصورة على الشمال */}
          <a href="/pdf/ATM_PDF.pdf" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/pdfbookcover.png"
              alt="PDF Cover"
              className="w-72 h-auto rounded-lg shadow-lg cursor-pointer"
            />
          </a>

          {/* النص والكبسة على الشمال */}
          <div className="lg:w-1/2 flex flex-col items-start justify-start gap-4 text-left">
            <p className="text-gray-700 text-lg leading-relaxed">
              At AMT, we take customer support seriously and invest in our people
              through workshop, training, and mentor programs to share technical
              and management knowledge throughout the company. This focus on
              engineering results is combined with proven project managers who
              can successfully deliver even the most challenging projects on time
              every time.
            </p>
            <a
              href="/pdf/ATM_PDF.pdf"
              download
              className="inline-block bg-[#851A18] text-white font-semibold rounded-lg py-2 px-3 hover:bg-[#6d1412] transition-colors"
            >
              Download AMT Company Profile
            </a>
          </div>
        </div>
      </section>

      {/* خط أحمر بين آخر قسم والفوتر */}
      <div className="w-full h-1 bg-[#851A18]"></div>
    </div>
  );
}
