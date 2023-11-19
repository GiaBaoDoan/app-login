import React from "react";
import Tabs, { TabsProps } from "./Tabs";

const BillingPage = () => {
  const tabs: TabsProps[] = [
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
          className="lucide lucide-square-equal w-8 h-8"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M7 10h10" />
          <path d="M7 14h10" />
        </svg>
      ),
      title: "General",
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
          className="lucide lucide-lock w-8 h-8"
        >
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      title: "Password",
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
          className="lucide lucide-mail w-8 h-8"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      title: "Invitations",
    },
    {
      icon: (
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
            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
          />
        </svg>
      ),
      title: "Billing",
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
          className="lucide lucide-dice-6 w-8 h-8"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <path d="M16 8h.01" />
          <path d="M16 12h.01" />
          <path d="M16 16h.01" />
          <path d="M8 8h.01" />
          <path d="M8 12h.01" />
          <path d="M8 16h.01" />
        </svg>
      ),
      title: "Apps",
    },
  ];
  const informations = [
    {
      date: "Oct. 21,2021",
      type: "Pro Annual",
    },
    {
      date: "Aug. 21,2021",
      type: "Pro Portfolio",
    },
    {
      date: "July.21,2021",
      type: "Sponsored Post",
    },
    {
      date: "Jun.21 21,2021",
      type: "Sponsored Post",
    },
  ];
  return (
    <div className="w-[80%] mx-auto flex bg-[#fffefe] rounded-[20px] overflow-hidden ">
      <aside className="bg-[#F1F1FB] w-[20%] flex flex-col justify-between p-8 ">
        <div>
          <div className="flex items-center space-x-3">
            <img
              className="rounded-[20px] w-[60px] h-[60px]"
              src="https://t3.ftcdn.net/jpg/02/21/56/38/360_F_221563801_ZSbAwaWd8sWe0W6MjEaQtswUsFu3WDow.jpg"
              alt=""
            />
            <div className="space-y-3">
              <p className="text-[#393A62] font-bold text-xl"> Ildiko Gaspar</p>
              <span>@igaspar</span>
            </div>
          </div>
          <div className="flex justify-between flex-col">
            <div className="mt-[50px] space-y-10">
              {tabs.map((item) => {
                return <Tabs title={item.title} icon={item.icon} />;
              })}
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2  ">
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
            className="lucide lucide-log-out text-[#747399] w-8 h-8"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" x2="9" y1="12" y2="12" />
          </svg>
          <p className="text-[#747399]">Log out</p>
        </div>
      </aside>
      <main className="w-[75%] p-12 mt-[30px] relative">
        <h1 className="text-[#393A62] font-bold text-3xl">Billing</h1>
        <div className="mt-[30px] text-[#393A62]">
          <p className="font-bold">Order History</p>
          <p>Manage billing information and veiw reiceips</p>
        </div>
        <div className="mt-[30px] w-[70%]">
          <div className="grid grid-cols-3 px-3 gap-x-[160px]">
            {["Date", "Type", "Receipt"].map((item) => {
              return <p className="text-[#a4a4ad] font-medium">{item}</p>;
            })}
          </div>
          {informations.map((item) => {
            return (
              <div className="">
                <div className="grid grid-cols-3 gap-x-[160px] p-3 hover:border-gray-200 border border-transparent transition-all cursor-pointer rounded-[12px] hover:shadow-lg   text-[#393A62] font-medium">
                  <p className="flex flex-col justify-center font-medium">
                    {item.date}
                  </p>
                  <p className="flex flex-col justify-center font-medium">
                    {item.type}
                  </p>
                  <div>
                    <button className="text-left border border-[#d7d7da] font-medium py-2 px-4 text-[#393A62] rounded-lg">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="p-3 mt-[30px]">
            <span className="text-[#EA4C3C]  underline font-medium">
              Load more
            </span>
            <div className=" mt-[30px]">
              <p className="font-bold text-xl">Payment Method</p>
              <p className="text-[#747399]">
                Manage billing information and veiw receipts
              </p>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-3">
                <img
                  className="w-[90px] h-[50px] mt-[10px] border p-2"
                  src="https://onlinecasinoprofy.com/en/wp-content/uploads/sites/6/2022/08/58482363cef1014c0b5e49c1.png"
                  alt=""
                />
                <span className="mt-3 font-medium">Visa ending in 2255</span>
              </div>
              <button className="p-2 border rounded-lg">Remove</button>
            </div>
          </div>
        </div>
        <div className="w-[22%] absolute top-1/3 -translate-y-1/2 right-10  rounded-[20px] text-white bg-[#EA4C3C] p-6">
          <div>
            <div className="space-y-2">
              <p className="font-light">Your plan</p>
              <h1 className="font-bold text-2xl ">Pro Annual</h1>
            </div>
            <p className="font-light">Renews on Nov ,2021</p>
            <button className="border mt-[30px] border-white rounded-lg p-2 w-full">
              Cancel subscriptions
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BillingPage;
