import React from 'react';

const Header = () => {
  return (
    <nav className="flex items-center bg-white justify-between border-lime-950 border-b-2 border-solid w-full h-fit text-2xl px-6 py-8">
      <div className="">
        <h1 className="inline-block align-middle">
          SangHo&apos;s&nbsp;&nbsp;Portfolio
        </h1>
      </div>
      <ul className="flex justify-center list-none text-ellipsis whitespace-nowrap">
        <li className="mr-5">
          <a href="#introduce">Introduce</a>
        </li>
        <li className="mr-5">
          <a href="#skills">Skills & Tools</a>
        </li>
        <li className="mr-5">
          <a href="#intern">Intern</a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
