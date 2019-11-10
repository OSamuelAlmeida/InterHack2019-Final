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
                    <img src={logo} />
                    <p style={{fontSize: '22px', maxWidth: '550px', textAlign: 'center', marginTop: '20px', fontWeight: 'bold'}}>
                        Tactus é um sistema que visa auxiliar alunos e professores a encontrarem sua forma ideal de estudos
                    </p>

                    <p style={{fontSize: '50px'}}>
                        <FaVolumeUp style={{marginLeft: '10px', marginRight: '10px'}} />
                        <FaEye style={{marginLeft: '10px', marginRight: '10px'}} />
                        <FaRegHandSpock style={{marginLeft: '10px', marginRight: '10px'}} />
                    </p>

                </div>
            </div>
        </div>
    );

  }
}

export default Intro;