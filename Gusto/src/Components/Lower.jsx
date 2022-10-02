import React from 'react'
import {Button} from '@chakra-ui/react'
function Lower() {
  return (
    <div>

        <div style={{textAlign:"center" ,marginTop:"60px",marginBottom:"30px"} }>
            <p style={{fontSize:'15px',fontWeight:'500',color:"orangered"}}>Prices start at just $46/month</p>
            <h1 style={{marginTop:"30px",fontSize:'40px'}}>Get your team working with Gusto.</h1>
        </div>
        <div style={{display:"flex",justifyContent:'center',gap:"30px"}}>
            <div style={{width:'300px'}}>
                <h1  style={{fontSize:'30px'}}>
                Create an account
                </h1>
                <p style={{fontSize:'16px',fontWeight:'400'}}>It’s free to start. Tell us about your business and we’ll find the best plan for your needs.</p>
            </div>
            <div style={{borderLeft:'1px solid gray'}}></div>
            <div style={{width:'300px'}}>

                <h1 style={{fontSize:'30px'}}>Add your people</h1>
                <p style={{fontSize:'16px',fontWeight:'400'}}>Enter your employees into Gusto. They can even self-onboard to save you time.</p>

            </div>
             <div style={{borderLeft:'1px solid gray'}}></div>
            <div style={{width:'300px'}}>
                <h1 style={{fontSize:'24px',}}>Run your first payroll</h1>
                <p style={{fontSize:'16px',fontWeight:'400'}}>Once we have your employee and tax info, you can run payroll in just a few clicks.</p>
            </div>
        </div>
        <div style={{display:'flex' ,justifyContent:'center',marginTop:"40px"}}>
            <Button colorScheme='orange'>Create Account</Button>

        </div>


    </div>
  )
}

export default Lower