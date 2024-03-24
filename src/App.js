import React, { useState } from "react";
import Preview from "./components/Preview";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  const initial = `![Image](https://cdn-images-1.medium.com/max/578/1*vZVM7utCuRiZ6-HDsNeYUA@2x.png)`;
  const [text, setText] = useState(initial);

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = (e) => {
    setText(" ");
  };

  return (
    <div className=" flex flex-col relative items-center justify-center h-screen w-screen bg-blue-800 ">
      <div className="bg-white fixed top-0 w-full h-[5%] rounded-lg">
        <Navbar />
      </div>

      <div className="flex md:flex-row flex-col h-[80%] md:h-2/5 w-[90%] gap-5 justify-center items-center ">
        <div className=" w-full h-full rounded-xl overflow-hidden   md:m-9 ">
          <textarea
            className="w-full h-full  border-none text-xl  resize-none p-4 text-black"
            value={text}
            onChange={handleChange}
            placeholder="Enter Markdown..."
            aria-label="Markdown Editor"
          />
        </div>

        <div className="flex  w-full h-full rounded-xl overflow-y-auto p-4 text-xl bg-white m-9 ">
          <Preview value={text} />
        </div>
      </div>

      <div className="flex mt-3  justify-between  w-[85%]">
        <button
          type="button"
          onClick={handleClick}
          className="text-white rounded-lg cursor-pointer bg-green-600 px-4 py-2"
        >
          Clear
        </button>
        <button
          type="button"
          //   onClick={handleCopy}
          className="text-white rounded-lg cursor-pointer bg-red-600 px-4 py-2"
        >
          Copy
        </button>
      </div>

      <div >
        <Footer />
      </div>


    </div>
  );
};

export default App;
