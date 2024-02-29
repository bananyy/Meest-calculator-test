import React, { useState } from "react";
import { Button } from "../button/Button";
import { PersonInfo } from "./PersonInfo";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Slider } from "./Slider";
import dataNames from "./dataNames";

export function CalcSection() {
  const [selectedType, setSelectedType] = useState(dataNames.personTypes[0]);
  const [selectedBodyPart, setSelectedBodyPart] = useState("none");
  const [selectedBrand, setSelectedBrand] = useState("none");
  const [selectedCl, setSelectedCl] = useState("none");
  const [inputData, setInputData] = useState({});

  const handleSelectionChange = (newValue, setSelectedValue) => {
    if (newValue !== setSelectedValue) {
      setSelectedValue(newValue);
      setInputData({});
    }
  };
  const handleTypeClick = (type) => {
    handleSelectionChange(type, setSelectedType);
  };
  const handlePartChange = (part) => {
    handleSelectionChange(part, setSelectedBodyPart);
    handleSelectionChange('none', setSelectedCl);
  };
  const handleBrandChange = (brand) => {
    handleSelectionChange(brand, setSelectedBrand);
  };
  const handleClChange = (topCl) => {
    handleSelectionChange(topCl, setSelectedCl);
  };

  const handleInputChange = (name, value) => {
    setInputData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleCarouselChange = (item) => {
    handleTypeClick(dataNames.personTypes[item]);
  };

  const personTypeElements = () => {
    return dataNames.personTypes.map((gender) => (
      <PersonInfo
        key={gender}
        gender={gender}
        part={selectedBodyPart ?? 'none'}
        clothesType={selectedCl ?? 'none'}
        inputData={inputData}
        onClick={() => handleTypeClick(gender)}
        onChange={handleInputChange}
        isSelected={selectedType === gender}
      />
    ));
  };

  const CustomSelect = ({ value, onChange, options, translateMap }) => (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="calc-option-bar"
    >
      {options.map((item) => (
        <option key={item} value={item}>
          {translateMap[item]}
        </option>
      ))}
    </select>
  );


  return (
    <>
      <div className="flex flex-col items-center py-10 w-full">
        <div className="w-full bg-[#EFF1F4] rounded-[40px] py-8 relative px-3 sm:px-6 md:px-8 lg:px-16 xl:px-24 calc-shadow-box my-8">
          <h2 className="text-center text-sm-h sm:text-md-h lg:text-lg-h">Калькулятор розмірів</h2>
          <div className="text-sm-p sm:text-md-p lg:text-lg-p flex absolute flex-wrap gap-2 justify-around mt-4 left-5 right-5 md:flex-col md:items-end md:right-10">
            <CustomSelect
              value={selectedBrand}
              onChange={handleBrandChange}
              options={["none", ...dataNames.brands]}
              translateMap={dataNames.translateBrands}
            />
            <CustomSelect
              value={selectedBodyPart}
              onChange={handlePartChange}
              options={["none", ...dataNames.bodyParts]}
              translateMap={dataNames.translateBodyParts}
            />
            <CustomSelect
              value={selectedCl}
              onChange={handleClChange}
              options={
                selectedBodyPart === "head"
                  ? ["none", ...dataNames.typeClothes.head]
                  : selectedBodyPart === "top"
                  ? ["none", ...dataNames.typeClothes.top]
                  : selectedBodyPart === "low"
                  ? ["none", ...dataNames.typeClothes.low]
                  : selectedBodyPart === "footwear"
                  ? ["none", ...dataNames.typeClothes.footwear]
                  : ["none", ...Object.values(dataNames.typeClothes).flatMap((clothes) => clothes)]
              }
              translateMap={dataNames.translateTypeClothes}
            />
          </div>
          <div className="flex items-end mt-[120px] max-md:hidden">{personTypeElements()}</div>

          <div className="mt-[80px] md:hidden">
            <Slider
              onChange={handleCarouselChange}
              selectedItem={dataNames.personTypes.indexOf(selectedType)}
              displayItems={1}
              loop={false}
            >
              {personTypeElements()}
            </Slider>
          </div>
        </div>
        <Button
          onClick={() =>
            console.log({
              type: selectedType,
              bodyPart: selectedBodyPart,
              data: inputData,
              brand: selectedBrand,
              clothes: selectedCl,
            })
          }
        >
          Розрахувати
        </Button>
      </div>
    </>
  );
}
