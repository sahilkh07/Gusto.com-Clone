
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    List,
    ListItem,
    ListIcon
  } from '@chakra-ui/react'
 


import {AiOutlineCheck} from 'react-icons/ai'

  import { useState } from 'react'
export default function Accord({title,content,onClick,li1,li2,li3,li4}){
 
    
    return(
        
  <AccordionItem style={{paddingBottom:'20px'}}>
    <h2>
      <AccordionButton onClick={onClick}>
        <Box flex='1' textAlign='left'>
          <h2 style={{fontSize:'17px',fontWeight:"500"}}>{title}</h2>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <p style={{fontSize:'16px',fontWeight:'500'}}>{content}</p>
      <div style={{display:"flex" ,gap:"10px"} }>
        <div>
      <List spacing={3}>
            <ListItem style={{margin: "15px 2px 10px 0px"}}>
            <ListIcon as={AiOutlineCheck} color='green.500' />
            {li1}
            
            </ListItem>
        </List>
        <List spacing={3}>
            <ListItem>
            <ListIcon as={AiOutlineCheck} color='green.500' />
            {li3}
           
            </ListItem>
        </List>
        </div>
        <div>
            
        <List spacing={3}>
            <ListItem style={{margin: "15px 2px 10px 0px"}}>
            <ListIcon as={AiOutlineCheck} color='green.500' />
            {li2}
            
            </ListItem>
        </List>
        <List spacing={3}>
            <ListItem>
            <ListIcon as={AiOutlineCheck} color='green.500' />
            {li4}
            
            </ListItem>
        </List>
        </div>
        </div>
</AccordionPanel>
  </AccordionItem>
  

    )



}