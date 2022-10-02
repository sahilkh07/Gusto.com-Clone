import Upper from "./Upper"
import Upper2 from "./Upper2"
import Crausel from "./Crausel"
import Mid from "./Mid"
import AllRoutes from "../Allpages/AllRoutes"
import NewAccount from "../Allpages/NewAccount"
import Lower from "./Lower"
import Footer from "./Footer"
import Nav from './Nav'

let arr =[
    {
        h:'Pricing',
        para:'Starting at just $46 per month',
        para2:'Small Business Financial Relief',
para3:"Employer tax calculator",
para4:"Burn rate calculator",
para5:"New hire checklist",
para6:'Help Center',
para7:'Talk to Support',
    },
    {
        h:'Get started',
        para:'Interactive Demo',
        para2:'Contact Sales — (800) 936-0383',
        para3:'Gusto Embedded Payrolls',
        para4:'Build Apps with Gusto',
        para5:'Developer Tools',
        para6:'Integrations',
        para7:'Licenses'


    },
    {
        h:'Company',
        para:'About',
        para2:'Careers-We are Hiring',
        para3:'Press',
        para4:'News',
        para5:"Investory",
        para6:'Contact',
        para7:"Affilate Program"
    },
    {
        h:'Resources',
        para:'Customer stories',
        para2:'Customer reviews',
        para3:'Compare',
        para4:"Partner Directory",
        para5:'Buisness Directory',
        para6:'FAQs',
        para7:"Security"
        

    },
    {
        h:"Built For You",
        para:'Starting a Buisness',
        para2:'Gusto Pro Dashboard',
        para3:'Partner Community',
        para4:'Professional Development',
        para5:'People Advirsory',
        para6:'Accountant Blog',
        para7:'Resources'
    },
    
]


export default function Index(){

    return(
        <div>
            <Nav></Nav>
           
            <Upper></Upper>
            
            
            <Upper2></Upper2>
            <Mid></Mid>
            <Crausel></Crausel>
            <Lower></Lower>
            <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',gap:"10px",marginTop:'80px'}}>
            {arr.map((user)=>(
                <Footer name={user.h} text1={user.para} text2={user.para2} text3={user.para3} text4={user.para4} text5={user.para5} text6={user.para6} text7={user.para7}> </Footer>
            ))}
            </div>
          
        </div>
    )
}