import { HamburgerIcon } from "@chakra-ui/icons";
import {

  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import '../styles/DrawerNav.css'

function DrawerNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="white" onClick={onOpen}>
        <HamburgerIcon color={"black"}/>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>

            <Text fontSize="20px">
              <NavLink to="/"> Home</NavLink>
            </Text>

            <Text fontSize="20px">
              {" "}
              <NavLink to="/about">About</NavLink>
            </Text>

            <Text fontSize="20px">
              {" "}
              <NavLink to="/product">Products</NavLink>
            </Text>

            <Text fontSize="20px">
              {" "}
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </Text>
            

            <NavLink to="/cart">
              <div className="nav-link-icon">
                <FiShoppingCart  />
                <span className="nav-link-total-items">10</span>
              </div>
            </NavLink>
            
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default DrawerNavbar;
