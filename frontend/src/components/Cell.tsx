import React, { useEffect } from "react";

interface Props {
  cl: {
    position: {
      row: number;
      itemNum: number;
    };
    value: string;
  };
}
const Cell = ({ cl }: Props) => {
  return (
    <input
      type="text"
      className="w-[125px] h-[30px] border-2 border-gray-400 text-center"
      onChange={(e) => {
        cl.value = e.target.value;
      }}
    />
  );
};

export default Cell;
