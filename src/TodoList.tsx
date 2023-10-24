import './TodoList.css'

function TodoList() {
    return (
        <main>
            <h1>Todo List!</h1>
            <form action="">
                <input 
                type="text"
                placeholder='Add the task!'
                 />
                 <button className='btnAdd' type="submit">Add</button>
            </form>
            <section className='todoList'>
                <section className='item'>
                    <span>Tarefa de exemplo!</span>
                    <button className='btnDel'>Delete</button>
                </section>

            </section>
        </main>
        
    )
}

export default TodoList