import { Fragment } from "react"
export default function ConfirmedBooking () {
  return (
    <Fragment>
      <div className="p-20">
        <p className='text-6xl w-max mx-auto bg-green-200 text-green-900 font-karla rounded-3xl border-8'>
          Your reservation has been confirmed!
        </p>
      </div>
    </Fragment>
  )
}
