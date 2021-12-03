import React from 'react'
import '../__STATIC/About.css'
import '../__STATIC/RESPONSIVE/About.css'
import me from '../image/me.jpg'
function About() {
    return (
        <div className='box-about'>
            <div className='about-heading-box'>
                <div>
                    <h1>About Me </h1>
                </div>
            </div>
            <div className='photo-of-me' style={{padding:"0px"}}>
                <div>
                    <img src={me}/>
                </div>
            </div>
                
            <div className='about-text'>
                <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec vulputate magna, sed sodales lacus. Mauris varius blandit ante, et blandit elit <br/>
                        tincidunt nec. Nunc sed nisl vel nisl finibus fringilla et id ante. Quisque tortor ipsum, vestibulum at ullamcorper ut, laoreet et mauris. <br/>
                        Vivamus in scelerisque metus. Donec hendrerit eleifend est accumsan hendrerit. Fusce bibendum mauris lorem, quis molestie metus malesuada id.<br/>
                        Pellentesque elementum eros et vestibulum efficitur. Morbi eu mauris sed nisl porta varius. In ut dolor elit. Donec ornare varius tincidunt. <br/>
                        Integer condimentum gravida elit, nec fringilla dui maximus id. Donec facilisis massa at augue maximus, dapibus vestibulum tortor mollis. 
                        </p>
                <div style={{display:"flex",justifyContent:"center" }}>
                    <div style={{borderBottom:"#0F3E57 dashed" , width:"7%" , marginTop:"20px"}}>
                    </div> 
                </div>

                </div>
            </div>
            <div>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <strong className="tags-1">Web Developer</strong>
                    <strong className="tags-2">Blockchain DApp Developer</strong>
                    <strong className="tags-3">UI/UX Designer</strong>   
                </div>
            </div>



        </div>
    )
}

export default About
