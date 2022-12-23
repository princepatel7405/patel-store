import React from 'react'
import {NavLink} from 'react-router-dom'
import Nav from './Nav'
import {Flex} from '@chakra-ui/react'

const Header = () => {
  return (
    <div>

    <Flex bgColor={"grey"} justifyContent="space-between" paddingRight="20px" paddingLeft={"20px"}>
      <NavLink to="/">
        <img style={{width:"200px",border:"1px solid red"}} src='./image/PATEL.png' alt="1" />
      </NavLink>
      <Nav/>
    </Flex>
       
    </div>
  )
}

export default Header