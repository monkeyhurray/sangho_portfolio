import Image from 'next/image';
import React from 'react';

const BlankTime = () => {
  return (
    <div className="bg-teal-300 px-20 py-8">
      <h5 className="flex text-5xl align-top justify-center mb-5 h-fit">
        BLANK TIME
      </h5>
      <div className="flex justify-center p-[20px] rounded-lg border-gray-500 border-[1px]">
        <Image
          className="rounded-lg"
          src="/projects/porifo.png"
          alt="porifo image"
          width={400}
          height={300}
        />
        <div className="ml-10 mt-4 leading-10 text-lg">
          <h1>포트폴리오를 제작하고, 피드백 받을 수 있는 서비스 입니다.</h1>
          <h1>개발자라는 직업을 가졌거나 희망하는 사람들끼리 모여</h1>
          <h1>
            어떤 커리어와 어떤 프로젝트 경험이 있는지 소통을 나누며 함께 성장
            🔼 할 수 있는
          </h1>
          <h1>
            개발자 전용 포트폴리오 웹 서비스 포리포 를 제작하게 되었습니다 👏🏻
          </h1>
          <h1 className="flex justify-center">
            <button>더보기</button>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BlankTime;
