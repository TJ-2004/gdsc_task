import React from 'react';
// import GdscsLogo from "../assets/logo.png"
const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-full  ">
      <div>
        <a
          href="https://gdscsrm.com/"
          className="text-xl p-4 ml-4"
          target="_blank"
          rel="noopener noreferrer"
        >
        GDSC
          
        </a>
      </div>
      <div className="flex justify-between gap-5 mr-4 ">
        <div>
          <a
            href="https://twitter.com/tanishqjais9756"
            className="text-xl p-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
        <div>
          <a
            href="https://github.com/TJ-2004"
            className="text-xl p-4 "
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
        <div>
          <a
            href="https://github.com/TJ-2004/gdsc_task"
            className="text-xl p-4 "
            target="_blank"
            rel="noopener noreferrer"
          >
            Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
