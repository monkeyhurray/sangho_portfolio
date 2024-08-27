'use client';
import React, { useState } from 'react';
import ReactFullpage, { fullpageOptions } from '@fullpage/react-fullpage';
import Introduce from '@/components/Introduce';
import Projects from '@/components/Projects';
import SkillsAndTools from '@/components/SkillsAndTools';
import Header from '@/components/layout/Header';
import Intern from '@/components/Intern';

const Sections = () => {
  return (
    <ReactFullpage
      // pluginWrapper={pluginWrapper}
      //fullpage options
      credits={{
        enabled: false,
        label: '',
        position: 'right',
      }}
      scrollingSpeed={800} /* Options here */
      fitToSection={true}
      navigationPosition="right"
      scrollBar={false}
      navigationTooltips={['First Section', 'Second Section', 'Third Section']}
      slidesNavigation={true}
      slidesNavPosition="bottom"
      touchSensitivity={2}
      scrollHorizontally={true} /* Because we are using the extension */
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div>
              <Header clickMethods={(idx: number) => fullpageApi.moveTo(idx)} />
            </div>
            <div className="section">
              <Introduce />
            </div>
            <div className="section">
              <SkillsAndTools />
            </div>
            <div className="section">
              <Intern />
            </div>
            <div className="section">
              <Projects />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default Sections;
