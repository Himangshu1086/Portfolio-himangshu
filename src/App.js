import './App.css'; 
import './__STATIC/RESPONSIVE/App.css'
import {useState} from 'react'
import img from './image/back.jpg'
import logo from './image/Logo .png'
import cross from './image/Cross.png'
import hum from './image/Hamburger.png'
import chat from './image/chat.png'
import Card from './__COMPONENTS/Card'
import About from './__COMPONENTS/About'
import linkedIn from './image/linkedin.png'
import facebook from'./image/facebook.png'
import Insta from './image/instagram.png'
import gmail from './image/gmail.png'
import github from './image/github.png'
import BlogBox from './__COMPONENTS/Blog-box'
import eg from './image/exam.jpg'

import $ from 'jquery'
import Contact from './__COMPONENTS/Contact';
import Footer from './__COMPONENTS/Footer';
function App() {

const navigatorOpen=()=>{
  $('#open-nav').css({display:"block",width:"40%"  })
  $('#nav-item').css({display:"block"})
}
const navigatorCross =()=>{
  $('#nav-item').css({display:"none"})
  $('#open-nav').css({width:'0%'})
}

const tech = [ 'ReactJs', 'Solidity' , 'Web3js','truffle']
const url ='https://github.com/Himangshu1086/Ethereum-Decentralized-Voting-App'
const post = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec vulputate magna, sed sodales lacus. Mauris varius blandit ante, et blandit elit
tincidunt nec. Nunc sed nisl vel nisl finibus fringilla et id ante. Quisque tortor ipsum, vestibulum at ullamcorper ut, laoreet et mauris.
Vivamus in scelerisque metus. Donec hendrerit eleifend est accumsan hendrerit. Fusce bibendum mauris lorem, quis molestie metus malesuada id.
Pellentesque elementum eros et vestibulum efficitur. Morbi eu mauris sed nisl porta varius. In ut dolor elit. Donec ornare varius tincidunt.
Integer condimentum gravida elit, nec fringilla dui maximus id. Donec facilisis massa at augue maximus, dapibus vestibulum tortor mollis.`
 
return (
    <div>
    <div className="image-back">
    <div id ='open-nav' className="nav-side-bar">
      <img onClick ={navigatorCross} src={cross} className="cross-icon"/>
      <div id='nav-item'>
        <h1>Home</h1>
        <h1>Projects</h1>
        <h1>Blogs</h1>
        <h1>Resume</h1>
      </div>
      <div style={{bottom:"45%",left:"8%", position:"absolute",borderBottom:" #0F3E57 solid 2px", width:"70%", height:"20px"}}></div>
    </div>
    <img onClick ={navigatorOpen} src={hum} className='humb' />
      <img  src={logo} className='logo-cover'/>
      <img  src={img} alt="background" className='cover-background-image'/>
      <div className='cover-heading'>
        <h1 >Hi , I'm Himangshu</h1>
        <p class="line-1 anim-typewriter" >I build things for the Web.</p>
        <h1 className='discover'>Discover my amazing Workspace !</h1>
        <p style={{borderBottom:"solid white 2px", width:"25%"}}></p>
        <br/>
      </div>
    </div>
    <div id="chat-icon" className='chat-btn'>
      <a href='https://wa.me/8638281845'>
        <img style={{margin:"5.5px"}} src={chat}/>
      </a>
    </div>
    <div >
      <div style={{display:"flex" , justifyContent:"center"}}>
      <div className='label-project'>
        <h1>PROJECTS</h1>
      </div>
      </div>
        <div className='box-for-project'>
          <Card 
          title ='Ethereum Decentralised Voting Application' 
          card_img = {eg}
          tech = {tech}
          explaination = {post}
          url = {url} 
          />
          <Card 
          title ='Ethereum Decentralised Voting Application' 
          card_img = {eg}
          tech = {tech}
          explaination = {post}
          url = {url} 
          />
          <Card 
          title ='Ethereum Decentralised Voting Application' 
          card_img = {eg}
          tech = {tech}
          explaination = {post}
          url = {url} 
          />
          <Card 
          title ='Ethereum Decentralised Voting Application' 
          card_img = {eg}
          tech = {tech}
          explaination = {post}
          url = {url} 
          />
          <Card 
          title ='Ethereum Decentralised Voting Application' 
          card_img = {eg}
          tech = {tech}
          explaination = {post}
          url = {url} 
          />
          <Card 
          title ='Ethereum Decentralised Voting Application' 
          card_img = {eg}
          tech = {tech}
          explaination = {post}
          url = {url} 
          />
          {/* <Card/>
          <Card/><Card/>
          <Card/><Card/> */}
        </div>
    </div>
    <div className='about-me'>
        <div><About/></div>
    </div>
    <div  className="box-for-social">
      <div>
          <div>
              <h1>Social Media Handles </h1>
          </div>
      </div>
        <div className="box-for-link">
        <img src={github} />
        <img src={linkedIn}/>
        <img src={Insta}/>
        <img src={facebook}/>
        <img src={gmail}/>
        </div>
      </div>
    <div className='box-for-blog'>
         <div><BlogBox/></div> 
    </div>
<div className='contact-form'>
      <div><Contact/></div>
</div>



<div className='footer'>
  <Footer/>
</div>






    </div>
  );
}

export default App;
