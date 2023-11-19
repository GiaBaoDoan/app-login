import React from "react";
export interface picture {
  pic: {
    mainPic: string;
    listSmallImg: string[];
    name: string;
    number: string;
  };
}
const Card: React.FC<picture> = ({ pic }) => {
  return (
    <div className="card mt-[20px] bg-white p-[20px] rounded-[25px]">
      <div className="pic-header">
        <img
          className="rounded-[25px] w-full h-[250px]"
          src={pic.mainPic}
          alt=""
        />
      </div>
      <div className="pic-body mt-[15px]">
        <div className="grid grid-cols-3 gap-[10px]">
          {pic.listSmallImg.map((item) => {
            return (
              <div className="rounded-[25px] h-[100px] overflow-hidden ">
                <img className="h-full w-full" src={item} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="footer mt-[20px]">
        <div className="flex justify-between">
          <p className="font-medium text-xl">{pic.name}</p>
          <div className="flex gap-x-2 items-center font-medium text-[16px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>

            <p>{pic.number}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
