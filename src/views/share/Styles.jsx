import styled from "styled-components";

export const DrawerContainer = styled.div`
  .theDrawer {
    background-color: white;
    border-radius: 1rem 1rem 0 0;
    padding: 1rem 2rem;
    position: fixed;
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
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

export const Container = styled.div`
  background-color: ${props => props.theme};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 310px;
  min-height: 550px;
  padding: 1rem;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
export const Title = styled.h2`
  font-family: "GTSuperText";
`;
export const Name = styled.div`
  font-size: 16px;
`;
export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.8rem;
`;
export const Slogan = styled.h2`
  font-size: 24px;
  font-family: "GTSuperText";
`;
export const Span = styled.span`
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 10px;
  line-height: 12px;
  padding: 0.25rem 1rem;
  border-radius: 8px;
`;
