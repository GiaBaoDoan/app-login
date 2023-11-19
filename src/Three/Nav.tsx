import React from "react";
export interface NavItems {
  name: string;
}
const Button: React.FC<NavItems> = ({ name }) => {
  return (
    <button className="bg-white p-2 rounded-md text-[#291D19] mr-2 mt-[10px] hover:bg-[#EFF0F1]">
      {name}
    </button>
  );
};

export default Button;
