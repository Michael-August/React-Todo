import Todo from "./Todo";

const Todos = ({todos, completed, allCompleted, clearCompleted, onTodoLeft}) => {
    return ( 
        <div>
            <div className="todos">
                <div className="mt-3">
                    { todos.map(todo => <Todo key={todo.id} todo={todo} completed={completed} />) }
                </div>
                
            </div>

            <footer>
                <ul className="d-flex list-flex">
                    <li className="special">{ onTodoLeft } items left</li>
                    <li>All</li>
                    {/* <li>Active</li> */}
                    <li onClick={() => allCompleted()}>Completed</li>
                    <li onClick={() => clearCompleted()} className="special-2">Clear Completed</li>
                </ul>
            </footer>
        </div>
     );
}
 
export default Todos;