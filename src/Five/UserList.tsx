import React, { useState } from "react";
interface Person {
  name: string;
  jobs: string;
  tags: string[];
}

const UserList = () => {
  const [userName, setUsername] = useState<Person[]>();
  const users: Person[] = [
    {
      name: "John Doe",
      jobs: "Software Engineer",
      tags: ["Python", "JavaScript", "React"],
    },
    {
      name: "Jane Smith",
      jobs: "Data Scientist",
      tags: ["Python", "Roof", "Machine Learning"],
    },
    {
      name: "Alice Johnson",
      jobs: "Graphic Designer",
      tags: ["Photoshop", "Illustrator", "User Experience"],
    },
    {
      name: "Michael Brown",
      jobs: "Marketing Specialist",
      tags: ["Social Media", "Digital Marketing"],
    },
    {
      name: "Emily Davis",
      jobs: "Teacher",
      tags: ["Education", "Teaching", "Mathematics"],
    },
    {
      name: "David Wilson",
      jobs: "Chef",
      tags: ["Culinary", "Cooking"],
    },
  ];
  const handelChange = (e) => {
    const keyword = e.target.value;
    const userName = users.filter((item) => item.name.includes(keyword));
    setUsername(userName);
  };
  const [active, setActive] = useState<number>(0);
  const arrNav = [
    "Reputation",
    "New users",
    "Voters",
    "Editors",
    "Moderastors",
  ];
  return (
    <div className="p-16 min-w-[40rem] shadow-lg rounded-lg bg-white">
      <h1 className="font-bold text-3xl text-[#373C47]">Users</h1>
      <div className="flex flex-col md:items-center md:flex-row mt-[20px] justify-between md:gap-[100px] ">
        <div className="relative ">
          <div className="flex justify-between ">
            <input
              onChange={handelChange}
              className="outline-none w-full h-full rounded-md border-[#87A0CE] border px-10 py-4"
              placeholder="Search users"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="absolute w-6 h-6 left-2 text-black top-1/2 -translate-y-1/2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
        <div className="nav space-x-4 flex md:mt-[0] mt-[50px] text-[#373C47]">
          {arrNav.map((item, key) => {
            return active == key ? (
              <span className="bg-[#849fff] p-4 cursor-pointer text-white rounded-lg">
                {item}
              </span>
            ) : (
              <span
                className="cursor-pointer hover:bg-[#849fff] transition-all p-4 hover:text-white hover:rounded-lg"
                onClick={() => setActive(key)}
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>
      <div className="avatar card grid md:grid-cols-3 gap-x-[40px] gap-y-[100px] mt-[50px]">
        {(userName ? userName : users).map((item, index) => {
          return (
            <div
              className={`flex gap-4 p-5 cursor-pointer rounded-lg bg-[#FBFCFF] border border-transparent hover:border-[#BFC8E5] hover:shadow-lg transition-all  
              `}
            >
              <img
                src={`https://source.unsplash.com/random/${item.name}`}
                className="w-20 h-20 rounded-full"
                alt=""
              />
              <div>
                <p className="font-bold text-[18px]">{item.name}</p>
                <p>{item.jobs}</p>
                <div className="w-[300px] mt-4">
                  {item.tags.map((x) => {
                    return (
                      <span className="text-[#849fff] mr-3 inline-flex justify-center font-medium mt-2  border border-[#849fff] px-2 py-1 rounded-full">
                        {x}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserList;
