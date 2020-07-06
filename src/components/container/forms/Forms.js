import React from 'react';
import ActivationForm from './ActivationForm';
import {Tabs} from 'antd';
import LicenseRequestForm from './LicenseRequestForm';

const Forms = () => {

    const { TabPane } = Tabs;

    function callback(key) {
        console.log(key);
    }
    return (
        <div style={{width:'45rem'}}>
             <Tabs defaultActiveKey="1" onChange={callback} type="card">
                <TabPane 
                className='tabPane' 
                tab="Activation" 
                key="1">
                    <ActivationForm/>
                </TabPane>
                <TabPane 
                className='tabPane' 
                tab="License Request" 
                key="2">
                     <LicenseRequestForm /> 
                </TabPane>
            </Tabs>
        </div>
    )
}

export default Forms
