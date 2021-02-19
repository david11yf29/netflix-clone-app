import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HomeScreen from "./HomeScreen";

test("succussfully render HomeScreen component", () => {
  render(<HomeScreen />);
  screen.getByRole("homeScreen", { name: "" });

  expect();
});
