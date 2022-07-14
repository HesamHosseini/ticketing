import React from "react";

function MainScreen(props) {
  return (
    <div className=" w-[95%] rounded-lg my-10 px-4 py-3  mx-auto bg-[#2B3143] h-60 ">
      <div className="w-full flex flex-row justify-between  text-center  border-b-2  border-[#9c9c9c] py-2 px-4 font-iranYekanWebSmall ">
        <div>
          <div className="text-[12px] text-white text-left">
            <span>تعداد پشتبان آنلاین :</span> <span> 3 نفر</span>
          </div>
          <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-200 dark:text-blue-800">
            Default
          </span>
        </div>
        <div className="flex flex-row gap-4">
          <i className="text-white text-[18px] self-end"></i>
        </div>
      </div>
    </div>
  );
}

export default MainScreen;
