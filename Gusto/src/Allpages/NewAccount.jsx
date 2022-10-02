import './newaccount.css'
import { useState, useRef, useEffect } from 'react'
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Tooltip,
  useToast,
  Image

} from '@chakra-ui/react'
import {AiFillLock} from 'react-icons/ai'
export default function NewAccount() {
  let Data = JSON.parse(localStorage.getItem("dataSignup"))||[];
  const [erroi, setErr] = useState(false)
  const [focus, setFocus] = useState(false)

  const toast = useToast()

  const [user, setUser] = useState({
    name: '', email: '', password: ''
  })
  let nam, val
  const handleInputChange = (e) => {
    e.preventDefault()
    console.log(e.target.value)

    nam = e.target.name;
    val = e.target.value
    setUser({ ...user, [nam]: val })
  }
  const handleClick = () => {
    
    setFocus(true)
    setTimeout(()=>{
      
    if (user.name === "" || user.email === "" || user.password === "") {
      setErr(true)
      setFocus(false)
    
    } else {
      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
      Data.push(user);
      localStorage.setItem("dataSignup",JSON.stringify(Data))
      setFocus(false)
  
    }
    
  },1000)
  


  }



  return (
    <div> <div className='nw' style={{display:'flex' ,width:'500vh' ,position:'fixed' ,gap:'40px',maxWidth:'inherit',top:'0',padding:'17px 12px', background:'white',zIndex:'200' }}><Image src='https://prod.gusto-assets.com/assets/svg/header/gusto-logo-bfed4fde4bd2b5dd364ab0e58f77fc90aeefa2f1ecdb7fff524279642e23f9c2.svg'/></div>
    <div className='newaccount'>
      <div style={{ width: '500px', paddingTop: '100px' }}>
        <h1 style={{fontSize:"40px"}}>Get started with Gusto</h1>
        <p style={{fontSize:'16px',fontWeight:'500'}}>We offer one intuitive place to manage payroll, benefits, and HR for your business.</p>
        <p style={{fontSize:'16px'}}>Already a user <Link style={{color:'green',textDecoration:"underline"}} to='/signin'>Signin</Link></p>
        <img src="https://prod.gusto-assets.com/assets/packs/media/signupV2/plant_shop_employees-d521fb8d.svg" alt="" />

      </div>
      <div className='box'>
        
        
        <FormControl isRequired isInvalid={erroi}>
          <Button style={{margin:"0px 0px 24px 30px",padding:'20px 100px',marginTop:"40px"}}> <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://cdn-icons-png.flaticon.com/512/2991/2991148.png'
        alt='Fluffybuns the destroyer'
        mr='12px'
      />
      <span>Sign up with Google</span></Button>
  
     <p style={{marginBottom:"20px",textAlign:'center',fontSize:"20px"}} >or</p> 


          <Input placeholder='Full Name' name='name' value={user.name} onChange={handleInputChange} />
          {!erroi ? (
            <FormHelperText>
              Enter the Name
            </FormHelperText>
          ) : (
            <FormErrorMessage>Name is required.</FormErrorMessage>
          )}



          <Input name='email' onChange={handleInputChange} type="email" placeholder='email' value={user.email}
          />
          {!erroi ? (
            <FormHelperText>
              Enter the email you'd like to receive the newsletter on.
            </FormHelperText>
          ) : (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}

          <Input type='text' placeholder='Compnay Name'></Input>
          {!erroi ? (
            <FormHelperText>
              Enter the Compnay Name (Not Mandatory).
            </FormHelperText>
          ) : (
            <FormErrorMessage>Not required(Skip It).</FormErrorMessage>
          )}

          <Input type='number' placeholder='No of Employees'></Input>
          {!erroi ? (
            <FormHelperText>
              Enter No of Employees (Not Mandatory).
            </FormHelperText>
          ) : (
            <FormErrorMessage>Not required(Skip It).</FormErrorMessage>
          )}



          <Input name='password' onChange={handleInputChange} type='password' value={user.password} placeholder="password"></Input>
          {!erroi ? (
            <FormHelperText>
              Enter Password.
            </FormHelperText>
          ) : (
            <FormErrorMessage> Password is required.</FormErrorMessage>
          )}



          <Button isLoading={focus} style={{backgroundColor:"orangeRed",color:"white"}}
            onClick={handleClick}
          >
            Submit
          </Button>
          <div style={{marginBottom:'20px'}}>Already Using Gusto<Link style={{color:"green"}}> Sign In Here</Link></div>
          <div>By Creating an account,you agree to <span style={{color:'green'}}>terms and condition</span>,the payroll and our privacy policy</div>


        </FormControl>





      </div>



    </div>
    </div>
  )
}