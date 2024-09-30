'use client'
import { usePostTodoMutation } from "@/redux/api/todo";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import scss from "./TodoList.module.scss"
interface IFormInput {
  image: string;
  name: string;
  price: string;
}
const TodoList = () => {

  const [postTodoMutation] = usePostTodoMutation()
  const { register, handleSubmit, reset } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      await postTodoMutation(data)
      reset();
    } catch (e) {
      console.error(e);
    }
  }
  


  return (
    <form className={scss.form} onSubmit={handleSubmit(onSubmit)}>
      <input
       className={scss.btn_input}
        type="text"
        placeholder="iamge"
        {...register("image", { required: true })}
      />
      <input
       className={scss.btn_input}

        type="text"
        placeholder="name"
        {...register("name", { required: true })}
      />
      <input
       className={scss.btn_input}

        type="text"
        placeholder="price"
        {...register("price", { required: true })}
      />
      <button className={scss.btn_create} type="submit">Add</button>
    </form>
  );
};

export default TodoList;
