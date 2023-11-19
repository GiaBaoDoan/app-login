import React from "react";

const Fillter = () => {
  return (
    <div
      style={{ boxShadow: "-40px -28px 0px -3px #19173d" }}
      className="bg-[#34335b] font-poppins  min-w-[30rem] pb-15 rounded-[40px] p-12"
    >
      <div className="flex justify-between items-center text-[#b6b4cc]">
        <h1 className="font-bold text-5xl">Filter</h1>
        <p className="text-5xl">X</p>
      </div>
      <div className="mt-[30px] font-medium text-[#b6b4cc]">
        <p className="uppercase">Search by keyword</p>
        <div className="relative mt-[10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="absolute top-1/2 -translate-y-1/2 left-2 w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <input
            type="text"
            placeholder="Search jobs"
            className="bg-[#262548] py-5 rounded text-xl px-[50px] w-full outline-none"
          />
        </div>
      </div>
      <div className="mt-[30px] space-y-4">
        <p className="text-[#b6b4cc] text-xl uppercase font-medium">Veiw</p>
        {["All jobs posts", "Active job posts", "Archived job posts"].map(
          (item) => {
            return (
              <div className="flex space-x-2 items-center">
                <input
                  className="accent-[#262548] w-[30px] border-[#7F7C9B] border accent- bg-[#] h-[30px]"
                  type="radio"
                  name="gender"
                  value={item}
                ></input>
                <span className="text-[#7F7C9B] font-medium">{item}</span>
              </div>
            );
          }
        )}
      </div>
      <div className="mt-[30px]">
        <p className="text-[#b6b4cc] text-xl uppercase font-medium">Include</p>
        <div className="flex items-center space-x-2 mt-[20px]">
          <input
            type="checkbox"
            className="w-[30px] h-[30px] accent-slate-50 "
          />
          <span className="text-[#b6b4cc] rounded-lg">Jobs shared with me</span>
        </div>
      </div>
      <div className="pb-[50px]">
        <div className="mt-[80px] bg-[#f9bd63] font-medium p-3 flex justify-center rounded-lg">
          <button>Save changes</button>
        </div>
      </div>
    </div>
  );
};

export default Fillter;
