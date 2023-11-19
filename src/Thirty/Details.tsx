import React from "react";

const Details = () => {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-package"
        >
          <path d="m7.5 4.27 9 5.15" />
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
          <path d="m3.3 7 8.7 5 8.7-5" />
          <path d="M12 22V12" />
        </svg>
      ),
      title: "weight",
      number: 32343232323235676788,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-anchor"
        >
          <circle cx="12" cy="5" r="3" />
          <line x1="12" x2="12" y1="22" y2="8" />
          <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
        </svg>
      ),
      title: "weight",
      number: "0.3kg",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-ruler"
        >
          <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
          <path d="m14.5 12.5 2-2" />
          <path d="m11.5 9.5 2-2" />
          <path d="m8.5 6.5 2-2" />
          <path d="m17.5 15.5 2-2" />
        </svg>
      ),
      title: "dimensions",
      number: "37 x 26 x 7 cm",
    },
  ];
  const step = [
    {
      quotes: "The Shipment has arrived at the terminal",
      time: "MARCH 23 AT 08.20 - 5020 BERGEN",
    },
    {
      quotes: "The Shipment is in transit",
      time: "MARCH 22 AT 07.20 - 0024 OSLO",
    },
    {
      quotes: "The broadcast is sorted and forwarded",
      time: "MARCH 23 AT 00.38 - 0024 OSLO",
    },
    {
      quotes: "Consignment has been dispatched to terminal and forwarded",
      time: "MARCH 23 AT 00.38 - 0024 OSLO",
    },
    {
      quotes:
        "We have received information about shipment,which is currently with sender or is its way to Bring's terminal. The tracking is updated when the shipment has arrived at the terminal in reciving country ",
      time: "MARCH 21 at 07.35",
    },
  ];
  return (
    <div className="bg-white w-[45rem] p-16 rounded-[24px]">
      <h1 className="text-3xl font-medium">Package Details</h1>
      <div className="mt-[20px] bg-[#F3F3FB] rounded-[20px] border-[#F3F3FB] border p-10">
        <div className="flex justify-between">
          {features.map((item) => {
            return (
              <div className="space-y-3">
                <div className="flex space-x-2 font-medium text-[#5C5D92]">
                  {item.icon}
                  <p className="uppercase">{item.title}</p>
                </div>
                <p className="text-xl text-[#5C5D92] font-medium">
                  {item.number}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-baseline space-x-3 mt-[50px]">
        <div className="relative ">
          <div className="flex-col justify-around h-full space-y-3 flex">
            {step.map((item, key) => {
              return (
                <div className="flex space-x-3">
                  <div
                    className={`w-[20px] ${
                      key == 0 ? "border-[4px]" : ""
                    } z-10 h-[20px] bg-[#F3F3FB] mt-[2px] border border-[#5C5D92] rounded-full`}
                  ></div>
                  <p className="font-medium space-x-3 self-start  w-[80%]">
                    {item.quotes}
                    <span className="uppercase block font-normal mt-2 text-[14px] text-[#868C9C]">
                      {item.time}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
          <div className="bg-[#5C5D92] absolute top-4 -z-1 left-2.5 h-full w-[1px]"></div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Details;
