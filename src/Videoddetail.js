import React from 'react';
const Videoddetail = (props) => {

    if (!props.video) {
        return <div>loading...</div>
    }

    const source = `https://www.youtube.com/embed/${props.video.id.videoId}`;
    return (



        <div>
            <div className='ui embed'>
                <iframe src={source}>

                </iframe>
            
            </div>
            <div className='ui segment'>
                <h4 className= 'ui header'>{props.video.snippet.title}</h4>
                <p>{props.video.snippet.description}</p>
            </div>

        </div>
        
    )
}


export default Videoddetail;