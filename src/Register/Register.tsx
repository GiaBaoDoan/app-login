import React from "react";
import bek1 from "../assets/img/bek1.png";
const Register = () => {
  return (
    <div className="bg-[#1F5460] overflow-auto">
      <div className="overflow-auto">
        <img src={bek1} className="w-full" alt="" />
        <div className="text-white p-4">
          <h1 className="text-white text-[48px] font-bold ">
            {" "}
            Let’s <br /> <span>get started </span>
          </h1>
          <span className="font-[300] my-2 mb-[30px] inline-block text-center">
            Everything start from here
          </span>
          <div className="text-[#10405A] space-y-3">
            <button className="bg-[#FFCA42]  py-[15px] px-[30px] rounded-full block w-full">
              Log in
            </button>
            <button className="bg-[#D5E7D4] rounded-full py-[15px] px-[30px] block w-full">
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div
          style={{ backgroundColor: "rgba(242, 244, 245, 0.20)" }}
          className="w-[134px] mt-[50px] mb-[10px] h-[5px] rounded-[100px] inline-flex justify-center items-center"
        ></div>
      </div>
    </div>
  );
};

export default Register;
