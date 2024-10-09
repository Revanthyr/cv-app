import { useState } from "react";
import { defaultArray } from "./defaultArray";
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
      name: "work start date",
      type: "date",
      example: "",
      id: crypto.randomUUID(),
    },
    {
      name: "work end date",
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
    <div className="utils-container">
      <button onClick={() => state.setAppState([])} className="reset-btn">
        Reset
      </button>
      <button
        className="load-example"
        onClick={() => state.setAppState(defaultArray)}
      >
        {" "}
        Load example
      </button>
    </div>
  );
}

function Content({ state }) {
  async function inputOnChange(name, value) {
    let newState = await JSON.stringify(state.appState);
    newState = await JSON.parse(newState);

    let object = newState.filter((curr) => curr.name == name);

    if (value.length >= 0 && object.length !== 0) {
      let index = newState.indexOf(object[0]);

      newState[index].value = value;

      state.setAppState(newState);
    } else {
      newState.push({ name: name, value: value });
      console.log(newState);
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
        {name}
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
      <div className="layout-container">
        <h1>Layout</h1>
        <div className="button-container">
          <button
            className="layout-top"
            onClick={() => {
              document.documentElement.style.cssText =
                "--main-layout-direction:column";
            }}
          >
            Top
          </button>
          <button
            className="layout-left"
            onClick={() => {
              document.documentElement.style.cssText +=
                "--main-layout-direction:row";
              document.documentElement.style.cssText +=
                "--secondary-layout-direction:column";
            }}
          >
            Left
          </button>
          <button
            className="layout-right"
            onClick={() => {
              document.documentElement.style.cssText =
                "--main-layout-direction:row-reverse";
              document.documentElement.style.cssText +=
                "--secondary-layout-direction:column";
            }}
          >
            Right
          </button>
        </div>
      </div>
      <div className="color-container">
        <h1>Color</h1>
        <label htmlFor="color">Color</label>

        <input
          type="color"
          className="color"
          onChange={(e) => {
            document.documentElement.style.cssText =
              "--main-color:" + e.target.value;
          }}
        />
      </div>
      <div>
        <h1>Fonts</h1>
        <button
          className="sans-serif"
          onClick={() => {
            document.querySelector(".right-section-container").style.cssText =
              "--cv-font-family:sans-serif";
          }}
        >
          Serif
        </button>
        <button
          className="sans"
          onClick={() => {
            document.querySelector(".right-section-container").style.cssText =
              "--cv-font-family:'sans'";
          }}
        >
          Sans
        </button>
        <button
          className="mono"
          onClick={() => {
            document.querySelector(".right-section-container").style.cssText =
              "--cv-font-family:'Courier New'";
          }}
        >
          Mono
        </button>
      </div>
    </>
  );
}
export { Content, Customize, Reset };
