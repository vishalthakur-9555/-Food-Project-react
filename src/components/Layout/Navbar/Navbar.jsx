
import { ChefHat, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 z-50 w-full text-white">

      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <div className="flex h-20 md:h-24 items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <ChefHat
              size={40}
              className="text-amber-400"
              fill="gold"
            />

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Flavor<span className="text-amber-400">Hub</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 xl:gap-12 font-bold">

            <li><a href="/" className="hover:text-amber-400">Home</a></li>
            <li><a href="/menu" className="hover:text-amber-400">Menu</a></li>
            <li><a href="/about" className="hover:text-amber-400">About</a></li>
            <li><a href="/gallery" className="hover:text-amber-400">Gallery</a></li>
            <li><a href="/contact" className="hover:text-amber-400">Contact</a></li>

          </ul>

          {/* Desktop Button */}
          <button className="hidden lg:block bg-amber-400 hover:bg-amber-500 px-7 py-3 rounded-full text-black font-bold">
            Reserve a Table
          </button>

          {/* Mobile Menu */}
          <details className="relative lg:hidden">

            <summary className="list-none cursor-pointer">
              <Menu size={30} />
            </summary>

            <div className="absolute right-0 top-12 w-64 bg-black/95 rounded-xl p-6 shadow-lg">

              <ul className="flex flex-col gap-5 font-semibold">

                <li><a href="/" className="hover:text-amber-400">Home</a></li>
                <li><a href="/menu" className="hover:text-amber-400">Menu</a></li>
                <li><a href="/about" className="hover:text-amber-400">About</a></li>
                <li><a href="/gallery" className="hover:text-amber-400">Gallery</a></li>
                <li><a href="/contact" className="hover:text-amber-400">Contact</a></li>

                <li>
                  <button className="w-full bg-amber-400 text-black py-3 rounded-full font-bold">
                    Reserve a Table
                  </button>
                </li>

              </ul>

            </div>

          </details>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
