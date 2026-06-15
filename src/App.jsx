import Navbar from "./components/nav";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
export default function Root(){
    return(
        <div className="">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />}/>

        </Routes>
        </div>
    )
}