import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'
import { connect } from 'react-redux'
import { fetchCar } from '../actions'
import Loader from '../components/Loader'

class Car extends Component {
  componentDidMount() {
    console.log(this.props)
    this.props.dispatch(fetchCar(this.props.match.params.dealership_id, this.props.match.params.id))
  }
  render () {
    if ( this.props.fetching ) {
      return (
        <Loader />
      )
    }
    if ( this.props.fetched && this.props.car ) {
      return (
        <div>
          <Row>
            <Col s={12}>
              <h1>{this.props.car.brand} {this.props.car.name}</h1>
            </Col>
          </Row>
          <Row>
            <Col s={12} m={8} offset='m2' className='center-align'>
              <img src={this.props.car.image} alt={this.props.car.name} width='500' height='250' />
            </Col>
          </Row>
          <Row>
            <Col s={6}>
              <h2>YEAR: {this.props.car.year}</h2>
            </Col>
            <Col s={6}>
              <h2>PRICE: {this.props.car.price}</h2>
            </Col>
          </Row>
        </div>
      )
    }
    return (
      <h1>Error..</h1>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return { car: state.carReducer.car, fetched: state.dealershipReducer.fetched, fetching:  state.carReducer.fetching, error: state.carReducer.error }
}

export default connect(mapStateToProps)(Car)
