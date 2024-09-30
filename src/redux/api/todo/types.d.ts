namespace TODO{
    type GetTodoResponse = Todo[];
    type GetTodoRequest = void;

    type PostTodoResponse = Todo[];
    type PostTodoRequest = Todo;

    type EditeTodoResponse = Todo[];
    type EditeTodoRequest ={
        _id?:number;
        updatedTodo:Todo;
    };

    type deleteTodoResponse = Todo[];
    type deleteTodoRequest = number;
}