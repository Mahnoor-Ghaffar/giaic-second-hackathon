"use client";

import Image from "next/image";
import React from "react";
import filter1 from '@/../public/images/filter.png';
import filter2 from '@/../public/images/filter (1).png';
import filter3 from '@/../public/images/filter (2).png';
import filter4 from '@/../public/images/filter (3).png';


const Futured = () => {
  return (
    <section className="mt-10">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <h3 className="text-black pl-3 inline-block">
            Featured products
          </h3>
          <h1 className="text-gray-800 font-bold text-3xl pt-4">
            Best Sellers Products
          </h1>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Card 1 */}
          <div className="relative w-64 h-80 bg-gray-950">
            <Image
              src={filter1}
              alt="PlayStation 5"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4">
              <h1 className="text-lg font-bold text-white">PlayStation 5</h1>
              <p className="text-xs text-gray-300 mb-2">
                Black and White version of the PS5 coming out on sale.
              </p>
              <button className="bg-white text-black px-4 py-2 text-sm font-semibold">
                Shop Now
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative w-64 h-80 bg-gray-950">
            <Image
              src={filter2}
              alt="Women's Collections"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4">
              <h1 className="text-lg font-bold text-white">
                Women's Collections
              </h1>
              <p className="text-xs text-gray-300 mb-2">
                Featured woman collections that give you another vibe.
              </p>
              <button className="bg-white text-black px-4 py-2 text-sm font-semibold">
                Shop Now
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative w-64 h-80 bg-gray-950">
            <Image
              src={filter3}
              alt="Speakers"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4">
              <h1 className="text-lg font-bold text-white">Speakers</h1>
              <p className="text-xs text-gray-300 mb-2">
                Amazon wireless speakers.
              </p>
              <button className="bg-white text-black px-4 py-2 text-sm font-semibold">
                Shop Now
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative w-64 h-80 bg-gray-950">
            <Image
              src={filter4}
              alt="Perfume"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4">
              <h1 className="text-lg font-bold text-white">Perfume</h1>
              <p className="text-xs text-gray-300 mb-2">
                GUCCI INTENSE OUD EDP.
              </p>
              <button className="bg-white text-black px-4 py-2 text-sm font-semibold">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Futured;
