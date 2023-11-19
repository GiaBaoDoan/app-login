import React, { ReactNode } from "react";
export interface JobsProps {
  title: string;
  icon: ReactNode;
  bgColor: string;
}

const CardSmall: React.FC<JobsProps> = ({ title, icon, bgColor }) => {
  return (
    <div
      className={`${bgColor} flex rounded-sm aspect-square justify-center items-center flex-col mt-[30px]  p-4`}
    >
      {icon}
      <p className="pt-2">{title}</p>
    </div>
  );
};

export default CardSmall;
