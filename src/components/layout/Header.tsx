import React from 'react'

const Header = () => {
  return (
    <nav className="bg-gray-400 w-full text-2xl fixed flex justify-between px-24 py-8">
      <div>
        <h1 className='inline-block align-middle'>SangHo's Portfolio</h1>
      </div>
        <ul className='list-none items-center flex'>
          <li className='mr-4'>Introduce</li>
          <li className='mr-4'>Skill</li>
          <li className='mr-4'>Projects</li>
          <li className='mr-4'>Archiving</li>
        </ul>
    </nav>
  )
}

export default Header
