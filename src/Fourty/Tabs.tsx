import React, { ReactNode } from "react";
import styled from "styled-components";
export interface TabsProps {
  icon: ReactNode;
  title: string;
}
const Tabs: React.FC<TabsProps> = ({ icon, title }) => {
  return (
    <TabsCSS className="relative">
      <div className="flex  par cursor-pointer hover:!font-bold transition-all  space-x-3 text-[#747399] items-center">
        {icon}
        <p>{title}</p>
        <div className="absolute h-[0%] opacity-0  w-[6px] transition-all duration-500  scale-y-(0) -left-8 bar rounded-full bg-[#fc6453]"></div>
      </div>
    </TabsCSS>
  );
};

const TabsCSS = styled.div`
  .par:hover {
    .bar {
      transform: scaleY(1);
      height: 125%;
      transition: 0.3s all;
      opacity: 1;
    }
  }
`;

export default Tabs;
