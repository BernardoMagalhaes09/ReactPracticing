import { useState } from 'react'
import * as C from './App.styles'
import { Item } from './types/item'
import { Todo } from './components/Todo'
import { InputArea } from './components/InputArea'

const App = () => {
  const [todos, SetTodos] = useState<Item[]>([])

  const handleAddTask = (taskName: string) => {
    let newList = [...todos]
    newList.push({
      id: todos.length + 1,
      name: taskName,
      done: false
    })
    console.log(newList)
    SetTodos(newList)
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...todos];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    console.log(newList)
    SetTodos(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas </C.Header>

        <InputArea onEnter={handleAddTask} />

        {todos.map((item, index) => (
          <Todo key={index} item={item} onChange={handleTaskChange}/>
        ))}

      </C.Area>
    </C.Container>
  )
}

export default App