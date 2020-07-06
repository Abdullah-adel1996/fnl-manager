import React, { useState, useEffect } from 'react';
import { Form, Input, Button} from 'antd';
import LocalizedStrings from 'react-localization';
import {Strings} from '../../../Strings';

const ActivationForm = () => {

  const [lang, setLang] = useState('en')

  let strings = new LocalizedStrings({Strings});


    const onFinish = values => {
        console.log('Success:', values);
      };
    
    const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
    };

    return (
        <Form
        style={{width:'100%'}}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        >
          <span className='bold'>{strings.en.email}</span>
            <Form.Item
            name={['user', 'email']} 
            rules={[
              {
                type: 'email',
                message: strings.en.emailValidationMsg,
              },
              {
                required: true,
                message: strings.en.emailReqMsg,
              },
            ]}
            >
                <Input />
            </Form.Item>
            <span className='bold'>{strings.en.password}</span>
            <Form.Item
            name="password"
            rules={[{ required: true, message: strings.en.passwordReqMsg }]}
            >
                <Input.Password />
            </Form.Item>

        <center>
          <Button className='btn' type="primary" htmlType="submit">
              {strings.en.login}
          </Button>
        </center>
        </Form>
    )
}

export default ActivationForm
