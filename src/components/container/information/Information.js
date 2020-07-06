import React from 'react';
import {Tabs} from 'antd';
import LicenseInformation from './LicenseInformation';
import NetworkInformation from './NetworkInformation';

const Information = () => {

    const { TabPane } = Tabs;

    function callback(key) {
        console.log(key);
    }

    return (
        <div style={{width:'45rem'}}>
             <Tabs defaultActiveKey="1" onChange={callback} type="card">
                <TabPane 
                className='tabPane' 
                tab="License Information" 
                key="1">
                    <LicenseInformation/>
                </TabPane>
                <TabPane 
                className='tabPane' 
                tab="Network Information" 
                key="2">
                     <NetworkInformation /> 
                </TabPane>
            </Tabs>
        </div>
    )
}

export default Information
