import { Link,Button, ButtonGroup ,Text} from '@chakra-ui/react'
import { Navigate, NavLink } from 'react-router-dom'


import './upper.css'
import Boxes from './Boxes'
import AllRoutes from '../Allpages/AllRoutes'




export default function Upper() {
    
    return (

        <div className="top-section">
            
            
            <div><h1 style={{ paddingBottom: "15px", fontSize: '50px', fontWeight: '500' }}>One place for payroll, benefits, and so much more.</h1>

                <p style={{ fontSize: "25px", color: "#525257", fontWeight: "400" }}>People are at the heart of every successful business. Gusto puts the tools you need to hire, pay, insure, and support your team in one platform.</p>
                <div style={{ display: 'flex', gap: '20px', margin: '10px 0px 20px 0px' }}>
                    <div>
                        <Button colorScheme='orange'><NavLink to='/new'>Create Account</NavLink></Button>

                    </div>
                    <div>
                        <Button colorScheme='gray'><p style={{ color: 'black' }}>Learn How Gusto Works</p></Button>
                    </div>

                </div>

                Already Using Gusto <NavLink style={{color:'green',textDecoration:"underline"}} to='/signin'>Sign in</NavLink>

            </div>
            <div style={{ marginTop: '20px' }}>
                <Boxes src="https://prod.gusto-assets.com/assets/svg/header/pottedplant_kale-9f3a7160b7c67bc539b49e10e4f15c307bd533679eb16004a54a96dc70b8767b.svg" text="Recently started a business or looking for a payroll provider?" link="Learn More about Gusto"  h="Starting a buisness" />

                <Boxes src="https://prod.gusto-assets.com/assets/svg/icons/moving-box-7d52aecb338cfc502ce160ff30aed4329bdbf081c6a9365016adc3947efbc637.svg" text="
Looking for a new payroll and benefits provider?" link="Let us help you switch providers" h="Switiching To Gusto"></Boxes>
                <Boxes src="https://prod.gusto-assets.com/assets/svg/icons/calculator-d726de745970d0cced76b998eafb8f08f25accfe46d580eb5cec94b1c8cd2721.svg" text="
Want to grow your accounting practice?" link='Chekout the perks for Gusto Partner' h="Accountant"></Boxes>

            </div>

        </div>



    )
}