import React from 'react';
import {debounce} from 'lodash'




import Searchbar from './Searchbar.js';
import youtube from './apis/youtube';
import Videolist from './Videolist.js';
import Videoddetail from './Videoddetail.js';
import Logo from './logo.png';
import './style.css';



class App extends React.Component {
    state = {
        videos: [] ,
        selectedVideo : null,
        suggestedResults:[]
    }

    componentDidMount () {
        this.onFormSubmit('react.js');
    }

    onFormSubmit= async (term) => {
      const response= await youtube.get('/search', {
            params : {
                q: term
            }
        })
        this.setState({videos:response.data.items,selectedVideo:response.data.items[0]});
    }

    callApi=debounce((term)=> {
        youtube.get('/search', {
            params : {
                q: term
            }
        }).then(res=> {
            this.setState({suggestedResults:res.data.items})
        })
    },500)


    

    onvideoselect= (video) => {
        this.setState({selectedVideo : video})
    }
    
    render () {
        return (
            

            <div className='ui container'>
            <div className='logo'>
            <img src={Logo} />
            
            </div>
                 <Searchbar formsubmit={this.onFormSubmit} formChange={this.callApi}/>
                 
                 <div className='ui grid'>
                        <div className='ui row'>
                        <div className='eleven wide column'>
                        <Videoddetail video={this.state.selectedVideo}/></div>
                        <div className='five wide column'>
                        <Videolist subvideos={this.state.videos} onvideoselect={this.onvideoselect}/></div>
                        
                       
                        
                        </div>
                
                 
                 </div>
                
                 
            </div>
        )
    }
}

export default App;