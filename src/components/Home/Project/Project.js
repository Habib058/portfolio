import React from 'react';
import amazon from '../../../assets/images/amazon.png'
import travel from '../../../assets/images/travio.png'
import hifz from '../../../assets/images/hifz.png'
import './Project.css'
import { Link } from 'react-router-dom';

const Project = () => {
    return (
        <div className="container">
            <h1 className="text-center mt-5 pt-5 mb-3">Projects</h1>
            <div className="row">
                <div className="col-md-12 col-sm-6 col-12 col-lg-4 ">
                    <a style={{ textDecoration: 'none', color: 'black' }} href=" https://clone-058.web.app/" target="_blank">
                        <div className="card">
                            <img className=" img-fluid" style={{ marginBottom: '15px' }} src={amazon} alt="" />
                            <h4>Amazon-Clone</h4>
                            <p>This a single page application.This web solution provides you - E-Commerce Services like Amazon.It has user authentication using firebase. Add to cart, Remove from cart were handled by using React-Context-Api. User can place order, remove order.Stripe Payment also added.Order product details of a user are stored in Firebase DB.
                            </p>
                            <div className="row">
                                <div className="col-md-4 col-sm-4 col-4">
                                    <div className="small-card">
                                        <p>React JS</p>
                                    </div>
                                </div>
                                <div className="col-md-4  col-sm-4 col-4">
                                    <div className="small-card">
                                        <p>Redux</p>
                                    </div>
                                </div>
                                <div className="col-md-4  col-sm-4 col-4">
                                    <div className="small-card">
                                        <p>Firebase</p>
                                    </div>
                                </div>
                                <div className="col-md-4  col-sm-4 col-4">
                                    <div className="small-card">
                                        <p>HTML</p>
                                    </div>
                                </div>
                                <div className="col-md-4  col-sm-4 col-4">
                                    <div className="small-card">
                                        <p>CSS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="col-md-12 col-sm-6 col-12 col-lg-4 ">
                    <a style={{ textDecoration: 'none', color: 'black' }} href="https://travio-058.web.app/" target="_blank">
                        <div className="card">
                            <img className=" img-fluid" style={{ marginBottom: '15px' }} src={travel} alt="" />
                            <h4>Travio - A Travel Agency Service</h4>
                            <p>This a single page application.This web solution provides you - Travel services.User can choose any tour and book tour after getting authenticated from firebase google Sign in. User have its own dashboard after authentication.Admin can add Tour, delete Tour, add admin. 
                            </p>
                            <div className="row">
                                <div className="col-md-4 col-sm-4 col-4">
                                    <div className="small-card">
                                        <p>React JS</p>
                                    </div>
                                </div>
                                <div className="col-md-4  col-sm-4 col-4">
                                    <div className="small-card">
                                        <p>Node JS</p>
                                    </div>
                                </div>
                                <div className="col-md-4  col-sm-4 col-4">
                                    <div className="small-card">
                                        <p>Express JS</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-4">
                                    <div className="small-card">
                                        <p>MongoDB</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-4">
                                    <div className="small-card">
                                        <p>Firebase</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-4">
                                    <div className="small-card">
                                        <p>Heroku</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="col-md-12 col-sm-6 col-12 col-lg-4 ">
                    <a style={{ textDecoration: 'none', color: 'black' }} href="https://easy-hifz.vercel.app/" target="_blank">
                        <div className="card">
                            <img className=" img-fluid" style={{ marginBottom: '15px' }} src={hifz} alt="" />
                            <h4>Easy Hifz</h4>
                            <p>This a single page application.Responsive for desktop and mobile screen.User can read and listen the holy Quran according to their need by filter.
                                user can also select an individual Quri to listen and memorize.
                            </p>
                            <div className="row">
                                <div className="col-md-4 col-sm-4 col-4">
                                    <div className="small-card">
                                        <p>Next JS</p>
                                    </div>
                                </div>
                                <div className="col-md-4  col-sm-4 col-4">
                                    <div className="small-card">
                                        <p>Material UI</p>
                                    </div>
                                </div>
                                <div className="col-md-4  col-sm-4 col-4">
                                    <div className="small-card">
                                        <p>Vercel</p>
                                    </div>
                                </div>
                                <div className="col-md-4  col-sm-4 col-4">
                                    <div className="small-card">
                                        <p>HTML</p>
                                    </div>
                                </div>
                                <div className="col-md-4  col-sm-4 col-4">
                                    <div className="small-card">
                                        <p>CSS</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className='d-flex justify-content-center pt-3 pb-5'>
                <Link to="/projects"><button className="btn btn-primary d-block ">See More Projects</button></Link>
            </div>
        </div>
    );
};

export default Project;