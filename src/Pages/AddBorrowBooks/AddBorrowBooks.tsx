import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import addBooks from "../../assets/Images/addBooks.jpg"
import { useAddBorrowBooksMutation, useBorrowBooksMutation } from "@/Redux/api/baseApi"

import Swal from "sweetalert2"
import { useLoaderData } from "react-router-dom"



export function AddBorrowBooks({
    className,
    ...props
}: React.ComponentProps<"div">) {


    const BookInfo = useLoaderData()

    const [borrowBooks] = useBorrowBooksMutation()
    const [borrowBooksData] = useAddBorrowBooksMutation()
    



    const handleBorrow = async (e) => {
        e.preventDefault();
        const form = e.target;

        const Quantity = form.Quantity.value;
        const Date = form.date.value;

        if (Quantity > BookInfo.Copies) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `There is Only ${BookInfo.Copies} Books Available`,
            });

            return

        }

        const Copies = BookInfo.Copies - Quantity;
        let { _id, Title, Author, Genre, Isbn, Availability } = BookInfo

        const UpdatedBook = {
            Title, Author, Genre, Isbn, Availability, Copies
        }

        console.log(UpdatedBook);
        const BorrowDetails = {
            Quantity, Date, Title, Author, Isbn
        }

        const response = await borrowBooks({ id: _id, ...UpdatedBook })
        console.log(response);

        if (response.data) {
            borrowBooksData(BorrowDetails)

            Swal.fire({
                title: "Good job!",
                text: "You have successfully Borrow the book!",
                icon: "success"
            });

            
        }
        else if (response.error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
        }

    }


    return (
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-3xl">
                <div className={cn("flex flex-col gap-6", className)} {...props}>
                    <Card className="overflow-hidden p-0">
                        <CardContent className="grid p-0 md:grid-cols-2">
                            <form className="p-6 md:p-8" onSubmit={handleBorrow}>
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col items-center text-center">
                                        <h1 className="text-2xl font-bold">Borrow Books</h1>

                                    </div>

                                    <div className="grid gap-3">
                                        <Label >Quantity</Label>
                                        <Input
                                            id="Quantity"
                                            type="number"
                                            name="Quantity"
                                            required
                                        />
                                    </div>

                                    <div className="grid gap-3">
                                        <Label >Due Date</Label>
                                        <Input
                                            id="date"
                                            type="date"
                                            name="date"
                                            required
                                        />
                                    </div>



                                    <Button type="submit" className="w-full">
                                        Borrow Book
                                    </Button>



                                </div>
                            </form>
                            <div className="bg-muted relative hidden md:block">
                                <img
                                    src={addBooks}
                                    alt="Image"
                                    className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.7]  "
                                />
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </div>
        </div>
    )
}
