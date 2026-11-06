
import React from "react";

const BookTable = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat px-6 py-10"
      style={{
        backgroundImage: "url('/images/table.png')",
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 rounded-xl bg-white/90 p-6 md:flex-row md:p-10">
        <div className="md:w-1/2">
          <p className="text-xs font-bold tracking-widest text-gray-500">
            RESERVATION
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Book Your Table
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            Plan your visit and enjoy a wonderful dining experience
            with your loved ones.
          </p>
        </div>

        <form className="grid w-full grid-cols-1 gap-3 md:w-1/2 md:grid-cols-2">
          <input type="text" placeholder="Your Name" className="rounded-md border border-gray-200 p-3" />
          <input type="tel" placeholder="Phone Number" className="rounded-md border border-gray-200 p-3" />
          <input type="date" className="rounded-md border border-gray-200 p-3" />
          <input type="time" className="rounded-md border border-gray-200 p-3" />

          <select defaultValue="" className="rounded-md border border-gray-200 p-3">
            <option value="" disabled>Number of People</option>
            <option value="1">1 Person</option>
            <option value="2">2 People</option>
            <option value="3">3 People</option>
            <option value="4">4 People</option>
            <option value="5">5+ People</option>
          </select>

          <button type="submit" className="rounded-md bg-amber-500 p-3 font-semibold text-white hover:bg-amber-600">
            Book Now 
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookTable;
