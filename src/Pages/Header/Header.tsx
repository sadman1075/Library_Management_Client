// 

import { ModeToggle } from "@/components/mode-toggle";
import {
    NavigationMenu,

    NavigationMenuItem,
   
    NavigationMenuList,
    NavigationMenuTrigger,

} from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom";



const Header = () => {
    return (
        <div className="flex justify-between items-center p-4  bg-light ">
            <div>
                <p className="text-lg font-bold">BOOK<span className="text-orange-500">ORA</span></p>
            </div>
            <NavigationMenu className="p-4 ">
                <NavigationMenuList >
                    <NavigationMenuItem >
                        {/* <NavigationMenuTrigger><Link to={"/login"}>Log In</Link></NavigationMenuTrigger> */}
                        <NavigationMenuTrigger><Link to={"/add-books"}>Add Books</Link></NavigationMenuTrigger>
                        <NavigationMenuTrigger><Link to={"/books"}>All Books</Link></NavigationMenuTrigger>
                        <NavigationMenuTrigger><Link to={"/borrows/"}>Borrow Summary</Link></NavigationMenuTrigger>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div className="p-4 ">
                <ModeToggle></ModeToggle>
            </div>
        </div>
    );
};

export default Header;