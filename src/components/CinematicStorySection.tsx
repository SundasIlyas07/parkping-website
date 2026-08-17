import { useState, useEffect } from 'react';
import {
  AlertTriangle,
  QrCode,
  Smartphone,
  MessageSquare,
  Bell,
  CheckCircle2,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { QrVectorCode } from './QrVectorCode';

export const CinematicStorySection: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const stages = [
    {
      id: 0,
      title: '1. The Parking Obstruction',
      subtitle: 'Frustration & Zero Contact Details',
      badge: 'Scenario: Vehicle Blocked',
      badgeClass: 'badge-tag-amber',
      icon: <AlertTriangle className="w-6 h-6 text-amber-400" />,
      desc: 'A driver returns to their car in a crowded plaza, only to find another sedan double-parked directly behind them. No phone card is on the dashboard, and an urgent appointment is approaching.',
      visualNote: 'Traditional Failure: Paper notes blow away. Handwritten phone numbers expose drivers to spam and stalking.'
    },
    {
      id: 1,
      title: '2. QR Sticker Discovery',
      subtitle: 'Privacy-First Windshield Badge',
      badge: 'Discovery: ParkPing Sticker',
      badgeClass: 'badge-tag-cyan',
      icon: <QrCode className="w-6 h-6 text-[#00F0FF]" />,
      desc: 'Inspecting the windshield, the driver notices an official ParkPing QR code sticker affixed cleanly to the driver-side glass.',
      visualNote: 'Contactless Guarantee: The owner’s phone number and email address remain 100% hidden.'
    },
    {
      id: 2,
      title: '3. Camera Scan & Plate Target',
      subtitle: 'Sub-50ms Profile Matching',
      badge: 'Scan: Target Identified',
      badgeClass: 'badge-tag',
      icon: <Smartphone className="w-6 h-6 text-blue-400" />,
      desc: 'Pointing any smartphone camera at the sticker (or entering plate string "ABC-1234") instantly resolves the vehicle profile record.',
      visualNote: 'Database Match: Honda Civic • Color: Midnight Black • Status: Admin Verified ✓'
    },
    {
      id: 3,
      title: '4. Anonymous Message Dispatch',
      subtitle: 'Encrypted Socket.IO Chat',
      badge: 'Contact: Masked Session',
      badgeClass: 'badge-tag-cyan',
      icon: <MessageSquare className="w-6 h-6 text-[#00F0FF]" />,
      desc: 'The driver taps "Request Move" and sends: "Hi, your vehicle is blocking my sedan. Could you please move it?"',
      visualNote: 'Privacy Shield: Communication occurs strictly over tokenized WebSockets with zero phone number exposure.'
    },
    {
      id: 4,
      title: '5. Instant FCM Push Notification',
      subtitle: 'Background Alert Delivery',
      badge: 'Alert: FCM Delivered <50ms',
      badgeClass: 'badge-tag-emerald',
      icon: <Bell className="w-6 h-6 text-emerald-400" />,
      desc: 'Three floors up in a coffee shop, the vehicle owner’s smartphone screen lights up with an instant Firebase push notification.',
      visualNote: 'Socket Grace Engine: High-priority FCM alert delivered even when the mobile app is locked or in background.'
    },
    {
      id: 5,
      title: '6. Peaceful Conflict Resolution',
      subtitle: 'Owner Responds & Vehicle Moves',
      badge: 'Resolution: Conflict Solved',
      badgeClass: 'badge-tag-emerald',
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-400" />,
      desc: 'The owner replies: "On my way down right now!", walks to the garage, and moves the vehicle. Friction resolved in under 2 minutes.',
      visualNote: 'Zero Friction: No shouting, no identity leaks, no $200+ towing fees.'
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPlaying, stages.length]);

  return (
    <section id="cinematic-story" className="py-28 bg-[#04060E] relative border-b border-white/5 overflow-hidden">
      {/* Background Glow Filter */}
      <div className="ambient-glow-1" />

      <div className="container-pad relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-tag-cyan mb-4">
            <Sparkles className="w-4 h-4 text-[#00F0FF]" />
            <span>Cinematic Product Demonstration</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-6">
            From Parking Frustration To <br className="hidden sm:inline" />
            <span className="gradient-text-blue">Instant Peaceful Resolution</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Follow the step-by-step visual story of how ParkPing transforms everyday driveway blockages into effortless, contactless communication.
          </p>
        </div>

        {/* Transition Highlight Statement */}
        <div className="glass-panel p-6 mb-16 max-w-4xl mx-auto border border-blue-500/30 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-[#00F0FF]/10 to-blue-600/10 pointer-events-none" />
          <p className="font-heading font-extrabold text-lg sm:text-xl text-white relative z-10">
            "What if you could contact the vehicle owner instantly — <span className="gradient-text-blue">without exposing personal phone numbers or leaving paper notes?</span>"
          </p>
        </div>

        {/* Main 2-Column Storyboard Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Interactive 3D Visual Stage */}
          <div className="lg:col-span-7">
            <div className="relative bg-[#080D1D] border border-blue-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden min-h-[460px] flex flex-col justify-between">
              {/* Stage Top Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#00F0FF]" />
                  <div>
                    <span className="text-xs font-bold text-white uppercase tracking-wider block">
                      ParkPing Visual Ad Stage
                    </span>
                    <span className="text-[11px] text-slate-400">Phase 2 Interactive Storyboard</span>
                  </div>
                </div>
                {/* Control Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                    title={isPlaying ? 'Pause Auto Presentation' : 'Play Auto Presentation'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-[#00F0FF]" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveStage(0)}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                    title="Restart Story"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* STAGE DISPLAY AREA */}
              <div className="relative flex-1 bg-[#030612] border border-white/10 rounded-2xl p-6 flex flex-col justify-between overflow-hidden">
                {/* STAGE 0: OBSTRUCTION */}
                {activeStage === 0 && (
                  <div className="flex flex-col h-full justify-between animate-fadeIn">
                    <div className="flex items-center justify-between">
                      <span className="badge-tag-amber text-xs">Stage 1: Obstruction</span>
                      <span className="text-[11px] text-amber-400 font-mono">No Phone Card Visible</span>
                    </div>

                    <div className="my-6 relative p-5 bg-amber-950/20 border border-amber-500/40 rounded-2xl flex items-center gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0">
                        <AlertTriangle className="w-8 h-8 text-amber-400 animate-pulse" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-base text-white">Vehicle Blocked in Commercial Plaza</h4>
                        <p className="text-xs text-slate-300 mt-1">
                          Sedan (ABC-1234) is double-parked behind a driver who has an urgent meeting in 10 minutes.
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 bg-red-950/30 border border-red-500/20 rounded-xl text-xs text-red-200">
                      <strong>Problem:</strong> Paper notes blow away. Public phone cards risk stalking & web scraping. Towing takes hours.
                    </div>
                  </div>
                )}

                {/* STAGE 1: DISCOVERY */}
                {activeStage === 1 && (
                  <div className="flex flex-col h-full justify-between animate-fadeIn">
                    <div className="flex items-center justify-between">
                      <span className="badge-tag-cyan text-xs">Stage 2: Discovery</span>
                      <span className="text-[11px] text-[#00F0FF] font-mono">ParkPing QR Detected</span>
                    </div>

                    <div className="my-6 p-6 bg-[#0A1228] border border-blue-500/40 rounded-2xl flex flex-col items-center justify-center text-center">
                      <div className="relative mb-4">
                        <QrVectorCode className="w-24 h-24" />
                      </div>
                      <span className="text-xs font-bold text-white uppercase tracking-wider">
                        Official ParkPing Windshield Sticker
                      </span>
                      <p className="text-xs text-slate-400 mt-1">
                        100% Identity Masked • Instant Camera Scan Ready
                      </p>
                    </div>

                    <div className="p-3.5 bg-blue-950/40 border border-blue-500/30 rounded-xl text-xs text-blue-200">
                      <strong>Contactless Discovery:</strong> Driver steps up to the vehicle and notices the ParkPing QR sticker on the windshield.
                    </div>
                  </div>
                )}

                {/* STAGE 2: SCAN */}
                {activeStage === 2 && (
                  <div className="flex flex-col h-full justify-between animate-fadeIn">
                    <div className="flex items-center justify-between">
                      <span className="badge-tag text-xs">Stage 3: Scan & Match</span>
                      <span className="text-[11px] text-blue-400 font-mono">Laser Focus Active</span>
                    </div>

                    <div className="relative my-4 p-5 bg-[#060D20] border border-blue-500/50 rounded-2xl flex items-center justify-between">
                      <div className="relative shrink-0">
                        <QrVectorCode className="w-20 h-20" />
                        <div className="animate-scan" />
                      </div>
                      <div className="ml-4 flex-1">
                        <span className="badge-tag-emerald text-[10px] mb-1">Vehicle Record Found</span>
                        <h4 className="font-heading font-bold text-sm text-white">Honda Civic (ABC-1234)</h4>
                        <p className="text-xs text-slate-300 mt-1">Status: Verified Vehicle ✓</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">Owner Contact: Fully Masked & Encrypted</p>
                      </div>
                    </div>

                    <div className="p-3.5 bg-blue-950/40 border border-blue-500/30 rounded-xl text-xs text-blue-200">
                      <strong>Camera Scan:</strong> Target crosshair resolves plate string "ABC-1234" in under 50ms.
                    </div>
                  </div>
                )}

                {/* STAGE 3: CONTACT */}
                {activeStage === 3 && (
                  <div className="flex flex-col h-full justify-between animate-fadeIn">
                    <div className="flex items-center justify-between">
                      <span className="badge-tag-cyan text-xs">Stage 4: Masked Chat</span>
                      <span className="text-[11px] text-[#00F0FF] font-mono">Socket.IO Encrypted</span>
                    </div>

                    <div className="my-4 space-y-3">
                      <div className="p-3.5 bg-slate-800/90 rounded-2xl rounded-tl-none text-xs text-slate-100 max-w-[88%] border border-slate-700">
                        <span className="text-[10px] font-bold text-[#00F0FF] block mb-1">
                          Bystander Driver (Anonymous)
                        </span>
                        "Hi, your vehicle (ABC-1234) is blocking my car. Could you please move it?"
                      </div>
                    </div>

                    <div className="p-3.5 bg-cyan-950/30 border border-cyan-500/30 rounded-xl text-xs text-cyan-200">
                      <strong>Encrypted Dispatch:</strong> Message is routed via WebSocket server without revealing cell numbers.
                    </div>
                  </div>
                )}

                {/* STAGE 4: NOTIFICATION */}
                {activeStage === 4 && (
                  <div className="flex flex-col h-full justify-between animate-fadeIn">
                    <div className="flex items-center justify-between">
                      <span className="badge-tag-emerald text-xs">Stage 5: FCM Push Alert</span>
                      <span className="text-[11px] text-emerald-400 font-mono">Background Delivered</span>
                    </div>

                    <div className="my-4 p-4 bg-emerald-950/40 border border-emerald-500/40 rounded-2xl flex items-start gap-4 shadow-xl">
                      <div className="p-3 bg-emerald-600 rounded-2xl shrink-0 animate-bounce">
                        <Bell className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-xs font-extrabold text-white">ParkPing Instant Alert</span>
                          <span className="text-[10px] text-slate-400">Just Now</span>
                        </div>
                        <p className="text-xs text-emerald-200 font-semibold mt-1">
                          "Immediate Move Request for Vehicle ABC-1234."
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 bg-emerald-950/30 border border-emerald-500/30 rounded-xl text-xs text-emerald-300">
                      <strong>Instant Push:</strong> FCM push notification arrives on the owner’s phone even when the app is locked.
                    </div>
                  </div>
                )}

                {/* STAGE 5: RESOLUTION */}
                {activeStage === 5 && (
                  <div className="flex flex-col h-full justify-between animate-fadeIn">
                    <div className="flex items-center justify-between">
                      <span className="badge-tag-emerald text-xs">Stage 6: Problem Solved</span>
                      <span className="text-[11px] text-emerald-400 font-mono">Vehicle Cleared</span>
                    </div>

                    <div className="my-4 p-5 bg-emerald-900/30 border border-emerald-500/40 rounded-2xl flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-base text-white">Vehicle Moved Peaceful Resolution</h4>
                        <p className="text-xs text-slate-200 mt-1">
                          Owner replied: "On my way down right now!" and cleared the obstruction in under 2 minutes.
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 bg-emerald-950/40 border border-emerald-500/40 rounded-xl text-xs text-emerald-200 font-medium">
                      <strong>Complete Success:</strong> 100% privacy maintained. Zero towing fees. Zero aggressive confrontation.
                    </div>
                  </div>
                )}
              </div>

              {/* Stage Progress Bar Footer */}
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-semibold text-white">{stages[activeStage].title}</span>
                <span className="text-xs font-mono text-slate-400">Stage {activeStage + 1} of 6</span>
              </div>
            </div>
          </div>

          {/* Right Column: Story Timeline Navigation */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {stages.map((stg) => {
              const isActive = activeStage === stg.id;
              return (
                <div
                  key={stg.id}
                  onClick={() => {
                    setActiveStage(stg.id);
                    setIsPlaying(false);
                  }}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                    isActive
                      ? 'bg-[#0E182E] border-[#00F0FF] shadow-[0_0_20px_rgba(0,240,255,0.15)] scale-[1.02]'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-xl shrink-0 ${
                      isActive ? 'bg-[#0B65ED] text-white' : 'bg-white/5 text-slate-400'
                    }`}
                  >
                    {stg.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className={`font-heading font-bold text-sm ${isActive ? 'text-white' : 'text-slate-300'}`}>
                        {stg.title}
                      </h4>
                      {isActive && <ShieldCheck className="w-4 h-4 text-[#00F0FF]" />}
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{stg.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
