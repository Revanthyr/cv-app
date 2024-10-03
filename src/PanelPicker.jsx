// import { useState } from "react";

function PanelPicker({ onClickProp }) {
  return (
    <div>
      <div className="panel-content" onClick={onClickProp}>
        Show Content
      </div>
      <div className="panel-customize" onClick={onClickProp}>
        Show Customize
      </div>
    </div>
  );
}
export { PanelPicker };
