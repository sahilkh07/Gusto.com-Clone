import './Upper2.css'
import { useState } from 'react'
import { Button , Accordion
    
} from '@chakra-ui/react'
import Accord from './Accord'
const arr=[
    {
      title:'Employee benefits',
      content:"We provide a wide range of health and financial benefits to keep your team happy, productive, and engaged.",
      img:"https://prod.gusto-assets.com/wp-content/uploads/Employee_benefits%402x_NEW.png",
      tick1:'Medical, dental, life, and vision',
      tick2:'Trusted benefits advisors',
      tick3:'HSA and FSA',
      tick4:'401(k), 529, workers’ comp'
  
  
    },
    {
      title:'Hiring and onboarding',
      content:'From hiring your first employees to scaling your growing business, Gusto helps you find and support great people from day 1 to 1,000.',
      img:"https://prod.gusto-assets.com/wp-content/uploads/Hiring-and-onboarding%402x.png",
      tick1:'Job posts and applicant tracking',
      tick2:"Custom onboarding checklists",
      tick3:'Offer letter templates',
      tick4:'Integrations and app provisioning'
    },
    {
      title:'Talent Management',
      content:'Whether you’re in an office, remote, or in between, give your employees a clear path for growth with performance reviews, trainings, and career development tools.',
      img:'https://prod.gusto-assets.com/wp-content/uploads/Talent-management%402x.png',
      tick1:'Automated feedback requests',
      tick2:'Learning and development tools',
      tick3:"Performance review templates",
      tick4:"Review progress tracking"
    }
  ]

export default function Mid() {
    const [image,setImage]=useState("https://prod.gusto-assets.com/wp-content/uploads/Employee_benefits%402x_NEW.png")
    return (
        <div className="newTopsection">

            <div className='divImage'>


                <img src={image} alt="card" />

            </div>

            <div>
                <h1 style={{ paddingBottom: "15px", fontSize: '43px', fontWeight: '500' }}>Build a better workplace with flexible benefits and HR tools.</h1>
                <Button style={{ marginBottom: '20px' }}>Learn How benifits works</Button>
                <Accordion allowToggle>
                    {arr.map((item) => (
                        <Accord title={item.title} img={item.img} content={item.content} onClick={() => setImage(item.img)} li1={item.tick1} li2={item.tick2} li3={item.tick3} li4={item.tick4} />


                    ))}
                </Accordion>
            </div>
        </div>
    )
}