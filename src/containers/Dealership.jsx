import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'
import { connect } from 'react-redux'
import Cars from './Cars'

class Dealership extends Component {
  constructor(props) {
    super(props)
    this.dealership = null
  }

  componentWillMount() {
    let dealerships = this.props.dealerships
    let dsp = dealerships.filter((dealership) => (dealership.id === parseInt(this.props.match.params.id, 10)))
    if (dsp.length > 0) {
      this.dealership = dsp[0]
    }
  }

  render () {
    if ( this.dealership ) {
      return (
        <div>
          <Row>
            <Col s={12}>
              <h1>{this.dealership.name}</h1>
            </Col>
          </Row>
          <Cars dealershipid={this.dealership.id}/>
        </div>
      )
    }
    return (
      <h1>Error..</h1>
    )
  }
}

function mapStateToProps(state) {
  return { dealerships: state.dealershipsReducer.dealerships }
}

export default connect(mapStateToProps)(Dealership)
