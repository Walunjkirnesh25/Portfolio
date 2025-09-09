import { Camera, Mountain, PieChart, Palette, MapPin, Mail } from 'lucide-react';
import heroImage from '@/assets/Main-character.jpeg';
import trekImage from '@/assets/trek1.jpg';
import artworkImage from '@/assets/mainart.jpeg';
import analyticsImage from '@/assets/analytics-work.jpg';

const Home = () => {
  const floatingIcons = [
    { Icon: Camera, position: 'top-20 left-20', delay: '0s' },
    { Icon: Mountain, position: 'top-32 right-32', delay: '1s' },
    { Icon: PieChart, position: 'bottom-32 left-32', delay: '2s' },
    { Icon: Palette, position: 'bottom-20 right-20', delay: '0.5s' },
  ];

  const workCards = [
    {
      title: 'Business Analytics',
      description: 'Data-driven insights and strategic analysis',
      image: analyticsImage,
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Trek Adventures',
      description: 'Mountain expeditions and nature photography',
      image: trekImage,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Creative Artwork',
      description: 'Cartoon sketches and digital illustrations',
      image: artworkImage,
      color: 'from-pink-500 to-rose-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        {/* Background Image with better opacity */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-100"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        {/* Multiple Gradient Overlays for depth */}
        {/*<div className="absolute inset-0 bg-gradient-to-r from-indigo-10/80 via-purple-900/60 to-pink-90/80" />*/}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/20" />
        
        {/* Floating Icons */}
        {floatingIcons.map(({ Icon, position, delay }, index) => (
          <div
            key={index}
            className={`absolute ${position} float`}
            style={{ animationDelay: delay }}
          >
            <Icon size={48} className="text-white opacity-40 drop-shadow-lg" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto mt-20">
          <div className="mb-8">
            <span className="inline-block px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white font-roboto text-sm font-medium backdrop-blur-md">
              <MapPin size={16} className="inline mr-2" />
              Mumbai, India
            </span>
          </div>
          
          <h1 className="font-montserrat font-black text-7xl md:text-8xl lg:text-9xl text-white leading-none tracking-tight mb-6 drop-shadow-2xl">
            KIRNESH<br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              WALUNJ
            </span>
          </h1>
          
          <div className="mb-12">
            <span className="block font-montserrat font-light text-2xl md:text-3xl text-white/90 mb-2">BUSINESS ANALYST,</span>
            <span className="block font-pacifico text-3xl md:text-4xl bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Business Analyst, Trekker & Cartoonist
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a
              href="mailto:walunjkirnesh25@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-white/10 border border-white/20 text-white font-roboto font-medium rounded-full hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 backdrop-blur-md"
            >
              <Mail size={20} className="mr-2" />
              Get In Touch
            </a>
            {/*<span className="text-white/80 font-roboto text-lg">
              Available for consulting & collaborations
            </span>
            */}
          </div>
        </div>

        {/* Scroll indicator 
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>*/}
      </section>

      {/* Featured Work Preview */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-montserrat font-black text-5xl md:text-6xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Featured Work
          </h2>
          <p className="text-gray-600 font-roboto text-xl max-w-3xl mx-auto leading-relaxed">
            Explore my journey through data analysis, trekking adventures, and my cartoons
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {workCards.map((card, index) => (
            <div
              key={index}
              className="artwork-card group cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300`} />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white">
                    <h3 className="font-montserrat font-bold text-xl mb-2">{card.title}</h3>
                    <p className="font-roboto text-sm">{card.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="font-montserrat font-black text-4xl md:text-5xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8">
            Let's Create Something <span className="font-pacifico bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Amazing</span>
          </h2>
          <p className="text-gray-600 font-roboto text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Whether it's analyzing complex data, planning your next trek, or bringing creative ideas to life,
            I'm here to collaborate and make it happen.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-roboto font-semibold rounded-full hover:from-indigo-700 hover:to-purple-700 shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-105 transform"
          >
            Start a Conversation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;