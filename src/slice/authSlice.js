import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
export const sendApi = createApi({
    reducerPath:"sendApi",
    baseQuery:fetchBaseQuery({
        baseUrl:import.meta.env.VITE_GET_API
    }),
    endpoints:(builder)=>({
        getAllCars:builder.query({
            query: ()=> "/cars/cars"
        }),
        addCars:builder.mutation({
            query: (update)=> ({
                url:'/cars/cars',
                method:"POST",
                body:update
            })

        }),
        deleteCars:builder.mutation({
            query: (id)=> ({
                url:`/cars/${id}`,
                method:"DELETE",
                body:update
            }),
            invalidatesTags:['users']
            
            
        })
    })
})

export const {
    useGetAllCarsQuery,
    useAddCarsMutation,
    useDeleteCarsMutation
 }
= sendApi
