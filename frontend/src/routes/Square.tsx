import React from "react";

let generator = () => {
  const random = Math.random().toString(16).slice(2, 10);
  return random;
};



export class Square {
  value: string;
  key: string;
  selected: boolean;
  constructor(value: string = "") {
    this.value = value;
    this.key = generator();
    this.selected = false;
  }

  render() {
    return (
      <input></input>
    );
  }
}