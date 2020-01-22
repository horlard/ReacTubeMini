import React from 'react'
import styled from 'styled-components';


const HeaderList = styled.ul`
   list-style-type: none
`
const List=styled.li`
    &:not(:last-child) {
        margin-bottom:10px;
    }
    cursor: pointer;
    &:hover {
        color:#9e8282;
    }

`
export default (props) =>{
    return (
        <div>
            <HeaderList>
                {
                    props.suggestedResults.map(res=> {
                        return <List onClick={()=>props.onChangeTerm(res.snippet.title)}>{res.snippet.title}</List>
                    })
                }
            </HeaderList>
        </div>
    )
}
