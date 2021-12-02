import React from 'react'
import '../__STATIC/Footer.css'

function Footer() {
    return (
        <div>
            <div className="footer-box">
                <div style={{display:"flex" , justifyContent:"center" }}>
                    <div style={{display:"flex" , justifyContent:"center" ,borderBottom:"solid 2px" ,width:"40%"}}>
                        <h1>Quick link</h1>
                    </div>
                </div>
                <div className='quick-link'>
                    <span>Resume</span>
                    <span>Project</span>
                    <span>About</span>
                    <span>Blog</span>
                    <span>Github</span>
                </div>
                <div className='copyright'>
                    <span> Demo images source: <a href='' >Unsplash</a></span>
                    <span>© Copyright ©️ 2021-2022   |   All rights reserved. </span>
                    <span>❤️ designed and developed by <a href="">Himangshu Baishya</a></span>
                </div>

            </div>
        </div>
    )
}

export default Footer
