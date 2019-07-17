import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl}) => {
    return(
        <div className='center ma'>
            <div className='absolute mt2'>
                <img alt='' src={imageUrl} style={{ maxWidth: 500 }} width='100%' height='auto' />
            </div>
        </div>
    );
}
export default FaceRecognition;
