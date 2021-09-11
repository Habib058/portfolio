import React from 'react';

const SkillsDetail = (props) => {
    const { img, name } = props.skillsData;
    return (
      
            <div className='col-md-4 col-sm-6 col-6 col-lg-2 text-center mb-5 d-flex justify-content-center'>
            <div style={{
                boxShadow:'2px 2px 10px #6D6D6D',
                borderRadius:'8px',
                height:'150px', 
                background:'rgb(255, 255, 255)',
                width:'150px',

                }}>
                <img style={{marginTop: '10px', height: '80px' }} src={img} alt="" />
                <p style={{ color:'rgb(0, 55, 131)', marginTop: '10px', fontWeight:'600',fontSize:'19px' }}>{name}</p>
            </div>
        </div>
       
    );
};

export default SkillsDetail;