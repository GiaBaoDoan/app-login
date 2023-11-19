import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
const Testimonial = () => {
  return (
    <div className="w-[50rem] border-gray-200 border-[20px]">
      <SideCSS className="bg-white  p-16">
        <Swiper
          className="text-center mt-[40px] flex"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          pagination={true}
          navigation={{}}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {[1, 2, 3, 4, 5].map((item) => {
            return (
              <SwiperSlide className="p-10">
                {" "}
                <div>
                  <div className="flex justify-between ">
                    <img
                      className="h-[70px]"
                      src="https://logos-world.net/wp-content/uploads/2021/02/Trello-Logo-2016-2021.png"
                      alt=""
                    />
                    <div className="">
                      <p className=" font-medium">
                        "Very simple to use,great automation and <br /> keep me
                        on track with i all need to do.I also <br /> like that
                        it can be shared with others "
                      </p>
                      <div className="text-right mt-9">
                        <p className="uppercase">Terry ivans</p>
                        <p>Project manager</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-black h-1  mt-5"></div>
                  <div className="opacity-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reiciendis, quo adipisci? Necessitatibus, ad adipisci
                    eveniet aperiam perspiciatis, nesciunt quibusdam, eos quis
                    laudantium velit deserunt? Nam laborum ea aliquid sint
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </SideCSS>
    </div>
  );
};
const SideCSS = styled.div`
  .swiper-button-prev,
  .swiper-button-next {
    transform: translateX(-230px);
    z-index: 1000;
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    color: black;
    font-size: 25px;
    font-weight: 600;
  }
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal {
    width: 100%;
    left: -38%;
  }
  --swiper-pagination-color: black;
  --swiper-pagination-left: auto;
  --swiper-pagination-right: 8px;
  --swiper-pagination-bottom: 8px;
  --swiper-pagination-top: 50%;
  --swiper-pagination-fraction-color: inherit;
  --swiper-pagination-progressbar-bg-color: rgba(0, 0, 0, 0.25);
  --swiper-pagination-progressbar-size: 2px;
  --swiper-pagination-bullet-size: 8px;
  --swiper-pagination-bullet-width: 8px;
  --swiper-pagination-bullet-height: 8px;
  --swiper-pagination-bullet-inactive-color: #000;
  --swiper-pagination-bullet-inactive-opacity: 0.2;
  --swiper-pagination-bullet-opacity: 1;
  --swiper-pagination-bullet-horizontal-gap: 4px;
  --swiper-pagination-bullet-vertical-gap: 6px;
  --swiper-navigation-size: 25px;
  --swiper-navigation-top-offset: 75%;
  --swiper-navigation-sides-offset: 45%;
  --swiper-navigation-color: var(--swiper-theme-color);
`;
export default Testimonial;
