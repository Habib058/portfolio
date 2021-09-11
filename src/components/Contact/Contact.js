import React from 'react';

const Contact = () => {
    return (
        <div className="container mt-5 pt-5">
            <h2 style={{ fontWeight: '700' }} className='text-center mb-5 contact-font pt-5'>--- Contact With Me ---</h2>
            <div className="contactSection">
                <form className="mt-2">
                    <div class="mb-3">
                        <div className="row">
                            <div className="col-md-6 col-sm-4 col-12">
                                <label for="exampleInputEmail1" class="form-label">Your Name</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" />
                            </div>
                            <div className="col-md-6 col-sm-4 col-12">
                                <label for="exampleInputEmail1" class="form-label">Email Address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" />
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <div className="row">
                            <div className="col-md-6 col-sm-4 col-12">
                                <label for="exampleInputEmail1" class="form-label">Company / Organization</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" />
                            </div>
                            <div className="col-md-6 col-sm-4 col-12">
                                <label for="exampleInputEmail1" class="form-label">Phone Number</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" />
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                    </div>
                    <button type="submit" class="btn btn-success">Submit Your Query</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;