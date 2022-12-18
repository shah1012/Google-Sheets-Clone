import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cell from "../components/Cell";
import Row from "../components/Row";
import { getUrl, updateUrl } from "../misc/baseurls";

interface iItem {
  size: {
    width: number;
    height: number;
  };
  position: {
    row: number;
    itemNum: number;
  };
  value: string;
}
const Editor = () => {
  const [rows, setRows] = useState<iItem[][]>([]);
  let { docid } = useParams();

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

    setRows(temp);
  };

  useEffect(() => {
    let w = window.innerWidth;
    let h = window.innerHeight - 100;
    let cellHeight = 30;
    let cellWidth = 125;

    let numRow = Math.floor(h / cellHeight);
    let numCol = Math.floor(w / cellWidth);
    initNewTable(20, 10);
  }, []);

  const filterDocs = () => {
    let valueArr = [];
    for (let i = 0; i < rows.length; i++) {
      for (let j = 0; j < rows.length; j++) {
        if (rows[i][j] !== undefined && rows[i][j].value !== "") {
          valueArr.push(rows[i][j]);
        }
      }
    }
    return valueArr;
  };

  const onSave = () => {
    let email = JSON.parse(localStorage.getItem("User")!).email;

    let filteredDocs = filterDocs();

    const inputObject = {
      email: email,
      updateData: {
        ...filteredDocs,
      },
    };

    fetch(`${updateUrl}/${docid}`, {
      method: "POST",
      body: JSON.stringify(inputObject),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    let email = JSON.parse(localStorage.getItem("User")!).email;
    const inputObject = {
      email: email,
    };
    fetch(`${getUrl}`, {
      method: "POST",
      body: JSON.stringify(inputObject),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full h-[100vh] bg-zinc-200 flex flex-col">
      <div className="w-full h-[10vh] text-center flex items-center justify-center bg-red-400">
        <h1 className="text-3xl">{`${docid}`}</h1>
        <button
          onClick={onSave}
          className=" absolute right-10 text-2xl bg-blue-400 pr-10 pl-10 pb-3 pt-3 rounded-lg text-white hover:bg-blue-600 "
        >
          Save
        </button>
      </div>
      <div className="w-full h-[95vh] overflow-y-scroll">
        <div className="flex items-center flex-col">
          {/* {rows.map((r) => (
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
          ))} */}

          {rows.map((rw) => (
            <div className="w-full flex">
              {rw.map((cl) => {
                return (
                  <Cell
                    cl={cl}
                    key={`${cl.position.itemNum}_${cl.position.row}`}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Editor;
