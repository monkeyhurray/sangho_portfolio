import React from 'react'
import Image from 'next/image'
const Projects = ({innerClassName}: {innerClassName:string}) => {
  return (
    <div className={`inner bg-teal-300 ${innerClassName}`}>
      <div>
      <h5 className='flex text-5xl align-top justify-center mb-5'>PROJECT</h5>
      <div className='flex p-[20px] rounded-lg border-gray-500 border-[1px]'>
        <Image className='rounded-lg' src="/porifo.png" alt='porifo image' width={400} height={300} />
        <div className='ml-5'>
          <h1>포트폴리오를 제작하고, 피드백 받을 수 있는 서비스 입니다.</h1>
          <h1></h1>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Projects
