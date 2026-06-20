import Navbar from "./components/nav";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import BookingPage from "./components/BookingPage";
import { useReducer } from "react";
function initialTimes(){
    const today = new Date();
    return window.fetchAPI(today);
}

function updateTimes(state, action) {
    switch (action.type) {
        case 'UPDATE_TIMES':{
            const selectedDate = new Date(action.payload);
            return window.fetchAPI(selectedDate);
        }
        default:
            return state;
    }
}
export default function Root(){

    const [availableTimes, dispatch ] = useReducer(updateTimes, [], initialTimes);
    return(
        <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/BookingPage" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch}  />}/>
        </Routes>
        <Footer />
        </div>
    )
}