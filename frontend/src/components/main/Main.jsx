import React from "react";
import { Wrapper } from "../Wrapper/Wrapper";
import DescriptionInfo from "../InfoContent/DescriptonInfo";
import BrandsInfo from "../InfoContent/BrandsInfo";
import SwitchInfo from "../InfoContent/SwitchInfo";
import CalcSection from "../Calculator/CalcSection";

export function MainSection() {
  return (
    <>
      <section className="bg-[#F3F8FE]">
        <Wrapper>
          <DescriptionInfo></DescriptionInfo>
        </Wrapper>
      </section>
      <section id="brands-section">
        <Wrapper>
          <BrandsInfo></BrandsInfo>
        </Wrapper>
      </section>
      <section className="bg-[#E5E7EA]">
        <div className="bg-white rounded-b-[40px] lg:rounded-b-[80px]">
          <Wrapper>
            <SwitchInfo />
          </Wrapper>
        </div>
      </section>
      <section className="bg-[#E5E7EA]">
        <Wrapper>
          <CalcSection />
        </Wrapper>
      </section>
    </>
  );
}
