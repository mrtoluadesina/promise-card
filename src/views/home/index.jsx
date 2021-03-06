import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import firebase from '../../firebase';

import { ThemeContext } from '../../store';
import {
  YELLOW_THEME,
  PINK_THEME,
  BLUE_THEME,
  UPDATE_PROMISE_FORM,
  UPDATE_USER_DETAILS,
} from '../../store/types';
import { setActiveStyle } from '../../utils';

import './index.scss';
import Table from '../../components/Table';
import Button from '../../components/Button';
import Modal from '../Modal';

export default function Home(props) {
  const [state, dispatch] = useContext(ThemeContext);
  const [showModal, setShowModal] = useState(false);
  const [filled, setFilled] = useState(false);
  const [notification, setNotification] = useState('');
  const [loading, setLoading] = useState(state.isLoading);

  const handleSubmit = async e => {
    // e.preventDefault();
    setLoading(true);
    const db = firebase.firestore();

    try {
      await db.collection('promise_card').add({
        ...state.user,
        promise: state.inputList,
      });
      setLoading(false);
      props.history.push('/share');
    } catch (error) {
      console.log(error);
    }
  };

  const handleShowModal = () => {
    if (filled) {
      const bg = document.querySelector('.app-content');
      bg.classList.add('blur-bg');
      setShowModal(true);
    }
    const input = document.querySelectorAll('input');
    input[0].classList.add('border-red');
    setNotification('You need to fill at least the first field');
  };

  const closeModal = () => {
    const bg = document.querySelector('.app-content');
    bg.classList.remove('blur-bg');
    setShowModal(false);
  };

  const handleChange = ({ target }) => {
    const { id, value } = target;
    const form = [...state.inputList];
    form[id] = { title: value };

    if (form[0].title) {
      setFilled(true);
    }

    dispatch({ type: UPDATE_PROMISE_FORM, payload: form });
  };

  const handleUser = ({ target }) => {
    const { name, value } = target;
    const user = { ...state.user, [name]: value };

    dispatch({ type: UPDATE_USER_DETAILS, payload: user });
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
              boxType: YELLOW_THEME,
            })}
          ></span>
          <span
            onClick={() => dispatch({ type: PINK_THEME, active: PINK_THEME })}
            style={setActiveStyle({
              active: state.active,
              boxType: PINK_THEME,
            })}
          ></span>
          <span
            onClick={() => dispatch({ type: BLUE_THEME, active: BLUE_THEME })}
            style={setActiveStyle({
              active: state.active,
              boxType: BLUE_THEME,
            })}
          ></span>
        </div>
        <Table
          inputList={state.inputList}
          handleChange={handleChange}
          filled={filled}
          notification={notification}
        />
        <Button value={'GENERATE PROMISE CARD'} onClick={handleShowModal} />
      </div>
      {showModal && (
        <Modal
          handleChange={handleUser}
          handleSubmit={handleSubmit}
          close={closeModal}
          {...state.user}
        />
      )}
      {loading && <Loader />}
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

const Loader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(37, 37, 37, 0.7);
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    border: 8px solid #f3f3f3; /* Light grey */
    border-top: 8px solid black; /* black */
    border-radius: 50%;
    width: 100px;
    min-height: 100px;
    position: absolute;
    animation: spin 2s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
