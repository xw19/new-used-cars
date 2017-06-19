import axios from 'axios'
const API_URL = 'https://cartruckdealerships.herokuapp.com'

export function fetchDealerships() {
  return(dispatch) => {
    dispatch({
      type: "FETCH_DEALERSHIPS",
      payload: axios.get(API_URL + '/api/v1/dealerships')
    })
  }
}

export function fetchDealership(id) {
  return(dispatch) => {
    dispatch({
      type: "FETCH_DEALERSHIP",
      payload: axios.get(API_URL + '/api/v1/dealerships/' + id)
    })
  }
}

export function fetchCar(dealership_id, id) {
  return(dispatch) => {
    dispatch({
      type: "FETCH_CAR",
      payload: axios.get( API_URL + '/api/v1/dealerships/' + dealership_id + '/models/' + id  )
    })
  }
}
