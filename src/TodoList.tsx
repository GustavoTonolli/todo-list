import { useState } from 'react'
import './TodoList.css'
import icon from './assets/todoList.png'

interface TodoItem{
    text: string,
    isCompleted: boolean
}
function TodoList() {
    const [list, setList] = useState<TodoItem[]>([])
    const [newItem, setNewItem] = useState('')

    function addItem(e:any) {
        e.preventDefault()
        if (!newItem) {
            return;
        }
        setList([...list, {text: newItem, isCompleted: false}])
        setNewItem("")
        document.getElementById('entryInput')?.focus()
    }

    function clicked(index: number) {
        const auxList = [...list]
        auxList[index].isCompleted = !auxList[index].isCompleted
        setList(auxList)
    }

    function deleteTask(index:number){
        const auxList = [...list]
        auxList.splice(index , 1)
        setList(auxList)
    }
    function deleteAll(){
        setList([])
    }
    return (
        <main>
            <h1>Todo List!</h1>
            <form onSubmit={addItem}>
                <input 
                id='entryInput'
                value={newItem}
                onChange={(e) => {setNewItem(e.target.value)}}
                type="text"
                placeholder='Add the task!'
                 />
                 <button className='btnAdd' type="submit">Add</button>
            </form>
            <section className='todoList'>
                <div style={{textAlign: 'center'}}>
                    {
                        list.length < 1
                        ?
                        <img className='icon' src={icon} alt="TodoList" />
                        :
                        list.map((item, index) => (
                            <div>
                                <section key={index} className={item.isCompleted ? 'item completo' : 'item'}>
                                    <span onClick={() => {clicked(index)}}>{item.text}</span>
                                    <button onClick={() => {deleteTask(index)}} className='btnDel'>Delete</button>
                                </section>
                            </div>   
                            
                        )) 
                        
                    }
                    {
                        list.length < 1
                        ?
                        <></>
                        :
                        <button onClick={deleteAll} className='deleteAll'>Delete All</button>
                    }
                </div>
                
            </section>
        </main>
        
    )
}

export default TodoList