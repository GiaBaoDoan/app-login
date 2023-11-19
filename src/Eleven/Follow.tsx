import React from "react";
const Follow = () => {
  const listIcon = [
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
      className="lucide lucide-github w-7 h-7"
    >
      <path d="M15 22v-4a4.8 4.8 0  0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>,
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
      className="lucide lucide-instagram"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>,
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
      className="lucide lucide-gitlab"
    >
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>,
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
      className="lucide lucide-diamond"
    >
      <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" />
    </svg>,
  ];

  return (
    <div className="bg-[#faf7ed] p-12 min-w-[60rem] rounded-[20px]">
      <div className="flex justify-between items-baseline">
        <img
          className="h-20 rounded-[20px]"
          src="https://img.freepik.com/free-photo/korean-young-woman-s-close-up-portrait-female-model-white-shirt-smiling-looking-happy-concept-human-emotions-facial-expression-front-view_155003-18251.jpg?size=626&ext=jpg&ga=GA1.1.1615757600.1699426857&semt=ais"
          alt=""
        />
        <div className="w-[300px] space-y-2">
          <div className="flex justify-between">
            <p>6/8 Orgranizations</p>
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
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
          </div>
          <div className="flex">
            <div className="bg-[#F27B34] h-[10px] w-3/4 rounded-tl-full rounded-bl-full "></div>
            <div className="bg-[#E2E2E0] h-[10px] w-1/4 rounded-tr-full rounded-br-full"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-between ">
        <div className="space-y-4">
          <p className="font-bold text-2xl">MetaMask</p>
          <span className="font-medium mt-4">@metaMask</span>
          <p className="text-[18px]">
            MetaMask brings Ethereum to <br /> your web browser
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center ">
        <div className="flex space-x-4 mt-[20px]">
          {listIcon.map((icon) => {
            return (
              <div className="bg-white cursor-pointer flex justify-center items-center border border-gray-200 rounded-[18px] w-[60px] h-[60px]">
                {icon}
              </div>
            );
          })}
        </div>
        <div className="space-y-2">
          <p className="text-xl text-right ">
            <span className="font-bold mr-2">4K</span>Followers
          </p>
          <button className="py-3 px-6 font-medium text-white w-[200px] rounded-lg bg-[#16243C]">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default Follow;
