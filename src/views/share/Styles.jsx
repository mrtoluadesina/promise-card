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
    align-items: center;
    bottom: 0;
    transform: translate3d(0, 100%, 0);
    transition: transform 0.5s ease;
    .tray {
      display: flex;
      justify-content: space-around;
      position: relative;
      width: 100%;
      height: 100%;
      padding: 1rem;
      .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        min-width: 80px;
        span {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          i {
            color: white;
            font-size: 20px;
          }
          &.download {
            background-color: #2882f0;
          }
          &.link {
            background-color: #c9ddf1;
            i {
              color: #5589cf;
            }
          }
          &.fb {
            background-color: #3a52a1;
          }
          &.tweet {
            background-color: #0ba8f3;
          }
        }
        p {
          font-size: 11px;
          font-weight: 500;
          margin-top: .6rem;
        }
      }
    }
  }

  span.close {
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
      background-color: rgba(0, 0, 0, 0.45);
      top: 0;
      left: 0;
    }

    .theDrawer {
      transform: translateZ(0);
      bottom: 0;
    }

    span.close {
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
  font-size: 22px;
  white-space: nowrap;
`;
export const Name = styled.div`
  font-size: 14px;
`;
export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.8rem;
`;
export const Slogan = styled.h2`
  font-size: 22px;
  font-family: "GTSuperText";
  margin-bottom: .5rem;
  white-space: nowrap;
`;
export const Span = styled.span`
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 10px;
  line-height: 12px;
  padding: 0.25rem 1rem;
  border-radius: 8px;
`;
