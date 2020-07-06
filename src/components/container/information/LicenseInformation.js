import React from 'react';
import {Button} from 'antd';

const LicenseInformation = () => {
    return (
        <div>
            <p><span className='bold'>Account:</span> Abdullah Adel</p>
            <p><span className='bold'>Email:</span> abdullah@sidlab.se</p>
            <p><span className='bold'>License type:</span> Perpetual – FNL</p>
            <p><span className='bold'>Modules:</span> 
            <ul style={{marginLeft:'7rem'}}>
                <li>Acoustics</li>
                <li>Flow</li>
                <li>Acquisition</li>
            </ul>
            </p>
            <p><span className='bold'>License expiration date:</span> N/A</p>
            <p><span className='bold'>Maintenance subscription expiration date:</span> 10/12/2020</p>
            <p><span className='bold'>Number of seats:</span> 5</p>
            <div className='btnWrapper'>
                <Button 
                className='btn'
                type="primary" >
                        Deactivate license
                    </Button>
                <Button 
                className='btn'
                type="primary" >
                        Update license
                    </Button>
            </div>
        </div>
    )
}

export default LicenseInformation
