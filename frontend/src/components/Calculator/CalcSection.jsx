import React, { useEffect, useState } from "react";
import { Button } from "../button/Button";
import { PersonInfo } from "./PersonInfo";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Slider } from "./Slider";
import dataNames from "./dataNames";
import SwitchBar from "./SwitchBar";
import { ModalResult } from "./ModalResult";
import CustomSelect from "./CustomSelect";
import { fetchJson, postJson } from "../../api";

export function CalcSection({ brands }) {
  const [selectedGender, setSelectedGender] = useState(Object.keys(dataNames.gendersList)[0]);
  const [selectedBrand, setSelectedBrand] = useState("none");
  const [selectedCl, setSelectedCl] = useState("none");
  const [inputData, setInputData] = useState({});
  const [selectedMetric, setselectedMetric] = useState("cm");
  const [showResultMenu, setShowResultMenu] = useState(false);

  const [bodyParameters, setBodyParameters] = useState([]);

  useEffect(() => {
    selectedBrand != 'none' &&
      fetchJson("api/v1/bodyParameters")
        .then((data) => {
          setBodyParameters(data);
        })
        .catch((err) => {
          // handle errors
          console.log(err);
        });
    // .finally(() => {

    // });
  }, [selectedBrand]);

  const isFilled = selectedBrand !== "none" && selectedCl !== "none";
  const handleSelectionChange = (newValue, setSelectedValue) => {
    if (newValue !== setSelectedValue) {
      setSelectedValue(newValue);
      setInputData({});
    }
  };
  const handleGenderClick = (type) => {
    handleSelectionChange(type, setSelectedGender);
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
    handleGenderClick(Object.keys(dataNames.gendersList)[item]);
  };

  const personTypeElements = () => {
    return Object.keys(dataNames.gendersList).map((gender) => (
      <PersonInfo
        key={gender}
        gender={gender}
        clothesType={selectedCl ?? "none"}
        inputData={inputData}
        onClick={() => handleGenderClick(gender)}
        onChange={handleInputChange}
        isSelected={selectedGender === gender}
        bodyParameters={bodyParameters}
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
            <div className="text-sm-p sm:text-md-p lg:text-lg-p flex items-center gap-3 md:gap-2 justify-around md:mt-[-50px] lg:mt-[-40px] md:flex-col md:items-end md:right-10">
              <div className="max-md:hidden">
                <SwitchBar onChange={handleMetricChange} height={30}></SwitchBar>
              </div>
              <div className="md:hidden">
                <SwitchBar onChange={handleMetricChange} height={24}></SwitchBar>
              </div>
              <CustomSelect
                value={selectedBrand}
                onChange={handleBrandChange}
                options={["none", ...brandKeys]}
                translateMap={brandNamesObj}
              />
              <CustomSelect
                value={selectedCl}
                onChange={handleClChange}
                options={[...Object.keys(dataNames.clothesType)]}
                translateMap={dataNames.clothesType}
              />
            </div>
          </div>
          <div className="flex items-end mt-[60px] max-md:hidden">{personTypeElements()}</div>

          <div className="mt-[80px] xs:mt-[50px] md:hidden">
            <Slider
              onChange={handleCarouselChange}
              selectedItem={Object.keys(dataNames.gendersList).indexOf(selectedGender)}
              displayItems={1}
              loop={false}
            >
              {personTypeElements()}
            </Slider>
          </div>
          {showResultMenu && (
            <ModalResult
              onClickClose={() => setShowResultMenu(false)}
              gender={selectedGender}
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
