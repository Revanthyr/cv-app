import { useState } from "react";
import { PanelPicker } from "./PanelPicker.jsx";
import "./App.css";
import { Content, Customize, Reset } from "./Content.jsx";

function App() {
  let defaultArray = [];
  const [appState, setAppState] = useState(defaultArray);

  return (
    <>
      <LeftSection appState={appState} setAppState={setAppState} />

      <RightSection appState={appState} setAppState={setAppState} />
    </>
  );
}
function LeftSection({ appState, setAppState }) {
  const [shows, setShows] = useState(0);
  function onClickContent() {
    if (shows === 0) {
      return;
    } else setShows(0);
  }
  function onClickCustomize() {
    if (shows === 1) {
      return;
    } else setShows(1);
  }
  return (
    <div className="left-section-container">
      <PanelPicker onClickProp={{ onClickContent, onClickCustomize }} />
      <div className="left-section-main-container">
        <Reset state={{ appState, setAppState }} />
        {shows === 0 ? (
          <Content state={{ appState, setAppState }} />
        ) : (
          <Customize />
        )}
      </div>
    </div>
  );
}

function RightSection({ appState, setAppState }) {
  return (
    <div className="right-section-container">
      <h1> Right section</h1>
    </div>
  );
}
export default App;
