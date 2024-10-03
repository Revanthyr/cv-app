import { useState } from "react";
import { PanelPicker } from "./PanelPicker.jsx";
import "./App.css";
import { Content, Customize, Reset } from "./Content.jsx";

function App() {
  return (
    <>
      <LeftSection />
    </>
  );
}
function LeftSection() {
  const [shows, setShows] = useState(0);
  function onClick() {
    shows === 0 ? setShows(1) : setShows(0);
  }
  return (
    <div>
      {/* PANEL PICKER
         UTILS
         PERSONAL
         EDUCATIOn
         EXPERICECNE
         
         
         
         */}
      <PanelPicker onClickProp={onClick} />
      <Reset />
      {shows === 0 ? <Content /> : <Customize />}
    </div>
  );
}
export default App;
