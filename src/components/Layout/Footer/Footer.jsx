
import {
  ChefHat,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#101113] text-gray-300 border-t border-gray-800">

      {/* Main Footer */}
      <div className="max-w-[1460px] mx-auto px-6 sm:px-10 lg:px-14 py-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.9fr_0.9fr_1fr] gap-10 lg:gap-16">

          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <ChefHat
                className="text-yellow-500"
                size={43}
                strokeWidth={2.2}
              />

              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Flavor<span className="text-yellow-500">Hub</span>
              </h2>
            </div>

            <p className="text-base leading-6 text-gray-400 max-w-md">
              Good food, great ambiance and memorable
              moments. Visit us and experience the difference.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-8 mt-6">

              <a href="#" aria-label="Facebook"
                className="text-white hover:text-yellow-500 transition">
                <FaFacebookF size={22} />
              </a>

              <a href="#" aria-label="Instagram"
                className="text-white hover:text-yellow-500 transition">
                <FaInstagram size={22} />
              </a>

              <a href="#" aria-label="Twitter"
                className="text-white hover:text-yellow-500 transition">
                <FaTwitter size={22} />
              </a>

              <a href="#" aria-label="YouTube"
                className="text-white hover:text-yellow-500 transition">
                <FaYoutube size={23} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-base">
              <li><a href="#" className="hover:text-yellow-500 transition">Home</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Menu</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">About</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Gallery</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Contact</a></li>
            </ul>
          </div>

          {/* Our Menu */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Our Menu
            </h3>

            <ul className="space-y-2 text-base">
              <li><a href="#" className="hover:text-yellow-500 transition">Breakfast</a></li>
              <li><a href="/menu#lunch" className="hover:text-yellow-500 transition">Lunch</a></li>
              <li><a href="/menu#dinner" className="hover:text-yellow-500 transition">Dinner</a></li>
              <li><a href="/menu#desserts" className="hover:text-yellow-500 transition">Desserts</a></li>
              <li><a href="/menu#beverages" className="hover:text-yellow-500 transition">Beverages</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Contact Info
            </h3>

            <ul className="space-y-4 text-base">

              <li className="flex items-center gap-5">
                <MapPin size={23} className="text-white shrink-0" />
                <span>123 Food Street, Your City</span>
              </li>

              <li className="flex items-center gap-5">
                <Phone size={23} className="text-white shrink-0" />
                <a href="tel:+919876543210" className="hover:text-yellow-500 transition">
                  +91 98765 43210
                </a>
              </li>

              <li className="flex items-center gap-5">
                <Mail size={23} className="text-white shrink-0" />
                <a href="mailto:info@yourwebsite.com" className="hover:text-yellow-500 transition">
                  info@yourwebsite.com
                </a>
              </li>

            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">

        <div className="max-w-[1460px] mx-auto px-6 sm:px-10 lg:px-14 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">

          <p className="text-sm sm:text-base text-gray-400">
            © 2024 FlavorHub. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4 text-sm sm:text-base text-gray-400">

            <a href="#" className="hover:text-yellow-500 transition">
              Privacy Policy
            </a>

            <span className="text-gray-600">|</span>

            <a href="#" className="hover:text-yellow-500 transition">
              Terms & Conditions
            </a>

          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
