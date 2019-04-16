import React from 'react';
import './style.css';

const Videoitem = (props) => {
    return (
         <div className=' video-item item' onClick={() => {props.onvideoselect(props.video)}}>
             <img src={props.video.snippet.thumbnails.medium.url} className='ui image' />

             <div className='content'>
                 <div className='header'>
                 {props.video.snippet.title}
                 
                 </div>
             </div>
            
         </div>
        )
}

export default Videoitem;