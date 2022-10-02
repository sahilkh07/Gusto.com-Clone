import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  background,
  Button,useToast
  
} from '@chakra-ui/react'
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';
import{BiChevronDown} from "react-icons/bi"
import { useState } from 'react';
import {NavLink} from 'react-router-dom'
function Nav() {
  const [load,setLoad]=useState(false)
  const  toggleAuth=()=>{
    setLoad(true)
    setTimeout(()=>{
      toast({
        title: 'Log Out Succesful.',
        
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
   
  setIsAuth(!isAuth)

    },1000)
    
     
}
const toast = useToast()
  let {isAuth,setIsAuth}= useContext(AuthContext);
  let data = JSON.parse(localStorage.getItem("dataLogin"))
  return (
    <div style={{display:'flex' ,width:'500vh' ,position:'fixed' ,gap:'40px',maxWidth:'inherit',top:'0',padding:'12px 12px', background:'white',zIndex:'200' }}>
        <div>
          <img src="https://prod.gusto-assets.com/assets/svg/header/gusto-logo-bfed4fde4bd2b5dd364ab0e58f77fc90aeefa2f1ecdb7fff524279642e23f9c2.svg" alt="" />
        </div>
        <div>
          
          <h3>Why Gusto</h3>
            
        </div>
        <div>

          
          <Menu>
  <MenuButton
    // px={4}
    // py={2}
    transition='all 0.2s'
    
    borderWidth='0px'
    _hover={{ color: 'green.400' }}
    
   
  >
    
    Payroll and More<BiChevronDown />
    
  </MenuButton>
  <MenuList>

    <MenuItem >Payroll</MenuItem>
    <MenuItem>Hiring and OnBoarding</MenuItem>
    <MenuItem>HR Expert</MenuItem>
    <MenuDivider />
    <MenuItem>Employee Benifits</MenuItem>
    <MenuItem>Time Tools</MenuItem>
  </MenuList>
</Menu>

    </div>
        <div>
          <Menu>
        <MenuButton
    // px={4}
    // py={2}
    transition='all 0.2s'
    
    borderWidth='0px'
    _hover={{ color: 'green.400' }}
    
   
  >
    
    For Accountants<BiChevronDown />
    
  </MenuButton>
  <MenuList>

    <MenuItem >Become  a Partner</MenuItem>
    <MenuItem>Gusto Pro Dashboard</MenuItem>
    <MenuItem>Accountant Blopg</MenuItem>
    <MenuDivider />
    <MenuItem>Partner Community</MenuItem>
    <MenuItem>Professional Development</MenuItem>
  </MenuList>
</Menu>
          

        </div>

        <div>
        <Menu>
        <MenuButton
    // px={4}
    // py={2}
    transition='all 0.2s'
    
    borderWidth='0px'
    _hover={{ color: 'green.400' }}
    
   
  >
    
    Built For You<BiChevronDown />
    
  </MenuButton>
  <MenuList>

    <MenuItem >Starting a Buisness</MenuItem>
    <MenuItem>Need a new provider</MenuItem>
    <MenuItem>HR Expert</MenuItem>
    
  </MenuList>
</Menu>

          
        </div>

        <div>
          See demo
        </div>
        {isAuth?<><div>{data.name}</div><div>
          <Button isLoading={load} onClick={toggleAuth}>Sign Out </Button>
        </div></>: 
        <>
        <div>
          <Button><NavLink to='/signin'>Sign in</NavLink> </Button>
        </div>
        <div>
          <Button colorScheme='orange' style={{padding:"0px 60px"}}><NavLink to='/new'>Create Account</NavLink></Button>
        </div>
        </>}
       
        
    </div>
  )
}

export default Nav