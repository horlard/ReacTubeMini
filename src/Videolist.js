import React from 'react';
import Videoitem from './Videoitem';

const Videolist = (props) => {
    const renderedlist=props.subvideos.map((video) => {
      return  <Videoitem video={video} onvideoselect={props.onvideoselect}/>
    })

    return  <div className='ui relaxed divided list'>{renderedlist}</div>
}

export default Videolist;