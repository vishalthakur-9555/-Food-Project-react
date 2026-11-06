
const HeroSection = () => {
  return (
    <div className="relative h-[550px] md:h-[650px] w-full overflow-hidden">

      {/* Background Image */}
      <img
        src="/images/Food.jpg"
        alt="Delicious Food"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:items-start md:text-left md:px-10 lg:px-20">

        <span className="text-4xl sm:text-5xl md:text-6xl text-amber-300 italic font-['Dancing_Script']">
          Good Food
        </span>

        <strong className="text-3xl sm:text-4xl md:text-6xl font-['Playfair_Display'] mt-2">
          Great Moments
        </strong>

        <p className="text-sm sm:text-base md:text-lg pt-4 leading-6 max-w-xl">
          Delicious food, cozy ambiance and unforgettable
          experiences for you and your loved ones.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-7 w-full sm:w-auto">

          <button className="bg-amber-400 hover:bg-amber-500 w-full sm:w-45 h-11 px-5 rounded-2xl text-black font-bold transition">
            Explore Menu
          </button>

          <button className="bg-black hover:bg-gray-800 w-full sm:w-45 h-11 px-5 rounded-2xl text-white border border-white font-bold transition">
            Book a Table
          </button>

        </div>

      </div>

    </div>
  );
};

export default HeroSection;
