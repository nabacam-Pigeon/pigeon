import React, { useState, useEffect } from 'react';
import { getFreeBoard, addFreeBoard, delFreeBoard, fixFreeBoard } from '../../api/freeBoard';
import styled from 'styled-components';
import { PinkButton, GreenButton } from '../../shared/Buttons';
import writeIcon from '../../assets/writeIcon.png';

const FreeBoardWrite = () => {
  const [FreeBoard, setFreeBoard] = useState([]);
  const [newTest, setNewTest] = useState({ title: '', description: '' });

  const fetchFreeBoard = async () => {
    try {
      const data = await getFreeBoard();
      setFreeBoard(data);
    } catch (error) {
      console.error('Error fetching tests:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addFreeBoard(newTest);
      setNewTest({ id: '', description: '' });
      fetchFreeBoard();
    } catch (error) {
      console.error('Error adding test:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await delFreeBoard(id);
      fetchFreeBoard();
    } catch (error) {
      console.error('Error deleting test:', error);
    }
  };

  const handleUpdate = async (test) => {
    try {
      setNewTest(test);
      await fixFreeBoard(newTest.description);
      fetchFreeBoard();
    } catch (error) {
      console.error('Error updating test:', error);
    }
  };

  useEffect(() => {
    fetchFreeBoard();
  }, []);

  return (
    <div>
      <Title>자유게시판</Title>
      <Form onSubmit={handleSubmit}>
        <CommentInput
          type="text"
          value={newTest.description}
          onChange={(e) => setNewTest({ description: e.target.value })}
          placeholder="Description"
        />
        <WriteIcon src={writeIcon} onClick={handleSubmit} />
      </Form>
      {FreeBoard.map((test) => (
        <CommentListBox key={test.id}>
          <p>{test.description}</p>
          <div>
            <PinkButton onClick={() => handleUpdate(test)}>수정</PinkButton>
            <PinkButton onClick={() => handleDelete(test.id)}>삭제</PinkButton>
          </div>
        </CommentListBox>
      ))}
    </div>
  );
};
export default FreeBoardWrite;

const Title = styled.p`
  text-align: center;
  font-size: 25px;
  font-weight: bolder;
`;

const Form = styled.form`
  width: 100%;

  position: relative;
  display: inline-block;
`;

const CommentInput = styled.input`
  display: block;
  border: none;
  border-radius: 30px;

  width: 95%;
  height: 40px;
  background-color: lightgray;

  padding: 0 15px;
  padding-left: 20px;
  margin: 0 auto;
  margin-top: 5px;

  font-size: 20px;
  text-align: center;
`;

const WriteIcon = styled.img`
  position: absolute;

  width: 25px;
  top: 50%;
  right: 45px;

  transform: translateY(-50%);

  &:hover {
    cursor: pointer;
    width: 40px;
  }
`;
const CommentListBox = styled.div`
  display: flex;
  justify-content: center;
`;
