import React, { Dispatch, SetStateAction, useState } from "react";
interface Props {
  isOpened: boolean;
  closeModel: () => void;
}

import { useNavigate } from "react-router-dom";

const NewDocumentModel = ({ isOpened, closeModel }: Props) => {
  const navigate = useNavigate();
  const [docTitle, setDocTitle] = useState<string>("");

  const onModelSubmit = (e: React.MouseEvent) => {
    navigate(`/editor/${docTitle}`);
  };

  return (
    <div className={`${isOpened === false ? "hidden" : ""}`}>
      <div
        onClick={closeModel}
        className="backdrop w-full h-[100vh] flex flex-col justify-center items-center z-[0] absolute top-0 left-0 bg-gray-800 opacity-60"
      ></div>
      <div className="rounded-3xl main w-5/12 h-3/8 bg-green-700 pt-20 pb-20 pr-10 pl-10  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center align-center">
        <h2 className="text-3xl text-center ">New Sheet</h2>
        <input
          className="p-1.5 mt-5 mb-5 text-xl"
          placeholder="Sheet Name"
          value={docTitle}
          onChange={(e) => setDocTitle(e.target.value)}
        ></input>
        <button
          onClick={onModelSubmit}
          className="outline-none border-none text-2xl bg-gray-400 w-1/2 text-center ml-auto mr-auto p-1.5 rounded-xl"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default NewDocumentModel;
