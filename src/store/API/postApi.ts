import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";

interface IPost {
      main_text: string,
      user_id: number,
      id: number,
      reg_date:string ,
      user_fk: {
        user_city: string,
        phone_number: number,
        reg_date: string,
        email: string,
        id: number,
        name: string,
        password: string
      },
      photos: string[],
      comments: string[]
  }

interface IGetAllPostResponce{
    status: number,
    message: IPost[]
}

interface IgetPostBuIdResponse{
    status:number,
    message: IPost
}
interface IAddNewPostPayload {
    user_id:number,
    main_text: string,
}
interface IAddNewPostResponse{
    status:number,
    post_id:number,
}
interface IEditPostPayload{
     post_id: number;
     new_text: string;
}
interface IEditPostResponce{
    status:number,
    message: string,
}
interface IDeletePostResponce extends IEditPostResponce{}

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getAllPost:builder.query<IGetAllPostResponce, null>({
            query:()=>"/post"
        }),
        getPostById: builder.query<IgetPostBuIdResponse, string>({
            query:(postId) => `/post?post_id=${postId}`
        }),
        addNewPost: builder.mutation<IAddNewPostResponse,IAddNewPostPayload>({
            query:(payload)=>({
                url:"/post",
                method:"POST",
                body: payload,
            })
        }),
        deletePost: builder.mutation<IDeletePostResponce,number>({
            query:(payload)=>({
                url:"/post",
                method:"Delete",
                body: payload,
            })
        }),
        editPost: builder.mutation<IEditPostResponce,IEditPostPayload>({
            query:(payload)=>({
                url:"/post",
                method:"PUT",
                body: payload,
            })
        }),
    })
})

export const {
    useGetAllPostQuery,
    useLazyGetAllPostQuery, 
    useLazyGetPostByIdQuery,
    useAddNewPostMutation,
    useDeletePostMutation,
    useEditPostMutation,    
}= postApi;