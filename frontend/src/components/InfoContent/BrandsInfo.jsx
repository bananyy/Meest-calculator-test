import React from "react";
import { MultiSlider } from "./MultiSlider";

export function BrandsInfo() {
  return (
    <>
      <h2 className="text-sm-h sm:text-md-h lg:text-[70px] text-mainblue mb-16">Бренди</h2>
      <div className="w-full relative">
        <MultiSlider>
          {[...Array(6).keys()].map((i) => (
            <div className="flex items-center justify-center px-1 sm:px-3 md:px-8 xl:px-12 max-w-[1920px] my-10">
              <img
                src={`https://meest.shopping/uploads/elFinder/catalog-img/mm-logo-156x75-${i}.png`}
                alt=""
              />
            </div>
          ))}
        </MultiSlider>
      </div>
    </>
  );
}
