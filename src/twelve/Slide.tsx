import React, { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import styled from "styled-components";
interface iconsProps {
  icon: ReactNode;
  name: string;
}
interface PersonProps {
  img: string;
  name: string;
  job: string;
}
const icons: iconsProps[] = [
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
        className="lucide lucide-paperclip"
      >
        <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
      </svg>
    ),
    name: "Source files",
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
        className="lucide lucide-cast"
      >
        <path d="M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" />
        <path d="M2 12a9 9 0 0 1 8 8" />
        <path d="M2 16a5 5 0 0 1 4 4" />
        <line x1="2" x2="2.01" y1="20" y2="20" />
      </svg>
    ),
    name: "Live Streams",
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
        className="lucide lucide-calendar-days"
      >
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
        <path d="M8 14h.01" />
        <path d="M12 14h.01" />
        <path d="M16 14h.01" />
        <path d="M8 18h.01" />
        <path d="M12 18h.01" />
        <path d="M16 18h.01" />
      </svg>
    ),
    name: "Meetup",
  },
];
const Perons: PersonProps[] = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVt7nOuYS7MsaK68M9B5M_vRCTz5fTVgaCgA&usqp=CAU",
    name: "Ludwig Lagos",
    job: "illustrator",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIqsVar8jlFERBdQziUvAHTADaKGW_tWVNwQ&usqp=CAU",
    name: "Nina Valentine",
    job: "3D artist",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmYGsyWbuZQxdUBtTGL8fdOyEBHFxTlOaMnQ&usqp=CAU",
    name: "Karolina Vargas",
    job: "Freelancer",
  },
  {
    img: "https://img.freepik.com/premium-photo/beauty-woman-face-portrait-beautiful-spa-model-girl-with-perfect-fresh-clean-skin-generated-by-ai_911060-3271.jpg",
    name: "Alexander Kings",
    job: "illustrator",
  },
];
const Slide = () => {
  return (
    <SideCSS className="bg-white min-w-[60rem] rounded-[20px] p-16">
      <h1 className="text-[#21204C] text-3xl text-center font-bold">
        Subscriptions
      </h1>
      <div className="flex flex-col items-center">
        <p className=" mx-auto text-center mb-[20px] text-[18px] text-[#21204C] mt-[20px]">
          Support these creators by purchasing their monthly <br />
          subscriptions,and get accsess to premium content:
        </p>
        <div className="flex space-x-4">
          {icons.map((icon) => {
            return (
              <div className="flex bg-[#F2F2FB] py-2 px-3 text-[#21204C] font-medium rounded-full items-center space-x-2">
                {icon.icon}
                <p>{icon.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[1000px]">
        <Swiper
          // install Swiper modules
          className="text-center mt-[40px] flex"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={-10}
          slidesPerView={3}
          loop={true}
          navigation={{}}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {Perons.map((person) => {
            return (
              <SwiperSlide className="flex flex-col items-center space-y-2">
                <img
                  src={person.img}
                  className="w-20 rounded-full h-20"
                  alt=""
                />
                <p className="font-medium text-xl">{person.name}</p>
                <p className="text-[14px]">{person.job}</p>
                <button className="p-2 px-4 bg-[#21204C] text-white rounded-full ">
                  View content
                </button>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </SideCSS>
  );
};
const SideCSS = styled.div`
  .swiper-button-prev:after,
  .swiper-button-next:after {
    color: black;
    font-size: 25px;
    font-weight: 600;
  }
`;
export default Slide;
