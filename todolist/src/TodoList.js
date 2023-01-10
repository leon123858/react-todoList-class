import React,{ useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ()=>{
    const [input,setInput] = useState("");
    const [list, setList] = useState([]);
    return (
        <>
            <div>
                <label htmlFor='inputArea'>input something</label>
                <input
                    value={input}
                    onChange={(e)=>{
                        setInput(e.target.value)
                    }}
                ></input>
                <button onClick={()=>{
                        setList([...list,input]);
                        setInput('');
                }}>提交</button>
            </div>
            <ul>{list.map((item, index) => {
			return (
				<TodoItem
					key={index}
					content={item}
					index={index}
					deleteFunc={(innerIndex)=>{
                        const newList = [...list]
                        newList.splice(innerIndex, 1)
                        setList(newList);
                    }}
				/>
			);
		    })}</ul>
        </>
    );
}

export default TodoList;
