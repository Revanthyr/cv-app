import { useState } from "react";
///////////////////////// TOOODOO

////////////////////////////

/* 


*/

////////////////////////////////////////////////////
const personalDetails = {
  name: "Personal Details",
  categories: [
    {
      name: "Full name",
      type: "text",
      example: "Albert Einstein",
      id: crypto.randomUUID(),
    },
    {
      name: "Email",
      type: "email",
      example: "email@example.com",
      id: crypto.randomUUID(),
    },
    {
      name: "Phone number",
      type: "tel",
      example: "123-456-7890",
      id: crypto.randomUUID(),
    },
    {
      name: "Address",
      type: "text",
      example: "San Francisco, US",
      id: crypto.randomUUID(),
    },
  ],
};
const educationDetails = {
  name: "Education ",
  categories: [
    {
      name: "School",
      type: "text",
      example: "Awesomeland University",
      id: crypto.randomUUID(),
    },
    {
      name: "Degree",
      type: "text",
      example: "Computer Science",
      id: crypto.randomUUID(),
    },
    {
      name: "Start date",
      type: "date",
      example: "",
      id: crypto.randomUUID(),
      isDate: "date",
    },
    {
      name: "End date",
      type: "date",
      example: "",
      id: crypto.randomUUID(),
      isDate: "date",
    },
    {
      name: "location",
      type: "text",
      example: "New York, US",
      id: crypto.randomUUID(),
    },
  ],
};
const workDetails = {
  name: "Work",
  categories: [
    {
      name: "company",
      type: "text",
      example: "FAANG",
      id: crypto.randomUUID(),
    },
    {
      name: "position",
      type: "text",
      example: "software engineer",
      id: crypto.randomUUID(),
    },
    {
      name: "start date",
      type: "date",
      example: "",
      id: crypto.randomUUID(),
    },
    {
      name: "end date",
      type: "date",
      example: "",
      id: crypto.randomUUID(),
    },
    {
      name: "work location",
      type: "text",
      example: "Silicon Valley",
      id: crypto.randomUUID(),
    },
    {
      name: "description",
      type: "text",
      example: "Did stuff",
      id: crypto.randomUUID(),
    },
  ],
};
function Reset({ state }) {
  return (
    <button onClick={() => state.setAppState([])} className="reset-btn">
      Reset
    </button>
  );
}

function Content({ state }) {
  async function inputOnChange(name, value) {
    let newState = await JSON.stringify(state.appState);
    newState = await JSON.parse(newState);

    let object = newState.filter((curr) => curr.name == name);

    /// !== 1

    if (value.length > 1 && object.length !== 0) {
      let index = newState.indexOf(object[0]);

      newState[index].value = value;

      state.setAppState(newState);
    } else {
      newState.push({ name: name, value: value });

      state.setAppState(newState);
    }
  }
  function findValue(name) {
    let object = state.appState.filter((curr) => curr.name === name)[0];

    return object && object.value ? object.value : "";
  }

  return (
    <>
      <Form
        name={personalDetails.name}
        categories={personalDetails.categories}
        setState={state.setAppState}
        state={state.appState}
        findValue={findValue}
        inputOnChange={inputOnChange}
      />
      <Toggle
        name={educationDetails.name}
        categories={educationDetails.categories}
        findValue={findValue}
        inputOnChange={inputOnChange}
      />
      <Toggle
        name={workDetails.name}
        categories={workDetails.categories}
        findValue={findValue}
        inputOnChange={inputOnChange}
      />
    </>
  );
}
function Form({ name, categories, setState, state, findValue, inputOnChange }) {
  const fields = categories.map((curr) => {
    return (
      <div key={curr.id}>
        <label htmlFor={curr.name}> {curr.name}</label>
        <input
          type={curr.type}
          placeholder={curr.example}
          name={curr.name}
          value={findValue(curr.name)}
          onChange={(e) => inputOnChange(e.target.name, e.target.value)}
        />
      </div>
    );
  });

  return (
    <div className="form-container">
      <h1>{name}</h1>
      <form action="">{fields}</form>
    </div>
  );
}
function Toggle({ name, categories, findValue, inputOnChange }) {
  const [formIsShown, setFormIsShown] = useState(false);
  return (
    <>
      <div
        onClick={() =>
          formIsShown ? setFormIsShown(false) : setFormIsShown(true)
        }
      >
        HEY
      </div>

      {formIsShown && (
        <Form
          name={name}
          categories={categories}
          findValue={findValue}
          inputOnChange={inputOnChange}
        />
      )}
    </>
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
export { Content, Customize, Reset };
