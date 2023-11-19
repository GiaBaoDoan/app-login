import React from "react";
import Input from "../Four/Input";

const Login = () => {
  const otherLogin = [
    {
      logo: "https://storage.googleapis.com/support-kms-prod/ZAl1gIwyUsvfwxoW9ns47iJFioHXODBbIkrK",
      text: "Continue with Google ",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
      text: "Continue with Microsoft ",
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/0/747.png",
      text: "Continue with Apple ",
    },
  ];
  return (
    <div className="bg-white p-16 min-w-[35rem] rounded-lg">
      <h1 className="text-[#191A48]  font-bold text-center text-3xl">Log in</h1>
      {["Enter your email", "Enter your password"].map((item) => {
        return (
          <div className="">
            <input
              type="text"
              className="bg-[#FAFAFB] outline-none border w-full p-5 font-medium mt-3"
              placeholder={item}
            />
          </div>
        );
      })}
      <div className="">
        <button className="w-full mt-3 p-6 rounded-md text-white font-medium bg-[#191A48]">
          Log in
        </button>
      </div>
      <div className="text-center my-[30px]">
        <span className="text-[#9d9aa8] font-medium">OR</span>
      </div>
      <div className="space-y-3">
        {otherLogin.map((item) => {
          return (
            <div className="flex items-center text-[#191A48] font-medium bg-[#FAFAFB] justify-center border p-4 space-x-2 rounded-lg">
              <img src={item.logo} className="h-6 " alt="" />
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
      <div>
        <h1 className="text-[#191A48] font-medium text-[18px] text-center my-[30px]">
          Can't log in? Already have an account ?
        </h1>
      </div>
    </div>
  );
};

export default Login;
