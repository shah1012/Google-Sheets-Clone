import React, { useEffect, useState } from "react";
import Row from "../components/Row";

interface iItem {
  position: {
    row: number;
    itemNum: number;
  };
  value: string;
}
const Editor = () => {
  const [rows, setRows] = useState<iItem[][]>([]);

  const initNewTable = (rows: number, itemsPerRow: number) => {
    let temp = [];
    for (let i = 1; i <= rows; i++) {
      let temp2 = [];
      for (let j = 1; j <= itemsPerRow; j++) {
        temp2.push({
          position: {
            row: i,
            itemNum: j,
          },
          value: "",
        });
      }
      temp.push(temp2);
    }

    console.log(temp);
    setRows(temp);
  };

  useEffect(() => {
    initNewTable(10, 23);
  }, []);

  return (
    <div className="w-full h-[100vh] bg-zinc-200 flex flex-col">
      <div className="w-full h-[95vh] overflow-y-scroll">
        <div className="flex items-center">
          {rows.map((r) => (
            <Row>
              {r.map((rd) => {
                return (
                  <div
                    className="w-50  bg-white border-black border-2 outline-blue-500 text-center"
                    contentEditable={true}
                  ></div>
                );
              })}
            </Row>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Editor;
