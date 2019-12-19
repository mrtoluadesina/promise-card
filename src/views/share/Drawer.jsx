import React from "react";
import {DrawerContainer} from './Styles';

export default () => {
  const closeDrawer = () => {
    const drawer = document.querySelector(".drawer");
    drawer.classList.remove("is-active");
  };
  return (
    <DrawerContainer className="drawer">
      <div className="theDrawer">
        <h2>This is the drawer</h2>
      </div>
      <span onClick={closeDrawer}>x</span>
    </DrawerContainer>
  );
};