

import { AddBooks } from "@/Pages/AddBooks/AddBooks";

import Login from "@/Pages/Login/Login";
import { Registration } from "@/Pages/Registration/Registration";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Books from "@/Pages/Books/Books";
import { EditBooks } from "@/Pages/EditBooks/EditBooks";
import { AddBorrowBooks} from "@/Pages/AddBorrowBooks/AddBorrowBooks";
import BorrowBooks from "@/Pages/BorrowBooks/BorrowBooks";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Books></Books>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
            {
                path: "/add-books",
                element: <AddBooks></AddBooks>
            },
            {
                path: "/edit-books/:id",
                element: <EditBooks></EditBooks>,
                loader: ({ params }) => fetch(`http://localhost:5000/books/${params.id}`)
            },
            {
                path: "/books",
                element: <Books></Books>
            },

            {
                path: "/borrow-books/:id",
                element: <AddBorrowBooks></AddBorrowBooks>,
                loader: ({ params }) => fetch(`http://localhost:5000/books/${params.id}`)
            },

            {
                path:"/borrows",
                element:<BorrowBooks></BorrowBooks>
            }

        ]
    }

])