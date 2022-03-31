import React, { Component } from 'react';

class DescriptionCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            Age: this.props.Age
        }
    }
    addAge = () => {
        this.setState({
            Age: this.state.Age + 1
        })
    }
    render(){
        return(
            <div>
                <h1>{this.props.LastName} , {this.props.FirstName}</h1>
                <h3>Age: {this.state.Age}</h3>
                <h3>Hair Color: {this.props.HairColor}</h3>
                <button onClick={this.addAge}>Birthday Button for {this.props.LastName} {this.props.FirstName}</button>
            </div>
        )
    }
}

export default DescriptionCard;