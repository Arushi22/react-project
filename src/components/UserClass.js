import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            count: 0,
        };
        console.log(this.props.name + " Child component");
    }

    componentDidMount(){
        console.log(this.props.name + " 5componentDidMount called")
    }

    render(){
        return(
            <div className="user-card">
                <h1>Count : {this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count : this.state.count + 1
                    })
                }}>Count increase</button>
                <h2>{this.props.name}</h2>
                <h3>{this.props.location}</h3>
                <h4>{this.props.contact}</h4>
            </div>
        )
    }
}

export default UserClass;