import { Box } from "@chakra-ui/react"

let item =[
    {
        img:'https://prod.gusto-assets.com/assets/accountants/illo-c-heart-with-lines@2x-f06f08ae28b9e22d4e7cd23eb95c0b28cf2e75e938d7106179d8f29922ab8b98.png.webp',
        para:'Introduce clients to payroll and benefits they"ll love.'
    },
    {
        img:"https://prod.gusto-assets.com/assets/accountants/illo-c-watch@2x-abf89d3f8330ddf549c73a63a9410f09fb07b95f909cd7c99bbf76ce510830fe.png.webp",
        para:'Save time managing client data with Gusto Pro.'
    },
    {
        img:"https://prod.gusto-assets.com/assets/accountants/illo-c-diamond@2x-9d12b72a06c799aad3a03477a11e7d5e6377046344ef3a123a060598870a4afe.png.webp",
        para:'Earn perks and rewards as you add new clients.'
    },
    {
        img:'https://prod.gusto-assets.com/assets/accountants/illo-c-handshake@2x-c8bc6cede73053eaaef8d01644719d33c4d04eb7eccad880f47d315c65ff53db.png.webp',
        para:"Add people advisory services to build a more resilient firm."

    }

]

export default function Cup2(){

    return(
        <div>
            <div style={{display:'flex', justifyContent:'center'}}>
            <h1 >Why Chose Gusto</h1>
            </div>

        <div style={{display:"flex",justifyContent:'space-around'}}>
           
            
           
            {item.map((item)=>(
                 
                <div style={{width:'200px',marginTop:"60px"}}>
                    <img src={item.img} alt="" />
                    <p>{item.para}</p>
                </div>
            ))}
            
        </div>
        </div>
    )
}