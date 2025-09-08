const Artwork = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-montserrat font-bold text-5xl md:text-6xl text-text-dark mb-6">
            My <span className="artistic-text">Artwork</span>
          </h1>
          <p className="text-text-light font-roboto text-xl max-w-2xl mx-auto">
            Creative expressions through cartoons, sketches, and digital illustrations.
          </p>
        </div>
        
        <div className="artwork-card p-8 md:p-12 text-center">
          <p className="text-text-light font-roboto text-lg leading-relaxed">
            Coming soon - A gallery of creative works including cartoon characters, sketch art, 
            and digital illustrations that showcase the artistic side of analytical thinking.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Artwork;