
import { Soup, Star, UsersRound } from 'lucide-react'

const AboutUs = () => {
  return (
    <div className="bg-black text-white w-full flex flex-col lg:flex-row overflow-hidden">

      {/* Left Image */}
      <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-[500px]">
        <img
          src="/images/resturent.jpg"
          alt="Our Restaurant"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2 px-5 sm:px-8 lg:px-10 py-8 lg:py-12">

        {/* About Heading */}
        <div>
          <p className="text-amber-400 font-semibold mb-2">
            ABOUT US
          </p>

          <strong className="text-2xl sm:text-3xl lg:text-4xl font-['Playfair_Display']">
            A Place Where Food Brings
            <span className="text-amber-400"> People Together</span>
          </strong>

          <p className="text-gray-200 text-sm sm:text-base pt-4 leading-7">
            We are passionate about serving delicious food made from
            fresh ingredients. Our restaurant is a perfect place to enjoy
            great food with family and friends in a warm and cozy atmosphere.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 gap-6 pt-8">

          {/* Authentic Taste */}
          <div className="flex items-center gap-3">
            <Soup
              size={42}
              className="text-amber-400 shrink-0"
              fill="#fbbf24"
            />

            <div>
              <h3 className="font-bold text-base">
                Authentic Taste
              </h3>

              <p className="text-gray-300 text-sm">
                Traditional & modern recipes
              </p>
            </div>
          </div>

          {/* Family Friendly */}
          <div className="flex items-center gap-3">
            <UsersRound
              size={42}
              className="text-amber-400 shrink-0"
              fill="#fbbf24"
            />

            <div>
              <h3 className="font-bold text-base">
                Family Friendly
              </h3>

              <p className="text-gray-300 text-sm">
                Perfect for all ages
              </p>
            </div>
          </div>

          {/* Memorable Experience */}
          <div className="flex items-center gap-3">
            <Star
              size={42}
              className="text-amber-400 shrink-0"
              fill="#fbbf24"
            />

            <div>
              <h3 className="font-bold text-base">
                Memorable Experience
              </h3>

              <p className="text-gray-300 text-sm">
                More than just food
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default AboutUs
