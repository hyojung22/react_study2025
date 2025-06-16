// create: store를 생성해주는 함수
import { create } from "zustand"

const useTodoStore = create((set)=>({
    todos:[],
    addTodo:(todo, date)=>set((state)=>({
        todos:[...state.todos, {id:Date.now() ,todo, date}]
    }))
}))

export default useTodoStore;