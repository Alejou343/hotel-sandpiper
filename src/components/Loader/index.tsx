import React from "react";
import { ClipLoader } from "react-spinners";

interface ComponentProps {
  active: boolean
}

const Loader: React.FC<ComponentProps> = (active) => {
  return (
    active.active && (
      <div className="flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 w-full h-full" style={{ backdropFilter: 'blur(5rem)', zIndex: 20 }}>
        <ClipLoader color="#5ccda7" size={50} />
      </div>
    )
  );
};

export default Loader;