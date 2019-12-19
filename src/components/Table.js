import React from "react";
import { Table, Header, Title, List, Input } from "./Styles";

function TableView(props) {
  return (
    <Table>
      <Header>
        <Title>Item</Title>
      </Header>
      <List>
        {props.inputList.map((item, index) => (
          <li key={index}>
            <Input type="text" name={item.name} value={item.value} placeholder="Add Item" />
          </li>
        ))}
      </List>
    </Table>
  );
}

export default TableView;
