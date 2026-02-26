import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useSelector } from "react-redux";
import { Coins } from "lucide-react";

function Home() {
  const highlights = [
    "AI-Powered Website Generation",
    "Customizable Templates",
    "Responsive Design",
  ];
  const [openLogin, setOpenLogin] = useState(false); //donot login now
  const { userData } = useSelector((state) => state.user); //to get userdata from redux store and useSelector is used to get data from redux store and state.user is user slice and userData is the data we want to get
  const { openProfile, setOpenProfile } = useState(false);
  //user data lekr ayege

  return (
    <div className="relative min-h-screen bg-[#040404] text-white overflow-hidden">
      <motion.div //motion is used for animations
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }} //y is original position and opacity is original opacity
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-lg font-semibold">WebGen.ai</div>
          <div className="flex items-center gap-5">
            <div className="hidden md:inline text-sm text-zinc-400 hover:text-white cursor-pointer">
              Pricing
            </div>
            {userData && (
              <div className=" hidden  md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border-white/10 text-sm cursor-pointer hover:bg-white/10 transition">
                <Coins size={14} className="text-yellow-400" />
                <span className="text-zinc-300">Credits</span>
                <span>{userData.credits}</span>
                <span className="font-semibold">+</span>
              </div>
            )}
            {!userData ? (
              <button
                className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 text-sm"
                onClick={() => setOpenLogin(true)}
              >
                Get Started
              </button>
            ) : (
              <div className="relative">
                <button
                  className="flex items-center"
                  onClick={() => setOpenProfile(!openProfile)}
                >
                  <img
                    src={
                      userData.avatar ||
                      `https://ui-avatars.com/api/?name=${userData.name}`
                    } //if userData.avatar is not available then use ui-avatars to generate avatar based on user name
                    alt=""
                    className="w-9 h-9 rounded-full border border-white/20 object-cover"
                  />
                </button>
                <AnimatePresence>
                  {openProfile && (
                    <>
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        className="absolute right-0 mt-3 w-60 z-50 rounded-xl bg-[#0b0b0b] border border-white/10"
                      >
                        <div className="px-4 py-3 border-b border-white/10">
                          <p className="text-sm font-medium truncate">
                            {userData.name}
                          </p>
                          <p className="text-sm text-zinc-500 truncate">
                            {userData.email}
                          </p>
                        </div>
                        <button className="md:hidden w-full px-4 py-3 flex items-center gap-2 text-sm border-b border-white/10 hover:bg-white/5">
                          <Coins size={14} className="text-yellow-400" />
                          <span className="text-zinc-300">Credits</span>
                          <span>{userData.credits}</span>
                          <span className="font-semibold">+</span>
                        </button>
                        <div className="text-sm font-medium">
                          {userData.name}
                        </div>
                        <div className="text-xs text-zinc-400 mt-1">
                          {userData.email}
                        </div>
                        <button className="mt-3 w-full text-center text-xs text-zinc-400 hover:text-white">
                          Logout
                        </button>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            )}

            <br></br>
          </div>
        </div>
      </motion.div>
      <section className="pt-44 p -32 px-6 text-center">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          Build Stunning Websites <br></br>
          <span className="bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            with AI in Seconds
          </span>
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mt-8 max-w-2xl mx-auto text-zinc-400 text-lg"
        >
          Describe your vision and let our AI create a beautiful, responsive,
          production-ready website for you.
        </motion.p>

        <button className="px-10 py-4 rounded-xl bg-white text-black font-semibold hover:scale-105 transition mt-8 mb-8">
          Get Started
        </button>
      </section>
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {highlights.map((h, i) => {
            return (
              <motion.div
                key={i}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="rounded-2xl bg-white/5 border border-white/10 p-8"
              >
                <h1 className="text-xl font-semibold mb-3">{h}</h1>
                <p className="text-sm text-zinc-400">
                  WebGen.ai builds real websites in seconds. Clean code, modern
                  design, and fully responsive. Just describe your vision and
                  watch it come to life.`
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>
      <footer className="border-t border-white/10 py-10 text-center text-sm text-zinc-500">
        &copy; {new Date().getFullYear()} WebGen.ai.
      </footer>

      {openLogin && (
        <loginModel open={openLogin} onClose={() => setOpenLogin(false)} />
      )}
    </div>
  );
}

export default Home;
