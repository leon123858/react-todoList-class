import React from 'react';

const TodoItem = ({content,index,deleteFunc})=>{
    return <li onClick={() => deleteFunc(index)}>{content}</li>
}

export default TodoItem;