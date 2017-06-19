const initState = {
    fetching: false,
    fetched: true,
    car: null,
    errors: null
}

const car = (state=initState, action) => {
    switch (action.type) {
        case "FETCH_CAR_PENDING":
            return {...state, fetching: true}
        case "FETCH_CAR_FULFILLED":
            return {...state, fetching: false, fetched: true, car: action.payload.data, error: false }
        case "FETCH_CAR_REJECTED":
            return {...state, fetching: false, fetched: false, error: action.payload.data }
        default:
          return state
    }
}

export default car
