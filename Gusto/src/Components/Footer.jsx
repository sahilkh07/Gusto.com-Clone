import React from 'react'
import './footer.css'
import {Link} from '@chakra-ui/react'

function Footer({name,text1,text2,text3,text4,text5,text6,text7}) {
  return (
    <div>
        <h2 style={{fontWeight:'600'}}>{name}</h2>
        <p><Link _hover={{color:'green.400'}}>{text1}</Link></p>
        <p><Link _hover={{color:'green.400'}}>{text2}</Link></p>
        <p><Link _hover={{color:'green.400'}}>{text3}</Link></p>
        <p><Link _hover={{color:'green.400'}}>{text4}</Link></p>
        <p><Link _hover={{color:'green.400'}}>{text5}</Link></p>
        <p><Link _hover={{color:'green.400'}}>{text6}</Link></p>
        <p><Link _hover={{color:'green.400'}}>{text7}</Link></p>

    </div>
  )
}

export default Footer