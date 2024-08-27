import React from 'react';
import github from '../../../public/footer/github.png';
import notion from '../../../public/footer/notion.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-white w-full px-5 py-8">
      <div className="flex justify-center items-center">
        <div className="flex items-center">
          <div>깃허브 주소</div>
          <Image
            className="rounded"
            alt="깃허브"
            width={32}
            height={32}
            src={github}
          />
        </div>

        <div>전화번호: 010-9245-3506</div>
        <div>블로그</div>
        <div className="flex items-center">
          <div>노션</div>
          <Image
            className="rounded"
            alt="노션"
            width={32}
            height={32}
            src={notion}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
