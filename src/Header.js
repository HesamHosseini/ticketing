import React from "react";
import { RiLogoutBoxLine } from "react-icons/ri";
import { BsTextRight } from "react-icons/bs";
function Header(props) {
  return (
    <div className="w-full flex flex-row justify-between  text-center  border-b-2  border-[#9c9c9c] py-5 font-iranYekanWebMedium">
      <div>
        <i className="text-white text-[18px] ">
          <RiLogoutBoxLine />
        </i>
      </div>
      <div className="flex flex-row gap-4">
        <span className="text-[12px] ">پشتیبانی</span>
        <i className="text-white text-[18px] self-end">
          <BsTextRight />
        </i>
      </div>
    </div>
  );
} 

export default Header;
