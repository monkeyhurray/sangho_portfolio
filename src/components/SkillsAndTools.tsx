import Image from 'next/image';
import React from 'react';

const SkillsAndTools = () => {
  return (
    <div className="absolute bottom-[40%] w-full bg-teal-300 px-20 py-8">
      <h5 className="flex text-5xl align-top justify-center mb-2 h-fit">
        DAILY PT
      </h5>
      <div className="flex p-[20px] rounded-lg border-solid border-gray-500 border-[1px]">
        <Image
          className="rounded-lg"
          src="/intern/dailyPTLogo.png"
          alt="porifo image"
          width={400}
          height={300}
        />
        <div className="ml-10 mt-4 leading-10 text-lg">
          <h1>
            PT를 가장 간편하게 받는 방법, 데일리 PT에서 경험할 수 있으며, 더
            이상 비싼 회원권에 부담을 느낄 필요 없이, 합리적인 가격으로 퍼스널
            트레이닝을 받아볼 수 있습니다.👏🏻
          </h1>
          <br />
          <h1>
            복잡한 스케줄 조율 없이도 원스톱으로 예약과 결제가 가능해, 바쁜
            현대인도 손쉽게 원하는 시간과 날짜에 가까운 제휴 센터에서 PT를 받을
            수 있습니다.🏋️‍♀️
          </h1>

          <h1 className="flex justify-center">
            <button>더보기</button>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SkillsAndTools;
