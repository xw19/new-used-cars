import React  from 'react'
import {Switch, Route} from 'react-router-dom'
import Dealerships from '../containers/Dealerships'
import Dealership from '../containers/Dealership'
import Car from '../containers/Car'
import About from './About'

class Main extends React.Component {

    render() {
        return (
            <div className='container'>
                <Switch>
                    <Route exact path='/' component={Dealerships}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/dealership/:dealership_id/car/:id' component={Car} />
                    <Route exact path='/dealership/:id' component={Dealership} />
                </Switch>
            </div>
        )
    }
}


export default Main
