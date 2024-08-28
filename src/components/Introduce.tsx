import Image from 'next/image';
import React from 'react';

const Introduce = () => {
  return (
    <div className="absolute bottom-[30%] w-full px-5 flex justify-center items-center">
      <div className="flex justify-center">
        <Image
          className="rounded-lg"
          src="/representative_photo.jpg"
          alt="대표사진"
          width={520}
          height={570}
        />
      </div>
      <div className="mt-18 ml-10">
        <div className="leading-10">
          <h1 className="text-[30px]">Front-End 개발자 금상호입니다.</h1>
          <h1 className="flex justify-center text-[31px]">
            사용자들의 편의를 위해 끊임없이 공부하고, 발전해 나가고 있습니다!
          </h1>
        </div>
        <div className="mt-12 w-fit rounded-lg h-20 leading-8">
          <h1>한국공학 대학교 IT 경영학과 졸업(2019.03 ~ 2023.08)</h1>
          <h1>스파르타 내일배움 캠프 수료 (2023.12 ~ 2024.05)</h1>
          <h1>마이티 펀치 인턴 (2024.07 ~ 2024.08)</h1>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
