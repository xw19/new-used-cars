const initState = {
    fetching: false,
    fetched: true,
    cars: [],
    errors: null
}

const cars = (state=initState, action) => {
    switch (action.type) {
        case "FETCH_CARS_PENDING":
            return {...state, fetching: true}
        case "FETCH_CARS_FULFILLED":
            return {...state, fetching: false, fetched: true, cars: action.payload.data, error: false }
        case "FETCH_CARS_REJECTED":
            return {...state, fetching: false, fetched: false, error: action.payload.data }
        default:
          return state
    }
}

export default cars
