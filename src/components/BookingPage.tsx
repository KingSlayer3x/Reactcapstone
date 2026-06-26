import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
interface BookingForm {
        date: string;
        time: string;
        numberOfGuests: number | string;
        occasion: string;
    }

    const initialState: BookingForm = {
        date: "",
        time: "",
        numberOfGuests: "",
        occasion: ""
    };
interface BookingPageProps {
    availableTimes: string[];
    dispatch: React.Dispatch<any>;
}
export default function BookingPage({availableTimes, dispatch}: BookingPageProps) {
    
    const [form, setForm] = useState<BookingForm>(initialState);

    const navigate = useNavigate();
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement >) => {
        const { name, value } = e.target;
        if(name === 'date'){
            dispatch({
                type: 'UPDATE_TIMES',
                payload: value
            });
            setForm(prev => ({
                ...prev,
                date: value,
                time: ""
            }));
        } else {
            setForm((prev) => ({
                ...prev,
                [name] : value,
        }));
    }
};

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const payload = {
            ...form,
            numberOfGuests: Number(form.numberOfGuests),
        };
        const success = (window as any).submitAPI(payload)
        if(success){
            // console.log("Booking submitted successfully!")
            console.log(success,form);
            navigate("/ConfirmedBooking");
            setForm(initialState)
        }

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <fieldset className='grid gap-3 md:w-max items-center mx-auto p-7 m-7'>
                <legend className='text-center font-markazi text-7xl'>Book Your Table</legend>
                    <label htmlFor="date" className='font-karla text-4xl'>Date:</label>
                        <input aria-label='select date' data-testid="name" className='font-markazi border-2' type="date" name='date' id='date' value={form.date} onChange={handleChange} />
                    <label htmlFor="time" className='font-markazi text-4xl'>Time</label>
                        {/* <input type="time" className='font-markazi border-2' name='time' id='time' value={form.time} onChange={handleChange} /> */}
                        <select data-testid="occasion-select" name="time" id="time" value={form.time} onChange={handleChange} required>
                            <option value="">Select a Time</option>
                            {availableTimes.map((time) => (
                                <option key={time} value={time}>
                                    {time}
                                </option>
                            ))}
                        </select>
                    <label htmlFor='numberOfGuests'  className='text-4xl'>Number Of Guests</label>
                        <input aria-label='choose number of guests' aria-valuemin={1} aria-valuemax={10} data-testid="theNumberOfGuests" type="number" min={1} max={10} className='font-markazi border-2' id='numberOfGuests' name='numberOfGuests' value={form.numberOfGuests} onChange={handleChange} />
                    <label htmlFor='occasion' className='font-markazi text-4xl'>Occasion</label>
                        <select data-testid="occasionTest" name="occasion" className='font-markazi text-2xl rounded-3xl' id="occasion" value={form.occasion} onChange={handleChange}>
                            {/* <option value="" className='bg-amber-100'>Select an occasion</option> */}
                            <option value="birthday" className='bg-amber-200'>Birthday</option>
                            <option value="anniversary" className='bg-amber-300'>Anniversary</option>
                        </select>
                    <button aria-label='on click'  type='submit' disabled={!form.numberOfGuests || !form.time || !form.occasion } className='text-4xl rounded-2xl bg-amber-200 p-3 w-max text-center hover:bg-amber-300 hover:border-2 disabled:opacity-50 disabled:cursor-not-allowed'>
                        Book Now
                    </button>
            </fieldset>
        </form>
    </div>
  )
}
