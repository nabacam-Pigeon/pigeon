import React from 'react';
import styled from 'styled-components';
import { GreenButton } from '../../shared/Buttons';

const EandIModal = ({ onClose }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <ModalText>선택지를 하나 이상 선택해주세요.</ModalText>
        <GreenButton onClick={onClose}>알겠습니다.</GreenButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default EandIModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #8785a2;
  color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalText = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;
