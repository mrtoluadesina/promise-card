import React from "react";
import { DrawerContainer } from "./Styles";

export default props => {
  const closeDrawer = () => {
    const drawer = document.querySelector(".drawer");
    drawer.classList.remove("is-active");
  };
  return (
    <DrawerContainer className="drawer">
      <div className="theDrawer">
        <div className="tray">
          <div className="item">
            <span className="download" onClick={props.downloader}>
              <i className="mdi mdi-download"></i>
            </span>
            <p>Save Image</p>
          </div>
          <div className="item">
            <span className="link">
              <i className="mdi mdi-link-variant"></i>
            </span>
            <p>Copy Link</p>
          </div>
          <div className="item">
            <span className="fb">
              <i className="mdi mdi-facebook"></i>
            </span>
            <p>Facebook</p>
          </div>
          <div className="item">
            <span className="tweet">
              <i className="mdi mdi-twitter"></i>
            </span>
            <p>Twitter</p>
          </div>
        </div>
      </div>
      <span className="close" onClick={closeDrawer}>
        <i className="mdi mdi-close"></i>
      </span>
    </DrawerContainer>
  );
};
