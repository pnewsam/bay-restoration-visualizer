import { useEffect, useState } from "react";

interface Props {
  dependencies: any[];
  url: string;
}

export const useFetchJson = ({ dependencies = [], url }: Props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [...dependencies, url]);

  return data;
};
