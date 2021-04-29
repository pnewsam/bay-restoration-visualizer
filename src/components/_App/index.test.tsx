import React from "react";
import { render, screen } from "@testing-library/react";
import { text } from "./index";
import App from ".";

test("renders the page title", () => {
  render(<App />);
  const el = screen.getByText(text.title);
  expect(el).toBeInTheDocument();
});
