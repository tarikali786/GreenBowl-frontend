import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { ExploreSaladData } from "../Data/data";
export const ExploreSalad = () => {
  const isMd = useMediaQuery("(max-width:1024px)");
  const isSm = useMediaQuery("(max-width:686px)");
  return (
    <div className="px-4 md:px-14 lg:px-34 xl:px-44 py-6 ">
      <h1 className="text-xl md:text-2xl font-bold">
        Explore Our Most Loved Salads
      </h1>
      <div className="my-8">
        <Swiper
          spaceBetween={30}
          slidesPerView={isSm ? 3 : isMd ? 4 : 6}
          // className="flex "
          modules={[Navigation, Scrollbar, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          speed={1000}
          navigation
          loop={true}
        >
          {ExploreSaladData.map((item, index) => (
            <SwiperSlide className="country-Card" key={index}>
              <Link
                to={"#"}
                className="flex flex-col items-center justify-center gap-2"
              >
                <div className="border-2 border-black-500 size-24 sm:size-28 md:size-36 rounded-full overflow-hidden">
                  <img
                    src={item.img}
                    alt="Country"
                    loading="lazy"
                    className="object-cover transition-transform duration-500 ease-in-out hover:scale-150"
                  />
                </div>

                <p className="text-[18px] font-semibold text-black-600 mt-1">
                  {item.title}
                </p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
