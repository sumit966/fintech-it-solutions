import FadeInSection from "./FadeInSection";
import { useState } from "react";

export default function OfficeMap() {
  const [activeOffice, setActiveOffice] = useState(null);

  const offices = [
    {
      id: 'pune',
      name: 'Pune Headquarters',
      city: 'Pune',
      color: 'red',
      description: 'Main hub - where I build everything from scratch.',
      address: 'Hinjewadi Phase 3, Pune - 411057',
      icon: '🏢',
      coordinates: { top: '58%', left: '38%' },
      employees: '1 founder',
      year: '2026'
    },
    {
      id: 'noida',
      name: 'Future Noida Office',
      city: 'Noida',
      color: 'blue',
      description: 'Planned expansion - coming soon!',
      address: 'Sector 62, Noida - 201309',
      icon: '🚀',
      coordinates: { top: '32%', left: '48%' },
      employees: 'Coming soon',
      year: '2026'
    },
    {
      id: 'bangalore',
      name: 'Future Bangalore Office',
      city: 'Bangalore',
      color: 'green',
      description: 'Planned expansion - coming soon!',
      address: 'Whitefield, Bangalore - 560066',
      icon: '☁️',
      coordinates: { top: '68%', left: '44%' },
      employees: 'Coming soon',
      year: '2026'
    }
  ];

  return (
    <FadeInSection>
      <section className="py-28 bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-4 text-white">
            Our Presence
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl">
            Starting from Pune, with big dreams to expand across India.
          </p>

          {/* Digital Map Container */}
          <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-[#1F2937]">
            {/* Digital Map SVG */}
            <div className="relative w-full" style={{ paddingBottom: '60%' }}>
              <svg
                viewBox="0 0 800 500"
                className="absolute top-0 left-0 w-full h-full"
                style={{ background: '#0F172A' }}
              >
                {/* India Outline - Simplified geographic shape */}
                <path
                  d="M400,80 L480,120 L520,160 L560,200 L600,250 L580,300 L540,340 L480,370 L420,390 L360,380 L300,350 L240,310 L200,260 L180,210 L190,160 L220,120 L270,90 L330,75 L400,80"
                  fill="rgba(59,130,246,0.1)"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeOpacity="0.5"
                />

                {/* Internal state lines */}
                <path d="M400,80 L400,390" stroke="#94a3b8" strokeWidth="1" strokeDasharray="5,5" opacity="0.3" />
                <path d="M200,200 L600,200" stroke="#94a3b8" strokeWidth="1" strokeDasharray="5,5" opacity="0.3" />
                <path d="M250,300 L550,300" stroke="#94a3b8" strokeWidth="1" strokeDasharray="5,5" opacity="0.3" />

                {/* Major rivers (decorative) */}
                <path d="M350,120 L340,180 L330,240 L320,300 L310,360" stroke="#90cdf4" strokeWidth="2" opacity="0.4" fill="none" />
                <path d="M450,140 L440,200 L430,260 L420,320 L410,380" stroke="#90cdf4" strokeWidth="2" opacity="0.4" fill="none" />

                {/* Office Markers */}
                {offices.map((office) => (
                  <g key={office.id}>
                    {/* Pulsing circle - only for Pune (active) */}
                    {office.id === 'pune' && (
                      <circle
                        cx={340}
                        cy={310}
                        r="8"
                        fill="#EF4444"
                        stroke="white"
                        strokeWidth="2"
                        className="animate-ping"
                        opacity="0.7"
                      />
                    )}
                    
                    {/* Main markers - different styles for active vs planned */}
                    <circle
                      cx={office.id === 'pune' ? 340 : office.id === 'noida' ? 420 : 380}
                      cy={office.id === 'pune' ? 310 : office.id === 'noida' ? 170 : 360}
                      r={office.id === 'pune' ? 12 : 8}
                      fill={office.id === 'pune' ? '#EF4444' : office.id === 'noida' ? '#94a3b8' : '#94a3b8'}
                      stroke="white"
                      strokeWidth="3"
                      className="cursor-pointer transition-all duration-300 hover:r-14"
                      onMouseEnter={() => setActiveOffice(office.id)}
                      onMouseLeave={() => setActiveOffice(null)}
                    />

                    {/* Tooltip on hover */}
                    {activeOffice === office.id && (
                      <g>
                        <rect
                          x={(office.id === 'pune' ? 340 : office.id === 'noida' ? 420 : 380) - 80}
                          y={(office.id === 'pune' ? 310 : office.id === 'noida' ? 170 : 360) - 80}
                          width="160"
                          height="70"
                          rx="8"
                          fill="#1F2937"
                          stroke="#3B82F6"
                          strokeWidth="1"
                        />
                        <text
                          x={(office.id === 'pune' ? 340 : office.id === 'noida' ? 420 : 380) - 70}
                          y={(office.id === 'pune' ? 310 : office.id === 'noida' ? 170 : 360) - 55}
                          fill="#FFFFFF"
                          fontSize="12"
                          fontWeight="bold"
                        >{office.name}</text>
                        <text
                          x={(office.id === 'pune' ? 340 : office.id === 'noida' ? 420 : 380) - 70}
                          y={(office.id === 'pune' ? 310 : office.id === 'noida' ? 170 : 360) - 40}
                          fill="#9CA3AF"
                          fontSize="10"
                        >{office.city}</text>
                        <text
                          x={(office.id === 'pune' ? 340 : office.id === 'noida' ? 420 : 380) - 70}
                          y={(office.id === 'pune' ? 310 : office.id === 'noida' ? 170 : 360) - 25}
                          fill={office.id === 'pune' ? '#10B981' : '#94a3b8'}
                          fontSize="10"
                          fontWeight="bold"
                        >{office.employees}</text>
                        <text
                          x={(office.id === 'pune' ? 340 : office.id === 'noida' ? 420 : 380) - 70}
                          y={(office.id === 'pune' ? 310 : office.id === 'noida' ? 170 : 360) - 10}
                          fill="#3B82F6"
                          fontSize="9"
                        >Est. {office.year}</text>
                      </g>
                    )}
                  </g>
                ))}

                {/* City labels */}
                <text x="300" y="330" fill="#9CA3AF" fontSize="10" fontWeight="500">Pune</text>
                <text x="420" y="150" fill="#9CA3AF" fontSize="10" fontWeight="500">Noida (Future)</text>
                <text x="400" y="390" fill="#9CA3AF" fontSize="10" fontWeight="500">Bangalore (Future)</text>
              </svg>
            </div>

            {/* Map Legend */}
            <div className="flex justify-center gap-8 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-sm text-gray-300">Current Office</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                <span className="text-sm text-gray-300">Planned Expansion</span>
              </div>
            </div>
          </div>

          {/* Office Details Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {offices.map((office) => (
              <div
                key={office.id}
                className={`bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[#1F2937] p-6 rounded-xl shadow-md transition-all duration-300 ${
                  activeOffice === office.id ? 'ring-2 ring-blue-500 scale-105' : ''
                } ${office.id !== 'pune' ? 'opacity-75' : ''}`}
                onMouseEnter={() => setActiveOffice(office.id)}
                onMouseLeave={() => setActiveOffice(null)}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${office.id === 'pune' ? 'bg-red-500/20' : 'bg-gray-500/20'} rounded-lg flex items-center justify-center text-2xl`}>
                    {office.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">{office.name}</h3>
                    <p className="text-sm text-gray-400 mt-1">{office.address}</p>
                    <div className="flex items-center gap-4 mt-3">
                      <span className="text-xs text-gray-500">👥 {office.employees}</span>
                      <span className="text-xs text-gray-500">📍 {office.city}</span>
                      <span className="text-xs text-gray-500">📅 {office.year}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">{office.description}</p>
                    {office.id !== 'pune' && (
                      <span className="inline-block mt-3 text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">
                        🚧 Planned for 2026
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Honest Stats Summary */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-[#1F2937]">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">1</div>
              <div className="text-sm text-gray-400 mt-1">Current Location</div>
              <div className="text-xs text-gray-600">Pune</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">1</div>
              <div className="text-sm text-gray-400 mt-1">Team Size</div>
              <div className="text-xs text-gray-600">Solo Founder</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">2026</div>
              <div className="text-sm text-gray-400 mt-1">Founded</div>
              <div className="text-xs text-gray-600">Brand new!</div>
            </div>
          </div>

          {/* Honest Note */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 bg-[rgba(255,255,255,0.05)] inline-block px-6 py-3 rounded-full shadow-sm">
              ✨ Starting from Pune, with dreams to expand across India. Watch this space!
            </p>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}