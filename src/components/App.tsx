import React from 'react';
import styled from 'styled-components';
import '.././App.css';
import Background from './Background';
import './Background/index.css';
import BoxText from './BoxText';
import './Suport/index.css';

//Styling
const StyledDiv = styled.div`
`

function App() {
  return (
    <StyledDiv className='content'>
      <div className='page'>
        <Background />
        <BoxText />
      </div>
    </StyledDiv>
  );
}

export default App;
