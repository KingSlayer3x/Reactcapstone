import Navbar from "./components/nav";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import BookingPage from "./components/BookingPage";
import { useReducer } from "react";
import ConfirmedBooking from "./components/ConfirmedBooking ";
import { initializeTimes, updateTimes } from "./components/timeReducer";

export default function Root(){

    const [availableTimes, dispatch ] = useReducer(updateTimes, [], initializeTimes);
    return(
        <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/BookingPage" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch}  />}/>
            <Route path="/ConfirmedBooking" element={<ConfirmedBooking />} />
        </Routes>
        <Footer />
        </div>
    )
}