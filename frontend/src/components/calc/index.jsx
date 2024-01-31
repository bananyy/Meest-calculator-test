import React, { useState } from "react";
import { Button } from "../button";
import { Person } from "./person";
import { Carousel } from "./carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import '../../styles/CalcSection.css'

const personTypes = ["men", "women", "child"];
const bodyParts = ["none", "head", "top", "lower"];
const translateBodyParts = {
  none: "Категорії",
  head: "Головний убір",
  top: "Верхня частина тіла",
  lower: "Нижня частина тіла",
};

const brands = ["none", "Zara", "6pm", "YOOX", "allegro", "Pull&Bear", "asos"];
const translateBrands = {
  none: "Бренд",
  Zara: "Zara",
  "6pm": "6pm",
  YOOX: "YOOX",
  allegro: "allegro",
  "Pull&Bear": "Pull&Bear",
  asos: "asos",
};

const topCl = [
  "none",
  "tshirt",
  "sweater",
  "shirt",
  "sweatshirt",
  "singlet",
  "jacket",
];
const translateTopCl = {
  none: "Тип одягу",
  tshirt: "Футболки",
  sweater: "Светри",
  shirt: "Сорочки",
  sweatshirt: "Світшоти",
  singlet: "Майки",
  jacket: "Піджаки",
};

export function CalcSection() {
  const [selectedType, setSelectedType] = useState(personTypes[0]);
  const [selectedBodyPart, setSelectedBodyPart] = useState(bodyParts[0]);
  const [selectedBrand, setSelectedBrand] = useState(brands[0]);
  const [selectedTopCl, setSelectedTopCl] = useState(topCl[0]);
  const [inputData, setInputData] = useState({});

  const handleTypeClick = (type) => {
    if (type !== selectedType) {
      setSelectedType(type);
      setInputData({});
    }
  };

  const handlePartChange = (part) => {
    if (selectedBodyPart !== part) {
      setSelectedBodyPart(part);
      setInputData({});
    }
  };

  const handleBrandChange = (brand) => {
    if (selectedBrand !== brand) {
      setSelectedBrand(brand);
      setInputData({});
    }
  };

  const handleTopClChange = (topCl) => {
    if (selectedTopCl !== topCl) {
      setSelectedTopCl(topCl);
      setInputData({});
    }
  };

  const handleInputChange = (name, value) => {
    setInputData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const personTypeElements = personTypes.map((type) => (
    <Person
      key={type}
      type={type}
      part={selectedBodyPart}
      inputData={inputData}
      onClick={() => handleTypeClick(type)}
      onChange={handleInputChange}
      isSelected={selectedType === type}
    />
  ));

  return (
    <>
      <div className="bg-grey w-full rounded-lg py px-24 py-8 mt-20 mb-8 sm:px-5 relative">
        <h2 className="text-center sm:text-sm-h text-base-h">
          Калькулятор розмірів
        </h2>
        <div className="flex items-end my-4 flex-col w-full gap-2 absolute right-7 selectsPerson">
          <select
            value={selectedBodyPart}
            onChange={(event) => handlePartChange(event.target.value)}
            className="select-base"
          >
            {bodyParts.map((part) => (
              <option key={part} value={part}>
                {translateBodyParts[part]}
              </option>
            ))}
          </select>
          <select
            value={selectedBrand}
            onChange={(event) => handleBrandChange(event.target.value)}
            className="select-base"
          >
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {translateBrands[brand]}
              </option>
            ))}
          </select>
          {selectedBodyPart == "top" && (
            <select
              value={selectedTopCl}
              onChange={(event) => handleTopClChange(event.target.value)}
              className="select-base"
            >
              {topCl.map((cl) => (
                <option key={cl} value={cl}>
                  {translateTopCl[cl]}
                </option>
              ))}
            </select>
          )}
        </div>
        <div className="flex justify-between gap-16 items-end mt-24 personElements">
          {personTypeElements}
        </div>
        {/* <Carousel>{personTypeElements}</Carousel> */}
      </div>
      <Button
        onClick={() =>
          console.log({
            type: selectedType,
            bodyPart: selectedBodyPart,
            data: inputData,
            brand: selectedBrand,
            clothes: selectedTopCl,
          })
        }
      >
        Розрахувати
      </Button>
    </>
  );
}
