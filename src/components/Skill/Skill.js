import React, { useState } from 'react';
import Skills from '../Home/Skills/Skills';
import data from '../Home/Skills/SkillData'
import SkillsDetail from '../Home/Skills/SkillsDetail';
import Navbar from '../Navbar/Navbar';
import MenuButton from '../Navbar/MenuButton/MenuButton';

const Skill = () => {
    return (
            <div className="container mt-5">
                <h1 style={{ fontWeight: '600' }} className='text-center mt-5 pt-5 mb-5'>--- My Skills ---</h1>
                <div className="row">
                    {
                        data.map(skillsData => <SkillsDetail skillsData={skillsData}></SkillsDetail>)
                    }
                </div>
            </div>
    );
};

export default Skill;