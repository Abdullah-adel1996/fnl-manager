import React, {useState} from 'react';
import Forms from './forms/Forms';
import Information from './information/Information';
import { Button} from 'antd';


const Container = () => {

    const [isActive, setIsActive] = useState(false)

    let content = null 

    if (isActive) {
        content = <Information/>
    } else {
        content = <Forms/>
    }

    return (
        <div 
        className='container'>
                {content}
                <Button 
                    onClick={() => setIsActive(!isActive)} style={{marginLeft:'5rem'}} type='primary'>
                    Activate
                </Button>
        </div>
    )
}

export default Container
