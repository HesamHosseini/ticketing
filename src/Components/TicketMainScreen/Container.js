import React from "react";

function Container(props) {
  return (
    <div className="h-full text-white text-[12px] sm:px-[50px] md:px-[100px] lg:px-[150px] xl:px-[200px]">
      {props.children}
    </div>
  );
}

export default Container;
