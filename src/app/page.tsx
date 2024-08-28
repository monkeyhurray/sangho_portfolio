'use client';

import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Introduce from '@/components/Introduce';
import Projects from '@/components/Projects';
import SkillsAndTools from '@/components/SkillsAndTools';

import Intern from '@/components/Intern';
export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {!isLoading && <div>Loading...</div>}
      <div
        className={`transition-opacity duration-500 ease-in-out ${
          isLoading ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <ReactFullpage
          // pluginWrapper={pluginWrapper}

          credits={{
            enabled: false,
            label: '',
            position: 'right',
          }}
          afterRender={() => setIsLoading(true)}
          scrollingSpeed={800} /* Options here */
          fitToSection={true}
          navigationPosition="right"
          scrollBar={false}
          anchors={['introduce', 'skills', 'intern', 'project']}
          slidesNavigation={true}
          touchSensitivity={2}
          scrollHorizontally={true} /* Because we are using the extension */
          render={({ fullpageApi }) => {
            return (
              <>
                <ReactFullpage.Wrapper>
                  <div className="section">
                    <Introduce />
                  </div>
                  <div className="section">
                    <SkillsAndTools />
                  </div>
                  <div className="section">
                    <Intern />
                  </div>
                  <div className="section flex items-center">
                    <Projects />
                  </div>
                </ReactFullpage.Wrapper>
              </>
            );
          }}
        />
      </div>
    </>
  );
}
