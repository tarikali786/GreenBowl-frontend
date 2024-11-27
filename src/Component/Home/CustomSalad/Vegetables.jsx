import WhatshotRoundedIcon from "@mui/icons-material/WhatshotRounded";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import ScaleRoundedIcon from "@mui/icons-material/ScaleRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import veg from "../../../assets/icon/veg.png";
import "swiper/swiper-bundle.css";
import { useMediaQuery } from "@mui/material";

import { useSaladContext } from "../../SaladContextApi/SaladContext";

export const Vegetables = () => {
  const isMd = useMediaQuery("(max-width:1024px)");
  const isSm = useMediaQuery("(max-width:686px)");
  const { state, dispatch } = useSaladContext();

  const handleVegetableSelection = (id) => {
    if (state.createRecipe[4].vegetables.some((item) => item.id === id)) {
      dispatch({ type: "REMOVE_VEGETABLE", payload: id });
    } else {
      const VegetableData = state.vegetables.find((item) => item.id === id);
      if (VegetableData) {
        dispatch({
          type: "CREATE_RECIPE",
          payload: { type: "VEGETABLES", data: VegetableData },
        });
      }
    }
  };
  return (
    <div className="my-8">
      <h3 className="text-2xl font-semibold text-black-600 flex items-center gap-2">
        {" "}
        <div className="size-10">
          <img src={veg} alt="" />
        </div>
        Vegetables
      </h3>
      <Swiper
        spaceBetween={30}
        slidesPerView={isSm ? 1 : isMd ? 2 : 3}
        modules={[Navigation, Scrollbar, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        speed={1000}
        navigation
        loop={true}
      >
        {state.vegetables.map((item) => (
          <SwiperSlide className="mt-8" key={item.id}>
            <div
              className={`cursor-pointer shadow-lg p-4 rounded-lg ${
                state.createRecipe[4].vegetables.some((i) => i.id === item.id)
                  ? "border-4 border-green-500"
                  : ""
              }`}
              onClick={() => handleVegetableSelection(item.id)}
            >
              <div className="w-full  h-[22vh]  md:h-[26vh] lg:h-[28vh] xl:h-[32vh] rounded-lg shadow-xl overflow-hidden">
                <img
                  src={item.img}
                  alt=""
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-between my-2">
                <p className="text-[18px] font-semibold text-black-600 mt-1">
                  {item.title}
                </p>
                <div>
                  <p>
                    <ScaleRoundedIcon className="text-green-600 " />{" "}
                    {item?.weight}
                  </p>
                </div>
              </div>

              <div className="text-[16px] font-semibold text-black-600 flex items-center justify-between gap-1 my-2">
                <p>
                  <CurrencyRupeeRoundedIcon className="text-green-600 " />{" "}
                  {item?.price}
                </p>
                <p>
                  <WhatshotRoundedIcon className="text-green-600 " />{" "}
                  {item?.calories}
                </p>
              </div>
              <p className="text-sm  text-black-200  line-clamp-2">
                {item.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
