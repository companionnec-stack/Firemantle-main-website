import { FaVideo, FaCamera, FaFilm, FaYoutube, FaPlay } from "react-icons/fa";
import filmImage from "../assets/images/films.jpg";
import SectionWrapper from "./ui/SectionWrapper";

function FiremantleFilms() {
  return (
    <SectionWrapper>
      <section id="films" className="scroll-mt-24 py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}

            <div>
              <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
                <p className="text-yellow-400 uppercase tracking-[4px] mb-6 pl-4">
                  Featured Production
                </p>
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <iframe
                    className="w-full aspect-video"
                    src="https://www.youtube.com/embed/ZiFoa5SZHPg"
                    title="Firemantle Films"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition duration-500"></div>

                {/* Play Button */}
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="bg-red-600 hover:bg-red-700 w-24 h-24 rounded-full flex items-center justify-center shadow-2xl transition duration-300 hover:scale-110">
                    <FaPlay className="text-white text-4xl ml-2" />
                  </div>
                </a>
              </div>
            </div>

            {/* RIGHT */}

            <div>
              <p className="uppercase text-yellow-400 tracking-[5px]">
                Media Ministry
              </p>

              <h2 className="text-5xl font-bold mt-4">
                Firemantle Films Production
              </h2>

              <p className="mt-8 text-gray-300 leading-8">
                Firemantle Films Production is the media arm of Firemantle
                Gospel Outreach Ministry. We use storytelling, cinematography
                and digital media to proclaim Jesus Christ, inspire purpose, and
                transform lives.
              </p>

              {/* Features */}

              <div className="space-y-6 mt-10">
                <div className="flex items-center gap-4">
                  <FaVideo className="text-yellow-400 text-3xl" />

                  <span>Christian Movies</span>
                </div>

                <div className="flex items-center gap-4">
                  <FaCamera className="text-yellow-400 text-3xl" />

                  <span>Photography & Events</span>
                </div>

                <div className="flex items-center gap-4">
                  <FaFilm className="text-yellow-400 text-3xl" />

                  <span>Documentaries & Short Films</span>
                </div>
              </div>

              <button className="mt-12 bg-yellow-500 text-black px-8 py-4 rounded-full hover:bg-yellow-400 transition">
                Explore Firemantle Films
              </button>
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}

export default FiremantleFilms;
