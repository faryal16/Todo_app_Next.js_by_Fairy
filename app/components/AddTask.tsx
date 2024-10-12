"use client";

import React, { FormEventHandler, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Modal from "./Modal";
import { AddTodo } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';

function AddTask() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> =async(e) => {
    e.preventDefault();
    await AddTodo({
      id:uuidv4(),
      text: newTaskValue
    })
    setNewTaskValue("");
    setModalOpen(false);
    router.refresh();
  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn bg-purple-500 text-white hover:bg-purple-900 w-full text-xl"
      >
        Add New Task!! <FaPlus className="ml-2" size={15} />
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} >
        <form onSubmit={handleSubmitNewTodo} >
          <h3 className="font-bold text-2xl text-pink-500 ">Add New Task!!</h3>
          <div className="modal-action ">
            <input
              value={newTaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-80 border-lime-400"
            />
            <button type="submit" className="btn hover:bg-orange-600 hover:text-white">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default AddTask;
