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
} from '@chakra-ui/react';
import { AiOutlineCheck } from 'react-icons/ai';

let user = [
  {
    li: 'Full-service payroll',
    li1: 'Medical, dental, vision',
  },
  {
    li: 'Certified HR experts',
    li1: 'Time tracking and PTO',
  },
  {
    li: 'Compliance help',
    li1: 'Friendly support',
  },
];

export default function Mid() {
  return (
    <div>
      <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',}}>
        <h1 style={{fontSize:'40px',textAlign:"center",fontWeight:"500"}}>Gusto is the people platform <br></br>for businesses of all sizes.</h1>
      </div>
      <div style={{ display: 'flex' ,marginLeft:"50px"}}>
        <div style={{ width: '900px' }}>
          <img
            src="https://prod.gusto-assets.com/assets/accountants/laptop@2x-1268b06d35ff0141ebc55baf158013f6e6278b5bdcba19ae45597ee717811974.png.webp"
            alt=""
          />
        </div>
        <div>
          <div>
            <h1 style={{fontSize:'18px',marginBottom:"22px",}}>
              Gusto was built for all businesses, from sole proprietors to W-2
              employers. We automatically file payroll taxes, streamline
              benefits, and provide direct access to HR experts.
            </h1>
            <div style={{ display: 'flex' ,gap:'20px'}}>
                <div style={{fontSize:'18px'}}>
              {user.map(item => (
                
                  <List style={{padding:'10px 20px'}}>
                    <ListItem>
                      <ListIcon as={AiOutlineCheck} color="green.500" />
                      {item.li}
                      <hr />
                    </ListItem>
                  </List>
                
              ))}
              </div>
              <div  style={{fontSize:'18px'}}>

              {user.map(item=>(
                
                    <List style={{padding:'10px 20px'}}>
                    <ListItem>
                      <ListIcon as={AiOutlineCheck} color="green.500" />
                      {item.li1}
                      <hr />
                    </ListItem>
                  </List>
                

              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
