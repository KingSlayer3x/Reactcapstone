
import { expect, vi, test } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { initializeTimes, updateTimes  } from './components/timeReducer'
import BookingPage from './components/BookingPage'
import { MemoryRouter } from 'react-router-dom'
// working tests with mocked fetchAPI

test('initializeTimes returns the corrected initial times', () =>{
    window.fetchAPI = vi.fn(() => ["17:00", "18:00", "19:00"])
    const initialTimes = initializeTimes();
    expect(initialTimes).toEqual(["17:00", "18:00", "19:00"]);
});

test('updateTimes returns the same state for now', () => {
    const currentState = ["17:00", "18:00"];
    const action = {type: 'someAction', date: '2026-06-27' };
    const newState = updateTimes(currentState, action)
    expect(newState).toEqual(currentState);
});

// working tests with real fetchAPI

test('initializeTimes calls fetchAPI with today and returns available times', () => {
    const mockTimes = ["17:00", "18:00", "19:00"]
    window.fetchAPI = vi.fn(() => mockTimes)
    const result = initializeTimes()
    expect(window.fetchAPI).toHaveBeenCalledWith(expect.any(Date))
    expect(result).toEqual(mockTimes)
})

test('updateTimes calls fetchAPI with selected date for UPDATE_TIMES action', () => {
    const mockTimes = ["17:00", "18:00", "19:00"]
    window.fetchAPI = vi.fn(() => mockTimes)
    const action = {
        type: 'UPDATE_TIMES',
        payload: '2026-06-27'
    }
    const newState = updateTimes([], action)
    expect(window.fetchAPI).toHaveBeenCalledWith(new Date('2026-06-27'))
    expect(newState).toEqual(mockTimes)
})

// testing for both client side and js validation

test('Validate the correct attributes are applied to the HTML element', () =>{
    render(
    <MemoryRouter>
        <BookingPage availableTimes={["17:00","18:00"]} dispatch={() => {}} />
    </MemoryRouter>)
    const headingElement =  screen.getByText("Book Your Table");
    expect(headingElement).toBeInTheDocument();
    const date = screen.getByText("Date:");
    expect(date).toBeInTheDocument();
    const dateInput = screen.getByTestId('name');
    expect(dateInput).toHaveAttribute('type', 'date');
    const occasionTime = screen.getByTestId("occasion-select");
    expect(occasionTime).toHaveAttribute('required');
    const numberOfGuest = screen.getByTestId("theNumberOfGuests");
    expect(numberOfGuest).toHaveAttribute('type', 'number');
    const testOccasion = screen.getByRole("combobox", {name: /occasion/i});
    fireEvent.change(testOccasion, {target: {value: "birthday"}});
    expect(testOccasion).toHaveValue("birthday");
    const buttonTest = screen.getByRole("button", {name: /Book Now/i});
    expect(buttonTest).toHaveAttribute("disabled");
})