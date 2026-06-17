import Navbar from "./components/nav";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import BookingPage from "./components/BookingPage";
export default function Root(){
    return(
        <div className="">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/BookingPage" element={<BookingPage  />}/>
        </Routes>
        <Footer />
        </div>
    )
}