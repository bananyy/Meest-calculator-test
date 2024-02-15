import React, { useState } from "react";
import instructions from "./instructions";

const SwitchInfo = () => {
  const [activeCategory, setActiveCategory] = useState("info");

  const getButtonClassName = (category) => {
    let className = `btn-choose ${activeCategory === category ? "btn-choose-active" : ""}`;
    return className;
  };

  return (
    <div className="w-full flex justify-between py-10 pl-6 gap-5 sm:flex-col sm:py-5 sm:gap-2 sm:pl-3">
      <div className="flex flex-col w-4/12 sm:w-full text-left sm:flex-row sm:w-unset sm:justify-around flex-wrap">
        <button
          className={`${getButtonClassName("info")} !w-full`}
          onClick={() => setActiveCategory("info")}
        >
          Як правильно зняти мірки
        </button>
        <button className={getButtonClassName("women")} onClick={() => setActiveCategory("women")}>
          Для жінок
        </button>
        <button className={getButtonClassName("men")} onClick={() => setActiveCategory("men")}>
          Для чоловіків
        </button>
        <button className={getButtonClassName("kids")} onClick={() => setActiveCategory("kids")}>
          Для дітей
        </button>
      </div>
      <div className="instructions w-6/12 pt-6 sm:text-sm-p text-base-p sm:w-full">
        {instructions[activeCategory]}
      </div>
    </div>
  );
};

export default SwitchInfo;
