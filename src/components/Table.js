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
            <Input
              type="text"
              value={item.title}
              id={index}
              placeholder="Add Item"
              onChange={props.handleChange}
            />
          </li>
        ))}
        {props.inputList.length !== 8
          ? Array(8 - props.inputList.length)
              .fill({ title: "" })
              .map((item, index) => (
                <li key={index}>
                  <Input
                    type="text"
                    value={item.title}
                    id={index}
                    placeholder="Add Item"
                    onChange={props.handleChange}
                  />
                </li>
              ))
          : null}
      </List>
    </Table>
  );
}

export default TableView;
