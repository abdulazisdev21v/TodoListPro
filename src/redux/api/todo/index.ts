import {api as index} from ".."
const  api = index.injectEndpoints({
    endpoints: (build) => ({
        getTodo: build.query<TODO.GetTodoResponse,TODO.GetTodoRequest>({
            query: () => ({
                url:'',
                method:"GET",
            }),
            providesTags: ['todo'],
        }),
        postTodo: build.mutation< TODO.PostTodoResponse,TODO.PostTodoRequest>({
            query: (newTodo) => ({
                url:'',
                method:"POST",
                body:newTodo,
            }),
            invalidatesTags: ['todo'],
        }),
        editeTodo: build.mutation< TODO.EditeTodoResponse,TODO.EditeTodoRequest>({
            query: ({_id,updatedTodo}) => ({
                url:`${_id}`,
                method:"PATCH",
                body:updatedTodo,
            }),
            invalidatesTags: ['todo'],
        }),
        deliteTodo: build.mutation< TODO.deleteTodoResponse,TODO.deleteTodoRequest>({
            query: (_id) => ({
                url:`${_id}`,
                method:"DELETE",
            }),
            invalidatesTags: ['todo'],
        })
    })
})
export const { useGetTodoQuery,usePostTodoMutation,useDeliteTodoMutation, useEditeTodoMutation } = api;