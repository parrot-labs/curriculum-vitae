import React, { Component } from 'react'

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'myskills':['LINUX','REACT JS','PHOTOSHOP','PYTHON']
        };
    }

    render() {
        return (
            <div className="condiv skills">
            <h1 className="subtopic">My Basic Skills</h1>
            <ul>
            {this.state.myskills.map((value)=>{
                return <li>{value}</li>
            })}
            </ul>
            </div>
            )
        }
    }
    
    export default Skills
    