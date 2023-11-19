import React from "react";
const UserProfile = () => {
  return (
    <div className="w-[36rem] rounded-lg p-12  bg-white">
      <div className="flex space-x-5">
        <div className="col-1 flex  ">
          <div className="">
            <img
              className="border-[8px] border-[#E6EFFA] rounded-full "
              src="https://cdn.alongwalk.info/vn/wp-content/uploads/2022/11/16190847/99-hinh-avatar-cute-ngau-ca-tinh-de-thuong-nhat-cho-nam-nu1668575327.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="col-2 text-[#1C2B62]">
          <div className="flex font-normal flex-col space-y-7">
            <div>
              <h1 className="font-bold text-2xl"> Đoàn Gia Bảo</h1>
              <p>giabaod345@gmail.com</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
                <p>4.7 rating</p>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                  />
                </svg>

                <p>4.434 reviews</p>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <p>478 students</p>
              </div>
            </div>
            <div>
              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                doloribus ab iste atque delectus totam porro quae. Beatae saepe
                magnam modi tempora aperiam ratione consectetur dolorum quia
                perspiciatis, quisquam cum.
              </p>
            </div>
            <div>
              <button className="p-3 hover:bg-slate-600 hover:border-slate-600 border-[2px] transition-all hover:text-[#E6EFFA] border-[#E6EFFA] rounded-lg">
                Show more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
