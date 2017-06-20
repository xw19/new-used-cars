import React from 'react'
import { Row, Card, Col, CardTitle } from 'react-materialize'
import { Link } from 'react-router-dom'

const CarsList = ({cars, dealershipid}) => {
  return (
    <Row>
      {cars.map(car => (
        <Col s={3} key={car.id}>
          <Card className='small'
          	header={<CardTitle image={car.thumb}>{car.brand} {car.name}</CardTitle>}
            key={car.id}
          	actions={[<Link to={`/dealership/${dealershipid}/car/${car.id}`} key={car.id}>Link to {car.brand} {car.name}</Link>]}>
            car description
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default CarsList
