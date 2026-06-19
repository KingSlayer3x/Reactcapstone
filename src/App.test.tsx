import { expect, vi } from 'vitest'
import { fireEvent, render, screen } from "@testing-library/react";
import BookingPage from "./components/BookingPage";
const mockAvailableTimes = ["10:00", "11:00"]
const mockDispatch = vi.fn()
test('Renders the BookingForm heading', () => {
    render(<BookingPage availableTimes={mockAvailableTimes} dispatch={mockDispatch}/>);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
    const times = screen.getByTestId('occasion-select');
    expect(times).toBeInTheDocument();
    fireEvent.change(times, {target: {value: '10:00'}})
    expect(mockDispatch).toHaveBeenCalledTimes(1)
    expect(mockDispatch).toHaveBeenCalledWith({
        type: "UPDATE_TIMES",
        payload: "10:00"
    })
 })