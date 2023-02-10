import React, { useEffect, useState } from "react";
import { FixedSizeList } from "react-window";
import { CastListColumn } from "./CastListColumn";

export const CastList = ({ castData }) => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  return (
    <FixedSizeList
      itemCount={castData.length}
      itemSize={200}
      layout="horizontal"
      height={100}
      width={windowSize[0]}
      itemData={{ castData }}
    >
      {CastListColumn}
    </FixedSizeList>
  );
};
