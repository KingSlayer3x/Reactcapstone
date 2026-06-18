import React, { useState } from 'react'

export default function BookingPage() {
    interface BookingForm {
        date: string;
        time: string;
        numberOfGuests: number | string;
        occasion: string;
    }
    const initialState = {
        date: "",
        time: "",
        numberOfGuests: "",
        occasion: ""
    }
    const [form, setForm] = useState(initialState)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement >) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name] : e.target.value
        }));
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setForm(initialState)
        const payload = {
            ...form,
            numberOfGuests: Number(form.numberOfGuests),
        };
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <fieldset className='grid gap-2.5 md:w-max items-center mx-auto p-5 mt-7'>
                <legend className='text-center font-markazi text-7xl'>Book Your Table</legend>
                    <label htmlFor="date" className='font-karla text-4xl'>Date:</label>
                        <input className='font-markazi border-2' type="date" name='date' id='date' value={form.date} onChange={handleChange} />
                    <label htmlFor="time" className='font-markazi text-4xl'>Time</label>
                        <input type="time" className='font-markazi border-2' name='time' id='time' value={form.time} onChange={handleChange} />
                    <label htmlFor='numberOfGuests' className='text-4xl'>Number Of Guests</label>
                        <input type="number" className='font-markazi border-2' id='numberOfGuests' name='numberOfGuests' value={form.numberOfGuests} onChange={handleChange} />
                    <label htmlFor='occasion' className='font-markazi text-4xl'>Occasion</label>
                        <select name="occasion" className='font-markazi text-2xl rounded-3xl' id="occasion" value={form.occasion} onChange={handleChange}>
                            <option value="" className='bg-amber-100'>Select an occasion</option>
                            <option value="birthday" className='bg-amber-200'>Birthday</option>
                            <option value="anniversary" className='bg-amber-300'>Anniversary</option>
                        </select>
                    <button  type='submit' className='text-4xl rounded-2xl bg-amber-200 p-3 w-max text-center hover:bg-amber-300 hover:border-2'>Book Now</button>
            </fieldset>
        </form>
    </div>
  )
}
