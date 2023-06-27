import React, { useState } from 'react';
import { styled } from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
`
const TextInput = styled.input`
    background-color: transparent;
    border: none;
    border-bottom : 1px solid rgba(240,240,240, 0.3);
    
    font-size : 25px;
    color: whitesmoke;
    font-weight: 500;

    &:focus{
        outline: none;
    }
`
const SubmitBtn = styled.input`
    background-color: transparent;
    color: rgba(240,240,240);

    font-size: 15px;
    border: 0.5px solid rgba(240,240,240);
    border-radius: 15px;
    font-weight: bold;

    cursor: pointer;
`
const TodoListUl = styled.ul`
    width: 50%;
    list-style-type: none;
    margin: 30px 0;
    padding: 20px;
    height: 200px;

    overflow : auto;
`

const TodoListLi = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    
    color: rgba(240,240,240, 0.8);
    font-size: 25px;
    font-weight: bold;

    margin-top: 10px;
    
`

const DeleteBtn = styled.button`
    border: none;
    color : #ee1111;
    background-color: transparent;
    cursor: pointer;

    font-size: 25px;
`




const Todo = () => {
    const [todoList, setTodoList] = useState([]);
    const [todoText, setTodoText] = useState("");

    const onTextChage = (e) =>{
        setTodoText(e.target.value);
    }

    const handleAddTodo = (e) =>{
        e.preventDefault();
        if(todoText === ""){
            return false;
        }else{
            setTodoList(todoList.concat({
                id : new Date().getTime(),
                text : todoText,
            }));
            
            setTodoText("");
        }
    }

    const onRemoveTodo = (id) => {
        //console.log(id);
        setTodoList(todoList.filter((todo) => todo.id !== id))
    }
    console.log(...todoList)
    return(
        <StyledDiv>
            <form onSubmit={handleAddTodo}>
                <TextInput type = "text"
                        value = {todoText}
                        onChange={onTextChage}/>
                <SubmitBtn type = "submit" value = "할 일 추가"/>
            </form>
            <TodoListUl>
                {todoList.map((todo) => (
                    <TodoListLi key = {todo.id}>
                        <span>{todo.text}</span>
                        <DeleteBtn onClick={() => onRemoveTodo(todo.id)}>x</DeleteBtn>
                    </TodoListLi>
                ))}
            </TodoListUl>
        </StyledDiv>
    )


}

export default Todo;