
const DishesCards = () => {
  return (
    <div className="bg-amber-50 w-full py-10 px-4 sm:px-6">

      {/* Heading */}
      <div className="text-center">
        <p className="font-bold text-sm sm:text-base">
          OUR MENU
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
          Our <span className="text-amber-400">Popular</span> Dishes
        </h1>

        <p className="text-gray-500 text-sm sm:text-base md:text-lg mt-3 max-w-2xl mx-auto">
          Taste our most loved dishes, made with fresh ingredients
          and authentic flavors.
        </p>
      </div>

      {/* Dishes Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

        {/* Burger Card */}
        <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
          <img
            src="/images/burger.png"
            alt="Classic Burger"
            className="w-full h-48 sm:h-52 object-cover"
          />

          <div className="p-4">
            <strong className="font-bold text-lg sm:text-xl">
              Classic Burger
            </strong>

            <p className="text-gray-500 text-sm mt-2">
              Juicy patty with fresh veggies and special sauce.
            </p>

            <div className="flex justify-between items-center mt-4">
              <p className="text-amber-400 font-bold text-xl">
                ₹249
              </p>

              <button className="bg-amber-400 hover:bg-amber-500 text-white px-4 py-2 rounded-xl text-sm font-semibold">
                Order Now
              </button>
            </div>
          </div>
        </div>

        {/* Pizza Card */}
        <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
          <img
            src="/images/pizza.png"
            alt="Margherita Pizza"
            className="w-full h-48 sm:h-52 object-cover"
          />

          <div className="p-4">
            <strong className="font-bold text-lg sm:text-xl">
              Margherita Pizza
            </strong>

            <p className="text-gray-500 text-sm mt-2">
              Loaded with fresh tomatoes, mozzarella and basil.
            </p>

            <div className="flex justify-between items-center mt-4">
              <p className="text-amber-400 font-bold text-xl">
                ₹399
              </p>

              <button className="bg-amber-400 hover:bg-amber-500 text-white px-4 py-2 rounded-xl text-sm font-semibold">
                Order Now
              </button>
            </div>
          </div>
        </div>

        {/* Pasta Card */}
        <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
          <img
            src="/images/pasta.png"
            alt="Pasta Alfredo"
            className="w-full h-48 sm:h-52 object-cover"
          />

          <div className="p-4">
            <strong className="font-bold text-lg sm:text-xl">
              Pasta Alfredo
            </strong>

            <p className="text-gray-500 text-sm mt-2">
              Creamy pasta with rich cheese and herbs.
            </p>

            <div className="flex justify-between items-center mt-4">
              <p className="text-amber-400 font-bold text-xl">
                ₹299
              </p>

              <button className="bg-amber-400 hover:bg-amber-500 text-white px-4 py-2 rounded-xl text-sm font-semibold">
                Order Now
              </button>
            </div>
          </div>
        </div>

        {/* Dessert Card */}
        <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
          <img
            src="/images/chocolate-dessert.png"
            alt="Choco Lava Cake"
            className="w-full h-48 sm:h-52 object-cover"
          />

          <div className="p-4">
            <strong className="font-bold text-lg sm:text-xl">
              Choco Lava Cake
            </strong>

            <p className="text-gray-500 text-sm mt-2">
              Warm chocolate cake with a molten center.
            </p>

            <div className="flex justify-between items-center mt-4">
              <p className="text-amber-400 font-bold text-xl">
                ₹199
              </p>

              <button className="bg-amber-400 hover:bg-amber-500 text-white px-4 py-2 rounded-xl text-sm font-semibold">
                Order Now
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default DishesCards
