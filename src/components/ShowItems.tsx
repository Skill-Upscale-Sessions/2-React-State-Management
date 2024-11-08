import React, { useEffect, useState } from "react";

const ShowItems = ({
  fetchData,
  number,
}: {
  fetchData: (number: number) => number[];
  number: number;
}) => {
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    setData(fetchData(number));
  }, [fetchData, number]);

  return (
    <div>
      {data.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
};

export default ShowItems;
