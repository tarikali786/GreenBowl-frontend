import { createContext, useContext, useReducer } from "react";
import {
  CustomBaseData,
  CustomDressingsData,
  CustomExtrasData,
  CustomToppingsData,
  CustomVegetablesdata,
} from "../Data/data";

// Create Context
const SaladContext = createContext();

// Initial State
const initialState = {
  base: CustomBaseData || [],
  toppings: CustomToppingsData || [],
  dressing: CustomDressingsData || [],
  vegetables: CustomVegetablesdata || [],
  extras: CustomExtrasData || [],
  recipe: [],
  createRecipe: [
    { base: [] },
    { toppings: [] },
    { dressing: [] },
    { extra: [] },
    { vegetables: [] },
    { recipeName: "" },
  ],
};


// Reducer Function
const saladReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_RECIPE": {
      const typeKey = action.payload.type.toLowerCase();

      return {
        ...state,
        createRecipe: state.createRecipe.map((section) =>
          section[typeKey]
            ? {
                ...section,
                [typeKey]: [...section[typeKey], action.payload.data],
              }
            : section
        ),
      };
    }

    case "REMOVE_BASE": {
      return {
        ...state,
        createRecipe: state.createRecipe.map((section) =>
          section.base
            ? {
                ...section,
                base: section.base.filter((item) => item.id !== action.payload),
              }
            : section
        ),
      };
    }

    case "REMOVE_VEGETABLE": {
      return {
        ...state,
        createRecipe: state.createRecipe.map((section) =>
          section.vegetables
            ? {
                ...section,
                vegetables: section.vegetables.filter(
                  (item) => item.id !== action.payload
                ),
              }
            : section
        ),
      };
    }

    case "REMOVE_EXTRA": {
      return {
        ...state,
        createRecipe: state.createRecipe.map((section) =>
          section.extra
            ? {
                ...section,
                extra: section.extra.filter(
                  (item) => item.id !== action.payload
                ),
              }
            : section
        ),
      };
    }

    case "REMOVE_DRESSING":
      return {
        ...state,
        createRecipe: state.createRecipe.map((section) =>
          section.dressing
            ? {
                ...section,
                dressing: section.dressing.filter(
                  (item) => item.id !== action.payload
                ),
              }
            : section
        ),
      };

    case "REMOVE_TOPPING":
      return {
        ...state,
        createRecipe: state.createRecipe.map((section) =>
          section.toppings
            ? {
                ...section,
                toppings: section.toppings.filter(
                  (item) => item.id !== action.payload
                ),
              }
            : section
        ),
      };

    case "SAVE_RECIPE": {
      const initialCreateRecipe = [
        { base: [] },
        { toppings: [] },
        { dressing: [] },
        { extra: [] },
        { vegetables: [] },
        { recipeName: "" },
      ];
      return {
        ...state,
        recipe: [...state.recipe, action.payload],
        createRecipe: initialCreateRecipe,
      };
    }
    default:
      return state;
  }
};

// Provider Component
export const SaladProvider = ({ children }) => {
  const [state, dispatch] = useReducer(saladReducer, initialState);

  return (
    <SaladContext.Provider value={{ state, dispatch }}>
      {children}
    </SaladContext.Provider>
  );
};

// Custom hook to use the context
export const useSaladContext = () => {
  return useContext(SaladContext);
};
