import React , {useState , useEffect} from 'react'
import '../__STATIC/Blog-Box.css'
import '../__STATIC/RESPONSIVE/BlogBox.css'
import eg from '../image/exam.jpg'
import s1 from '../image/s1.jpg'
import s2 from '../image/s2.jpg'
import s3 from '../image/s3.jpg'
import $ from 'jquery'

function BlogBox() {

    const  arr =[];
    arr.push(eg);
    arr.push(s1);
    arr.push(s2);
    arr.push(s3);
    let i =0;

        setInterval(()=>
        {
            if(arr.length === i){
                i=0;
            }
            $('#imag-slide').attr("src" ,arr[i]);
            i++;
        } 
        , 3000);
   
    
    return (
        <div style={{padding:"20px"}}>
            <div className='blog-container'>
            <div className='blog-box'>
                
                <div className="title-blog">
                   <h1>B</h1>
                   <h1>L</h1>
                   <h1>O</h1>
                   <h1>G</h1>
                   <h1>S</h1>
                </div>
                <div className='blog-slideshow'>
                    <div id="box-img" className='image-box-slideshow'>
                        <img id="imag-slide" src={arr[0]}/>
                    </div>
                    <div className='text-slide'>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec vulputate magna, sed sodales lacus. Mauris varius blandit ante, et blandit elit
tincidunt nec. Nunc sed nisl vel nisl finibus fringilla et id ante.</h1>
                    </div>
                    <div className='btn-slide'>
                        <button>See More</button>
                    </div>
                </div>
            </div>
            </div>
            </div>
    )
}

export default BlogBox
