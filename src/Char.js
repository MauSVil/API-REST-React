import React, {Component} from 'react'

class Char extends Component{
    render(){
        return(
            <p style= {{color:this.props.col}}>{this.props.name}</p>
        )
    }
}

export default Char
