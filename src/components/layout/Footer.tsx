'use client';
import React from 'react';
import github from '../../../public/footer/github.png';
import phone from '../../../public/footer/phone.png';
import naverBlog from '../../../public/footer/naverBlog.png';
import email from '../../../public/footer/email.png';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const copyEmail = async (email: string) => {
    await navigator.clipboard.writeText(email);
    alert('이메일이 복사되었니다!');
  };

  const copyNumber = async (number: string) => {
    await navigator.clipboard.writeText(number);
    alert('번호가 복사되었습니다!');
  };

  return (
    <div className="bg-white w-full px-5 py-8">
      <p className="flex justify-center items-center">
        <span>더 많은 정보를 원하신다면 방문해주세요!</span>

        <Link href="https://github.com/monkeyhurray">
          <Image
            className="rounded"
            alt="깃허브"
            width={24}
            height={24}
            src={github}
          />
        </Link>
        <Link href="https://blog.naver.com/keumm9612">
          <Image
            className="rounded"
            alt="네이버 블로그"
            width={24}
            height={24}
            src={naverBlog}
          />
        </Link>
      </p>

      <p className="flex justify-center items-center">
        <span>연락주시면 감사하겠습니다!</span>
        <span
          className="cursor-pointer"
          onClick={() => {
            copyNumber('010-9245-3506');
          }}
        >
          <Image
            className="rounded"
            alt="핸드폰 번호"
            width={22}
            height={22}
            src={phone}
          />
        </span>

        <span
          className="cursor-pointer"
          onClick={() => {
            copyEmail('keumm9612@naver.com');
          }}
        >
          <Image
            className="rounded"
            alt="이메일"
            width={24}
            height={24}
            src={email}
          />
        </span>
      </p>
      <p className="flex justify-center items-center">
        <span>제작자 : 금상호</span>
        <span>생성일 : 2024년 9월 01일</span>
        <span>Next, TailWind CSS를 기반으로 제작된 사이트입니다.</span>
      </p>
    </div>
  );
};

export default Footer;
