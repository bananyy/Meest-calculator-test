import React from "react";
import { MultiSlider } from "./MultiSlider";
import dataNames from "../Calculator/dataNames";

export function BrandsInfo() {
  return (
    <>
      <h2 className="text-[30px] sm:text-[40px] lg:text-[70px] text-mainblue mb-10 md:mb-12">
        Бренди
      </h2>
      <div className="w-full relative lg:my-10">
        <MultiSlider>
          {dataNames.brands.map((brand) => (
            <div
              key={brand}
              className="flex items-center justify-center px-2 sm:px-3 md:px-8 xl:px-12 w-full h-full"
            >
              <img src={`${import.meta.env.BASE_URL}/assets/images/brands/${brand}.png`} alt="" />
            </div>
          ))}
        </MultiSlider>
      </div>
    </>
  );
}
