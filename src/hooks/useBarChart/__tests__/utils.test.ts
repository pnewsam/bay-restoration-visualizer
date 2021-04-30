import { xTickFormat, barFill } from "../utils";

describe("xTickFormat", () => {
  it.each`
    year      | expected
    ${"2015"} | ${"2015"}
    ${"2012"} | ${undefined}
  `("should return $expected for year $year", ({ expected, year }) => {
    const result = xTickFormat(year);
    expect(result).toEqual(expected);
  });
});

describe("barFill", () => {
  it.each`
    y          | expected
    ${-15.123} | ${"#ff3860"}
    ${0}       | ${"#485fc7"}
    ${1251.23} | ${"#485fc7"}
  `("should return $expected for y $y", ({ expected, y }) => {
    const result = barFill({ y });
    expect(result).toEqual(expected);
  });
});
