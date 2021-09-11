import React from 'react';
import pic from '../../assets/images/mypic.jpeg'
import './Info.css'

const Info = () => {
    return (
        <section className="features-service pb-0 pb-md-5 pt-5 mt-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0 d-flex justify-content-center align-items-center">
                        <img className="img-fluid image" src={pic} alt="" />
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Web Developer | App Developer</h1>
                        <p className="text-secondary my-5">
                            I am an enthusiastic and self-motivated full stack web developer with excellent knowledge and experience.
                            I have already developed more than 20 projects using HTML5, CSS3, Bootstrap, JavaScript and React JS. I have also knowledge with working experience in full-stack development using Express JS, MongoDB, Firebase, Heroku.Also I have knowledge of App Development using React Native. I can take on challenges in a new environment to develop new skills. I can take the level of accuracy concerning the quality of the work with attention in detail.
                        </p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;