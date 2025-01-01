import { useState } from "react";
import hogwarts from "../src/assets/hogwarts.png";
import gryffindor from "../src/assets/griffindor.png";
import hufflepuff from "../src/assets/hufflepuff.png";
import ravenclaw from "../src/assets/ravenclaw.png";
import slytherin from "../src/assets/slytherin.png";

function App() {
  const [color, Setcolor] = useState("");
  const [textcolor, Settextcolor] = useState("");
  const [heading, Setheading] = useState("CHOOSE YOUR HOUSE");
  const [image, Setimage] = useState(hogwarts);

  return (
    <div
      className="w-full h-screen duration-200 flex flex-col justify-center items-center"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-3xl p-3 text-center" style={{ color: textcolor }}>
        {heading}
      </h1>
      <img
        src={image}
        alt="House"
        className="w-1/2 max-w-sm max-h-96 mb-20 max-h"
      />
      <div className="fixed flex flex-wrap justify-center bottom-6 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button
            onClick={() => {
              Setcolor("red");
              Settextcolor("gold");
              Setheading("Congratulations! You are a Gryffindor!");
              Setimage(gryffindor);
            }}
            className="text-lg outline-none px-4 py-1 rounded-full shadow-lg bg-rose-600 min-w-40"
          >
            GRYFFINDOR
          </button>
          <button
            onClick={() => {
              Setcolor("blue");
              Settextcolor("white");
              Setheading("Congratulations! You are a Ravenclaw!");
              Setimage(ravenclaw);
            }}
            className="text-lg outline-none px-4 py-1 rounded-full shadow-lg bg-blue-500 min-w-40"
          >
            RAVENCLAW
          </button>
          <button
            onClick={() => {
              Setcolor("yellow");
              Settextcolor("black");
              Setheading("Congratulations! You are a Hufflepuff!");
              Setimage(hufflepuff);
            }}
            className="text-lg outline-none px-4 py-1 rounded-full shadow-lg bg-yellow-300 min-w-40"
          >
            HUFFLEPUFF
          </button>
          <button
            onClick={() => {
              Setcolor("green");
              Settextcolor("silver");
              Setheading("Congratulations! You are a Slytherin!");
              Setimage(slytherin);
            }}
            className="text-lg outline-none px-4 py-1 rounded-full shadow-lg bg-green-600 min-w-40"
          >
            SLYTHERIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
