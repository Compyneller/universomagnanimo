import React from "react";
import { useContext } from "react";
import { Data } from "../../Context/DataContext";

const Stip = () => {
  const { homepage } = useContext(Data);
  return (
    <div className="bg-dark text-light text-center py-4 w-100">
      <p className="container my-auto">{homepage?.data?.footer?.copyright}</p>
    </div>
  );
};

export default Stip;
