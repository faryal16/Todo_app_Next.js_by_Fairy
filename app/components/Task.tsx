"use client";
import { ITask } from "@/types/tasks";
import { FormEventHandler, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { DeleteTodo, EditTodo } from "@/api";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();

  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text);
  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await EditTodo({
      id: task.id,
      text: taskToEdit,
    });

    setOpenModalEdit(false);
    router.refresh();
  };
  const handleDeleteTask = async (id: string) => {
    await DeleteTodo(id);
    setOpenModalDeleted(false);
    router.refresh();
  };

  return (
    <tr key={task.id}>
      <td className="w-full">{task.text}</td>
      <td className="flex gap-8">
        <FaEdit
          onClick={() => setOpenModalEdit(true)}
          className="text-green-500 cursor-pointer"
          size={18}
        />
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className="font-bold text-2xl text-teal-600 text-center">
              Edit Task!!
            </h3>
            <div className="modal-action ">
              <input
                value={taskToEdit}
                onChange={(e) => setTaskToEdit(e.target.value)}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-72"
              />
              <button
                type="submit"
                className="btn hover:bg-teal-800 hover:text-yellow-50"
              >
                Submit
              </button>
            </div>
          </form>
        </Modal>
        <FaRegTrashAlt
          onClick={() => setOpenModalDeleted(true)}
          className="text-red-500 cursor-pointer "
          size={18}
        />
        <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
            {" "}
          
            <h3 className="text-xl text-red-600 text-center">
              Are You SURE!! You wanna DELETE this Task?
            </h3>
          
          <div className="modal-action  ">
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="btn mt-12 px-5 float-left hover:bg-red-700 hover:text-yellow-100  " >
              Yes
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Task;
