import React from 'react';
import { Form, Input, Button} from 'antd';
import LocalizedStrings from 'react-localization';
import {Strings} from '../../../Strings';



const LicenseRequestForm = () => {

    let strings = new LocalizedStrings({Strings});


    const onFinish = values => {
        console.log('Success:', values);
      };
    
    const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            >
    
        <span className='bold'>{strings.en.name}</span>
        <Form.Item
            name="name"
            rules={[
            {
                required: true,
                message: strings.en.nameReqMsg,
            },
            ]}
        >
            <Input />
        </Form.Item>
        <span className='bold'>{strings.en.organization}</span>
        <Form.Item
            name="organization"
            rules={[
            {
                required: true,
                message: strings.en.organizationReqMsg,
            },
            ]}
        >
            <Input />
        </Form.Item>
        <span className='bold'>{strings.en.country}</span>
        <Form.Item
            name="country"
            rules={[
            {
                required: true,
                message: 'Please input your country name',
            },
            ]}
        >
            <Input />
        </Form.Item>
        <span className='bold'>Phone</span>
        <Form.Item
            name="phone"
            rules={[
            {
                required: true,
                message: 'Please input your phone number',
            },
            ]}
        >
            <Input />
        </Form.Item>
        <span className='bold'>Email</span>
        <Form.Item
            name={['user', 'email']} 
            rules={[
                {
                  type: 'email',
                  message: 'The input is not valid Email!',
                },
                {
                  required: true,
                  message: 'Please input your Email!',
                },
              ]}
            >
            <Input />
        </Form.Item>
        <span className='bold'>Password</span>
        <Form.Item
            name="password"
            rules={[
            {
                required: true,
                message: 'Please input your password!',
            },
            ]}
            hasFeedback
        >
            <Input.Password />
      </Form.Item>
      <span className='bold'>Confirm password</span>
      <Form.Item
            name="confirmPassword"
            dependencies={['password']}
            hasFeedback
            rules={[
            {
                required: true,
                message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
                validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                }

                return Promise.reject('The two passwords that you entered do not match!');
                },
            }),
            ]}
        >
            <Input.Password />
        </Form.Item>

        <span className='bold'>Serial number</span>,
        <Form.Item
            name="serialnumber"
            rules={[
            {
                required: true,
                message: 'Please input your serial number',
            },
            ]}
        >
            <Input />
        </Form.Item>

        <center>
            <Button className='btn' type="primary" htmlType="submit">
                Request a License
            </Button>
        </center>

    </Form>
    )
}

export default LicenseRequestForm;
