import React, { useState } from 'react'

export default function BookingPage() {
    interface BookingForm {
        date: string;
        time: string;
        numberOfGuests: number | string;
        occasion: string;
    }
    const [form, setForm] = useState<BookingForm>({
        date: "",
        time: "",
        numberOfGuests: "",
        occasion: "",
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement >) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name] : e.target.value
        }));
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const payload = {
            ...form,
            numberOfGuests: Number(form.numberOfGuests),
        };
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <fieldset className='grid gap-2.5 w-max items-center mx-auto p-5'>
                <legend className='text-center font-markazi text-5xl'>Book Your Table</legend>
                    <label htmlFor="date">Date:</label>
                        <input type="date" name='date' value={form.date} onChange={handleChange} />
                    <label htmlFor="time" >Time</label>
                        <input type="time" name='time' value={form.time} onChange={handleChange} />
                    <label htmlFor='numberOfGuests'>Number Of Guests</label>
                        <input type="number" name='numberOfGuests' value={form.numberOfGuests} onChange={handleChange} />
                    <label htmlFor='occasion'>Occasion</label>
                        <select name="occasion" id="occasion" value={form.occasion} onChange={handleChange}>
                            <option value="">Select an occasion</option>
                            <option value="birthday">Birthday</option>
                            <option value="anniversary">Anniversary</option>
                        </select>
                    <button type='submit'>Book Now</button>
            </fieldset>
        </form>
    </div>
  )
}
