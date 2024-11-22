import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
export const SaladList = () => {
  const [recepiName, setRecepiName] = React.useState("Recipe 1");
  const [showCard, setShowCard] = React.useState(true);
  const hanldeRecipeName = (e) => {
    setRecepiName(e.target.value);
  };
  const handleRecipeCard = () => {
    setShowCard(false);
  };
  return (
    <div
      className={`fixed top-auto bg-white-500 right-0   min-h-[10vh] w-[260px] shadow-lg  z-50  py-2 px-4  rounded-xl ${
        !showCard && "hidden"
      } `}
    >
      <div data-v-0e8b4828="" className="hl-toolbar-group relative">
        <div
          data-v-0e8b4828=""
          className="builder-form-name flex items-center justify-center text-black"
        >
          <div
            data-v-0e8b4828=""
            contentEditable="true"
            className="min-w-[1rem] max-w-2xl  outline-none truncate"
            onClick={hanldeRecipeName}
          >
            {recepiName}
          </div>
          <svg
            data-v-0e8b4828=""
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="ml-1 h-4 w-4 text-gray-700 hover:text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.876 18.116c.046-.414.069-.62.131-.814a2 2 0 01.234-.485c.111-.17.259-.317.553-.61L17 3a2.828 2.828 0 114 4L7.794 20.206c-.294.294-.442.442-.611.553a2 2 0 01-.485.233c-.193.063-.4.086-.814.132L2.5 21.5l.376-3.384z"
            ></path>
          </svg>
        </div>
        <CancelIcon
          className=" absolute top-0 right-0 cursor-pointer"
          onClick={handleRecipeCard}
        />
      </div>
      <div className="grid grid-cols-3  gap-3 mt-4">
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <div className="" key={index}>
            <div className="w-auto h-12">
              <img
                src="http://localhost:5173/src/assets/Home/Pachadi%20Salad.jpg"
                alt=""
                className="object-cover rounded-md"
              />
            </div>
            <p className="flex justify-between gap-2 mt-1">
              <span className="text-[12px] text-black-200">Text</span>
              <span className="text-[12px] text-black-300">₹120</span>
            </p>
          </div>
        ))}
      </div>

      <div className="mt-3 mb-2 flex gap-2  justify-between">
        <button className="text-sm bg-red-500 py-2 text-center px-4 rounded-md text-white-500 ">
          Add To Cart
        </button>
        <button className="text-sm bg-green-600 py-2 text-center px-4 rounded-md text-white-500">
          Order Now
        </button>
      </div>
    </div>
  );
};
