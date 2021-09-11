import React from 'react';
import amazon from '../../../assets/images/amazon.png'
import travel from '../../../assets/images/travio.png'
import food from '../../../assets/images/food_to_fly.png'
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
                            </div>
                        </div>
                    </a>
                </div>

                <div className="col-md-12 col-sm-6 col-12 col-lg-4 ">
                    <a style={{ textDecoration: 'none', color: 'black' }} href="https://travio-058.web.app/" target="_blank">
                        <div className="card">
                            <img className=" img-fluid" style={{ marginBottom: '15px' }} src={travel} alt="" />
                            <h4>Travio - A Travel Agency Service</h4>
                            <p>This a single page application.This web solution provides you - Motion Graphics, Video Editing and Cinematography service.
                                To order a service you have to be created an account or logged in.
                                Admin Panel (Make new service, make new Admin, Delete Service)
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
                    <a style={{ textDecoration: 'none', color: 'black' }} href=" https://food-to-fly-347a7.web.app/" target="_blank">
                        <div className="card">
                            <img className=" img-fluid" style={{ marginBottom: '15px' }} src={food} alt="" />
                            <h4>Food-To-Fly - An E-Commerce Solution</h4>
                            <p>This a single page application.Responsive for desktop and mobile screen.User can order and checkout their preferable products.
                                Admin can upload and delete products.
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
            </div>
            <div className='d-flex justify-content-center pt-3'>
                <Link to="/skills"><button className="btn btn-primary d-block ">See More Projects</button></Link>
            </div>
        </div>
    );
};

export default Project;