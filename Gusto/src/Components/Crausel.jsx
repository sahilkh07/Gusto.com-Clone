import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const arr =[
  {
    img:"https://prod.gusto-assets.com/wp-content/uploads/signature-Sara-Jane-Hess-1.svg",
    para:"I can’t imagine running our business without Gusto. We use it for payroll, compliance, 401(k), employee benefits, the HR resource center… the list goes on.",
    color:"#8DD3D4",
    ab:"Operations Director, SPI Media LLC"
  },
  {
    img:"https://prod.gusto-assets.com/wp-content/uploads/signature-Sara-Auld-1.svg",
    para:"Absolutely love Gusto. The people at Gusto are so helpful, and the software is just so easy and even fun to use. Delivers every time.",
    color:"#fac6b9",
    ab:'CEO, Health Possible Inc.'
  },
  {
    img:"https://prod.gusto-assets.com/wp-content/uploads/signature-Brian-Briskman-1.svg",
    para:" Gusto has literally changed how I do business. Onboarding and self-management for staff is super easy now. Running payroll is a snap, too.",
    color:'#e9b550',
    ab:'CEO, B2 Creative Studios, Inc.'
  },
  {
    img:"https://prod.gusto-assets.com/wp-content/uploads/signature-Andrew-English-1.svg",
    para:"This is a great platform. Very easy to use and the services that Gusto has expanded into have aligned with our growing company.",
    color:'#8DD3D4',
    ab:"CFO, PLANIT Studios"
  },
  {
    img:"https://prod.gusto-assets.com/wp-content/uploads/signature-Donna-Bernstein-1.svg",
    para:"Gusto is easy to understand, the platform is very user friendly, and if there’s something I don’t know how to do, support is immediately available and ready to help.",
    color:'#fac6b9',
    ab:'Accountant, Cedap USA Inc'

  },
  {
    img:"https://prod.gusto-assets.com/wp-content/uploads/signature-Ben-Opps-1.svg",
    para:'Setup was really simple. Running payroll is very efficient. Payment always happens on time, which is critical. The tax and compliance elements are taken care of for me, which is really valuable – I hate that part of payroll.',
    color:"#e9b550",
    ab:"Owner, Thrive RE Network LLC"
  }
]
export default function Crausel(){ 

  
  
  return(
    <AwesomeSlider style={{height:"400px"}}>
      {arr.map((user)=>(
        <div style={{backgroundColor:user.color}}>
          <h1 style={{fontSize:"32px",width:'700px',fontWeight:'500',marginBottom:'16px'}}>{user.para}</h1>
          <hr style={{width:'100%'}} />
          <div style={{display:'flex', justifyContent:'space-around' ,alignItems:'center' }}>
          <img src={user.img} alt="name" />
          <div style={{borderLeft:'1px solid white', }}> <p style={{fontSize:'16px',margin:'9px'}}>{user.ab}</p></div>
         
          
         
          </div>
          <hr />
          
        </div>
      ))}

  
  </AwesomeSlider>
  )
};