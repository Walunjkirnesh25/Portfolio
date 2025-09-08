const Projects = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-montserrat font-bold text-5xl md:text-6xl text-text-dark mb-6">
            Professional <span className="artistic-text">Projects</span>
          </h1>
          <p className="text-text-light font-roboto text-xl max-w-2xl mx-auto">
            Business analysis projects that transformed data into actionable insights.
          </p>
        </div>
        
        <div className="artwork-card p-8 md:p-12 text-center">
          <p className="text-text-light font-roboto text-lg leading-relaxed">
            Coming soon - A showcase of professional projects, analytics dashboards, and business solutions 
            that demonstrate expertise in turning complex data into clear business value.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;