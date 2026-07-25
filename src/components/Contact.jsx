import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-32 bg-gray-100">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl text-center font-bold text-red-700">
          Get In Touch
        </h2>

        <p className="text-center mt-4 text-gray-600">
          We'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <FaPhone className="text-4xl text-red-700 mx-auto" />

            <h3 className="mt-5 font-bold text-xl">Call Us</h3>

            <p className="mt-3">+234 8101578457</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <FaEnvelope className="text-4xl text-red-700 mx-auto" />

            <h3 className="mt-5 font-bold text-xl">Email</h3>

            <p className="mt-3">companionnec@gmail.com</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <FaMapMarkerAlt className="text-4xl text-red-700 mx-auto" />

            <h3 className="mt-5 font-bold text-xl">Address</h3>

            <p className="mt-3">Firemantle Arena #47 Osoamadi Avenue Aba, Abia State, Nigeria</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
