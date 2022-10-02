import './boxes.css'

export default function Boxes({src,text,link,h}){
    return(
        <div className="box">
            <div><img src={src}  alt="" /></div>
      
            
        <div>        <h1 style={{  fontSize: '25px', fontWeight: '500',  }}>{h}</h1>
        
                <p style={{fontSize:'18px' ,fontWeight:"500"}}>
                    {text}
</p>
<span className='sp'>{link}</span>
        </div>

    </div>
    )
}