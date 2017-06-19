import React, { Component } from 'react'
import { fetchDealerships } from '../actions'
import { connect } from 'react-redux'
import DealershipsList from '../components/DealershipsList'
import Loader from '../components/Loader'

class Dealerships extends Component {
  componentDidMount() {
    this.props.dispatch(fetchDealerships())
  }

  render () {
    if ( this.props.fetching ) {
      return (
        <Loader />
      )
    }
    return(
        <div>
          <DealershipsList dealerships={this.props.dealerships} />
        </div>
    )
  }
}

function mapStateToProps(state) {
    return { dealerships: state.dealershipsReducer.dealerships, fetching: state.dealershipsReducer.fetching, fetched:  state.dealershipsReducer.fetched, error:  state.dealershipsReducer.error }
}

export default connect(mapStateToProps)(Dealerships)
