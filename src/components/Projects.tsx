import React from 'react';

import Porifo from './Porifo';
import BlankTime from './BlankTime';
import Portfolio from './Portfolio';

const Projects = () => {
  return (
    <div className="absolute bottom-[40%] w-full px-5">
      <div className="slide">
        <Porifo />
      </div>
      <div className="slide">
        <BlankTime />
      </div>
      <div className="slide">
        <Portfolio />
      </div>
    </div>
  );
};

export default Projects;
