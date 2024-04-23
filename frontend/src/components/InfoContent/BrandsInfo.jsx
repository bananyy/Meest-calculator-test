import React from "react";
import { MultiSlider } from "../sliders/MultiSlider";

export function BrandsInfo({ brands, isLoading }) {
  const brandKeys = brands.map((brand) => brand.key);

  return (
    <>
      <h2 className="text-[30px] sm:text-[40px] lg:text-[70px] text-mainblue mb-10 md:mb-12">
        Бренди
      </h2>
      {isLoading && (
        <div className="flex justify-center">
          <img
            src={`${import.meta.env.BASE_URL}/assets/images/brands-loading-indicator.svg`}
            className="h-20"
            alt=""
          />
        </div>
      )}
      {!isLoading && (
        <div className="w-full relative lg:my-10">
          <MultiSlider>
            {brandKeys.map((brandKey) => (
              <div
                key={brandKey}
                className="flex items-center justify-center px-2 sm:px-3 md:px-8 xl:px-12 w-full h-full"
              >
                <img
                  src={`${import.meta.env.BASE_URL}/assets/images/brands/${brandKey}.png`}
                  alt=""
                />
              </div>
            ))}
          </MultiSlider>
        </div>
      )}
    </>
  );
}
