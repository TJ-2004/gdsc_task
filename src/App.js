import React, { useState } from 'react';
import Preview from './components/Preview';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const App = () => {
  const initial = `![Image](https://cdn-images-1.medium.com/max/578/1*vZVM7utCuRiZ6-HDsNeYUA@2x.png)`;
  const [text, setText] = useState(initial);
  const [copytext, setCopytext] = useState('Copy');

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = (e) => {
    setText(' ');
  };
  const handleCopy = () => {
    // console.log(text);
    navigator.clipboard.writeText(text);
    setCopytext('Copied');
    setTimeout(() => {
      setCopytext('Copy');
    }, 1000);
  };
  const CheckMarkdown = (tag = '') => {
    const { selectionStart } = document.querySelector('textarea');
    // console.log(selectionStart);
    const newText =
      selectionStart !== 0
        ? tag + text.substring(0, selectionStart) + tag
        : 'Enter text first...';

    setText(newText);
  };
  const handleLinkAndImage = (val) => {
    setText(val);
  };
  const handleHeading = (tag = '') => {
    const { selectionStart } = document.querySelector('textarea');

    const newHead =
      selectionStart !== 0
        ? tag + text.substring(0, selectionStart)
        : 'Enter text first...';
    setText(newHead);
  };
  return (
    <div className=" flex flex-col relative items-center justify-center h-screen w-screen bg-blue-800 ">
      <div className="bg-white fixed top-0 w-full h-[5%] dark: rounded-lg">
        <Navbar />
      </div>
      <div className="toolbar flex md:gap-5 gap-1 md:mt-2 mt-9 pt-9 md:flex-row flex-wrap justify-between items-center ">
        <div className="text-white rounded-lg cursor-pointer bg-red-600 md:px-4 px-2 md:py-2 py-4">
          <button type="button" onClick={() => handleHeading('# ')}>
            Heading
          </button>
        </div>
        <div className="text-white rounded-lg cursor-pointer bg-blue-600  md:px-4 px-2 md:py-2 py-4">
          <button type="button" onClick={() => CheckMarkdown('**')}>
            Bold
          </button>
        </div>
        <div className="text-white rounded-lg cursor-pointer bg-green-600 px-4 md:py-2 py-4">
          <button type="button" onClick={() => CheckMarkdown('*')}>
            Italic
          </button>
        </div>
        <div className="text-white rounded-lg cursor-pointer bg-yellow-600 px-4 md:py-2 py-4">
          <button
            type="button"
            onClick={() => handleLinkAndImage('[Link](Enter url here..)')}
          >
            Link
          </button>
        </div>
        <div className="text-white rounded-lg cursor-pointer bg-blue-600 px-4 md:py-2 py-4">
          <button
            type="button"
            onClick={() => handleLinkAndImage('![Image](Enter url here..)')}
          >
            Image
          </button>
        </div>
        <div className="text-white rounded-lg cursor-pointer bg-green-600 px-4 md:py-2 py-4">
          <button type="button" onClick={() => CheckMarkdown('\n```\n')}>
            Code Block
          </button>
        </div>
      </div>
      <div className="flex md:flex-row flex-col h-[80%] md:h-[40%] mt-9 w-[90%] gap-5 justify-center items-center ">
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
          onClick={handleCopy}
          className="text-white rounded-lg cursor-pointer bg-red-600 px-4 py-2"
        >
          {copytext}
        </button>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
