export const xTickFormat = function (year: string) {
  return parseInt(year) % 5 === 0 ? year : undefined;
} as any;

export const barFill = function (d: { y: number }) {
  return d.y < 0 ? "#ff3860" : "#485fc7";
};
