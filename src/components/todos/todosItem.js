function TodosItem(props) {
    const list = props.Array.map((item, index)=> {
        console.log(item)


        const refreshCheckedList = (event)=> {
            props.refreshCheckedList(event)
        }

        const deleteTodo = (event)=> {
            props.deleteTodo(event);
        }

        const checkCompletedTodo = (event)=> {
            props.checkCompletedTodo(event);
        }
        const completed = item.completed ? true : false;

        return (

            <li className={completed ? "completed" : ""} key={item.id}>
                <label>
                    <div className="todo-check">
                        <input onClick={refreshCheckedList}  disabled={completed ? "disable" : ""} data-index={index} type='checkbox'/>
                    </div>
                    <div className='todo-description'>
                        {item.title}
                    </div>
                    <div className='todo-executor'>
                        {item.userName}
                    </div>

                    <div className="todo-control">
                        <button onClick={deleteTodo} data-index={index}>Удалить</button>
                        <button onClick={checkCompletedTodo} data-index={index}>Выполнено</button>
                    </div>
                </label>
            </li>
        )
    })

    return (
        <>
            {list}
        </>
    )
}

export default TodosItem;