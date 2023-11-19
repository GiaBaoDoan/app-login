import React from "react";

const Dasboard = () => {
  const iconprops = [
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-message-circle"
    >
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-users"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-apple"
    >
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-settings"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>,
  ];
  const cards = [
    {
      logo: "https://img.freepik.com/free-vector/detailed-esports-gaming-logo_79603-1792.jpg",
      title: "Gaming",
      members: "105 members",
    },
    {
      logo: "https://png.pngtree.com/png-clipart/20200727/original/pngtree-yoga-logo-design-stock-human-meditation-in-lotus-flower-vector-png-image_5244784.jpg",
      title: "Yoga",
      members: "105 members",
    },
    {
      logo: "https://static.vecteezy.com/system/resources/previews/007/688/754/non_2x/mountain-hiking-logo-free-vector.jpg",
      title: "Hiking",
      members: "97 members",
    },
    {
      logo: "https://logopond.com/logos/f92b11051f3df9dd63106ed0a22eaa85.png",
      title: "Workout",
      members: "97 members",
    },
    {
      logo: "https://cdn.logojoy.com/wp-content/uploads/2018/05/30143708/1113-768x591.png",
      title: "Art",
      members: "9 members",
    },
    {
      logo: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/91631e116794391.60698dbc55f96.jpg",
      title: "Cushine",
      members: "97 members",
    },
    {
      logo: "",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-plus text-[#7F89B0]"
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
      ),
      members: "Create groups",
    },
  ];
  return (
    <div className="bg-[#7F89B0] bg-opacity-20 rounded-[10px] p-10 w-[60rem]">
      <div className="flex space-x-3">
        <nav className=" bg-[#1D2537] w-[10%] rounded-[20px] py-[30px] justify-center space-y-10 items-center flex flex-col">
          {iconprops.map((item) => {
            return (
              <span className="text-white text-opacity-60 w-[30px] h-[30px] flex items-center justify-center">
                {item}
              </span>
            );
          })}
        </nav>
        <div className="w-[85%] p-4">
          <div className="flex items-center justify-between">
            <div className="flex space-x-3 text-white text-[30px] text-opacity-70 items-center">
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
                className="lucide lucide-move-left"
              >
                <path d="M6 8L2 12L6 16" />
                <path d="M2 12H22" />
              </svg>
              <h1 className="">Groups</h1>
            </div>
            <div className="flex space-x-2">
              <div className="border p-2  rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide text-white text-opacity-60 lucide-layout-grid"
                >
                  <rect width="7" height="7" x="3" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="14" rx="1" />
                  <rect width="7" height="7" x="3" y="14" rx="1" />
                </svg>
              </div>
              <div className="p-2 border  rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide text-white text-opacity-60 lucide-stretch-horizontal"
                >
                  <rect width="20" height="6" x="2" y="4" rx="2" />
                  <rect width="20" height="6" x="2" y="14" rx="2" />
                </svg>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 mt-[30px] gap-[20px]">
            {cards.map((item, index) => {
              return (
                <div
                  className={`${
                    item.icon ? "bg-[#434a60] " : "bg-[#222a40] "
                  }shadow-lg rounded-lg  text-white px-5 h-[230px]`}
                >
                  <div className="flex space-y-2 h-full flex-col items-center justify-center">
                    {item.icon ? (
                      <div className="bg-[#222a40] p-4 rounded-full">
                        {item.icon}
                      </div>
                    ) : (
                      <img
                        src={item.logo}
                        className="w-[80px] rounded-full h-[80px]"
                        alt=""
                      />
                    )}

                    <p className="text-xl  text-opacity-70 text-white">
                      {item.title}
                    </p>
                    <p className="!text-opacity-50 text-white">
                      {item.members}
                    </p>
                  </div>
                </div>
              );
            })}
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dasboard;
