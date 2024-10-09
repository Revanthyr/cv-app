import { useState } from "react";
import { PanelPicker } from "./PanelPicker.jsx";
import "./App.css";
import { Content, Customize, Reset } from "./Content.jsx";
import { defaultArray } from "./defaultArray.js";

function App() {
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
  // reformat with a more usable state
  const fullName = appState.filter((curr) => curr.name == "Full name");
  const email = appState.filter((curr) => curr.name == "Email");
  const phone = appState.filter((curr) => curr.name == "Phone number");
  const address = appState.filter((curr) => curr.name == "Address");
  const school = appState.filter((curr) => curr.name == "School");
  const degree = appState.filter((curr) => curr.name == "Degree");
  const startDateEdu = appState.filter((curr) => curr.name == "Start date");
  const endDateEdu = appState.filter((curr) => curr.name == "End date");
  const locationEdu = appState.filter((curr) => curr.name == "location");
  const company = appState.filter((curr) => curr.name == "company");
  const position = appState.filter((curr) => curr.name == "position");
  const startDateWork = appState.filter(
    (curr) => curr.name == "work start date"
  );
  const endDateWork = appState.filter((curr) => curr.name == "work end date");
  const locationWork = appState.filter((curr) => curr.name == "work location");
  const description = appState.filter((curr) => curr.name == "description");
  let eduDates;
  if (startDateEdu[0] !== undefined && endDateEdu[0] !== undefined) {
    eduDates =
      startDateEdu[0].value.toString() + " - " + endDateEdu[0].value.toString();
  } else if (startDateEdu[0] !== undefined && endDateEdu[0] === undefined) {
    eduDates = startDateEdu[0].value.toString() + " - Present";
  }
  let workDates;
  if (startDateWork[0] !== undefined && endDateWork[0] !== undefined) {
    workDates =
      startDateWork[0].value.toString() +
      " - " +
      endDateWork[0].value.toString();
  } else if (startDateWork[0] !== undefined && endDateWork[0] === undefined) {
    workDates = startDateWork[0].value.toString() + " - Present";
  }

  return (
    <div className="right-section-container">
      <div className="personal-details">
        <h1>{fullName[0] === undefined ? "" : fullName[0].value} </h1>
        <div className="personal-details-contact">
          <div className="mail">
            {email[0] !== undefined && (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" />
              </svg>
            )}
            <p> {email[0] === undefined ? "" : email[0].value} </p>
          </div>
          <div className="phone">
            {phone[0] !== undefined && (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>phone</title>
                <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
              </svg>
            )}
            <p> {phone[0] === undefined ? "" : phone[0].value} </p>
          </div>
          <div className="address">
            {address[0] !== undefined && (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>map-marker</title>
                <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
              </svg>
            )}
            <p> {address[0] === undefined ? "" : address[0].value} </p>
          </div>
        </div>
      </div>
      <div className="main-cv-section">
        <div className="education">
          <h2>{school[0] === undefined ? "" : "Education"}</h2>
          <div className="education-content">
            <div className="date-location">
              <p>{eduDates} </p>
              <p>{locationEdu[0] === undefined ? "" : locationEdu[0].value}</p>
            </div>
            <div className="school-degree">
              <p>
                <b>{school[0] === undefined ? "" : school[0].value}</b>
              </p>
              <p>{degree[0] === undefined ? "" : degree[0].value}</p>
            </div>
          </div>
        </div>
        <div className="education">
          <h2>{company[0] === undefined ? "" : "Work Experience"}</h2>
          <div className="education-content">
            <div className="date-location">
              <p>{workDates} </p>
              <p>
                {locationWork[0] === undefined ? "" : locationWork[0].value}
              </p>
            </div>
            <div className="school-degree">
              <p>
                <b>{company[0] === undefined ? "" : company[0].value}</b>
              </p>
              <p>{position[0] === undefined ? "" : position[0].value}</p>
              <p id="description">
                {description[0] === undefined ? "" : description[0].value}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
