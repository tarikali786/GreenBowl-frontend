import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { PopularSaladData } from "../Data/data";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";
import WhatshotRoundedIcon from "@mui/icons-material/WhatshotRounded";
export const PopuralSalad = () => {
  const isMd = useMediaQuery("(max-width:1024px)");
  const isSm = useMediaQuery("(max-width:686px)");
  return (
    <div className="px-4 md:px-14 lg:px-34 xl:px-44 py-6 ">
      <h1 className="text-xl md:text-2xl font-bold">
        Most Popular Salad Picks
      </h1>
      <div className="my-8">
        <Swiper
          spaceBetween={30}
          slidesPerView={isSm ? 1 : isMd ? 2 : 4}
          modules={[Navigation, Scrollbar, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          speed={1000}
          navigation
          loop={true}
        >
          {PopularSaladData.map((item) => (
            <SwiperSlide className="country-Card" key={item.id}>
              <Link
                to={"#"}
                className="flex flex-col items-left justify-left gap-2"
              >
                <div className=" w-full h-[22vh]  md:h-[26vh] lg:h-[28vh] xl:h-[32vh] rounded-lg shadow-xl overflow-hidden">
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
                <p className="text-[16px] font-semibold text-black-600 flex items-center gap-1">
                  <StarsRoundedIcon className="text-green-600 " />{" "}
                  {item?.rating}{" "}
                  <WhatshotRoundedIcon className="text-green-600 ml-2" />{" "}
                  {item?.calories}
                </p>
                <p className="text-sm  text-black-400  ">{item.ingredients}</p>
                <p className="text-sm  text-black-200 ">{item.description}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
