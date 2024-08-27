import React from 'react';

const Header = ({ clickMethods }: { clickMethods: (idx: number) => void }) => {
  return (
    <nav className="flex items-center z-[1000] justify-between translate-x-1 border-lime-950 border-b-2 border-solid w-full h-8 text-2xl fixed px-6 py-8">
      <div className="">
        <h1 className="inline-block align-middle">Portfolio</h1>
      </div>
      <ul className="flex justify-center list-none text-ellipsis whitespace-nowrap">
        <li className="mr-5">
          <button onClick={() => clickMethods(1)}>Introduce</button>
        </li>
        <li className="mr-5">
          <button onClick={() => clickMethods(2)}>Skills & Tools</button>
        </li>
        <li className="mr-5">
          <button onClick={() => clickMethods(3)}>Intern</button>
        </li>
        <li>
          <button onClick={() => clickMethods(4)}>Projects</button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
