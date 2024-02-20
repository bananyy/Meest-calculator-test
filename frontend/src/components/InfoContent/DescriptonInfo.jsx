import React from "react";

const DescriptionInfo = () => {
  return (
    <div className="w-full flex-row-reverse flex sm:flex-col justify-between py-10h h-[550px]">
      <div className="max-w-[530px] text-center mt-[180px] sm:mt-[200px]">
        <h2 className="text-sm-h sm:text-md-h lg:text-lg-h w-9/12 md:w-full text-[#303a45]">
          Про Наш Продукт
        </h2>
        <p className="py-5 text-sm-p sm:text-md-p lg:text-lg-p text-[#303a45]">
          Розміри одягу можуть бути заплутані. Різні бренди використовують унікальні виміри, а також
          різні шкали та одиниці виміру. Тому ми створили цей продукт, щоб допомогти вам розібратися
          у цьому. Ми зібрали таблиці розмірів та вимірювання від ваших улюблених брендів, все в
          одному місці.Наш продукт постійно розвивається. Ми постійно додаємо більше брендів до
          нашої бази даних розмірів, більше продуктів та більше модних та прилягаючих порад.
        </p>
      </div>
      <div className="max-w-[320px] sm:max-w-none sm:w-[320px] md:w-[450px] absolute right-0">
        <img className="mx-auto" src={`${import.meta.env.BASE_URL}/images/roulette.png`} alt="" />
      </div>
    </div>
  );
};

export default DescriptionInfo;
