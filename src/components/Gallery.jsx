import { useState } from "react";
import SectionWrapper from "./ui/SectionWrapper";

import photo1 from "../assets/images/gallery/photo1.jpg";
import photo2 from "../assets/images/gallery/photo2.jpg";
import photo3 from "../assets/images/gallery/photo3.jpg";
import photo4 from "../assets/images/gallery/photo4.jpg";
import photo5 from "../assets/images/gallery/photo5.jpg";
import photo6 from "../assets/images/gallery/photo6.jpg";
import photo7 from "../assets/images/gallery/photo7.jpg";
import photo8 from "../assets/images/gallery/photo8.jpg";

const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8];

function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  return (
    <SectionWrapper>
      <section
        id="gallery"
        className="scroll-mt-24 py-28 bg-gray-950 text-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}

          <div className="text-center mb-16">
            <p className="uppercase tracking-[4px] text-yellow-400">Gallery</p>

            <h2 className="text-5xl font-bold mt-4">
              Moments That Tell Our Story
            </h2>

            <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
              Every image reflects our passion for the Gospel, worship,
              outreach, discipleship and media excellence.
            </p>
          </div>

          {/* Gallery */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl shadow-xl group cursor-pointer"
              >
                <img
                  src={photo}
                  alt={`Gallery ${index + 1}`}
                  onClick={() => setSelectedIndex(index)}
                  className="w-full h-80 object-cover cursor-pointer group-hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {selectedIndex !== null && (
          <div
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Previous */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(
                  selectedIndex === 0 ? photos.length - 1 : selectedIndex - 1,
                );
              }}
              className="absolute left-8 text-white text-6xl hover:text-yellow-400 duration-300"
            >
              ❮
            </button>

            {/* Image */}
            <img
              src={photos[selectedIndex]}
              alt=""
              className="max-w-[90%] max-h-[90vh] rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(
                  selectedIndex === photos.length - 1 ? 0 : selectedIndex + 1,
                );
              }}
              className="absolute right-8 text-white text-6xl hover:text-yellow-400 duration-300"
            >
              ❯
            </button>

            {/* Close */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-8 text-white text-5xl hover:text-red-500"
            >
              ✕
            </button>
          </div>
        )}
      </section>
    </SectionWrapper>
  );
}

export default Gallery;
