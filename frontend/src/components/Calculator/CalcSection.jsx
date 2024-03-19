import React, { useState } from "react";
import { Button } from "../button/Button";
import { PersonInfo } from "./PersonInfo";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Slider } from "./Slider";
import dataNames from "./dataNames";
import SwitchBar from "./SwitchBar";
import { ModalResult } from "./ModalResult";
import CustomSelect from "./CustomSelect";
import { postJson } from "../../api";

export function CalcSection({ brands }) {
  const [selectedType, setSelectedType] = useState(dataNames.personTypes[0]);
  const [selectedBodyPart, setSelectedBodyPart] = useState("none");
  const [selectedBrand, setSelectedBrand] = useState("none");
  const [selectedCl, setSelectedCl] = useState("none");
  const [inputData, setInputData] = useState({});
  const [selectedMetric, setselectedMetric] = useState("cm");
  const [showResultMenu, setShowResultMenu] = useState(false);

  const isFilled = selectedBodyPart !== "none" && selectedBrand !== "none" && selectedCl !== "none";

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
    handleSelectionChange("none", setSelectedCl);
    handleSelectionChange({}, setInputData);
  };
  const handleBrandChange = (brand) => {
    handleSelectionChange(brand, setSelectedBrand);
  };
  const handleClChange = (Cl) => {
    handleSelectionChange(Cl, setSelectedCl);
  };

  const handleInputChange = (name, value) => {
    setInputData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  const handleMetricChange = (metric) => {
    setselectedMetric(metric);
  };

  const handleCarouselChange = (item) => {
    handleTypeClick(dataNames.personTypes[item]);
  };

  const personTypeElements = () => {
    return dataNames.personTypes.map((gender) => (
      <PersonInfo
        key={gender}
        gender={gender}
        part={selectedBodyPart ?? "none"}
        clothesType={selectedCl ?? "none"}
        inputData={inputData}
        onClick={() => handleTypeClick(gender)}
        onChange={handleInputChange}
        isSelected={selectedType === gender}
      />
    ));
  };

  const brandKeys = brands.map((brand) => brand.key);
  const brandNamesObj = brands.reduce((acc, curr) => ({ ...acc, [curr.key]: curr.name }), {
    none: "Бренд",
  });

  const isCalcEnabled = isFilled;

  const handleCalc = () => {
    postJson("api/v1/calc", {
      selectedBrand,
      selectedBodyPart,
      selectedCl,
    })
      .then((data) => {
        // handle response
      })
      .catch((err) => {
        console.error(err);
      });

    setShowResultMenu(true);
  };

  return (
    <>
      <div className="flex flex-col items-center py-2 w-full">
        <div
          className={`w-full bg-[#EFF1F4] rounded-[40px] py-8 relative px-3 sm:px-6 md:px-8 lg:px-16 xl:px-24 my-8 ${
            showResultMenu ? "" : "calc-shadow-box"
          }`}
        >
          <h2 className="text-center text-sm-h sm:text-md-h lg:text-lg-h">Калькулятор розмірів</h2>
          <div className="absolute left-5 right-5 mt-4 md:pb-10 md:pl-10 md:right-10">
            <div className="text-sm-p sm:text-md-p lg:text-lg-p flex items-center gap-3 md:gap-2 justify-around md:mt-[-50px] lg:mt-[-55px] md:flex-col md:items-end md:right-10">
              <div className="max-xs:absolute max-xs:right-1 max-xs:top-10 md:mb-1 z-10">
                <SwitchBar onChange={handleMetricChange}></SwitchBar>
              </div>
              <CustomSelect
                value={selectedBrand}
                onChange={handleBrandChange}
                options={["none", ...brandKeys]}
                translateMap={brandNamesObj}
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
                    : [
                        "none",
                        ...Object.values(dataNames.typeClothes).flatMap((clothes) => clothes),
                      ]
                }
                translateMap={dataNames.translateTypeClothes}
              />
            </div>
          </div>
          <div className="flex items-end mt-[60px] max-md:hidden">{personTypeElements()}</div>

          <div className="mt-[80px] xs:mt-[50px] md:hidden">
            <Slider
              onChange={handleCarouselChange}
              selectedItem={dataNames.personTypes.indexOf(selectedType)}
              displayItems={1}
              loop={false}
            >
              {personTypeElements()}
            </Slider>
          </div>
          {showResultMenu && (
            <ModalResult
              onClickClose={() => setShowResultMenu(false)}
              gender={selectedType}
              clothesType={selectedCl}
            />
          )}
        </div>
        <Button disabled={!isCalcEnabled} onClick={handleCalc}>
          Розрахувати
        </Button>
      </div>
    </>
  );
}
