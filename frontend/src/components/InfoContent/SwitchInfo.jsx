import React, { useState } from "react";
import instructions from "./instructions";

const SwitchInfo = () => {
  const [activeCategory, setActiveCategory] = useState("info");

  const categories = [
    { label: "Як правильно зняти мірки", value: "info" },
    { label: "Для жінок", value: "women" },
    { label: "Для чоловіків", value: "men" },
    { label: "Для дітей", value: "kids" },
  ];

  return (
    <div className="w-full py-10 mb-20">
      <h2 className="text-center text-sm-h md:text-md-h lg:text-lg-h md:mb-14">
        Який Розмір Ви Носите?
      </h2>
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="flex w-full flex-row flex-wrap justify-center my-3 md:justify-start md:flex-col md:w-5/12 md:ml-[20px]">
          {categories.map(({ label, value }) => (
            <button
              key={value}
              className={`btn-choose text-sm-p md:text-md-p lg:text-lg-p ${
                activeCategory === value ? "btn-choose-active" : ""
              }`}
              onClick={() => setActiveCategory(value)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="instructions text-sm-p md:text-md-p lg:text-lg-p md:w-6/12 mt-5">
          {instructions[activeCategory]}
        </div>
      </div>
    </div>
  );
};

export default SwitchInfo;
