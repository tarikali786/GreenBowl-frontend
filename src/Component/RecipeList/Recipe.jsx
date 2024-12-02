import React from "react";
import { useSaladContext } from "../SaladContextApi/SaladContext";

export const Recipe = () => {
  const { state, dispatch } = useSaladContext();

  return (
    <div className="px-4 md:px-14 lg:px-32 xl:px-44 py-6  flex flex-col gap-y-4 ">
      {state?.recipe.map((item, index) => (
        <div
          className="flex gap-8 border-b  border-white-200 pb-4 "
          key={index}
        >
          <div className="w-60 h-40 border flex flex-wrap justify-start overflow-y-auto rounded">
            {item?.[0]?.base &&
              item[0].base.length > 0 &&
              item[0].base.map((i) => (
                <div className="h-16 shadow-lg" key={i.id}>
                  <img
                    src={`${import.meta.env.VITE_IMAGE_URL}/${i.img}`}
                    alt={i.title}
                  />
                </div>
              ))}
            {item?.[1]?.toppings &&
              item[1].toppings.length > 0 &&
              item[1].toppings.map((i) => (
                <div className="h-16 shadow-lg" key={i.id}>
                  <img
                    src={`${import.meta.env.VITE_IMAGE_URL}/${i.img}`}
                    alt={i.title}
                  />
                </div>
              ))}
            {item?.[2]?.dressing &&
              item[2].dressing.length > 0 &&
              item[2].dressing.map((i) => (
                <div className="h-16 shadow-lg" key={i.id}>
                  <img
                    src={`${import.meta.env.VITE_IMAGE_URL}/${i.img}`}
                    alt={i.title}
                  />
                </div>
              ))}
            {item?.[3]?.extra &&
              item[3].extra.length > 0 &&
              item[3].extra.map((i) => (
                <div className="h-16 shadow-lg" key={i.id}>
                  <img
                    src={`${import.meta.env.VITE_IMAGE_URL}/${i.img}`}
                    alt={i.title}
                  />
                </div>
              ))}
            {item?.[4]?.vegetables &&
              item[4].vegetables.length > 0 &&
              item[4].vegetables.map((i) => (
                <div className="h-16 shadow-lg" key={i.id}>
                  <img
                    src={`${import.meta.env.VITE_IMAGE_URL}/${i.img}`}
                    alt={i.title}
                  />
                </div>
              ))}
          </div>

          <div>
            <h1 className="text-lg font-semibold text-black-600">
              {item[5].recipeName}
            </h1>
            <p className=" text-black-600 flex gap-2">
              Item:{" "}
              <strong className="flex flex-wrap gap-1">
                {item?.[0]?.base &&
                  item[0]?.base?.length > 0 &&
                  item[0].base.map((item, index) => (
                    <p key={index} className="flex">
                      <span>{item.title}</span>
                      <span>{" ,"} </span>
                    </p>
                  ))}
                {item?.[1]?.toppings &&
                  item[1]?.toppings?.length > 0 &&
                  item[1].toppings.map((item, index) => (
                    <p key={index} className="flex">
                      <span>{item.title}</span>
                      <span>{" ,"} </span>
                    </p>
                  ))}
                {item?.[2]?.dressing &&
                  item[2]?.dressing?.length > 0 &&
                  item[2].dressing.map((item, index) => (
                    <p key={index} className="flex">
                      <span>{item.title}</span>
                      <span>{" ,"} </span>
                    </p>
                  ))}
                {item?.[3]?.extra &&
                  item[3]?.extra?.length > 0 &&
                  item[3].extra.map((item, index) => (
                    <p key={index} className="flex">
                      <span>{item.title}</span>
                      <span>{" ,"} </span>
                    </p>
                  ))}
                {item?.[4]?.vegetables &&
                  item[4]?.vegetables?.length > 0 &&
                  item[4].vegetables.map((item, index) => (
                    <p key={index} className="flex">
                      <span>{item.title}</span>
                      <span>{" ,"} </span>
                    </p>
                  ))}
              </strong>
            </p>
            <p className=" text-black-600">
              Total Price: <strong>230</strong>{" "}
            </p>
            <p className=" text-black-600">
              Total Calories: <strong>230 kcal</strong>{" "}
            </p>
            <div className="flex gap-6 mt-5">
              <button className="text-sm bg-red-500 py-2 text-center px-4 rounded-md text-white-500 ">
                Add To Cart
              </button>
              <button className="text-sm bg-red-600 py-2 text-center px-4 rounded-md text-white-500 ">
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
