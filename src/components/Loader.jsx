import React from 'react'
import { Row, Col, Preloader} from 'react-materialize'

const Loader = () => (
  <Row>
  	<Col s={2} offset="s5" className="valign-wrapper">
  		<div className="valign-height">
        <Preloader color='red' size='big' className="preloader-spinner"/>
      </div>
  	</Col>
  </Row>
)

export default Loader
