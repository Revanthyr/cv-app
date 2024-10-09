function PanelPicker({ onClickProp }) {
  return (
    <div className="panel-picker-container">
      <div
        className="panel-content"
        onClick={() => onClickProp.onClickContent()}
      >
        Content
      </div>
      <div
        className="panel-customize"
        onClick={() => onClickProp.onClickCustomize()}
      >
        Customize
      </div>
    </div>
  );
  //
}

export { PanelPicker };
