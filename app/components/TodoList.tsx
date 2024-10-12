import { ITask } from "@/types/tasks"
import React from "react"
import Task from "./Task"

interface TodoListProps {
  tasks: ITask []
}

const TodoList: React.FC<TodoListProps> =({ tasks }) => {
  return (
    <div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead className="text-2xl text-fuchsia-700 border-2 border-violet-600">
        <tr >
          <th>Tasks</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody className="text-2xl text-orange-400">
        {tasks.map((task) => <Task task={task}/>)}
      </tbody>
    </table>
  </div>
  )
}

export default TodoList
