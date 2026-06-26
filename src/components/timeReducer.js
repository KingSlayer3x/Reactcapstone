export function initializeTimes(){
    const today = new Date();
    return window.fetchAPI(today);
}

export function updateTimes(state, action) {
    switch (action.type) {
        case 'UPDATE_TIMES':{
            const selectedDate = new Date(action.payload);
            return window.fetchAPI(selectedDate);
        }
        default:
            return state;
    }
}