import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../store";
import {
  YELLOW_THEME,
  PINK_THEME,
  BLUE_THEME,
  UPDATE_PROMISE_FORM,
  UPDATE_USER_DETAILS
} from "../../store/types";
import { setActiveStyle } from "../../utils";
import "./index.scss";
import Table from "../../components/Table";
import Button from "../../components/Button";
import Modal from "../Modal";

const {
  REACT_APP_SPREADSHEET_ID,
  REACT_APP_CLIENT_ID,
  REACT_APP_API_KEY,
  REACT_APP_SCOPE
} = process.env;

export default function Home() {
  useEffect(() => {
    //initialize the Google API
    window.gapi.load("client:auth2", initClient);
  }, []);

  const [state, dispatch] = useContext(ThemeContext);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleChange = ({ target }) => {
    const { id, value } = target;
    const form = [...state.inputList];
    form[id] = { title: value };

    dispatch({ type: UPDATE_PROMISE_FORM, payload: form });
  };

  const handleUser = ({ target }) => {
    const { name, value } = target;
    const user = { ...state.user, [name]: value };

    dispatch({ type: UPDATE_USER_DETAILS, payload: user });
  };

  const initClient = async () => {
    let GoogleAuth = null;
    //provide the authentication credentials you set up in the Google developer console
    const clientOptions = {
      apiKey: REACT_APP_API_KEY,
      clientId: REACT_APP_CLIENT_ID,
      scope: REACT_APP_SCOPE,
      discoveryDocs: [
        "https://sheets.googleapis.com/$discovery/rest?version=v4"
      ]
    };

    try {
      await window.gapi.client.init(clientOptions);
      GoogleAuth = window.gapi.auth2.getAuthInstance();
      const isSignedIn = GoogleAuth.isSignedIn.get();

      if (!isSignedIn) {
        GoogleAuth.signIn();
        console.log("ERROR LOGIN IN");
      }
      createPromise();
    } catch (error) {
      console.log(error);
    }
  };

  const createPromise = async () => {
    const sheetOption = {
      spreadsheetId: REACT_APP_SPREADSHEET_ID,
      range: "Sheet1",
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS"
    };

    const valueRangeBody = {
      majorDimension: "ROWS",
      values: [...Object.values(state.user), JSON.stringify(state.inputList)]
    };

    try {
      const response = await window.gapi.client.sheets.spreadsheets.values.append(
        sheetOption,
        valueRangeBody
      );
      console.log({ response });
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  return (
    <Container theme={state.currentTheme} className="main">
      <div className="app-content">
        <h2 className="header">Create your Wishlist</h2>
        <h3 className="small_header">Choose color</h3>
        <div className="choose_colors">
          <span
            onClick={() =>
              dispatch({ type: YELLOW_THEME, active: YELLOW_THEME })
            }
            style={setActiveStyle({
              active: state.active,
              boxType: YELLOW_THEME
            })}
          ></span>
          <span
            onClick={() => dispatch({ type: PINK_THEME, active: PINK_THEME })}
            style={setActiveStyle({
              active: state.active,
              boxType: PINK_THEME
            })}
          ></span>
          <span
            onClick={() => dispatch({ type: BLUE_THEME, active: BLUE_THEME })}
            style={setActiveStyle({
              active: state.active,
              boxType: BLUE_THEME
            })}
          ></span>
        </div>
        <Table inputList={state.inputList} handleChange={handleChange} />
        <Button
          value={"GENERATE PROMISE CARD"}
          onClick={() => setShowModal(true)}
        />
      </div>
      {showModal && (
        <Modal
          handleChange={handleUser}
          handleSubmit={handleSubmit}
          {...state.user}
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  background-color: ${props => props.theme};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
