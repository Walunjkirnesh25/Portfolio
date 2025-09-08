const Travel = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-montserrat font-bold text-5xl md:text-6xl text-text-dark mb-6">
            Travel & <span className="artistic-text">Treks</span>
          </h1>
          <p className="text-text-light font-roboto text-xl max-w-2xl mx-auto">
            Adventures that shaped perspectives and captured breathtaking moments.
          </p>
        </div>
        
        <div className="artwork-card p-8 md:p-12 text-center">
          <p className="text-text-light font-roboto text-lg leading-relaxed">
            Coming soon - A collection of trek adventures, mountain photography, and travel stories 
            that showcase the beauty of exploration and the thrill of discovery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Travel;