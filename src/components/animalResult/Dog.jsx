import React from 'react';
import Dogs from '../../assets/Dogs.png';
import { styled } from 'styled-components';

function Dog() {
  return (
    <Container>
      <MainBox>
        <div>
          <h1>당신은 <ResultSpan>강아지</ResultSpan>와 비슷한 성격을 가진 사람입니다. </h1>
          <DogImg src={Dogs} alt="" />
        </div>
        <ContetnsBox>
          <h3>따뜻하고 친절한 성격으로 주변 사람들에게 편안함을 주는 타입이에요.</h3>
          <p>
            당신은 강아지와 같이 다정하고 친절한 성격을 가지고 있습니다.
            <br />
            주변 사람들과의 관계를 소중히 여기며 다른 사람들과 함께하는 시간을 즐깁니다.
            <br />
            친구나 가족들과의 사회적인 활동을 중요하게 생각하며, 타인의 감정을 잘 이해하고 공감하는 능력이 뛰어납니다.
            <br />
            따뜻한 눈길과 밝은 에너지로 주변 사람들에게 힘을 줄 수 있습니다.
          </p>
        </ContetnsBox>
      </MainBox>
    </Container>
  );
}

export default Dog;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const MainBox = styled.div``;

const ContetnsBox = styled.div``;

const DogImg = styled.img`
  width: 500px;
  height: 500px;
`;

const ResultSpan = styled.span`
  text-shadow: 1px 1px 2px var(--color_dark_green);
  text-decoration: underline var(--color_green) 3px;
  font-size: 30px;
`