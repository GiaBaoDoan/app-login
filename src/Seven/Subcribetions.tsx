import React from "react";
import Template, { cardProps } from "./Template";
const cardARR: cardProps[] = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ice_logo.svg/1200px-Ice_logo.svg.png",
    title: "Ice Mobile 10 GB",
    content: "Up to 100Mbits/s",
    number: 299,
    shadow: "#f9f2df",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Telia_logo_2022.svg/2560px-Telia_logo_2022.svg.png",
    title: "Telia Mobil 15GB",
    content: "Unlimited calls,SMS and MSS",
    number: 953,
    shadow: "#efe4f5",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Telenor_Logo.svg",
    title: "Telenor Next Fast",
    content: "Up to 100Mbits/s",
    number: 1028,
    shadow: "#e5e5f4",
  },
];
const Subcribetions = () => {
  return (
    <div className="bg-[#F3F3F7] rounded-[20px] shadow-lg font-poppins min-w-[60rem] py-16 px-[200px]">
      <div>
        <h1 className="text-3xl font-bold text-center text-[#202240] w-[80%] mx-auto">
          Get the most out of your mobile <br />
          with the right subscription
        </h1>
        <p className="w-[80%] mx-auto text-center mt-[20px] text-[18px] font-medium text-[#202240] ">
          All devices com with free delivery or pickup as standar. See
          information <br />
          on available shopping options for your locations.
        </p>
        <div className="grid grid-cols-3 gap-x-[80px] mt-4 ">
          {cardARR.map((item) => {
            return (
              <Template
                shadow={item.shadow}
                title={item.title}
                content={item.content}
                logo={item.logo}
                number={item.number}
              />
            );
          })}
        </div>
        <div className="flex justify-center mt-[50px] ">
          <button className="bg-[#202240] text-white rounded-full p-3 px-5">
            See all subscriptions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subcribetions;
