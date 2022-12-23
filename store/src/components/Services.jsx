import { Flex, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { BiShieldQuarter } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import "../styles/Services.css";
const Services = () => {
  return (
    <Flex
      className="services-first"
      direction={["column", "column", "row", "row"]}
      gap="15px"
      mt={10}
      justifyContent="center"
    >
      <VStack bgColor={"#EDEADE"} w="250px" pt="30px">
        <TbTruckDelivery color="blue" />
        <p>Super fast and free delivery</p>
      </VStack>
      <VStack w="250px">
        <HStack bgColor={"#EDEADE"} padding="5">
          <BiShieldQuarter color="blue" />
          <p>Non-Contact Shipping</p>
        </HStack>
        <HStack bgColor={"#EDEADE"} padding="5">
          <GiReceiveMoney color="blue" />
          <p>Money-Back Guaranteed</p>
        </HStack>
      </VStack>
      <VStack bgColor={"#EDEADE"} paddingTop="35px" w="300px">
        <RiSecurePaymentLine color="blue" />
        <p>Super Secure Payment System</p>
      </VStack>
    </Flex>
  );
};

export default Services;
