import React from "react";
import styled from "styled-components";
interface itemProps {
  logo: string;
  company: string;
  numberAccount: number;
}
const arrItems: itemProps[] = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Dropbox_Icon.svg/826px-Dropbox_Icon.svg.png",
    company: "Dropbox",
    numberAccount: 24,
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png",
    company: "Pinterest",
    numberAccount: 3,
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
    company: "Microsoft",
    numberAccount: 19,
  },
];
const Accounts = () => {
  return (
    <Account className="bg-white p-16 min-w-[60rem] rounded-lg">
      <div className="flex justify-between items-center">
        <div className="relative">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 top-1/2 -translate-y-1/2 left-2 absolute"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>

            <input
              className="border  py-4 px-10 outline-none rounded-lg border-[#1E316A] border-opacity-50"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex space-x-5 items-center">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
            <div className="bg-[#8899E7] w-[10px] h-[10px] top-0 right-0 absolute rounded-full"></div>
          </div>
          <span className="bg-[#8899E7] w-[70px] inline-flex justify-center items-center h-[70px] text-white font-medium text-2xl rounded-full">
            IG
          </span>
        </div>
      </div>
      <div className="">
        <h1 className="text-[#1E316A] font-bold text-3xl mt-[30px]">
          Accounts
        </h1>
        {arrItems.map((item, index) => {
          return (
            <div className="flex justify-between items-center cursor-pointer par hover:bg-[#EDECFB] p-5 rounded-[20px]   mt-[40px]">
              <div className="flex space-x-5 items-center">
                <div className="bg-white p-3 rounded-full">
                  <img src={item.logo} className="h-9" alt="" />
                </div>
                <div>
                  <p className="text-2xl font-medium">{item.company}</p>
                  <p className="text-gray-500">
                    {item.company.toLocaleLowerCase()}.com
                  </p>
                </div>
              </div>
              <div>{item.numberAccount} accounts</div>
              <div className="bg-white w-[40px] h-[40px] flex justify-center rounded-full ">
                <p className="text-2xl text-gray-400 space-x-[2px] font-bold child">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Account>
  );
};
const Account = styled.div`
  .par {
    &:hover {
      .child {
        color: #1e316a;
      }
    }
  }
`;

export default Accounts;
