import React, { useContext } from 'react';
import { ThemeContext } from '../../store';
import { Container, Header, Title, Name, Footer, Slogan, Span } from './Styles';
import Table from '../../components/Table';

export default function Card(props) {
  const [state] = useContext(ThemeContext);
  return (
    <Container theme={state.currentTheme} id="promiseCard">
      <Header>
        <Title>My Promise Card</Title>
        <Name>for {state.user.title}</Name>
      </Header>
      <Table
        inputList={props.inputList}
        disabled={true}
        handleChange={() => {}}
      />
      <Footer>
        <Slogan>
          <em>Givers Never Lack</em>
        </Slogan>
        <Span>create yours on promisecard.com.ng</Span>
      </Footer>
    </Container>
  );
}

Card.defaultProps = {
  inputList: [{ title: 'Shoes' }, { title: 'Chair' }],
};
