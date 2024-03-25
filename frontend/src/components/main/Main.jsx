import React, { useEffect, useState } from "react";
import { DescriptionInfo } from "../InfoContent/DescriptonInfo";
import { BrandsInfo } from "../InfoContent/BrandsInfo";
import { SwitchInfo } from "../InfoContent/SwitchInfo";
import { CalcSection } from "../Calculator/CalcSection";
import { fetchJson } from "../../api";

export function MainSection() {
  const [brands, setBrands] = useState([]);
  const [isBrandsLoading, setIsBrandsLoading] = useState(false);

  useEffect(() => {
    setIsBrandsLoading(true);

    fetchJson("api/v1/brands")
      .then((data) => {
        setBrands(data);
      })
      .catch((err) => {
        // handle errors
        console.log(err);
      })
      .finally(() => {
        setIsBrandsLoading(false);
      });

    // (async () => {
    //   setIsBrandsLoading(true);
    //   try {
    //     const brands = await getBrands();
    //     setBrands(brands);
    //   } catch (err) {
    //     // handle errors
    //     console.log(err);
    //   } finally {
    //     setIsBrandsLoading(false);
    //   }
    // })();
  }, []);


  return (
    <>
      <section id="about-section">
        <div className="container mx-auto">
          <DescriptionInfo />
        </div>
      </section>
      <section id="brands-section">
        <div className="mx-auto flex flex-col items-center">
          <BrandsInfo brands={brands} isLoading={isBrandsLoading} />
        </div>
      </section>
      <section id="description-section">
        <div className="bg-white rounded-b-[40px] lg:rounded-b-[80px]">
          <div className="container mx-auto">
            <SwitchInfo />
          </div>
        </div>
      </section>
      <section id="calc-section">
        <div className="container mx-auto">
          <CalcSection brands={brands} />
        </div>
      </section>
    </>
  );
}
