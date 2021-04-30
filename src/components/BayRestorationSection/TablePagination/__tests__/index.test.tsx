import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TablePagination, { Props, text } from "../index";

describe("TablePagination", () => {
  const page = 2;
  const lastPage = 8;
  let props: Props = {
    page,
    lastPage,
  };

  it("should render the current page number", () => {
    render(<TablePagination {...props} />);
    const el = screen.getByText(new RegExp(page.toString()));
    expect(el).toBeInTheDocument();
  });

  it("should render the last page number", () => {
    render(<TablePagination {...props} />);
    const el = screen.getByText(new RegExp(lastPage.toString()));
    expect(el).toBeInTheDocument();
  });

  describe("buttons", () => {
    it("should have disabled buttons if handlers are not passed", () => {
      render(<TablePagination {...props} />);
      const next = screen.getByText(text.next);
      const prev = screen.getByText(text.prev);
      expect(next).toHaveAttribute("disabled");
      expect(prev).toHaveAttribute("disabled");
    });

    it("should invoke next page if the Next button is clicked", () => {
      const nextPage = jest.fn();
      render(<TablePagination {...props} nextPage={nextPage} />);
      const el = screen.getByText(text.next);
      fireEvent.click(el);
      expect(nextPage).toHaveBeenCalled();
    });

    it("should invoke next page if the Next button is clicked", () => {
      const prevPage = jest.fn();
      render(<TablePagination {...props} prevPage={prevPage} />);
      const el = screen.getByText(text.prev);
      fireEvent.click(el);
      expect(prevPage).toHaveBeenCalled();
    });
  });
});
