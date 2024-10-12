import { ITask } from "./types/tasks";

const baseUrl = 'http://localhost:3001';

export const getAllTodos = async (): Promise<ITask[]>=> {
    try
    {
        const res = await fetch (`${baseUrl}/tasks`, {cache: 'no-store'});
        const todos = await res.json();
    
        return todos;
} catch(err){
    console.log(err);
    
}
return [];

} 

export const AddTodo = async (todo:ITask): Promise<ITask>=> {
    try
    {
        const res = await fetch (`${baseUrl}/tasks`,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
        const NewTodo = await res.json();
    
        return NewTodo;
} catch(err){
    console.log(err);
    
}

} 

export const EditTodo = async (todo:ITask): Promise<ITask>=> {
    try
    {
        const res = await fetch (`${baseUrl}/tasks/${todo.id}`  ,{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
        const UpdatedTodo = await res.json();
    
        return UpdatedTodo;
} catch(err){
    console.log(err);
    
}

} 
export const DeleteTodo = async (id:string): Promise<void>=> {
    const res = await fetch (`${baseUrl}/tasks/${id}`  ,{
        method: 'DELETE',})

//     try
//     {
//         const res = await fetch (`${baseUrl}/tasks/${id}`  ,{
//             method: 'DELETE',
//             headers:{
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(todo)
//         })
//         const DeletedTodo = await res.json();
    
//         return DeletedTodo;
// } catch(err){
//     console.log(err);
    
// }

} 