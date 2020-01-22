import React from 'react';
import Popup from './popup';


class Searchbar extends React.Component {
    state = {
        term : ''
    }

    submit = (event) => {
        event.preventDefault();
        this.props.formsubmit(this.state.term);
        this.props.stateClear()
    }
    change = (event) => {
        this.setState({
            term: event.target.value 
        }, ()=> this.props.formChange(this.state.term))
    }

    onChangeTerm=(term)=> {
        this.props.formsubmit(term)
        this.props.stateClear()
       
    }


    render() {
        return (
            <div className='ui segment'>
                <form className='ui form' onSubmit= {this.submit}>
                <div className='field'>
                <label>ReacTube Search</label>
                <input type='text' onChange={this.change} value={this.state.value}/>
                
                </div>
                 </form>  
                 <Popup suggestedResults={this.props.suggestedResults} onChangeTerm={this.onChangeTerm}/>  
            </div>
        )
    }
} 

export default Searchbar;