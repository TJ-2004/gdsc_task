import React, { useState } from "react";
import Preview from "./components/Preview";

const App = () => {
  const initialMarkdown = `*Tanishq Jaiswal*`;
  const [text, setText] = useState(initialMarkdown);

  console.log(text);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className=" flex md:flex-row flex-col h-screen w-screen gap-5 justify-center items-center bg-blue-800">
      <div className="flex  w-full h-2/5 rounded-xl overflow-hidden   m-9 ">
        <textarea
          className="w-full h-full  border-none text-xl  resize-none  text-black"
          value={text}
          onChange={handleChange}
          placeholder="Enter Markdown..."
          aria-label="Markdown Editor"
        />
      </div>

      <div className="flex  w-full h-2/5 rounded-xl overflow-hidden  bg-red-500 m-9 ">
        <Preview value = {text}/>
      </div>
    </div>
  );
};

export default App;
