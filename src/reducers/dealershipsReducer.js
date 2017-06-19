const initState = {
    fetching: false,
    fetched: true,
    dealerships: [],
    errors: null
}

const dealership = (state=initState, action) => {
    switch (action.type) {
        case "FETCH_DEALERSHIPS_PENDING":
            return {...state, fetching: true}
        case "FETCH_DEALERSHIPS_FULFILLED":
            return {...state, fetching: false, fetched: true, dealerships: action.payload.data, error: false }
        case "FETCH_DEALERSHIPS_REJECTED":
            return {...state, fetching: false, fetched: false, error: action.payload.data}
        default:
          return state
    }
}

export default dealership
