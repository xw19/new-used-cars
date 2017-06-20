import React from 'react'
import { Row, Card, Col, CardTitle } from 'react-materialize'
import { Link } from 'react-router-dom'

const DealershipsList = ({dealerships}) => (
  <Row>
    {dealerships.map(dealership => (
      <Col s={12} m={6} key={dealership.id}>
        <Card className='small'
        	header={<CardTitle image={dealership.logo}>{dealership.name}</CardTitle>}
          key={dealership.id}
        	actions={[<Link to={`/dealership/${dealership.id}`} key={dealership.id}>Link to {dealership.name}</Link>]}>
          Dealership description
        </Card>
      </Col>
    ))}
  </Row>
)

export default DealershipsList
