import { Fragment } from "react"
import { useLocation } from "react-router-dom"

export default function ConfirmedBooking () {
  const table = useLocation();
  const reservation = table.state?.reservation;

  return (
    <Fragment>
      <div className="p-20">
        <p className='text-4xl p-2 text-center mx-auto bg-green-200 text-green-900 font-karla rounded-2xl border-2'>
          Your reservation has been confirmed!
        </p>
        {reservation && (
          <div className="font-markazi text-2xl pt-4">
            <p>Date: {reservation.date} </p>
            <p>Time: {reservation.time} </p>
            <p>Guests: {reservation.numberOfGuests}</p>
            <p>Occasion: {reservation.occasion}</p>
          </div>
        )}
      </div>
    </Fragment>
  )
}
