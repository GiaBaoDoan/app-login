import React, { useState } from "react";
import Input from "./Input";
import Rating from "./Rating";
const ReviewForm = () => {
  const [isComfirm, setIsComfirm] = useState<boolean>(true);
  const [checkbox, setCheckbox] = useState<boolean>(false);
  return (
    <div className="bg-white w-[42rem] p-16 rounded-3xl">
      <h1 className="text-2xl font-medium">Overall rating</h1>
      <div className="mt-3">
        <Rating />
        <p className="text-sm font-normal text-[#242542]"> Click to rate</p>
      </div>
      <Input
        title="Review title"
        placehoder="Example: Easy to use"
        type="text"
      />
      <div className="space-y-2 mt-5">
        <h2 className="font-medium">
          Would you like to recomend this product to a friend ?
        </h2>
        <div className="flex space-x-5 mt-6">
          <div className="flex space-x-2 items-center ">
            <div
              onClick={() => setIsComfirm(true)}
              className="w-[25px] cursor-pointer h-[25px] border  border-gray-200 rounded-full flex items-center justify-center "
            >
              {isComfirm && (
                <div className="w-[18px] h-[18px] bg-black border-black rounded-full"></div>
              )}
            </div>
            <p className="font-medium">Yes </p>
          </div>
          <div className="flex space-x-2 items-center">
            <div
              onClick={() => setIsComfirm(false)}
              className="w-[25px] h-[25px] border cursor-pointer  border-gray-200 rounded-full flex items-center justify-center "
            >
              {!isComfirm && (
                <div className="w-[18px] h-[18px] bg-black border-black rounded-full"></div>
              )}
            </div>
            <p>No</p>
          </div>
        </div>
      </div>
      <Input
        title="Product review"
        placehoder="Example : Since I bought this a mounth ago,it has been used a lot.What I like best/what is worst product is "
        type="textarea"
      />
      <div className="flex gap-x-2">
        <div className="grow  ">
          <Input placehoder="Example: Bob88" title="Nickname" type="text" />
        </div>
        <div className="grow">
          <Input
            placehoder="Example : your@email.com"
            title="Email address (will not be published)"
            type="text"
          />
        </div>
      </div>
      <div className="mt-[20px]">
        <div className="flex items-center  gap-x-2">
          <div
            onClick={() => setCheckbox(!checkbox)}
            className="w-[25px] h-[25px]  border cursor-pointer  border-gray-200 rounded-full flex items-center justify-center "
          >
            {checkbox && (
              <div className="w-[18px] h-[18px] bg-black border-black rounded-full"></div>
            )}
          </div>
          <p>
            I accept the{" "}
            <span className="underline decoration-gray-400">
              terms and condtions
            </span>
          </p>
        </div>
      </div>
      <p className="mt-[20px] font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iusto non a
        obcaecati, maxime eveniet aperiam ipsum debitis tempora rerum? Deserunt,
        sapiente asperiores illo quaerat atque aspernatur magnam et assumenda.
      </p>
      <button className="rounded-md bg-[#121633] text-white p-3 mt-[20px]">
        Submit product reveiw
      </button>
    </div>
  );
};

export default ReviewForm;
