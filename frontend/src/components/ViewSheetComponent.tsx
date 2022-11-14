import React from "react";
interface Props {
  title: string;
}
const ViewSheetComponent = ({ title }: Props) => {
  return (
    <div className=" bg-white text-3xl pl-8 pr-8 pb-12 pt-12 rounded-lg">
      {title}
    </div>
  );
};

export default ViewSheetComponent;
