import React from "react";
import inputPositions from "./inputPositions";
import { parametersBodyPart } from "./parametersBodyPart";
import dataNames from "./dataNames";

export function PersonInfo(props) {
  const { gender, part, clothesType, inputData, isSelected, onClick, onChange } = props;

  // const genderPositions = inputPositions[gender];
  // const partPositions = genderPositions[part];
  // const inputNames = partPositions ? Object.keys(partPositions) : [];

  // const genderParameters = parametersBodyPart[gender];
  // const partParameters = genderParameters[part];
  // const typeClothesParameters = partParameters[clothesType ? clothesType : 'none'];

  return (
    <div
      className={`item-person-block ${isSelected ? "selected-person" : ""} ${
        part != "none" && isSelected ? "translate-left" : ""
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
          {isSelected && part != "none" && (
            <>
              {parametersBodyPart[gender][part][clothesType].map((name) => (
                <img
                  src={`${import.meta.env.BASE_URL}/assets/images/${gender}/parameters/${name}.png`}
                  className="absolute green-diagram-img appear-animation"
                  key={name}
                />
              ))}
              {parametersBodyPart[gender][part][clothesType].map((name) => (
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
                    value={inputData[name]}
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
