import { useBorrowsQuery } from "@/Redux/api/baseApi";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const BorrowBooks = () => {

    const { data, isLoading } = useBorrowsQuery(undefined)

    if (isLoading) {
        return <p>Loading...</p>
    }


    return (
        <div>
            <h1 className="text-3xl mb-8 font-bold text-center"> ALl Borrow Books</h1>
            <Table className="border-2  w-4/5 mx-auto ">
                <TableHeader>

                    <TableRow >
                        <TableHead >Title</TableHead>
                        <TableHead>Author</TableHead>
                        <TableHead >Isbn</TableHead>
                        <TableHead >Quantity</TableHead>
                        <TableHead >Date</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>
                    {!isLoading && data.map((book) => (
                        <TableRow key={book._id}>
                            <TableCell >{book.Title}</TableCell>
                            <TableCell >{book.Author}</TableCell>
                            <TableCell>{book.Isbn}</TableCell>
                            <TableCell >{book.Quantity}</TableCell>
                            <TableCell >{book.Date}</TableCell>


                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        </div>


    );
};

export default BorrowBooks;