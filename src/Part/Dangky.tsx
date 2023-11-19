import React from "react";
import Input, { inputProps } from "./input";
import { useNavigate } from "react-router-dom";
import APPLE from "../assets/img/apple.png";
import GG from "../assets/img/gg.png";

const Signup = () => {
  const navigate = useNavigate();
  const listInput: inputProps[] = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M13.3333 5.83333C13.3333 6.71739 12.9821 7.56523 12.357 8.19036C11.7319 8.81548 10.884 9.16667 9.99996 9.16667C9.1159 9.16667 8.26806 8.81548 7.64294 8.19036C7.01782 7.56523 6.66663 6.71739 6.66663 5.83333C6.66663 4.94928 7.01782 4.10143 7.64294 3.47631C8.26806 2.85119 9.1159 2.5 9.99996 2.5C10.884 2.5 11.7319 2.85119 12.357 3.47631C12.9821 4.10143 13.3333 4.94928 13.3333 5.83333V5.83333ZM9.99996 11.6667C8.45286 11.6667 6.96913 12.2812 5.87517 13.3752C4.78121 14.4692 4.16663 15.9529 4.16663 17.5H15.8333C15.8333 15.9529 15.2187 14.4692 14.1247 13.3752C13.0308 12.2812 11.5471 11.6667 9.99996 11.6667V11.6667Z"
            stroke="#96A7AF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      placeholder: "Username",
      type: "text",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M2.5 15.8332V8.39155C2.49996 8.11723 2.56763 7.84714 2.69701 7.60525C2.82639 7.36335 3.01347 7.15713 3.24167 7.00489L9.075 3.11655C9.34888 2.93382 9.67075 2.8363 10 2.8363C10.3292 2.8363 10.6511 2.93382 10.925 3.11655L16.7583 7.00489C16.9865 7.15713 17.1736 7.36335 17.303 7.60525C17.4324 7.84714 17.5 8.11723 17.5 8.39155V15.8332M2.5 15.8332C2.5 16.2752 2.67559 16.6992 2.98816 17.0117C3.30072 17.3243 3.72464 17.4999 4.16667 17.4999H15.8333C16.2754 17.4999 16.6993 17.3243 17.0118 17.0117C17.3244 16.6992 17.5 16.2752 17.5 15.8332M2.5 15.8332L8.125 12.0832M17.5 15.8332L11.875 12.0832M8.125 12.0832L2.5 8.33322M8.125 12.0832L9.075 12.7166C9.34888 12.8993 9.67075 12.9968 10 12.9968C10.3292 12.9968 10.6511 12.8993 10.925 12.7166L11.875 12.0832M11.875 12.0832L17.5 8.33322"
            stroke="#96A7AF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      placeholder: "Email address",
      type: "text",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M10 12.5V14.1667V12.5ZM5.00004 17.5H15C15.4421 17.5 15.866 17.3244 16.1786 17.0118C16.4911 16.6993 16.6667 16.2754 16.6667 15.8333V10.8333C16.6667 10.3913 16.4911 9.96738 16.1786 9.65482C15.866 9.34226 15.4421 9.16667 15 9.16667H5.00004C4.55801 9.16667 4.13409 9.34226 3.82153 9.65482C3.50897 9.96738 3.33337 10.3913 3.33337 10.8333V15.8333C3.33337 16.2754 3.50897 16.6993 3.82153 17.0118C4.13409 17.3244 4.55801 17.5 5.00004 17.5ZM13.3334 9.16667V5.83333C13.3334 4.94928 12.9822 4.10143 12.3571 3.47631C11.7319 2.85119 10.8841 2.5 10 2.5C9.11599 2.5 8.26814 2.85119 7.64302 3.47631C7.0179 4.10143 6.66671 4.94928 6.66671 5.83333V9.16667H13.3334Z"
            stroke="#96A7AF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      placeholder: "Password",
      type: "password",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M10 12.5V14.1667V12.5ZM5.00004 17.5H15C15.4421 17.5 15.866 17.3244 16.1786 17.0118C16.4911 16.6993 16.6667 16.2754 16.6667 15.8333V10.8333C16.6667 10.3913 16.4911 9.96738 16.1786 9.65482C15.866 9.34226 15.4421 9.16667 15 9.16667H5.00004C4.55801 9.16667 4.13409 9.34226 3.82153 9.65482C3.50897 9.96738 3.33337 10.3913 3.33337 10.8333V15.8333C3.33337 16.2754 3.50897 16.6993 3.82153 17.0118C4.13409 17.3244 4.55801 17.5 5.00004 17.5ZM13.3334 9.16667V5.83333C13.3334 4.94928 12.9822 4.10143 12.3571 3.47631C11.7319 2.85119 10.8841 2.5 10 2.5C9.11599 2.5 8.26814 2.85119 7.64302 3.47631C7.0179 4.10143 6.66671 4.94928 6.66671 5.83333V9.16667H13.3334Z"
            stroke="#96A7AF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      placeholder: "Comfirm password",
      type: "password",
    },
  ];
  return (
    <div className="p-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M3 12H21M10 19L3 12L10 19ZM3 12L10 5L3 12Z"
          stroke="#1F5460"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <h1 className="mt-[10px] text-[#1F5460] text-[32px] font-[700]">
        Create account
      </h1>
      <span className="text-[#879EA4] inline-block mt-[10px] font-[500] text-[16px]">
        Sign up to get started!
      </span>
      <div className="mt-[30px]">
        {listInput.map((item) => {
          return (
            <Input
              placeholder={item.placeholder}
              type={item.type}
              icon={item.icon}
            />
          );
        })}
      </div>

      <h2 className="text-[#1F5460] text-right mt-3 font-[400]">
        Forgot password?
      </h2>
      <div>
        <button className="bg-[#FFCA42] font-bold mt-[15px] py-[15px] px-[30px] rounded-full block w-full">
          Log in
        </button>
        <button className="bg-[#000] flex mt-[15px] font-[500] py-[15px] px-[30px] rounded-full justify-center items-center space-x-2 w-full">
          <span>
            <img src={APPLE} className="w-[23px] h-[23px]" alt="" />
          </span>
          <span className="text-white font-bold">Log in using Apple</span>
        </button>
        <button className="bg-[#F0F5F2] text-[#10405A] mt-[15px] font-[500] py-[15px] px-[30px] rounded-full flex justify-center items-center space-x-2 w-full">
          <img src={GG} alt="" />
          <span className="font-bold">Log in using Google</span>
        </button>
      </div>
      <div className="mt-[70px]">
        <h2 className="text-[#1F5460] font-[500] flex justify-center">
          Already member?
          <button onClick={() => navigate("/")} className="">
            Log in
          </button>
        </h2>
        <div className="flex justify-center">
          <div
            style={{ backgroundColor: "rgba(31, 84, 96, 0.20)" }}
            className="w-[134px] mb-[10px] mt-[15px] h-[5px] rounded-[100px] inline-flex justify-center items-center"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
