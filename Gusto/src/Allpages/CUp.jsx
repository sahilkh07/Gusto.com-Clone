import './CUp'
import { Link,Button, ButtonGroup ,Text} from '@chakra-ui/react'
import { Navigate, NavLink } from 'react-router-dom'

export default function CUp() {

    return (
        <div className="top-section" style={{backgroundColor:'white'}}>
            <div><h1 style={{ paddingBottom: "15px", fontSize: '50px', fontWeight: '500' }}>Do more than payroll? So does Gusto.</h1>

                <p style={{ fontSize: "25px", color: "#525257", fontWeight: "400" }}>With Gusto you and your clients get easy payroll and benefits, access to HR experts, compliance support, and so much more.</p>
                <div style={{ display: 'flex', gap: '20px', margin: '10px 0px 20px 0px' }}>
                    <div>
                        <Button colorScheme='orange'><NavLink to='/new'>Create Account</NavLink></Button>

                    </div>
                    
                    

                </div>

                <Text style={{ fontSize: '18px', fontWeight: '400', marginBottom: '20px' }}>
                    Already using Gusto?{' '}
                    <Link color='teal.500' href='/new' textDecoration="underline">
                        <p style={{ display: "inline", fontSize: '18px', fontWeight: '500' }}>Sign In</p>
                    </Link>
                </Text>
                <li>Free payroll subscription for your firm1</li>
                <li>Up to 20% revenue share or discounts for your clients</li>
                <li>Earn CPE credits from our educational live webinars</li>

            </div>

            <div>
                <img style={{height:'500px'}} src="https://prod.gusto-assets.com/assets/accountants/hero-photo-indinero@2x-e88d11774bf410df3040261ccf4a4e730f03b6d8ff424045fa44f736439dcf36.jpg.webp" alt="" />
            </div>

        </div>
    )
}