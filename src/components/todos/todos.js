import React, {useState} from 'react';
import TodosItem from '../todos/todosItem';
import TodosListJson from './data.json';
import './todos.scss';

function Todos() {

    const [todos, setTodos] = useState(TodosListJson);

    const [checkedList, setCheckedList] = useState([])

    console.log(checkedList);

    const handleClick = ()=> {

    }

    const refreshCheckedList = (event)=> {

        console.log()

        let index = event.target.dataset.index;
        checkedList[index].checked = event.target.checked;

        console.log(checkedList)
        setCheckedList([...checkedList])
    }

    const deleteTodo = (event)=> {
        let index = event.target.dataset.index;
        todos.splice(index, 1)
        setTodos([...todos])
    }
    const checkCompletedTodo = (event)=> {
        let index = event.target.dataset.index;
        let deleteTodo = todos.splice(index, 1);
        console.log(deleteTodo)
        deleteTodo.forEach((item)=> {
            item.completed = true;
        })
        setTodos([...todos, ...deleteTodo])
    }

    return (
        <>
        <ul className="todos-list">
            <TodosItem onClick={handleClick} deleteTodo={deleteTodo} refreshCheckedList={refreshCheckedList}  checkCompletedTodo={checkCompletedTodo} Array={todos} />
        </ul>
        <div className="todos-control-buttons">
            <button deleteTodo={deleteTodo}>Удалить</button> <button onClick={checkCompletedTodo}>Выполнено</button>
        </div>
        </>
    )
}

export default Todos;