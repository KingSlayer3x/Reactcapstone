
import { expect, vi, test } from 'vitest'
import { initializeTimes, updateTimes  } from './components/timeReducer'

// working tests

// test('initializeTimes returns the corrected initial times', () =>{
//     window.fetchAPI = vi.fn(() => ["17:00", "18:00", "19:00"])
//     const initialTimes = initializeTimes();
//     expect(initialTimes).toEqual(["17:00", "18:00", "19:00"]);
// });

// test('updateTimes returns the same state for now', () => {
//     const currentState = ["17:00", "18:00"];
//     const action = {type: 'someAction', date: '2026-06-27' };
//     const newState = updateTimes(currentState, action)
//     expect(newState).toEqual(currentState);
// });

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

