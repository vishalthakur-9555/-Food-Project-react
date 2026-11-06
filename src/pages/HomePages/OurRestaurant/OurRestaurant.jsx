
const OurRestaurant = () => {
  return (
    <div className="bg-black w-full py-8 px-4 sm:px-6">

      {/* Heading */}
      <div className="text-center">
        <p className="font-bold text-amber-400 text-sm sm:text-base">
          GALLERY
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2">
          A Glimpse Of Our{" "}
          <span className="text-amber-400">Restaurant</span>
        </h1>
      </div>

      {/* Gallery Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 mt-7 max-w-7xl mx-auto">

        <div className="overflow-hidden shadow-lg rounded-lg">
          <img
            src="/images/a.jpg"
            alt="Restaurant gallery"
            className="w-full h-56 sm:h-52 lg:h-48 object-cover hover:scale-105 transition duration-300"
          />
        </div>

        <div className="overflow-hidden shadow-lg rounded-lg">
          <img
            src="/images/b.jpg"
            alt="Restaurant gallery"
            className="w-full h-56 sm:h-52 lg:h-48 object-cover hover:scale-105 transition duration-300"
          />
        </div>

        <div className="overflow-hidden shadow-lg rounded-lg">
          <img
            src="/images/c.jpg"
            alt="Restaurant gallery"
            className="w-full h-56 sm:h-52 lg:h-48 object-cover hover:scale-105 transition duration-300"
          />
        </div>

        <div className="overflow-hidden shadow-lg rounded-lg">
          <img
            src="/images/e.jpg"
            alt="Restaurant gallery"
            className="w-full h-56 sm:h-52 lg:h-48 object-cover hover:scale-105 transition duration-300"
          />
        </div>

        <div className="overflow-hidden shadow-lg rounded-lg">
          <img
            src="/images/f.jpg"
            alt="Restaurant gallery"
            className="w-full h-56 sm:h-52 lg:h-48 object-cover hover:scale-105 transition duration-300"
          />
        </div>

      </div>
    </div>
  );
};

export default OurRestaurant;
