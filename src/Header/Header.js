import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <Div>
    <Title>Lakers Team</Title>
  </Div>
);

const Div = styled.div`
  width: 85vw;
  height: 10vh;
  margin: 0 auto;
  text-align: center;
  line-height: 10vh;
  background-color: #F8EB71;
  border: 3px solid #7536F5;
`;

const Title = styled.h1`
  margin: 0;
  font-family: arial;
  font-size: 30px;
  color:  #7536F5;
`;

export default Header;