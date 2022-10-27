import React, { useEffect, useState } from 'react'
import { Square } from './Square';

const Home = () => {
  const [boardArr, setBoardArr] = useState<any[]>([]);


  const createBoard = (rows: number, columns: number) => {
    let temp = [];
    for(let i=0; i<rows; i++){
      let temp2 = [];
      for(let j=0; j<columns; j++){
        temp2.push({
          value: "hi",
          key: Math.floor(Math.random() * (rows+columns)),
          position: {
            row: i,
            col: j
          }
        })
      } 
      temp.push(temp2)
    }

    setBoardArr(temp)
  }

  useEffect(() => {
    createBoard(10, 10)
  }, [])
  
  return (
    <div className="w-full h-[100vh] bg-green-500  flex flex-col items-center" >
      <header className='w-full h-16 text-3xl justify-center pt-3 text-center bg-slate-500'>Sheets</header>
      <table>
        {console.table(boardArr)}
      </table>
    </div>
  )
}

export default Home