import React from "react";

const Header = () => {
  return (
    <div className="w-full">
      <div className="flex w-full justify-between">
        <h1 className="font-bold text-4xl pl-[18px]">Competitions</h1>
        <div>
          <button>List</button>
          <button>+ Create</button>
        </div>
      </div>
      <p className="pl-[18px]">Page Description</p>
      <input type="text" className="bg-black text-white"/>
    </div>
  );
};

export default Header;
