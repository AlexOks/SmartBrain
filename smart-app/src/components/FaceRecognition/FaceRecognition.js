import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) => {
    return(
        <div className='center ma'>
            <div className='absolute mt3'>
                <img id='inputimage' alt='' src={imageUrl} style={{ maxWidth: 500 }} width='100%' height='auto' />
                <div className ='bounding-box' style={{top:box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    );
}
export default FaceRecognition;
