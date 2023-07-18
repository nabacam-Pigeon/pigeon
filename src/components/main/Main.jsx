import React from 'react';
import { styled } from 'styled-components';
import MbtiTest from '../../del/test';
import { useNavigate } from 'react-router';

function Main() {
  const navigate = useNavigate();

  return (
    <>
      <MbtiTest />
      <h1>어떤 동물을 닮았을까?</h1>
      <Button onClick={() => navigate('/animal')}>테스트 시작</Button>
    </>
  );
}

export default Main;

const Button = styled.button`
  background-color: black;
  color: white;
  font-weight: bold;
  border-radius: 30px;
  width: 150px;
  height: 50px;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
  }
`;
