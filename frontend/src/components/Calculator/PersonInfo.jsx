import React from "react";
import inputPositions from "./inputPositions";
import dataNames from "./dataNames";

export function PersonInfo(props) {
  const { gender, clothesType, inputData, isSelected, onClick, onChange, bodyParameters } = props;
  const bodyParametersObject = {};
  bodyParameters.forEach((item) => {
    const { gender, bodyParameters } = item;
    bodyParametersObject[gender] = bodyParameters;
  });

  return (
    <div
      className={`item-person-block ${isSelected ? "selected-person" : ""} ${
        clothesType != "none" && isSelected ? "translate-left" : ""
      }`}
    >
      <div className="h-full flex justify-center m-auto cursor-default">
        <div className="relative h-full">
          <img
            onClick={onClick}
            src={`${import.meta.env.BASE_URL}/assets/images/${gender}/main.png`}
            className={`person-img cursor-pointer ${
              isSelected ? "selected-person-block" : "non-selected-person-block"
            }`}
          />
          {isSelected && clothesType != "none" && (
            <>
              {bodyParametersObject[gender][clothesType].map((name) => (
                <img
                  src={`${import.meta.env.BASE_URL}/assets/images/${gender}/parameters/${name}.png`}
                  className="absolute green-diagram-img appear-animation"
                  key={name}
                />
              ))}
              {bodyParametersObject[gender][clothesType].map((name) => (
                <div
                  className="input-green-diagram-block appear-animation"
                  style={{
                    top: inputPositions[gender][name].top,
                    left: inputPositions[gender][name].left,
                  }}
                  key={name}
                >
                  <div className="input-green-diagram-label inline-block">
                    <label
                      htmlFor={name}
                      className="text-[12px] sm:text-sm-p md:text-md-p block w-full text-center appear-animation max-sm:text-[11px]"
                    >
                      {dataNames.parametersList[name]}
                    </label>
                  </div>
                  <input
                    key={name}
                    id={name}
                    type="number"
                    className="input-green-diagram appear-animation z-5"
                    name={name}
                    value={inputData[name] || ""}
                    onClick={(event) => event.stopPropagation()}
                    onChange={(event) => onChange(name, event.target.value)}
                    maxLength="4"
                    required
                  />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
