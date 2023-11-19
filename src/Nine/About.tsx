import React from "react";
interface MemberProps {
  img: string;
  name: string;
}

const About = () => {
  const copyText = () => {
    // Get the text field
    const copyText = document.getElementById("myInput") as HTMLInputElement;
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  };
  const Member: MemberProps[] = [
    {
      img: "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg",
      name: "Marry Massic",
    },
    {
      img: "https://img.freepik.com/premium-photo/buoyant-8yearold-greek-girl-with-mirthful-eyes_1308-155589.jpg?size=626&ext=jpg&ga=GA1.1.1615757600.1699426857&semt=sph",
      name: "Daria Nati",
    },
    {
      img: "https://i2-prod.dailystar.co.uk/incoming/article30520281.ece/ALTERNATES/s1200c/0_AI-imagines-what-the-most-beautiful-faces-in-the-world-look-like.jpg",
      name: "Lisa Krucknova",
    },
  ];

  return (
    <div className="min-w-[35rem] p-12 bg-white rounded-[20px]">
      <h1 className="text-[#262938] font-bold text-[26px]">About</h1>
      <div className="flex justify-between items-center mt-[20px]">
        <p className="font-medium text-xl">Members (2,778)</p>
        <button className="border text-[#727CD5] py-2 border-[#727CD5] rounded-md px-3">
          Import
        </button>
      </div>
      <div className="relative mt-[50px]">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-8 h-8 absolute text-gray-400 top-1/2 -translate-y-1/2 left-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            placeholder="Find and add people"
            className="border outline-none border-gray-200 w-full py-5 px-[50px] rounded-md"
          />
        </div>
      </div>
      <div className="mt-[30px] ">
        <p className="text-[#262938] font-medium  text-[20px]">
          Share an invitatin link
        </p>
        <div className="relative mt-[10px]">
          <div className="flex">
            <input
              type="text"
              value={"htpps://work.me/g/dsdssdsh"}
              placeholder="Find and add people"
              id="myInput"
              className="border outline-none border-gray-200 w-full py-5 pl-[0.5rem] font-medium text-xl  rounded-md"
            />
            <svg
              onClick={copyText}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide cursor-pointer lucide-copy absolute right-2 w-6 h-6 top-1/2 -translate-y-1/2 "
            >
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="my-[20px] text-xl font-medium">
        <p>Sussgested Members</p>
        <div className="my-[20px] ">
          {Member.map((item) => {
            return (
              <div className="flex justify-between my-[20px]">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.img}
                    className="h-[80px] w-[80px]  rounded-full"
                    alt=""
                  />
                  <p>{item.name}</p>
                </div>
                <button className="bg-[#262938] text-white self-center py-3 px-4 rounded-md">
                  + Add
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
