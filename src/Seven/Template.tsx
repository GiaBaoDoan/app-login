import React from "react";
export interface cardProps {
  logo: string;
  shadow: string;
  title: string;
  content: string;
  number: number;
}
const Template: React.FC<cardProps> = ({
  logo,
  content,
  title,
  number,
  shadow,
}) => {
  return (
    <div
      style={{ boxShadow: `-29px -28px 0px 0px  ${shadow}` }}
      className="relative mt-[50px] rounded-[20px]"
    >
      <div className="card bg-white p-10 rounded-[20px]  z-10 shadow-lg  space-y-12 ">
        <img src={logo} className=" h-9" alt="" />
        <div>
          <p className="font-bold text-xl">{title}</p>
          <p className="font-normal ">{content}</p>
          <p className="mt-4">
            <span className="text-2xl font-bold">{number},-</span>
            <span>/mounth</span>
          </p>
        </div>
        <div className="bg-[#a9a9aa] rounded-full flex justify-center pb-1">
          <button className="bg-[#F3F3F7] inline-block w-full p-4 rounded-full px-5 font-medium">
            Add Subscription
          </button>
        </div>
      </div>
    </div>
  );
};

export default Template;
