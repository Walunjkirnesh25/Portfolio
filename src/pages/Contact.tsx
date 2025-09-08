import { Mail, MapPin, Phone, Linkedin, Instagram, Camera } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-montserrat font-bold text-5xl md:text-6xl text-text-dark mb-6">
            Let's <span className="artistic-text">Connect</span>
          </h1>
          <p className="text-text-light font-roboto text-xl max-w-2xl mx-auto">
            Ready to collaborate on your next project or share adventure stories? Drop me a message!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="artwork-card p-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-text-dark">Email</h3>
                  <p className="text-text-light font-roboto">kirnesh@example.com</p>
                </div>
              </div>
            </div>

            <div className="artwork-card p-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-text-dark">Location</h3>
                  <p className="text-text-light font-roboto">Mumbai, India</p>
                </div>
              </div>
            </div>

            <div className="artwork-card p-6">
              <h3 className="font-montserrat font-semibold text-text-dark mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="p-3 bg-secondary rounded-full hover:bg-accent hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="p-3 bg-secondary rounded-full hover:bg-accent hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="p-3 bg-secondary rounded-full hover:bg-accent hover:text-white transition-colors">
                  <Camera size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="artwork-card p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text-dark mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full accent-gradient text-white font-roboto font-medium py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;