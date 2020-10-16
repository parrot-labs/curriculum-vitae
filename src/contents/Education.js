import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="SDN 157019" where="PINANGSORI 12" from="2004" to="2010"/>
            <Widecard title="SMPN 2" where="PANDAN NAULI" from="2010" to="2013"/>
            <Widecard title="SMAN 1" where="PINANGSORI" from="2013" to="2016"/>
            <Widecard title="Computer Engineering" where="Telkom University" from="2016" to="2020"/>
            </div>
            )
        }
    }
    
export default Education
    