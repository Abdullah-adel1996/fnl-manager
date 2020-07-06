import React from 'react';
import { Typography, Avatar, Button, Divider, Layout } from 'antd';
import sidlabIcon from '../../assets/sidlabicon.png'

import './Header.css';

const Header = (props) => {

    const {Title, Text} = Typography;


    return (
        <Layout>
            <nav className='header'>
                <div className='headerTitle'>
                    <Avatar className='headerLogo' size="large" src={sidlabIcon} />
                    <Title className='headerTitle' style={{color:'#fff'}} level={4}>FNL Manager</Title>
                </div>
            </nav>
        </Layout>
    )
}
 
export default Header
