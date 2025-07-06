import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import addBooks from "../../assets/Images/addBooks.jpg"
import { useLoaderData } from "react-router-dom"
import { useEditBooksMutation } from "@/Redux/api/baseApi"
import Swal from "sweetalert2"


export function EditBooks({
    className,
    ...props
}: React.ComponentProps<"div">) {

    const { _id, Title, Author, Genre, Isbn, Copies, Availability } = useLoaderData()
    console.log(_id);
    const [editBooks] = useEditBooksMutation()



    const handleEditBooks = async(e) => {
        e.preventDefault();
        const form = e.target;

        const Title = form.Title.value;
        const Author = form.Author.value;
        const Genre = form.Genre.value;
        const Isbn = form.Isbn.value;
        const Copies = form.Copies.value;
        const Availability = form.Availability.value;
        const Books = {
            Title, Author, Genre, Isbn, Copies, Availability
        }



        const response = await editBooks({ id: _id, ...Books })
        console.log(response);
        if (response.data) {
            Swal.fire({
                title: "Good job!",
                text: "You have successfully Edit the book!",
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
                            <form className="p-6 md:p-8" onSubmit={handleEditBooks}>
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col items-center text-center">
                                        <h1 className="text-2xl font-bold">Edit Books</h1>

                                    </div>

                                    <div className="grid gap-3">
                                        <Label >Title</Label>
                                        <Input
                                            id="Title"
                                            type="Title"
                                            defaultValue={Title}
                                            name="Title"
                                            required
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label >Author</Label>
                                        <Input
                                            id="Author"
                                            type="Author"
                                            defaultValue={Author}
                                            name="Author"
                                            required
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label >Genre</Label>
                                        <Input
                                            id="Genre"
                                            type="Genre"
                                            defaultValue={Genre}
                                            name="Genre"
                                            required
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label >Isbn</Label>
                                        <Input
                                            id="Isbn"
                                            type="Isbn"
                                            defaultValue={Isbn}
                                            name="Isbn"
                                            required
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label >Copies</Label>
                                        <Input
                                            id="Copies"
                                            type="number"
                                            defaultValue={Copies}
                                            name="Copies"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <Label className="mb-2" htmlFor="email">Availability</Label>


                                        <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                                            <select id="currency" defaultValue={Availability} name="Availability" aria-label="Currency" className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base border-2 text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" required>
                                                <option selected value="Yes">Yes</option>
                                                <option value="No">No</option>

                                            </select>
                                            <svg className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
                                                <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                            </svg>
                                        </div>

                                    </div>


                                    <Button type="submit" className="w-full">
                                        Edit Book
                                    </Button>



                                </div>
                            </form>
                            <div className="bg-muted relative hidden md:block">
                                <img
                                    src={addBooks}
                                    alt="Image"
                                    className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.9]  "
                                />
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </div>
        </div>
    )
}
