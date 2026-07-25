import { FaFacebook, FaYoutube, FaWhatsapp, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-yellow-400">
          Firemantle Gospel Outreach Ministry
        </h2>

        <p className="mt-2 text-gray-400">
          Igniting Souls • Raising Disciples • Fulfilling Purpose
        </p>

        {/* Social Media */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://www.facebook.com/share/1BFwiTPVYz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-6xl p-5 rounded-full bg-white/10 hover:bg-blue-600 hover:text-white hover:scale-125 transition-all duration-300 shadow-lg" />
          </a>

          <a
            href="https://youtube.com/@firemantlefilms?si=bTIzo91Erxwmeafn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-6xl p-5 rounded-full bg-white/10 hover:bg-blue-600 hover:text-white hover:scale-125 transition-all duration-300 shadow-lg" />
          </a>

          <a
            href="https://wa.me/2348101578457"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-6xl p-5 rounded-full bg-white/10 hover:bg-blue-600 hover:text-white hover:scale-125 transition-all duration-300 shadow-lg" />
          </a>
        </div>

        {/* Contact Details */}
        <div className="mt-8 text-gray-400 space-y-2">
          <p> Firemantle Arena #47 Osoamadi Avenue Aba, Abia State, Nigeria</p>

          <p>📞 +234-810-157-8457, +234-810-956-3286, +234-707-839-2004</p>

          <p>✉️ companionnec@gmail.com</p>
        </div>

        <hr className="border-gray-700 my-8" />

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Firemantle Gospel Outreach Ministry. All
          Rights Reserved.
        </p>

        <p className="text-sm text-gray-600 mt-2">
          Designed & Developed by Emmanuel Nweke
        </p>
      </div>
    </footer>
  );
}

export default Footer;
