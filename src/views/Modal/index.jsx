import React from "react";
import useState from "react-hook-form";
import "./index.scss";

export default function Modal(props) {
  const { handleChange, close } = props;
  const { handleSubmit, register, errors } = useState();
  return (
    <div className="modal">
      <span className="close-modal" onClick={close}>
        <i className="mdi mdi-close"></i>
      </span>
      <div className="modal-content">
        <h2>Your Promise Card is Almost Ready</h2>
        <form onSubmit={handleSubmit(props.handleSubmit)}>
          <div className="form-group">
            <label>Give your card a title</label>
            <input
              type="text"
              name="title"
              value={props.title}
              placeholder="E.g. Christmas, Detty December, Birthday"
              onChange={handleChange}
              ref={register({
                required: true
              })}
            />
            <span style={{ color: "red", fontSize: "12px" }}>
              {errors.title && errors.title.message}
            </span>
          </div>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={props.name}
              placeholder="Tolu Adesina"
              onChange={handleChange}
              ref={register({
                required: true
              })}
            />
            <span style={{ color: "red", fontSize: "12px" }}>
              {errors.name && errors.name.message}
            </span>
          </div>
          <div className="form-group">
            <label>
              Email Address <br />
              <small>To receive your promise card via mail</small>
            </label>
            <input
              type="email"
              name="email"
              value={props.email}
              placeholder="example@mail.com"
              onChange={handleChange}
              ref={register({
                required: true
              })}
            />
            <span style={{ color: "red", fontSize: "12px" }}>
              {errors.email && errors.email.message}
            </span>
          </div>
          <input type="submit" className="btn" value="See My Promise Card" />
        </form>
      </div>
    </div>
  );
}
