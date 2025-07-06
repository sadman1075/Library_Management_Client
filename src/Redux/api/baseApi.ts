import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["book"],
    endpoints: (builder) => ({
        createBooks: builder.mutation({
            query: (bookData) => ({
                url: "/books/add-books",
                method: "POST",
                body: bookData,

            }),
            invalidatesTags: ["book"]

        }),
        books: builder.query({
            query: () => "/books",
            providesTags: ["book"]
        }),
        book: builder.query({
            query: (id) => `/books/${id}`,
            providesTags: ["book"]
        }),

        deleteBooks: builder.mutation({
            query: (id, ...bookData) => ({
                url: `/books/delete-books/${id}`,
                method: "DELETE",
                body: bookData
            }),
            invalidatesTags: ["book"]
        }),

        editBooks: builder.mutation({
            query: ({ id, ...patchData }) => ({
                url: `/books/edit-books/${id}`,
                method: "PUT",
                body: patchData
            }),
            invalidatesTags: ["book"]
        }),

        borrowBooks: builder.mutation({
            query: ({ id, ...borrowBooks }) => ({
                url: `/books/borrow-books/${id}`,
                method: "PUT",
                body: borrowBooks
            }),
            invalidatesTags: ["book"]
        }),

        addBorrowBooks: builder.mutation({

            query: (borrowBooksData) => ({
                url: "/borrows/add-borrow-books",
                method: "POST",
                body: borrowBooksData
            }),
            invalidatesTags: ["book"]

        }),

        borrows: builder.query({
            query: () => "/borrows",
            providesTags: ["book"]
        })

    })
})



export const { useCreateBooksMutation, useBooksQuery, useDeleteBooksMutation, useEditBooksMutation, useBookQuery, useBorrowBooksMutation, useAddBorrowBooksMutation,useBorrowsQuery } = baseApi