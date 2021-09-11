import React from 'react';
import { Link } from 'react-router-dom';
import skillData from './SkillData';
import SkillsDetail from './SkillsDetail';

const Skills = () => {
    const slice = skillData.slice(0 ,6)
    return (
        <div className="container">
            <h1 style={{ fontWeight:'600' }} className='text-center mb-5'>--- My Skills ---</h1>
            <div className="row">
                {
                    slice.map(skillsData => <SkillsDetail skillsData={skillsData}></SkillsDetail>)
                }
            </div>
            
            <div className='d-flex justify-content-center'>
            <Link to="/skills"><button className="btn btn-primary d-block ">See More Skills</button></Link>
            </div>
        </div>
    );
};

export default Skills;