import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'
import { connect } from 'react-redux'
import { fetchDealership } from '../actions'
import Loader from '../components/Loader'
import CarList from '../components/CarList'

class Dealership extends Component {
  componentDidMount() {
    this.props.dispatch(fetchDealership(this.props.match.params.id))
  }
  render () {
    if ( this.props.fetching ) {
      return (
        <Loader />
      )
    }
    if ( this.props.fetched && this.props.dealership ) {
      return (
        <div>
          <Row>
            <Col s={12}>
              <h1>{this.props.dealership.name}</h1>
            </Col>
          </Row>
          <CarList cars={this.props.dealership.models} dealershipid={this.props.match.params.id} />
        </div>
      )
    }
    return (
      <h1>Error..</h1>
    )
  }
}

function mapStateToProps(state) {
  return { dealership: state.dealershipReducer.dealership, fetched: state.dealershipReducer.fetched, fetching:  state.dealershipReducer.fetching, error: state.dealershipReducer.error }
}

export default connect(mapStateToProps)(Dealership)
