import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-full">
      <div className=" bg-red-500 rounded ">
        <a href="https://gdscsrm.com/" className="text-xl p-4 " target="_blank">
          GDSC
        </a>
      </div>
      <div className="flex justify-between gap-5 ">
        <div className=" bg-green-500 rounded">
          <a href="https://twitter.com/tanishqjais9756" className="text-xl p-4" target="_blank">
            My Twitter
          </a>
        </div>
        <div className=" bg-yellow-500 rounded ">
          <a href="https://github.com/TJ-2004" className="text-xl p-4 " target="_blank">
            My Github
          </a>
        </div>
      </div>
    </div> 
  );
};

export default Navbar;
