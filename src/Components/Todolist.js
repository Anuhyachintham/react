import React, { useState } from "react";

const Todu=()=>{
const [todos,setTodos]=useState(["item 1","item 2","item 3"])
    return (<div>
        <TodoList todos={todos}/>
        <TodoCount todos={todos}/>
        <AddTodo setTodos={setTodos}/>


    </div>)
}

const TodoList=({todos})=>{
    return(<div>
        <ul>
{todos.map((todo)=> (<li key={todo}>{todo}</li>))}
</ul>
    </div>)
}
const TodoCount=({todos})=>{
 
    return(<div>
Total Todos:{todos.length}
    </div>)
}

const AddTodo=({setTodos})=>{
     
     const handleSubmit=(event)=>{
        event.preventDefault();
        //console.log(event.target.value)
        const todo= event.target.elements.todo.value;
        //console.log(todo)
        setTodos(previousTodo=>[...previousTodo,todo])


     }
     
     
     
     return(<div>

<form onSubmit={handleSubmit}>
    <input type="text" id="todo"/>
    <button type="submit">Add todo</button>
</form>
     </div>)
}

export default Todu;