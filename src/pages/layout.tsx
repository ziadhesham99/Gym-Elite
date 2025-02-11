import NavBar from "../components/navBar.tsx";
import { Outlet } from "react-router-dom";

export default function Layout(){
    return<div className={`h-full text-lg`}>
        <NavBar />
        <Outlet />
    </div>
}