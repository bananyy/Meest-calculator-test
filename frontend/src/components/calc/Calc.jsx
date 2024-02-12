import React, { useState } from "react";
import { Button } from "../button/Button";
import { PersonInfo } from "./PersonInfo";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Slider } from "./Slider";
import dataNames from "./dataNames";

export function CalcSection() {
  const [selectedType, setSelectedType] = useState(dataNames.personTypes[0]);
  const [selectedBodyPart, setSelectedBodyPart] = useState(dataNames.bodyParts[0]);
  const [selectedBrand, setSelectedBrand] = useState(dataNames.brands[0]);
  const [selectedTopCl, setSelectedTopCl] = useState(dataNames.topCl[0]);
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
  };
  const handleBrandChange = (brand) => {
    handleSelectionChange(brand, setSelectedBrand);
  };
  const handleTopClChange = (topCl) => {
    handleSelectionChange(topCl, setSelectedTopCl);
  };

  const handleInputChange = (name, value) => {
    setInputData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleCarouselChange = (item) => {
    handleTypeClick(dataNames.personTypes[item]);
  };

  const stylesType = (currType) => {
    if (selectedType == "men") {
      if (currType == "women") {
        return "ml-auto";
      }
    } else if (selectedType == "women") {
      if (currType == "men") {
        return "mr-auto";
      } else if (currType == "child") {
        return "ml-auto";
      }
    } else if (selectedType == "child") {
      if (currType == "women") {
        return "mr-auto";
      }
    } else {
      return "";
    }
  };

  const personTypeElements = () => {
    return dataNames.personTypes.map((type) => (
      <PersonInfo
        key={type}
        type={type}
        part={selectedBodyPart}
        inputData={inputData}
        onClick={() => handleTypeClick(type)}
        onChange={handleInputChange}
        isSelected={selectedType === type}
        stylesType={stylesType(type)}
      />
    ));
  };

  const CustomSelect = ({ value, onChange, options, translateMap }) => (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="select-base"
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
      <div className="bg-grey w-full rounded-lg py px-28 py-8 mt-20 mb-8 sm:px-5 md:px-16 relative">
        <h2 className="text-center sm:text-sm-h text-base-h">Калькулятор розмірів</h2>
        <div className="flex items-end flex-col gap-3 my-4 md:right-5 absolute sm:flex-row sm:text-sm-p sm:justify-center sm:w-11/12">
          <CustomSelect
            value={selectedBodyPart}
            onChange={handlePartChange}
            options={dataNames.bodyParts}
            translateMap={dataNames.translateBodyParts}
          />
          <CustomSelect
            value={selectedBrand}
            onChange={handleBrandChange}
            options={dataNames.brands}
            translateMap={dataNames.translateBrands}
          />
          {selectedBodyPart === "top" && (
            <CustomSelect
              value={selectedTopCl}
              onChange={handleTopClChange}
              options={dataNames.topCl}
              translateMap={dataNames.translateTopCl}
            />
          )}
        </div>
        <div className="flex items-end mt-[120px] sm:hidden">{personTypeElements()}</div>

        <div className="mt-[60px] md:hidden">
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
            clothes: selectedTopCl,
          })
        }
      >
        Розрахувати
      </Button>
    </>
  );
}
