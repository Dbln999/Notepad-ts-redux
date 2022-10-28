import React from "react";
import LeftSideManu from "./components/LeftSideManu";
import EditPaper from "./components/EditPaper";
import { useAppSelector } from "./store/hooks";
import RemoveModal from "./components/RemoveModal";

function App() {


    return (
    <div className="App flex">
      <LeftSideManu></LeftSideManu>
      <EditPaper></EditPaper>
    </div>
  );
}

export default App;
