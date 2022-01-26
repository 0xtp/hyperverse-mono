import React from "react";
import { useTribes } from "@decentology/hyperverse-ethereum-tribes";

const InnerComponent: React.FunctionComponent<any> = ({ children }) => {
  const { useTribeEvents } = useTribes();
  useTribeEvents("JoinedTribe", (x: any) => {
    console.log("bob", x);
  });

  return <div>{children}</div>;
};

export default InnerComponent;
