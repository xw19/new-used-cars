import React from 'react'
import { Row, Card, Col, CardTitle } from 'react-materialize'
import { fetchCars } from '../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'


class Cars extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCars(this.props.dealershipid))
  }

  render() {
    if(this.props.fetching ) {
      return(<Loader />)
    }
    if (this.props.fetched && this.props.cars ) {
      return (
        <Row>
          {this.props.cars.map(car => (
            <Col m={4} s={12} key={car.id}>
              <Card className='small'
              	header={<CardTitle image={car.thumb}>{car.brand} {car.name}</CardTitle>}
                key={car.id}
              	actions={[<Link to={`/dealership/${this.props.dealershipid}/car/${car.id}`} key={car.id}>Link to {car.brand} {car.name}</Link>]}>
                car description
              </Card>
            </Col>
          ))}
        </Row>
      )
    }
    return (
      <h1>Error..</h1>
    )
  }
}
const mapStateToProps = (state) => (
  { cars: state.carsReducer.cars, fetching: state.carsReducer.fetching, fetched: state.carsReducer.fetched, error: state.carsReducer.error  }
)

export default connect(mapStateToProps)(Cars)
