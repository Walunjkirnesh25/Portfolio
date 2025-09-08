import { Mountain, Camera, BarChart3, Palette, Laptop, Home, MessageCircle } from "lucide-react";
import kirneshCharacter from "@/assets/kirnesh-character.jpg";
import kirneshProfessional from "@/assets/main7.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100/30 via-pink-50/40 to-purple-200/30 pt-24 pb-16 relative overflow-hidden">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 text-center relative">
        {/* Greeting */}
        <div className="mb-12">
          <h1 className="font-reenie text-4xl md:text-5xl text-pink-500 mb-4">
            Hello!
          </h1>
          <h2 className="font-reenie text-5xl md:text-6xl text-pink-600 mb-6">
            I'm Kirnesh Walunj!
          </h2>
          <p className="font-reenie text-lg md:text-xl text-gray-600 max-w-md mx-auto">
            Business Analyst & Adventure Enthusiast
          </p>
        </div>

        {/* Character Illustration with Floating Elements */}
        <div className="relative flex justify-center items-center mb-16">
          {/* Central Character */}
          <div className="relative z-10">
            <img 
              src={kirneshCharacter} 
              alt="Kirnesh Character Illustration" 
              className="w-80 h-80 object-contain animate-float"
            />
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Analytics Chart - Top Left */}
            <div className="absolute top-0 left-8 md:left-16 animate-float-delayed">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/40">
                <BarChart3 className="w-8 h-8 text-blue-500" />
              </div>
            </div>

            {/* Mountain - Top Right */}
            <div className="absolute top-8 right-8 md:right-16 animate-float">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/40">
                <Mountain className="w-8 h-8 text-green-500" />
              </div>
            </div>

            {/* Camera - Middle Left */}
            <div className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 animate-float-delayed">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/40">
                <Camera className="w-8 h-8 text-purple-500" />
              </div>
            </div>

            {/* Palette - Middle Right */}
            <div className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 animate-float">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/40">
                <Palette className="w-8 h-8 text-pink-500" />
              </div>
            </div>

            {/* Laptop - Bottom Left */}
            <div className="absolute bottom-8 left-8 md:left-16 animate-float">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/40">
                <Laptop className="w-8 h-8 text-indigo-500" />
              </div>
            </div>

            {/* Home - Bottom Right */}
            <div className="absolute bottom-0 right-8 md:right-16 animate-float-delayed">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/40">
                <Home className="w-8 h-8 text-orange-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-16">
          <a href="https://linkedin.com" className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://instagram.com" className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* About Section with Professional Photo */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Photo */}
            <div className="relative">
              <img 
                src={kirneshProfessional} 
                alt="Kirnesh Walunj" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
            </div>
            
            {/* Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="font-reenie text-3xl text-pink-500 mb-6">
                Hey there!
              </h3>
              <div className="space-y-4 text-gray-700">
                <p className="font-reenie text-lg leading-relaxed">
                  Kirnesh is that guy who flips boring numbers into killer stories 📊✨. 
                  Whether it’s the chaos of data or the madness of unexplored trails – he knows the cheat codes.
                </p>
                <p className="font-reenie text-lg leading-relaxed">
                  But when he’s not decoding business puzzles, you’ll probably spot him on a mountain peak or sketching life in his notebook 🏔️🎨.
                </p>
                <p className="font-reenie text-lg leading-relaxed">
                  He’s got the superpower of data visualization, process hacks, and strategy building – basically a one-man bridge between the tech world and the business world. 
                  His mountain adventures crank up his creativity 🚀, and he brings that same energy into every project.
                </p>
                <p className="font-reenie text-lg leading-relaxed">
                  Through his camera lens and sketch strokes, he doesn’t just capture moments – he sparks ideas 💡. 
                  Every project with him comes with a dose of analytics, a splash of art, and just the right amount of chaos.
                </p>
              </div>
              
              {/* Skills/Interests 
              <div className="mt-8">
                <div className="flex flex-wrap gap-3">
                  <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">Business Analysis</span>
                  <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">Trekking</span>
                  <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">Photography</span>
                  <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium">Sketching</span>
                  <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">Data Analytics</span>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;