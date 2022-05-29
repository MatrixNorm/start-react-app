import React from "react";
import { createRoot } from "react-dom/client";

function RootComponent() {
  return <p>hi!</p>;
}

const root = createRoot(document.getElementById("matrixnorm-react-app"));
root.render(<RootComponent />);
