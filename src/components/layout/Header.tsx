import React from 'react'

const Header = () => {
  return (
    <nav className="border-b-2 translate-x-1 border-lime-950 w-full text-2xl fixed flex justify-between px-24 py-8">
      <div>
        <h1 className='inline-block align-middle'>Portfolio</h1>
      </div>
      <ul className='list-none items-center flex'>
        <li className='mr-5'>Introduce</li>
        <li className='mr-5'>Skill&Tools</li>
        <li>Projects</li>
      </ul>
    </nav>
  )
}

export default Header
