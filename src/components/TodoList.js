import React, {useContext} from 'react';
import TodosContext from '../context'
import TodoForm from './TodoForm'

export default function TodoList() {
    const {state, dispatch} = useContext(TodosContext)
    const title = state.todos.length > 0
        ? `${state.todos.length} Todos` : "Nothing to do!"

    return (
        <div className="container mx-auto max-w-md text-center font-mono">
            <TodoForm />
            <h1 className="font-bold text-4xl">{title}</h1>
            <ul className="list-reset text-blue p-0">
                {state.todos.map(todo => (
                    <li key={todo.id} className="flex items-center bg-indigo-400 border-black border-dashed border-2 my-2 py-4">
                        <span className={`flex-1 ml-12 curser-pointer text-white ${todo.complete && "line-through text-grey-darkest"}`} onDoubleClick={() => dispatch({type: "TOGGLE_TODO", payload: todo})}>{todo.text}</span>
                        <button onClick={() => dispatch({type: "SET_CURRENT_TODO", payload: todo})}>
                            EDIT
                        </button>
                        <button onClick={() => dispatch({type: "REMOVE_TODO", payload: todo})}>
                            DELETE
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )

}