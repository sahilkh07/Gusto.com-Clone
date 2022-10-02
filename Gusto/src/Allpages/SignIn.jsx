import './signin.css'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    useToast,
    color,
    background,
    Image
    
} from '@chakra-ui/react'

import { useState } from 'react'
import { useContext } from "react";
import { AuthContext } from '../Context/AuthContextProvider';

import { Link, Navigate } from 'react-router-dom'
export default function SignIn() {
    let Login = {};
    let {isAuth,setIsAuth}= useContext(AuthContext);
    const [user, setUser] = useState({
         email: '', password: ''
      })
      const[load,setLoad]=useState(false)
      const toast =useToast()

      let nam,val
      const handleInputChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
    
        nam = e.target.name;
        val = e.target.value
        setUser({ ...user, [nam]: val })
      }
      const handleClick=()=>{
        setLoad(true)
        setTimeout(()=>{
        let flag = false;
        let loginData = JSON.parse(localStorage.getItem("dataSignup"));
        for(let i=0; i<loginData.length; i++){
            if(loginData[i].email==user.email && loginData[i].password==user.password){
                    flag = true;
                    let name = loginData[i].name
                    Login={
                        name,
                    };
                    localStorage.setItem("dataLogin",JSON.stringify(Login))
                }
            }
        if(flag){
            setLoad(false)
            setIsAuth(true)
            toast({
                title: 'Login Succesful.',
                
                status: 'success',
                duration: 4000,
                isClosable: true,
              })
        }else{
            setLoad(false)
            toast({
                title: 'Wrong Credentials.',
               
                position:'top',
                status:"error",
                duration: 4000,
                isClosable: true,
              })
        }
    },1000)
   

      }
      
      if(isAuth){
       return <Navigate to='/'/>
    }
      let data = JSON.parse(localStorage.getItem("dataLogin"))
      
    return (<div className="signin">
        <div>
            <img src="https://d3bnlkto289wdc.cloudfront.net/assets/packs/media/illustrations/illo-people-with-bouquet-a88253a7.svg" alt="" />
        </div>
        <div className='popup1' >
            <div style={{width:"70%",}}>
            <img style={{width:'250px'}} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.TbXiQ1-AUMZYt5ulNx5WVQHaDq%26pid%3DApi&f=1&ipt=7dc81935c7c857c447c498940638e4ee8230b80dfb5b3ec7883985b2aa8b43e6&ipo=images" alt="" />
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type='email'  name='email' value={user.email} onChange={handleInputChange}  />
                <FormHelperText>We'll never share your email.</FormHelperText>
                <FormLabel>Password</FormLabel>
                <Input type='password'  name='password' value={user.password} onChange={handleInputChange} />
                <FormHelperText>We'll never share your email.</FormHelperText>
                <Link to='/'style={{color:'green',textDecoration:'underline'}}>Having trouble sign in</Link>
            <br />
            <input type="checkbox"/>Remember Me
            <br />
            <Button style={{padding:'1% 40%',marginTop:'20px',background:'#0a8080',color:"white"}} type="submit" isLoading={load}
   onClick={handleClick}>Sign In</Button>
            </FormControl>
            <p style={{textAlign:'center',margin:"10px"}}>Or</p>
            <hr />
            <div style={{display:"flex",justifyContent:'center'}}>
            <Button><Image  boxSize='1.5rem'
        borderRadius='full'
        src='https://cdn-icons-png.flaticon.com/512/2991/2991148.png'
        alt='Fluffybuns the destroyer'
        mr='12px'/>Sign In With Google</Button>
            </div>
            <br />
            <div style={{display:"flex",gap:'20px'}}>
            <Button style={{padding:"20px"}}><Image boxSize='1.5rem'
        borderRadius='full'
        src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.6T3Zc8DUKQaYIztLZxt1bgHaHa%26pid%3DApi&f=1&ipt=a5b7d656030eb82291666fdf396987e2a3ef4ba3349dd80932dfccbdc1540f03&ipo=images'
        alt='Fluffybuns the destroyer'
        mr='4px'/>Sigin with xero</Button>
            <Button style={{paddind:'25px'}}>Sign In with intuit</Button>
            </div>
            
            </div>

        </div>
        <div style={{ marginLeft:'160px'}}>
            <img src="https://d3bnlkto289wdc.cloudfront.net/assets/packs/media/illustrations/illo-2-person-scene-01ac18a3.svg" alt="" />
        </div>

    </div>
    )
}