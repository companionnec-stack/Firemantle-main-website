import { FaCross, FaPrayingHands, FaVideo, FaUsers } from "react-icons/fa";

function MinistryArms() {
  const ministries = [
    {
      icon: <FaCross size={40} />,
      title: "Evangelism",
      description:
        "Taking the Gospel of Jesus Christ to communities and nations.",
    },

    {
      icon: <FaPrayingHands size={40} />,
      title: "Intercessory Hub",
      description:
        "Standing in the gap through prayer for individuals, families and nations.",
    },

    {
      icon: <FaVideo size={40} />,
      title: "Firemantle Films",
      description:
        "Producing Christ-centered films and media that transform lives.",
    },

    {
      icon: <FaUsers size={40} />,
      title: "Discipleship",
      description: "Raising believers to become mature followers of Christ.",
    },
  ];

  return (
    <section id="ministries" className="scroll-mt-24 py-32 bg-gray-100">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-center text-red-700">
          Ministry Arms
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
          Every ministry arm exists to fulfill one mission: proclaiming Christ
          and transforming lives.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {ministries.map((ministry, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-3 hover:shadow-2xl transition duration-300"
            >
              <div className="text-red-700 mb-6">{ministry.icon}</div>

              <h3 className="text-2xl font-bold">{ministry.title}</h3>

              <p className="mt-4 text-gray-600 leading-7">
                {ministry.description}
              </p>

              <button className="mt-8 text-red-700 font-semibold hover:text-yellow-500">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MinistryArms;
