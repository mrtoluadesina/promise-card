import styled from "styled-components";

export const TableWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  text-align: center;
`;

export const Alert = styled.span`
  font-size: 14px;
  font-weight: 800;
  text-align: center;
`;

export const Table = styled.div`
  border: 2px solid #111111;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.div`
  border-bottom: 2px solid #111111;
  background-color: #f9f9f9;
`;

export const Title = styled.p`
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 500;
  text-align: left;
`;

export const List = styled.ul`
  list-style: none;
  li {
    &:last-child {
      input {
        border-bottom: 0;
      }
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 2px solid #111111;
  padding: 0.5rem 1rem;
  background-color: transparent;
  font-size: 15px;
`;

export const Btn = styled.input`
  background-color: white;
  padding: 0.75rem 2rem;
  border: 0;
  border-radius: 0.6rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  margin-top: 1.2rem;
  -webkit-appearance: none;
  &.btn-solid {
    background-color: #0262c3;
    color: white;
    -webkit-appearance: none;
  }
  &.btn-outline {
    background-color: white;
    border: 1px solid #0262c3;
    color: #0262c3;
    -webkit-appearance: none;
  }
`;
