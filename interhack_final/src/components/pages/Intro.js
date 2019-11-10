import React, { Component } from 'react';
import { FaVolumeUp, FaEye, FaRegHandSpock } from 'react-icons/fa';
import './intro.css'

import logo from "../../tactus.png";

class Intro extends Component {
  render() {

    return(
        <div>
            <div className='background'></div>
            <div className="logotop">
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                    <a href="/"><img src={logo} /></a>
                    <p style={{color:'#fff', fontSize: '22px', maxWidth: '550px', textAlign: 'center', marginTop: '30px', marginBottom: '30px'}}>
                        Tactus é um sistema que auxilia professores a encontrarem forma ideal de estudos para seus alunos
                    </p>

                    <p style={{fontSize: '50px', color:'#fff'}}>
                        <FaVolumeUp style={{marginLeft: '10px', marginRight: '10px'}} title="Auditivo" />
                        <FaEye style={{marginLeft: '10px', marginRight: '10px'}} title="Visual" />
                        <FaRegHandSpock style={{marginLeft: '10px', marginRight: '10px'}} title="Cinestésico" />
                    </p>

                </div>
            </div>
        </div>
    );

  }
}

export default Intro;