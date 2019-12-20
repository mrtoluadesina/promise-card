import React from "react";
import "./index.scss";

export default function Modal(props) {
  const { handleChange, close } = props;
  return (
    <div className="modal">
      <span className="close-modal" onClick={close}>
        <i className="mdi mdi-close"></i>
      </span>
      <div className="modal-content">
        <h2>Your Promise Card is Almost Ready</h2>
        <form>
          <div className="form-group">
            <label>Give your card a title</label>
            <input
              type="text"
              name="Title"
              placeholder="E.g. Christmas, Detty December, Birthday"
              onClick={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullname"
              placeholder="Tolu Adesina"
              onClick={handleChange}
            />
          </div>
          <div className="form-group">
            <label>
              Email Address <br/><small>To receive your promisecard via mail</small>
            </label>
            <input
              type="text"
              name="email"
              placeholder="example@mail.com"
              onClick={handleChange}
            />
          </div>
          <input type="submit" className="btn" value="See My Promise Card" />
        </form>
      </div>
    </div>
  );
}
