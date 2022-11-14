import React from "react";

interface Props {
  children?: React.ReactNode;
}

const Row = ({ children }: Props) => {
  return <div className="flex flex-col mb-5 w-full h-full ">{children}</div>;
};

export default Row;
