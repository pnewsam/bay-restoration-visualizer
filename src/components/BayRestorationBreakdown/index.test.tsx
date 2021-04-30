import React from "react";
import { render, screen } from "@testing-library/react";
import { text } from "./index";
import BayRestorationBreakdown from "./index";

test("renders the page title", () => {
  render(<BayRestorationBreakdown />);
  const el = screen.getByText(text.title);
  expect(el).toBeInTheDocument();
});
