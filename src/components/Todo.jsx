const Todo = ({todo, completed}) => {
    return ( 
        <>
            {todo.completed === false &&<p>
                <span className="check" onClick={() => completed(todo.id)}>12</span><span className="">{todo.title}</span>
                <hr />
            </p>}

            {todo.completed === true && <p>
                <span className="checked" onClick={() => completed(todo.id)}>12</span><strike className="stroke">{todo.title}</strike>
                <hr />
            </p>}
        </>
    );


}
 
export default Todo;