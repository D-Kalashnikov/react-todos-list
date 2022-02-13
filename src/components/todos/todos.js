import TodosItem from '../todos/todosItem';
import TodosListJson from './data.json';

function Todos() {

    const handleClick = ()=> {

    }

    return (
        <ul>
            <TodosItem onClick={handleClick} Array={TodosListJson} />
        </ul>
    )
}

export default Todos;