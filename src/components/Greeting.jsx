import React, { useState } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    margin-top : 30px;
`

const TextInput = styled.input`
    background-color: transparent;
    border: none;
    border-bottom : 1px solid rgba(240,240,240, 0.3);
    
    font-size: 35px;
    color: whitesmoke;
    font-weight: 500;

    &:focus{
        outline: none;
    }
`
const SubmitInput = styled.input`
    background-color: transparent;
    color: rgba(240,240,240);

    font-size: 35px;
    border: 0.5px solid rgba(240,240,240);
    border-radius: 15px;
    font-weight: bold;

    cursor: pointer;
`

const StyledSpan = styled.span`
     font-size: 35px;
    color: whitesmoke;
    font-weight: 500;

    margin-right: 30px;
`
const StyledButton = styled.button`
    background-color: transparent;
    color: whitesmoke;

    font-size: 35px;
    border: 0.5px solid whitesmoke;
    border-radius: 15px;
    font-weight: bold;

    cursor: pointer;
`



function Greeting(){
    
    const [username, setUsername] = useState("");

    const userInupt = (e) =>{
        setUsername(e.target.value);
    }

    const handleLogIn = (e) => {
        e.preventDefault();
        if(username === ""){
            return false;
        }else{
            localStorage.setItem('username', username);
            setUsername("")
        }
    }

    const handleLogOut = () => {
        localStorage.removeItem('username');

        // 강제로 페이지 새로고침
        window.location.reload();
    }
    
    return (
      <StyledDiv>
        {localStorage.getItem('username') ? 
        <div>
            <StyledSpan>안녕하세요~ {localStorage.getItem('username')}님</StyledSpan>
            <StyledButton onClick={handleLogOut}>로그아웃</StyledButton>
        </div> : 
            <form onSubmit={handleLogIn}>
                <TextInput type='text'
                        value={username}
                        onChange={userInupt}
                        placeholder='Enter Username '/>
                <SubmitInput type='submit' value = "로그인" />
            </form>
        }
      </StyledDiv>
    )
}

export default Greeting;