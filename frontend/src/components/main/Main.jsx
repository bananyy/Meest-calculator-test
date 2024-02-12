import React from "react";
import { Wrapper } from "../wrapper/Wrapper";
import SwitchInfo from "../switch-info/Switch";
import { CalcSection } from "../calc/Calc";

export function MainSection() {
  return (
    <>
      <section className="bg-lightblue">
        <Wrapper>
          <div className="w-full flex sm:flex-col justify-between py-10">
            <div className="w-5/12 sm:w-full flex items-center sm:-mb-12">
              <img className="mx-auto sm:w-[300px] mr-0" src={`${import.meta.env.BASE_URL}/images/roulette.png`} alt="" />
            </div>
            <div className="w-5/12 sm:w-9/12 text-center">
              <h2 className="sm:text-sm-h text-base-h">Про Наш Продукт</h2>
              <p className="py-6 sm:text-sm-p text-base-p">
                Ми створили продукт, щоб допомогти вам з розмірами одягу. У нас є таблиці розмірів
                та вимірювань від різних брендів, які постійно оновлюються. Ми додаємо нові бренди,
                продукти та модні поради, щоб усе було зручно та зрозуміло
              </p>
            </div>
          </div>
        </Wrapper>
      </section>
      <section>
        <Wrapper>
          <div className="w-full py-10">
            <h2 className="text-center sm:text-sm-h text-base-h">Який Розмір Ви Носите?</h2>
            <SwitchInfo />
          </div>
        </Wrapper>
      </section>
      <section className="bg-darkgrey flex pb-16">
        <Wrapper>
          <CalcSection />
        </Wrapper>
      </section>
    </>
  );
}
