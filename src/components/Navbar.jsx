import React from 'react';
import{Box,Button,ButtonGroup,Heading,Image} from '@chakra-ui/react';
import{HamburgerIcon,SearchIcon,SunIcon,AtSignIcon,CalendarIcon} from "@chakra-ui/icons";
import {Link, NavLink} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "./Navbar.css"
const Navbar=()=>{
    const navigate=useNavigate();
    
    return(
        <>
        
        <Box height="120px"
        width="100%"
        background="rgb(10,30,41)"
       justifyContent="center"
        display="flex">
            <Box display="block" fontSize="14px">
            <Box marginLeft="2%" height="30px" width="300px"display="flex"  justifyContent="space-around">
            <Heading color="white"
            ><HamburgerIcon/>
                Explore</Heading>
            <Heading color="white">
                <SearchIcon/>
                Search</Heading>
            </Box>
            <Heading color="white" marginTop="2rem" marginLeft="1rem">Monday 20 june 2022 New Delhi
            <SunIcon/></Heading>
            </Box>
            
            <Image 
            marginLeft="6rem"
            height="70px"
            marginTop="1rem"
            src="https://www.hindustantimes.com/res/images/ht-logo.svg"/>

            <Box display="block" marginLeft="3rem" width="300px">
                <Box display="flex" justifyContent="space-between" >
                    <Heading fontSize="16px"color="white"><AtSignIcon/>Games</Heading>
                    <Heading fontSize="16px"color="white"><CalendarIcon/>E-paper</Heading>

                    <NavLink to="/login">
                    <ButtonGroup variant='outline' spacing='6'>
                   
                    <Button colorScheme='blue' >Signin</Button>
                   
                    
                    </ButtonGroup>
                    </NavLink>
                </Box>
                <Heading color="white" fontSize="16px">Start 15 days free trial<button>subscribe</button>
                    
                </Heading>
            </Box>

        </Box>
        <Box height="50px" border="1px solid gray" width="100%" >
            <Box height="30px" width="70%" margin="auto"marginTop="1rem"display="flex" justifyContent="space-around" >

                <Link to="/"  className="Link">Home</Link>
                <Link to="/latest"className="Link">Latest</Link>
                <Link to="/india" className="Link">India</Link>
                <Link to="/world" className="Link">World</Link>
                <Link to="/cities" className="Link">Cities</Link>
                <Link to="/entertainment" className="Link">Entertainment</Link>
                <Link to="/cricket" className="Link">Cricket</Link>
                <Link to="/lifestyle" className="Link">Lifestyle</Link>
                <Link to="/Astrology" className="Link">Astrology</Link>
                <Link to="/editorials" className="Link">Editorials</Link>
                <Link to="/forYou" className="Link">For You</Link>
                <Link to="/shopnow" className="Link">Shop Now</Link>


            </Box>

        </Box>
        </>
        
    )
}
export default Navbar;