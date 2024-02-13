import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function RootLayout(){
    return (
        <div className='w-full'>
            <Navbar />
             <div className="h-full">

                <Outlet />
             </div>
             <Footer/>

        </div>
    )
}
