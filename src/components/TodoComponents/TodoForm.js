import React from 'react';
import './Todo.css';

function TodoForm (props) {
    return (
        <form>
            <input 
                value={props.inputText} 
                onChange={props.handleInput}
            />
            <button onClick={props.addTodo}>Add Todo</button>
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </form>
    );
}

export default TodoForm;