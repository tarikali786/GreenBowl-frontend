import React from "react";
import { Hero } from "./Hero";
import { PopuralSalad } from "./PopuralSalad";
import { ExploreSalad } from "./ExploreSalad";

export const Home = () => {
  return (
    <>
      <Hero />
      <ExploreSalad />
      <PopuralSalad />
    </>
  );
};
