import * as React from "react";
import NumberFormat from "react-number-format";
import MacToolbar from "./MacToolbar";

const Screen = ({ input, preState }) => {
  return (
    <div className="screen">
      <MacToolbar />
      {input !== "" || input === "0" ? (
        <NumberFormat
          value={input}
          displayType={"text"}
          thousandSeparator={true}
        />
      ) : (
        <NumberFormat
          value={preState}
          displayType={"text"}
          thousandSeparator={true}
        />
      )}
    </div>
  );
};

export default Screen;
