import React from 'react'
import eg from '../image/exam.jpg'
import '../__STATIC/Card.css'
import '../__STATIC/RESPONSIVE/Card.css'

function Card() {
    return (
        <div style={{position:"relative",margin:" 20px" ,boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",borderRadius:"5px", padding:"20px",background:"white"}}>
            <div className='container'>
                    <div className='image-of-project'>
                        <img src={eg} alt='project image'/>
                    </div>
                    <div className='project-title'>
                        <h1>Ethereum Decentralised Voting Application</h1>
                    </div>
                    <div style={{textAlign:"center" , marginTop:"10px" , color:"black"}}>
                        <span>technology used ⤵️</span>
                    </div>
                    <div className='tags-tech'>
                        <strong>Reactjs</strong>
                        <strong>Reactjs</strong>
                        <strong>Reactjs</strong>
                        <strong>Reactjs</strong>
                    </div>
                </div>
                    <div className='detail-btn'>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec vulputate magna, sed sodales lacus. Mauris varius blandit ante, et blandit elit <br/>
                        tincidunt nec. Nunc sed nisl vel nisl finibus fringilla et id ante. Quisque tortor ipsum, vestibulum at ullamcorper ut, laoreet et mauris. <br/>
                        Vivamus in scelerisque metus. Donec hendrerit eleifend est accumsan hendrerit. Fusce bibendum mauris lorem, quis molestie metus malesuada id.<br/>
                        Pellentesque elementum eros et vestibulum efficitur. Morbi eu mauris sed nisl porta varius. In ut dolor elit. Donec ornare varius tincidunt. <br/>
                        Integer condimentum gravida elit, nec fringilla dui maximus id. Donec facilisis massa at augue maximus, dapibus vestibulum tortor mollis. 
                        </p>
                        <div>
                        <button>CODE</button>
                        <button>DEPLOYED WEBSITE</button>
                        </div>
                    </div>
            </div>
    )
}

export default Card
