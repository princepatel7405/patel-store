import {  Button, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/HeroSection.css'

const HeroSection = ({name}) => {
  return (
    <SimpleGrid columns={[1,1,2]} gap={5} className='herosection'>
        <div style={{textAlign:"left"}}>
            <p>Welcome To</p>
            <Heading>{name}</Heading>
            <Text textAlign={"left"}>Online electronic shop is a project developed to make the purchase of electronics easy. This application makes the need of the sales and purchase of electronics safe. This application will reduce the manual operation required to maintain all the records of sales and purchase. This system allows to search number of  stocks details of electronic items.</Text>
            <NavLink to='/product'><Button mt={2} colorScheme={"blue"}>Shop Now</Button></NavLink>
        </div>
        <div>
            <Image className='hero-image' src="https://img.freepik.com/premium-photo/model-being-covered-by-shopping-bags-copy-space_23-2148674119.jpg?w=2000"/>
        </div>
    </SimpleGrid>
  )
}

export default HeroSection