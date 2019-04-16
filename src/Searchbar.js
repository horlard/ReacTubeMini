import React from 'react';


class Searchbar extends React.Component {
    state = {
        term : ''
    }

    submit = (event) => {
        event.preventDefault();
        this.props.formsubmit(this.state.term);
    }
    change = (event) => {
        this.setState({
            term: event.target.value 
        })
    }


    render() {
        return (
            <div className='ui segment'>
                <form className='ui form' onSubmit= {this.submit}>
                <div className='field'>
                <label>ReacTube Search</label>
                <input type='text' onChange={this.change} value={this.state.term}/>
                
                </div>
                 </form>    
            </div>
        )
    }
} 

export default Searchbar;