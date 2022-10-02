import React from 'react'
import './clow1.css'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  List,
  ListItem,
  ListIcon,
  Image
} from '@chakra-ui/react'
import {AiOutlineCheck} from 'react-icons/ai'

let lis1= [
  {
    li1:'Free Gusto Plus payroll and HR Tools for your firm1',
    
   
    
    
   
  },
  {
    li1:"Dedicated account representative"
  },{
      li1:"'1-month free trial for your clients',"
  },
  {
    li1:'Easy-to-use Gusto account dashboard and referral tools'
  }
  ,{
    li1:'Flexible payment options for you and your clients'
  }
  
  ,{
    li1:"Free Gusto information and marketing collateral"

  }
]
let lis2=[

 {
    li2:'Gusto partner badges to add to your website',

  },{
    li2:'Get clients with a featured Partner Directory listing',
  },{
    li2:'10% discount on Gusto services to pass along or keep as revenue share'
  }
 
]
let lis3=[
  {
   
    li2:'Gusto partner badges to add to your website'
    
    
    
  },
  {
    li2:"Get clients with a featured Partner Directory listing"
  },{

    li2:"VIP support for your team",

  },
  {
    li2:'15% discount on Gusto services to pass along or keep as revenue share'

  }
]
let lis4=[
  {

    li2:"Gusto partner badges to add to your website",
    
    
    
  },
  {
    li2:"Get clients with a featured Partner Directory listing",
  },{
    li2:"VIP support for your team",
  },
  {
    li2:"20% discount on Gusto services to pass along or keep as revenue share"

  }
]


function CLow1() {
  return (
    <div className='jkl' style={{display:"flex",flexWrap:'wrap',justifyContent:'space-evenly'}}>

        <div style={{width:'230px',border:'0px solid gold'}}>
          <div style={{display:'flex',justifyContent:'space-between'}}>
           <h1 className='h1' style={{fontSize:'25px'}}>1-2 </h1>
           <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://prod.gusto-assets.com/assets/accountants/partner-badge-starter-2fd63fe290a9dae318ab3a93b09b4b878ce9060849944bc33f4f984ef1ed27b2.svg'
        alt='Fluffybuns the destroyer'
        mr='12px'
      />
           
           </div>
            <hr />
            <List spacing={3}>
              {lis1.map((user)=>(
                 <ListItem style={{margin: "15px 2px 10px 0px"}}>
                 <ListIcon as={AiOutlineCheck} color='green.500' />
                 {user.li1}
                 
                 </ListItem>
     


              ))}
              <br />
              <br />
              <br />
              <br />
              
           
            

       </List>
        
        </div>
        <div style={{width:'250px',border:'4px solid brown',zIndex:'1',padding:"20px",background:"white"}}>
          <div>
            <h1 className='h1' style={{fontSize:'30px'}}>3-14 Clients</h1>
            <hr />
        <List spacing={3}>
          <ListItem style={{margin: "15px 2px 10px 0px"}}>
          <ListIcon as={AiOutlineCheck} color='green.500' />
          <span style={{color:'green',fontWeight:'bold'}}>Everything in Starter, plus:</span>
          <hr />
          </ListItem>
              {lis2.map((user)=>(
                 <ListItem style={{margin: "15px 2px 10px 0px"}}>
                 <ListIcon as={AiOutlineCheck} color='green.500' />
                 {user.li2}
                 
                 </ListItem>
     


              ))}
              </List>
              </div>
        </div>

        <div style={{width:'250px',border:'4px solid silver',zIndex:1,padding:"20px",background:"white"}}>
          <div>
            <h1 className='hi' style={{fontSize:'25px'}}>3-14 Clients</h1>
            <hr />
        <List spacing={3}>
          <ListItem style={{margin: "15px 2px 10px 0px"}}>
          <ListIcon as={AiOutlineCheck} color='green.500' />
          <span style={{color:'green',fontWeight:'bold'}}>Everything in Starter, plus:</span>
          <hr />
          </ListItem>
              {lis3.map((user)=>(
                 <ListItem style={{margin: "15px 2px 10px 0px"}}>
                 <ListIcon as={AiOutlineCheck} color='green.500' />
                 {user.li2}
                 
                 </ListItem>
     


              ))}
              </List>
              </div>
        </div>

        <div style={{width:'250px',border:'4px solid gold',padding:"20px",zIndex:1,background:'white'}}>
          <div>
            <h1 style={{fontSize:'25px'}}>3-14 Clients</h1>
            <hr />
        <List spacing={3}>
          <ListItem style={{margin: "15px 2px 10px 0px"}}>
          <ListIcon as={AiOutlineCheck} color='green.500' />
          <span style={{color:'green',fontWeight:'bold'}}>Everything in Starter, plus:</span>
          
          <hr />
          </ListItem>
              {lis4.map((user)=>(
                 <ListItem style={{margin: "15px 2px 10px 0px"}}>
                 <ListIcon as={AiOutlineCheck} color='green.500' />
                 {user.li2}
                 
                 </ListItem>
     


              ))}
              </List>
              </div>
        </div>



    </div>
  )
}

export default CLow1