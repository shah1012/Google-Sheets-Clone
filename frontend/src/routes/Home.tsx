import React, { useEffect, useState } from "react";
import NewDocumentModel from "../components/NewDocumentModel";

const Home = () => {
  const [openModel, setOpenModel] = useState<boolean>(false);
  const [currentDocs, setCurrentDocs] = useState([]);

  const closeModel = () => {
    setOpenModel(false);
    console.log(openModel);
  };

  return (
    <div className="w-full h-[100vh] bg-green-500  flex flex-col items-center z-1">
      <header className="w-full h-16 text-3xl justify-center pt-3 text-center bg-slate-500 z-1">
        Sheets
      </header>

      <div className="w-full pt-5 pl-10 z-1">
        <button
          className=" bg-white text-3xl pl-8 pr-8 pb-12 pt-12 rounded-lg"
          onClick={() => setOpenModel(!openModel)}
        >
          +
        </button>
        <NewDocumentModel isOpened={openModel} closeModel={closeModel} />
      </div>
    </div>
  );
};

export default Home;
