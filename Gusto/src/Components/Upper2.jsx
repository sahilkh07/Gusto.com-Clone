import { Button , Accordion,
    
    } from '@chakra-ui/react'
import Lizt from './List'



import './Upper2.css'
import { useState } from 'react'
import Accord from './Accord'


const arr=[
  {
    title:'Full-service payroll',
    content:"With Gusto, payroll takes just a few clicks. We automatically file your taxes, help with compliance, and can identify hidden tax credits to save you money. In many cases we can even transfer your payroll and benefits data for you.",
    img:'https://prod.gusto-assets.com/wp-content/uploads/Full-service-payroll%402x-3.png',
    tick1:'Unlimited payroll runs',
    tick2:'State tax registration',
    tick3:'International contractor payments',
    tick4:'Automatic W-2s and 1099s'


  },
  {
    title:'Time and attendance',
    content:'Gusto automatically calculates and syncs your team’s hours, PTO, and holidays with payroll. Plus, we help you stay compliant with alerts, software integrations, and more.',
    img:"https://prod.gusto-assets.com/wp-content/uploads/Time-and-attendance%402x-1.png",
    tick1:'Time off requests and approvals',
    tick2:"Project tracking and cost reports",
    tick3:'PTO policies and reporting',
    tick4:'Mobile time tracking'
  },
  {
    title:'Insights and reporting',
    content:'No more guessing games. Use competitive compensation tools, employee Our competitive compensation tools, employee feedback surveys, and workforce costing features make tough business decisions a lot easier.',
    img:'https://prod.gusto-assets.com/wp-content/uploads/Insights-and-reporting%402x.png',
    tick1:'R&D tax credits',
    tick2:'Workforce and project costing',
    tick3:"Actionable team insights",
    tick4:"Automatic custom reports"
  }
]

export default function Upper2(){

  const [image,setImage]=useState("https://prod.gusto-assets.com/wp-content/uploads/Full-service-payroll%402x-3.png")
   

    return(
        <div className="newTopsection">
            <div>
            <h1 style={{ paddingBottom: "15px", fontSize: '43px', fontWeight: '500' }}>Quickly pay your employees and contractors.</h1>
            <Button style={{marginBottom:'20px'}}>Learn How payroll works</Button>
            <Accordion  allowToggle>
           {arr.map((item)=>(
            <Accord title={item.title}  img={item.img} content={item.content} onClick={()=>setImage(item.img)}  li1={item.tick1} li2={item.tick2} li3={item.tick3} li4={item.tick4}/>


           ))}
           </Accordion>
            </div>

            <div className='divImage'>


              <img src={image} alt="card" />

            </div>



        </div>
    )
}