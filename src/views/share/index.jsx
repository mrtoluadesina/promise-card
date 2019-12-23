import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../store';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from './Card';
import Button from '../../components/Button';
import Drawer from './Drawer';

import htmlToImage from 'html-to-image';
import Confetti from '../../components/Confetti';

export default function Share() {
  const [state] = useContext(ThemeContext);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
  }, []);

  const items = state.inputList.filter(item => item.title);

  const downloadImage = () => {
    htmlToImage
      .toJpeg(document.getElementById('promiseCard'), { quality: 0.95 })
      .then(function(dataUrl) {
        let downloader = document.createElement('a');
        downloader.download = 'my-promise-card.jpeg';
        downloader.href = dataUrl;
        downloader.click();
      });
  };

  const openDrawer = () => {
    const drawer = document.querySelector('.drawer');
    drawer.classList.add('is-active');
  };

  return (
    <>
      <Container theme={state.currentTheme}>
        {showConfetti ? <Confetti /> : null}
        <CardWrapper>
          <Card inputList={items} />
        </CardWrapper>
        <Actions>
          <Button
            className="btn-solid"
            value="Share with friends"
            onClick={openDrawer}
          />
          <Link to="/">
            <Button className="btn-outline" value="Create new card" />
          </Link>
        </Actions>
      </Container>
      <Drawer downloader={downloadImage} />
    </>
  );
}

const Container = styled.div`
  background-color: ${props => props.theme};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem 2rem;
  height: 100vh;
  z-index: 1;
  position: relative;
  &::after {
    content: '';
    width: 100%;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.4);
    position: absolute;
    top: 0;
    left: 0;
  }

  @media (min-width: 414px) {
    width: 400px;
  }

  @media (min-width: 768px) {
    width: 600px;
  }
`;

const CardWrapper = styled.div`
  border: 2px dashed black;
  z-index: 3;
  position: relative;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: 10;
`;
