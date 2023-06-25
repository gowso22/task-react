import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  font-weight: bold;
  color: whitesmoke;

  margin-top: 150px;
`

function Clock(){
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const timer = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return (() => clearInterval(timer))
    }, []);
    
    return (
      <StyledDiv>
        <span>{time.toLocaleTimeString()}</span>
      </StyledDiv>
    )
}

export default Clock;