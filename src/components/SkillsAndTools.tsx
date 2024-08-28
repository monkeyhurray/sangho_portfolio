import Image from 'next/image';
import React from 'react';
import react from '../../public/skills/react.svg';
import next from '../../public/skills/next.svg';

import redux from '../../public/skills/redux.svg';
import query from '../../public/skills/query.svg';
import zustand from '../../public/skills/zustand.jpeg';
import tailwind from '../../public/skills/tailwind.svg';
import vue from '../../public/skills/vue.svg';
import github from '../../public/skills/github.svg';
import html from '../../public/skills/html.svg';
import javascript from '../../public/skills/javascript.svg';
import typescript from '../../public/skills/typescript.svg';
import slack from '../../public/skills/slack.svg';
import figma from '../../public/skills/figma.svg';
import hookform from '../../public/skills/hookform.svg';
import go from '../../public/skills/go.svg';
import swift from '../../public/skills/swift.svg';
import styledComponents from '../../public/skills/styled.png';

const SkillsAndTools = () => {
  return (
    <div className="absolute bottom-[25%] w-full bg-teal-300 px-20 flex justify-center sm:bottom-[35%]">
      <div className="flex flex-col items-center space-y-4 w-fit p-4 mr-48 sm:mr-0">
        <h1 className="mb-3 text-[32px] sm:text-[22px]">할 수 있습니다!</h1>
        <div className="flex">
          <p className="mx-4 space-y-4 sm:mx-1">
            <span className={`${tailwindImg}`}>
              <Image width={0} height={0} alt="react" src={next} />
            </span>
            <span className={`${tailwindImg}`}>
              <Image width={0} height={0} alt="react" src={react} />
            </span>
            <span className={`${tailwindImg}`}>
              <Image width={0} height={0} alt="redux" src={redux} />
            </span>
            <span className={`${tailwindImg}`}>
              <Image width={0} height={0} alt="리액트" src={javascript} />
            </span>

            <span className={`${tailwindImg}`}>
              <Image width={0} height={0} alt="typescript" src={typescript} />
            </span>
            <span className={`${tailwindImg}`}>
              <Image width={0} height={0} alt="html" src={html} />
            </span>
          </p>
          <p className="space-y-4 mx-4 sm:mx-1">
            <span className={`${tailwindImg}`}>
              <Image width={0} height={0} alt="html" src={zustand} />
            </span>
            <span className={`${tailwindImg}`}>
              <Image width={0} height={0} alt="html" src={query} />
            </span>
            <span className={`${tailwindImg}`}>
              <Image width={0} height={0} alt="html" src={tailwind} />
            </span>
            <span className={`${tailwindImg}`}>
              <Image width={0} height={0} alt="html" src={styledComponents} />
            </span>
            <span className={`${tailwindImg}`}>
              <Image width={0} height={0} alt="html" src={hookform} />
            </span>
          </p>
          <div>
            <p className="flex flex-col w-fit space-y-4 mx-4 sm:mx-1">
              <span className={`${tailwindImg}`}>
                <Image width={0} height={0} alt="github" src={github} />
              </span>
              <span className={`${tailwindImg}`}>
                <Image width={0} height={0} alt="slack" src={slack} />
              </span>
              <span className={`${tailwindImg}`}>
                <Image width={0} height={0} alt="figma" src={figma} />
              </span>
            </p>
          </div>
        </div>
      </div>
      <p className="flex flex-col items-center w-fit p-4 space-y-4">
        <span className="mb-3 text-[32px] sm:text-[22px] w-fit text-ellipsis whitespace-nowrap">
          도전해 보고 싶습니다!
        </span>
        <span className={`${tailwindImg}`}>
          <Image width={105} height={105} alt="vue" src={vue} />
        </span>
        <span className={`${tailwindImg}`}>
          <Image width={105} height={105} alt="go" src={go} />
        </span>
        <span className={`${tailwindImg}`}>
          <Image width={105} height={105} alt="swift" src={swift} />
        </span>
      </p>
    </div>
  );
};

export default SkillsAndTools;

const tailwindImg =
  'flex justify-center items-center w-[106px] h-[106px] rounded bg-white border border-solid border-neutral-500 sm:w-[70px] sm:h-[70px] transition-transform duration-300 transform hover:scale-105';

const tailwindAni =
  'transition-transform duration-200 transform hover:scale-105';
