function Content() {
  return (
    <>
      <Form />
      <Toggle />
      <Toggle />
    </>
  );
}

function Reset() {
  const buttonStyleTest = {
    border: "10 solid-black",
    backgroundColor: "red",
  };
  // TODO: figure out why it's not logging onclick (good luck)
  return (
    <button onClick={console.log("reset works!")} style={buttonStyleTest}>
      Reset
    </button>
  );
}

function Customize() {
  return (
    <>
      <div>
        <h1>Layout</h1>
        <div className="button-container">
          <button>Does</button>
          <button>Some</button>
          <button>Thing</button>
        </div>
      </div>
      <div>Color</div>
      <div>Fonts</div>
    </>
  );
}
function Toggle() {
  return <div onClick={console.log("toggle works!")}>EDU Toggle</div>;
}

function Form() {
  // takes in a prop object and maps the values to generate the form field
  return (
    <form action="">
      <label htmlFor="">Hey</label>
      <input type="text" />
    </form>
  );
}

export { Content, Customize, Reset };
