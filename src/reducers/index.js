import { combineReducers } from 'redux'
import dealershipReducer from './dealershipReducer'
import dealershipsReducer from './dealershipsReducer'
import carReducer from './carReducer'

const rootReducer = combineReducers({
  dealershipReducer,
  dealershipsReducer,
  carReducer
})

export default rootReducer
