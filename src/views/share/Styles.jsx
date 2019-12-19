import styled from "styled-components";

export const DrawerContainer = styled.div`
  .theDrawer {
    background-color: white;
    border-radius: 1rem 1rem 0 0;
    padding: 1rem;
    position: fixed;
    width: 100%;
    height: 20vh;
    display: flex;
    bottom: 0;
    transform: translate3d(0, 100%, 0);
    transition: transform 0.5s ease;
  }

  span {
    display: none;
  }

  &.is-active {
    position: absolute;
    display: unset;
    z-index: 6;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    &:before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.3);
      top: 0;
      left: 0;
    }

    .theDrawer {
      transform: translateZ(0);
      bottom: 0;
    }

    span {
      display: unset;
      position: absolute;
      top: 10px;
      right: 10px;
      content: "x";
      font-size: 20px;
      color: white;
    }
  }
`;
