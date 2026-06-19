import Navbar from "./components/nav";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import BookingPage from "./components/BookingPage";
import { useReducer } from "react";

function initialTimes(){
     return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
}

function updateTimes(state, action) {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return initialTimes();
        default:
            return state;
    }
}
export default function Root(){

    const [availableTimes, dispatch ] = useReducer(updateTimes, initialTimes());

    return(
        <div className="">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/BookingPage" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch}  />}/>
        </Routes>
        <Footer />
        </div>
    )
}