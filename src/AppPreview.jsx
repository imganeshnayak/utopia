import { useEffect, useRef, useState } from "react";
import {
  Wifi,
  Bluetooth,
  Plane,
  Music,
  PlayCircle,
  CloudSun,
  Tag,
  MapPin,
  Signal,
  Battery,
  ChevronDown,
  Bell,
  Search,
  Plus,
  Home,
  Map,
  ScanLine,
  Ticket,
  User,
  BellRing,
  Scan,
  HelpCircle,
  Globe,
  Lock,
} from "lucide-react";

const AppPreview = () => {
  const sectionRef = useRef(null);
  const scrollTriggerRef = useRef(null);
  const drawerRef = useRef(null);
  const [drawerTransform, setDrawerTransform] = useState(-100);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal-up");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const isMobile = () => window.innerWidth < 1024;

    const handleScroll = () => {
      if (isMobile() || !scrollTriggerRef.current) return;

      const rect = scrollTriggerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const startOffset = windowHeight * 0.8;
      const distanceToScroll = rect.height * 0.7;

      let scrollDistance = startOffset - rect.top;
      let progress = scrollDistance / distanceToScroll;
      progress = Math.max(0, Math.min(1, progress));
      const translateValue = -100 + progress * 100;

      setDrawerTransform(translateValue);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 border-t border-white/5 bg-zinc-900/30"
      id="app-preview-section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Phone Preview */}
          <div className="order-2 lg:order-1 perspective-wrapper sticky top-32 self-start z-10">
            <div
              className="floating-card relative w-full max-w-sm mx-auto lg:mx-0 aspect-[9/18] bg-zinc-950 border border-zinc-800 rounded-[2.5rem] shadow-2xl overflow-hidden p-2"
              id="phone-container"
            >
              <div
                className="w-full h-full bg-zinc-900 rounded-[2rem] overflow-hidden relative reveal-active"
                id="phone-screen"
              >
                {/* Notification Drawer */}
                <div
                  ref={drawerRef}
                  className="notification-drawer absolute top-0 left-0 w-full h-[85%] glass-prism-bg z-40 rounded-b-3xl pt-12 px-5 border-b border-white/20 flex flex-col gap-3"
                  style={{
                    transform: `translateY(${drawerTransform}%)`,
                  }}
                >
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50"></div>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/20 rounded-full backdrop-blur-sm drawer-handle"></div>

                  {/* Quick Settings */}
                  <div className="flex gap-3 mt-2">
                    <div className="flex-1 h-16 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-1">
                      <Wifi className="w-4 h-4 text-white" />
                      <span className="text-[9px] text-zinc-400">Wi-Fi</span>
                    </div>
                    <div className="flex-1 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex flex-col items-center justify-center gap-1">
                      <Bluetooth className="w-4 h-4 text-emerald-400 floating-icon" />
                      <span className="text-[9px] text-emerald-100">On</span>
                    </div>
                    <div className="flex-1 h-16 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-1">
                      <Plane className="w-4 h-4 text-zinc-400" />
                      <span className="text-[9px] text-zinc-400">Mode</span>
                    </div>
                  </div>

                  {/* Now Playing */}
                  <div className="p-3 bg-black/30 rounded-2xl border border-white/5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-zinc-800 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-500 animate-pulse"></div>
                      <Music className="w-4 h-4 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-white font-medium">
                        Urban Vibes
                      </p>
                      <p className="text-[10px] text-zinc-500">Now Playing</p>
                    </div>
                    <PlayCircle className="w-6 h-6 text-white fill-white/20" />
                  </div>

                  {/* Weather */}
                  <div className="flex gap-3 items-center p-3 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl border border-blue-500/10">
                    <CloudSun className="w-6 h-6 text-blue-300" />
                    <div>
                      <p className="text-xs text-blue-100 font-medium">
                        Partly Cloudy
                      </p>
                      <p className="text-[10px] text-blue-300/70">
                        New York, 72°F
                      </p>
                    </div>
                  </div>

                  {/* Notifications */}
                  <div className="space-y-2 mt-1">
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest pl-1">
                      Notification Center
                    </p>

                    <div className="flex gap-3 items-center p-3 bg-black/40 rounded-2xl border border-white/10 backdrop-blur-sm shadow-sm hover:bg-white/5 transition-colors">
                      <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.2)] floating-icon">
                        <Tag className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] text-zinc-400 font-semibold">
                          Just Now
                        </p>
                        <p className="text-xs text-white font-medium">
                          Flash: 50% Off at Artisan
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-center p-3 bg-black/40 rounded-2xl border border-white/10 backdrop-blur-sm shadow-sm hover:bg-white/5 transition-colors">
                      <div className="w-8 h-8 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.2)] floating-icon">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] text-zinc-400 font-semibold">
                          2m ago
                        </p>
                        <p className="text-xs text-white font-medium">
                          Entered SoHo District
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="absolute top-0 w-full h-8 flex justify-between items-center px-6 text-[10px] text-zinc-500 z-50 pointer-events-none">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <Signal className="w-3 h-3" />
                    <Battery className="w-3 h-3" />
                  </div>
                </div>

                {/* Main Content */}
                <div className="pt-12 px-4 pb-4 h-full flex flex-col relative z-10">
                  <div className="flex justify-between items-end mb-6 phone-element phone-delay-1">
                    <div>
                      <p className="text-xs text-zinc-400">Location</p>
                      <div className="flex items-center gap-1 text-sm font-medium text-white">
                        SoHo, NYC{" "}
                        <ChevronDown className="w-3 h-3 text-zinc-500" />
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center relative">
                      <Bell className="w-4 h-4 text-zinc-400" />
                      <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-zinc-900 phone-element phone-delay-5"></span>
                    </div>
                  </div>

                  <div className="bg-zinc-800/50 rounded-xl p-3 flex items-center gap-2 mb-6 border border-white/5 phone-element phone-delay-2">
                    <Search className="w-4 h-4 text-zinc-500" />
                    <span className="text-xs text-zinc-500">
                      Find coffee, gear, food...
                    </span>
                  </div>

                  <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar mb-2 phone-element phone-delay-3">
                    <span className="bg-white text-black px-4 py-1.5 rounded-full text-[10px] font-semibold whitespace-nowrap shadow-lg shadow-white/10">
                      For You
                    </span>
                    <span className="bg-zinc-800 text-zinc-400 px-4 py-1.5 rounded-full text-[10px] whitespace-nowrap border border-white/5">
                      Food
                    </span>
                    <span className="bg-zinc-800 text-zinc-400 px-4 py-1.5 rounded-full text-[10px] whitespace-nowrap border border-white/5">
                      Retail
                    </span>
                  </div>

                  <div className="bg-zinc-800/30 border border-white/5 rounded-2xl p-3 mb-3 hover:bg-zinc-800/50 transition-colors cursor-pointer group phone-element phone-delay-4">
                    <div className="h-24 bg-zinc-800 rounded-xl mb-3 relative overflow-hidden offer-image coffee-shop">
                      <div className="absolute inset-0 bg-gradient-to-br from-zinc-700/80 to-zinc-800/80 group-hover:scale-105 transition-transform duration-500"></div>
                      <div className="absolute top-2 left-2 bg-white/90 text-black text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur shadow-sm">
                        -40% OFF
                      </div>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xs font-medium text-white">
                          Artisan Coffee House
                        </h4>
                        <p className="text-[10px] text-zinc-500 mt-0.5">
                          Valid until 4:00 PM today
                        </p>
                      </div>
                      <div className="bg-white text-black w-6 h-6 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                        <Plus className="w-3 h-3" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-800/30 border border-white/5 rounded-2xl p-3 mb-3 phone-element phone-delay-5">
                    <div className="flex gap-3 items-center">
                      <div className="w-12 h-12 bg-zinc-700 rounded-lg shrink-0 offer-image clothing-store"></div>
                      <div>
                        <h4 className="text-xs font-medium text-white">
                          Urban Outfitters
                        </h4>
                        <p className="text-[10px] text-zinc-500 mt-0.5">
                          Flash Sale: 20% on Denim
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="absolute bottom-4 left-4 right-4 h-14 bg-zinc-950/90 backdrop-blur-xl rounded-2xl border border-white/10 flex justify-around items-center px-2 z-30 phone-nav-reveal">
                  <Home className="w-5 h-5 text-white" />
                  <Map className="w-5 h-5 text-zinc-600 hover:text-zinc-400 transition-colors" />
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center -mt-8 border-[4px] border-zinc-900 shadow-lg shadow-emerald-500/20">
                    <ScanLine className="w-5 h-5 text-zinc-950" />
                  </div>
                  <Ticket className="w-5 h-5 text-zinc-600 hover:text-zinc-400 transition-colors" />
                  <User className="w-5 h-5 text-zinc-600 hover:text-zinc-400 transition-colors" />
                </div>

                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none z-20"></div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div
            ref={scrollTriggerRef}
            className="order-1 lg:order-2 space-y-32 py-12 min-h-[160vh]"
            id="scroll-trigger-section"
          >
            <div className="reveal-up space-y-6" id="shoppers">
              <div className="inline-flex items-center gap-2 text-emerald-500 text-xs font-medium tracking-wide uppercase">
                <MapPin className="w-3 h-3" /> For Shoppers
              </div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white">
                Unlock the city around you.
              </h2>
              <p className="text-zinc-400 text-base font-light leading-relaxed max-w-md">
                Stop missing out on what's right in front of you. Utopia curates
                real-time offers from the best local businesses based on your
                location and preferences.
              </p>
            </div>

            <div className="reveal-up space-y-8">
              <h3 className="text-2xl font-medium text-white">
                Why use Utopia?
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                    <BellRing className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">
                      Real-time Notifications
                    </h4>
                    <p className="text-zinc-500 text-xs mt-1">
                      Get pinged the moment you walk past a deal.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                    <Scan className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">
                      Instant Redemption
                    </h4>
                    <p className="text-zinc-500 text-xs mt-1">
                      No coupons to print. Just scan and save.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="reveal-up space-y-8">
              <h3 className="text-2xl font-medium text-white border-t border-white/5 pt-8">
                Frequently Asked Questions
              </h3>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors">
                  <h4 className="text-sm font-medium text-white mb-2 flex items-center gap-2">
                    <HelpCircle className="w-3 h-3 text-zinc-400" /> Is the app
                    free to use?
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Yes, Utopia is completely free for shoppers. You only pay
                    for what you buy at the merchant.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors">
                  <h4 className="text-sm font-medium text-white mb-2 flex items-center gap-2">
                    <Globe className="w-3 h-3 text-zinc-400" /> Where is Utopia
                    available?
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Currently active in NYC, London, and Tokyo. We are launching
                    in 5 new cities next month.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors">
                  <h4 className="text-sm font-medium text-white mb-2 flex items-center gap-2">
                    <Lock className="w-3 h-3 text-zinc-400" /> Is my location
                    data safe?
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Absolutely. Location data is processed locally on your
                    device and never sold to third parties.
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal-up">
              <p className="text-zinc-600 text-sm leading-relaxed max-w-md">
                "Utopia has completely changed how I explore my own
                neighborhood. I've found three new favorite coffee shops in just
                one week."
                <br />
                <br />— <span className="text-zinc-400">
                  Sarah J., Early Adopter
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
