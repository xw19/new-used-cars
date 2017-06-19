const initState = {
    fetching: false,
    fetched: true,
    dealership: null,
    errors: null
}

const dealership = (state=initState, action) => {
    switch (action.type) {
        case "FETCH_DEALERSHIP_PENDING":
            return {...state, fetching: true}
        case "FETCH_DEALERSHIP_FULFILLED":
            return {...state, fetching: false, fetched: true, dealership: action.payload.data, error: false }
        case "FETCH_DEALERSHIP_REJECTED":
            return {...state, fetching: false, fetched: false, error: action.payload.data }
        default:
          return state
    }
}

export default dealership
