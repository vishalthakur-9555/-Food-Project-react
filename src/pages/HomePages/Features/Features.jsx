
import { ChefHat, Heart, Leaf, Utensils } from 'lucide-react'

const Features = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center w-full bg-black text-white divide-y sm:divide-y-0 sm:divide-x divide-gray-600 px-5 md:px-8 py-6 gap-5 lg:gap-0">

      {/* Fresh Ingredients */}
      <div className="flex items-center gap-4 justify-center lg:justify-start lg:px-5">
        <Utensils size={38} className="text-amber-400 shrink-0" fill="#fbbf24" />

        <div>
          <h3 className="text-base md:text-lg font-semibold">
            Fresh Ingredients
          </h3>
          <p className="text-gray-500 text-xs md:text-sm">
            Always Fresh & High quality
          </p>
        </div>
      </div>

      {/* Experienced Chefs */}
      <div className="flex items-center gap-4 justify-center lg:justify-start lg:px-5 pt-5 sm:pt-0">
        <ChefHat size={38} className="text-amber-400 shrink-0" fill="#fbbf24" />

        <div>
          <h3 className="text-base md:text-lg font-semibold">
            Experienced Chefs
          </h3>
          <p className="text-gray-500 text-xs md:text-sm">
            Delicious & authentic taste
          </p>
        </div>
      </div>

      {/* Hygienic Environment */}
      <div className="flex items-center gap-4 justify-center lg:justify-start lg:px-5 pt-5 sm:pt-0">
        <Leaf size={38} className="text-amber-400 shrink-0" fill="#fbbf24" />

        <div>
          <h3 className="text-base md:text-lg font-semibold">
            Hygienic Environment
          </h3>
          <p className="text-gray-500 text-xs md:text-sm">
            Clean & safe for everyone
          </p>
        </div>
      </div>

      {/* Cozy Ambiance */}
      <div className="flex items-center gap-4 justify-center lg:justify-start lg:px-5 pt-5 sm:pt-0">
        <Heart size={38} className="text-amber-400 shrink-0" fill="#fbbf24" />

        <div>
          <h3 className="text-base md:text-lg font-semibold">
            Cozy Ambiance
          </h3>
          <p className="text-gray-500 text-xs md:text-sm">
            Perfect for family & friends
          </p>
        </div>
      </div>

    </div>
  )
}

export default Features
