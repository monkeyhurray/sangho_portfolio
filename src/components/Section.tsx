import {useRef, useEffect} from 'react'
import Projects from "@/components/Projects";
import Stacks from "@/components/Stacks";
import Introduce from "@/components/Introduce";

const Section = () => {

  return (
    <div className='pt-[97px]'>
      <Introduce />
      <Stacks />
      <Projects />
    </div>
  )
}

export default Section
