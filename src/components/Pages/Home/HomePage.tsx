"use client";
import {
  useDeliteTodoMutation,
  useEditeTodoMutation,
  useGetTodoQuery,
} from "@/redux/api/todo";
import scss from "./HomePage.module.scss";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
interface IFormInput {
  image: string;
  name: string;
  price: string;
}
const HomePage = () => {
  const [editTodoeId, setEditeTodoId] = useState<number | null>(null);
  const { data } = useGetTodoQuery();
  const [DeliteTodoMutation] = useDeliteTodoMutation();
  const [EditeTodoMutation] = useEditeTodoMutation();
  const { register, handleSubmit, reset, setValue } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      await EditeTodoMutation({ _id: editTodoeId!, updatedTodo: data });
      reset();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={scss.HomePage}>
      <div className="container">
        <div className={scss.content}>
          {data?.map((el) => (
            <div className={scss.block} key={el._id}>
              {editTodoeId === el._id ? (
                <>
                  <form className={scss.form} onSubmit={handleSubmit(onSubmit)}>
                    <input
                      className={scss.input}
                      type="text"
                      placeholder="iamge"
                      {...register("image", { required: true })}
                    />
                    <input
                      className={scss.input}
                      type="text"
                      placeholder="name"
                      {...register("name", { required: true })}
                    />
                    <input
                      className={scss.input}
                      type="text"
                      placeholder="price"
                      {...register("price", { required: true })}
                    />
                    <button className={scss.btn_save} type="submit">
                      Save
                    </button>
                  </form>
                </>
              ) : (
                <>
                  <div className={scss.wrapper}>
                    <Image
                      className={scss.input_image}
                      src={el.image}
                      alt="logo"
                      width={500}
                      height={200}
                    />

                    <h3>{el.name}</h3>
                    <h4>{el.price}</h4>
                    <div className={scss.block_edite}>

                    <button
                      className={scss.btn_edite}
                      onClick={() => {
                        setEditeTodoId(el._id!);
                        setValue("image", el.image);
                        setValue("name", el.name);
                        setValue("price", el.price);
                      }}
                    >
                      edite
                    </button>
                    <button
                      className={scss.btn_delete}
                      onClick={() => DeliteTodoMutation(el._id!)}
                    >
                      delete
                    </button>
                      </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
