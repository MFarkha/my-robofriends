import React from "react";
import { ReactNode } from "react";

type ScrollProps = {
  children?: ReactNode;
};

const Scroll = (props: ScrollProps) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid black",
        height: "800px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
