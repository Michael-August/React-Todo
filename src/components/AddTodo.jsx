import { useState } from "react";

const AddTodo = ({onAdd}) => {

    const [title, setTodo] = useState('')

    const submitToDo = (e) => {
        e.preventDefault()

        if (!title) {
            return alert('Please type in a TODO')
        }
        onAdd({title})
        setTodo('')
    }

    return ( 
        <div className="" style={{ display: 'flex'}}>
            <form action="">
                <input type="text" placeholder="Add Todo" value={title} onChange={(e) => setTodo(e.target.value)}  />
            </form>

            <button type="submit" onClick={submitToDo} id="btn">Add Todo</button>
        </div>
     );
}
 
export default AddTodo;