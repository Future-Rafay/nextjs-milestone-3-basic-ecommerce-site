// components/Hero.tsx
const Hero = () => {
    return (
      <section className="bg-gray-100 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center">
          {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl font-bold text-indigo-600">
              Welcome to E-Shop
            </h1>
            <p className="mt-4 text-gray-700 text-lg">
              Discover the best deals on the latest products. Shop now and save big!
            </p>
            <div className="mt-6 space-x-4">
              <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700">
                Shop Now
              </button>
              <button className="px-6 py-2 bg-gray-200 text-indigo-600 rounded-lg shadow-md hover:bg-gray-300">
                Learn More
              </button>
            </div>
          </div>
  
          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Hero Image"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  