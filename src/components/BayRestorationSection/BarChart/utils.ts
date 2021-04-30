export const formatChartData = (data: { [field: string]: string }[]) =>
  data.map((datum) => ({
    x: datum.year,
    y: parseFloat(datum.acres_chg_bay_surface),
  }));
