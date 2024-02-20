import React from "react";
import DescriptionInfo from "../InfoContent/DescriptonInfo";
import BrandsInfo from "../InfoContent/BrandsInfo";
import SwitchInfo from "../InfoContent/SwitchInfo";
import CalcSection from "../Calculator/CalcSection";

export function MainSection() {
  return (
    <>
      <section className="bg-[#F3F8FE]">
      <div className="container mx-auto">
          <DescriptionInfo></DescriptionInfo>
        </div>
      </section>
      <section id="brands-section">
        <div className="container mx-auto">
          <BrandsInfo></BrandsInfo>
        </div>
      </section>
      <section className="bg-[#E5E7EA]">
        <div className="bg-white rounded-b-[40px] lg:rounded-b-[80px]">
          <div className="container mx-auto">
            <SwitchInfo />
          </div>
        </div>
      </section>
      <section className="bg-[#E5E7EA]">
        <div className="container mx-auto">
          <CalcSection />
        </div>
      </section>
    </>
  );
}
