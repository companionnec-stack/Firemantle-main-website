import { FaEye, FaBullseye } from "react-icons/fa";

function VisionMission() {
  return (
    <section id="vision" className="scroll-mt-24 py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-red-700">
            Our Vision & Mission
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
            Everything we do is driven by a God-given vision and a clear mission
            to impact lives through the Gospel of Jesus Christ.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Vision */}
          <div className="bg-linear-to-br from-red-700 to-red-900 text-white rounded-3xl p-10 shadow-xl hover:-translate-y-2 transition duration-300">
            <FaEye className="text-5xl text-yellow-400 mb-6" />

            <h3 className="text-3xl font-bold mb-6">Our Vision</h3>

            <p className="leading-8 text-gray-100">
              To ignite souls into discovering, developing, and fulfilling God's
              divine purpose while raising a generation that passionately
              advances His Kingdom.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-xl hover:-translate-y-2 transition duration-300">
            <FaBullseye className="text-5xl text-red-700 mb-6" />

            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>

            <p className="leading-8 text-gray-600">
              To proclaim the Gospel of Jesus Christ through evangelism,
              discipleship, prayer, media, leadership development, and community
              outreach, equipping believers to live purpose-driven lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
