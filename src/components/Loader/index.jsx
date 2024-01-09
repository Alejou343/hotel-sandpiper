import React from "react";
import { ClipLoader } from "react-spinners";

const Loader = (active) => {
  return (
    active.active && (
      <div className="flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 w-full h-full" style={{ backdropFilter: 'blur(10px)', zIndex: 20 }}>
        <ClipLoader color="#0ea5e9" />
      </div>
    )
  );
};

export default Loader;