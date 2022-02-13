function TodosItem(props) {
    const list = props.Array.map((item, index)=> {
        console.log(item)
        return (
            <li> key={index}>
                <label>
                    <div>
                        <input type='checkbox'/>
                    </div>
                    <div>
                        {item.title}
                    </div>
                    <div>
                        {item.username}
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