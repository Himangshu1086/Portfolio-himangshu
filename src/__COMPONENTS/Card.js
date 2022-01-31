import React from 'react'
import '../__STATIC/Card.css'
import '../__STATIC/RESPONSIVE/Card.css'
import {Link} from 'react-router-dom'
// title , image , tech1 , tech2 , tech3 , tech4 , code_url , site_url)
function Card(props)  {
    return (
        <>
        <div style={{position:"relative",margin:" 20px" ,boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",borderRadius:"5px", padding:"20px",background:"white"}}>
                <div className='container'>
                    <div className='image-of-project'>
                        <img src={props.card_img} alt='project image'/>
                    </div>
                    <div className='project-title'>
                        <h1>{props.title}</h1>
                    </div>
                </div>
                
                    <div className='detail-btn'>
                        <p>{props.explaination}</p>
                        <div style={{textAlign:"center" , marginTop:"10px" , color:"black"}}>
                        <span>technology used <span style={{color:"black"}}>⤵️</span></span>
                    </div>
                    <div className='tags-tech'>
                        <strong>{props.tech[0]}</strong>
                        <strong>{props.tech[1]}</strong>
                        <strong>{props.tech[2]}</strong>
                        <strong>{props.tech[3]}</strong>
                    </div>
                    </div>
                    
            <div className='url-btn'>
                <div>
                <a href ={props.url}><button>code </button></a>
                <a href ={props.url}><button>deployed website</button></a>
                </div>
            </div>
            </div>
        </>
    )
}

export default Card
