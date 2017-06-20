import React from 'react'
import {Navbar} from 'react-materialize'
import { Link } from 'react-router-dom'

const NUCNavbar = () => (
  <Navbar brand='New Used Cars' right>
    <Link to='/about'>About</Link>
  </Navbar>
)

export default NUCNavbar
