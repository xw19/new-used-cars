import { combineReducers } from 'redux'
import dealershipsReducer from './dealershipsReducer'
import carReducer from './carReducer'
import carsReducer from './carsReducer'

const rootReducer = combineReducers({
  dealershipsReducer,
  carsReducer,
  carReducer
})

export default rootReducer
