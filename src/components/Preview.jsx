import React from "react";
import Markdown from "react-markdown";
import Remarkgfm from "remark-gfm";

const Preview = ({ value }) => {
  // console.log({ value });
  return (
    <div className="w-1/2 prose">
      <Markdown children={value} remarkPlugins={[Remarkgfm]} />
    </div>
  );
};

export default Preview;
