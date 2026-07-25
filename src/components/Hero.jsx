import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import heroImage from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 text-white">
        <p className="uppercase tracking-[6px] text-yellow-400">
          Welcome to Firemantle
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-7xl font-extrabold leading-tight max-w-5xl">
          Igniting Souls.
          <br />
          Raising Disciples.
          <br />
          Fulfilling Purpose.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-200">
          Firemantle Gospel Outreach Ministry is committed to proclaiming the
          Gospel of Jesus Christ, raising disciples, and empowering believers to
          fulfill God's divine purpose.
        </p>

        <div className="mt-10 flex flex-wrap gap-5">
          <a
            href="https://wa.me/2348101578457?text=Hello%20Firemantle%20Gospel%20Outreach%20Ministry.%20I%20am%20interested%20in%20worshipping%20with%20you.%20Please%20share%20more%20information."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 hover:bg-yellow-400 hover:scale-105 duration-300 px-8 py-4 rounded-full text-black font-bold shadow-xl inline-block"
          >
            Join Us
          </a>{" "}
          <a
            href="#films"
            className="border-2 border-white hover:bg-white hover:text-black hover:scale-105 duration-300 px-8 py-4 rounded-full inline-block"
          >
            Watch Sermons
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
