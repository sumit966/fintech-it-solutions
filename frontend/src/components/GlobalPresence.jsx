import FadeInSection from "./FadeInSection";

export default function GlobalPresence() {
  return (
    <FadeInSection>
      <section className="py-28 bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-12 text-center text-white">
            Building Global Presence
          </h2>

          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            We're starting from India, but our vision is global. 
            Soon, we'll be serving startups across the world.
          </p>

          <div className="relative">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
              className="w-full opacity-90"
              alt="World Map"
            />

            {/* INDIA - Currently Here */}
            <div className="absolute top-[62%] left-[55%]">
              <div className="relative group">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-ping absolute"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="hidden group-hover:block absolute bg-[#1F2937] backdrop-blur-sm shadow-lg p-4 w-48 -left-20 top-6 rounded z-10 border border-[#2A2A2A]">
                  <h3 className="font-semibold text-green-400">🇮🇳 We Are Here</h3>
                  <p className="text-sm text-gray-300">
                    Pune, Maharashtra<br/>
                    Serving startups across India
                  </p>
                </div>
              </div>
            </div>

            {/* USA - Coming Soon */}
            <div className="absolute top-[45%] left-[25%]">
              <div className="relative group">
                <div className="w-4 h-4 bg-blue-500 rounded-full opacity-50"></div>
                <div className="hidden group-hover:block absolute bg-[#1F2937] backdrop-blur-sm shadow-lg p-4 w-48 -left-20 top-6 rounded z-10 border border-[#2A2A2A]">
                  <h3 className="font-semibold text-blue-400">🇺🇸 Coming Soon</h3>
                  <p className="text-sm text-gray-300">
                    Planning to expand to<br/>North America in 2025
                  </p>
                </div>
              </div>
            </div>

            {/* EUROPE - Coming Soon */}
            <div className="absolute top-[35%] left-[48%]">
              <div className="relative group">
                <div className="w-4 h-4 bg-purple-500 rounded-full opacity-50"></div>
                <div className="hidden group-hover:block absolute bg-[#1F2937] backdrop-blur-sm shadow-lg p-4 w-48 -left-20 top-6 rounded z-10 border border-[#2A2A2A]">
                  <h3 className="font-semibold text-purple-400">🇪🇺 Coming Soon</h3>
                  <p className="text-sm text-gray-300">
                    European expansion<br/>in our roadmap
                  </p>
                </div>
              </div>
            </div>

            {/* MIDDLE EAST - Coming Soon */}
            <div className="absolute top-[50%] left-[52%]">
              <div className="relative group">
                <div className="w-4 h-4 bg-orange-500 rounded-full opacity-50"></div>
                <div className="hidden group-hover:block absolute bg-[#1F2937] backdrop-blur-sm shadow-lg p-4 w-48 -left-20 top-6 rounded z-10 border border-[#2A2A2A]">
                  <h3 className="font-semibold text-orange-400">🇦🇪 Coming Soon</h3>
                  <p className="text-sm text-gray-300">
                    Middle East market<br/>in future plans
                  </p>
                </div>
              </div>
            </div>

            {/* ASIA-PACIFIC - Coming Soon */}
            <div className="absolute top-[60%] left-[70%]">
              <div className="relative group">
                <div className="w-4 h-4 bg-pink-500 rounded-full opacity-50"></div>
                <div className="hidden group-hover:block absolute bg-[#1F2937] backdrop-blur-sm shadow-lg p-4 w-48 -left-20 top-6 rounded z-10 border border-[#2A2A2A]">
                  <h3 className="font-semibold text-pink-400">🌏 Coming Soon</h3>
                  <p className="text-sm text-gray-300">
                    Asia-Pacific expansion<br/>in our vision
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Honest Note */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              ✨ Currently serving startups from India. Global expansion is in our roadmap.
            </p>
          </div>

        </div>
      </section>
    </FadeInSection>
  );
}