import { useBooksQuery, useBorrowBooksMutation, useDeleteBooksMutation, useEditBooksMutation } from "@/Redux/api/baseApi";
import Swal from "sweetalert2"
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Link } from "react-router-dom";
const Books = () => {
    const { data, isLoading } = useBooksQuery(undefined);
    const [borrowBooks] = useBorrowBooksMutation()
    const [deleteBook, { isError }] = useDeleteBooksMutation()
    const [editBook, { isConfirmed }] = useEditBooksMutation()


    if (isLoading) {
        return <h4>Loading</h4>
    }

    const handleDelete = (book) => {

        Swal.fire({
            title: "Are you sure?",
            text: `You won't be able to revert ${book.Title}!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteBook(book._id);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

  
    return (
        <div>
            <h1 className="text-3xl mb-8 font-bold text-center">All Books</h1>
            <Table className="border-2  w-4/5 mx-auto ">
                <TableHeader>

                    <TableRow >
                        <TableHead className="w-[100px]">Title</TableHead>
                        <TableHead>Author</TableHead>
                        <TableHead>Genre</TableHead>
                        <TableHead >Isbn</TableHead>
                        <TableHead >Copies</TableHead>
                        <TableHead >Availability</TableHead>
                        <TableHead  >Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {!isLoading && data.map((book) => (
                        <TableRow key={book._id}>
                            <TableCell >{book.Title}</TableCell>
                            <TableCell >{book.Author}</TableCell>
                            <TableCell>{book.Genre}</TableCell>
                            <TableCell>{book.Isbn}</TableCell>
                            <TableCell >{book.Copies}</TableCell>
                            <TableCell >{book.Availability}</TableCell>
                            <TableCell >
                                {
                                    book.Copies == 0 ? <>

                                        <div className="flex items-center">
                                            <Link to={`/edit-books/${book._id}`}>  <Button className="bg-green-600">Edit Book</Button>
                                            </Link>
                                            <Button onClick={() => handleDelete(book)} className="ml-2 bg-red-600">Delete Book</Button>
                                            <h1 className="ml-2 text-base font-bold text-gray-500">Unavailable</h1>
                                        </div>
                                    </> :
                                        <>
                                            <Link to={`/edit-books/${book._id}`}>  <Button className="bg-green-600">Edit Book</Button>
                                            </Link>
                                            <Button onClick={() => handleDelete(book)} className="ml-2 bg-red-600">Delete Book</Button>
                                            <Link to={`/borrow-books/${book._id}`}><Button className="ml-2 bg-yellow-600">Borrow Book</Button></Link>
                                        </>
                                }
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        </div>


    );
};

export default Books;