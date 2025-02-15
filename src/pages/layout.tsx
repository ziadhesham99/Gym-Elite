import NavBar from "../components/navBar.tsx";
import {Outlet} from "react-router-dom";
import Footer from "../components/footer.tsx";

export default function Layout(){
    return<div className={`h-auto text-lg`}>
    <NavBar />
    <Outlet />
     <Footer />
    </div>
}